require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const PORT = 1200;
const session = require('express-session');
const {WebSocket, WebSocketServer} = require('ws');
const uuid = require('uuid').v4;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')
const fs = require('fs');
const otpObj = { upperCaseAlphabets: false, specialChars: false }
const cors = require('cors');

const multer = require('multer');
app.use(express.json()); // Parse JSON-encoded bodies
app.use(express.urlencoded({ extended: true }));
const uri = "mongodb+srv://jhonwellespanola4:q2GKDmHS7rR4ufsq@cluster0.lpjj5hu.mongodb.net/?retryWrites=true&w=majority";
const dbName = "sampledb";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  },
  /* main-page/public/assets/Products Section */
  destination: (req, file, cb) => {
    cb(null, 'main-page/public/assets/Products Section/');
  }
});

const upload = multer({storage})

const corsObj = {
  origin: "http://localhost:3000"
}

const ejs = require('ejs');

const ws_server = new WebSocketServer({server})

const clients = {}
const broadcastMessage = (message) => {

  const json = JSON.stringify(message);

  for (let id in clients) {
    const client = clients[id];
    if (client.readyState === WebSocket.OPEN) {
      client.send(json);
    }

  }
  
}

const openDb = async () => {
  await client.connect();
  return true
}

openDb()
  .then(console.log("connected"))
 

const storeWebSoket = async (details) => {
  
      const db = client.db(dbName);
      const collection = db.collection('reviews');
      await collection.insertOne(details)
    
};

const deleteWebSocket = async (data) => {

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('reviews');

    await collection.deleteOne(data)

}


ws_server.on('connection', connection => {
  const id = uuid();

  clients[id] = connection;
  
  connection.on('message', message => {
    const data = JSON.parse(message.toString());
    
    broadcastMessage(data);
    if (data.hasOwnProperty('proName')) {
      storeWebSoket(data)
    } else if (!!data.individualComment) {
      deleteWebSocket(data.individualComment)
    } 
    
  })
})





app.use(session({
    secret: '09514406062',
    resave: false,
    saveUninitialized: false,
}))

const emailChecker = async (userEmail, userPass, req) => {
  
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("users");

    const result = await collection.find({email: userEmail}).toArray();

    /* Checks if the user email has already added to database */
    if (result.length > 0) {
      return false;
    } else {
      return true;
    }

}

const registerAccount = async ({email, password}) => {

  /* blocker if the email param is inavalid  */
  if (!email) return {validation: false};

    
    const db = client.db(dbName);
    const usersCollection = db.collection('users'); 
    const isAdmin = process.env.GMAIL_USER === email;
    await usersCollection.insertOne({email: email, password: password, status: false, cartProducts: [], personalInfo: {
      fullName: "",
      phoneNumber: "",
      email: email,
      address: "",
      zip: "",
      city: "",
      role:  isAdmin ? "admin" : "customer"
    },
    upcomingOrders: []})

    const user = await usersCollection.findOne({email});

    /* If the account is successfull registered */
    return {validation: true, isAdmin, uniqueId: user._id};
  
  
}

const statusSetter = async (email, status) => {
  try {
   const db = client.db(dbName);
   const collection = db.collection('users');

   await collection.updateOne({email: email}, {$set: {status: status}})

   return true
  }

  catch(err) {
    console.log(err)
  }

}

const accountChecker = async (email, password, req) => {
    
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('users');

    const result = await collection.findOne({email: email, password: {$exists: true}});

    
    if (!!result) {
      if (result.password === password) {
        req.session.email = email;
        await statusSetter(email, true);
        const userInfo = await collection.findOne({email});
        return {hasAccount: true, passMatch: true, email: req.session.email, userInfo}    
        
      } 
      return {hasAccount: true, passMatch: false}
       
    } else {
      return {hasAccount: false}
    }
  

}



app.use(express.static(path.join(__dirname, '..', 'front-end')));
app.use(cors(corsObj));

const getAllUsers = async () => {

 try {
  const db = client.db(dbName);
  const collection = db.collection('users');

  const allUsers = await collection.find().toArray()

  return allUsers
 }
  
 catch(err) {
  console.log(err);
 } 
}

const monitorVisitsDB = async (num) => {
  const db = client.db(dbName);
  const collection = db.collection('webInfo');

  const results = await collection.find({}).toArray();

  if (results.length > 0) {
    await collection.updateOne({numVisitors: {$exists: true}}, { $inc: { numVisitors: 1 } })
  } else {
    await collection.insertOne({numVisitors: 1})
  }

  return await collection.findOne({}) 
}

app.post('/monitor-visitors', (req, res) => {
  monitorVisitsDB()
   .then(data => res.json({data}))
})

app.get('/get-all-users', (req, res) => {
  
  getAllUsers()
    .then(data => res.json(data))

})

const getStocks = async () => {
  
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('stocks');

    const allProducts = await collection.find().toArray();

    return allProducts;
}
app.get('/get-stocks', (req, res) => {

  getStocks()
    .then(data => {
      res.json(data);
    })
    .catch(console.error)
})

const getNotifs = async () => {
   const db = client.db(dbName);
   const collection = db.collection('notifications');

   const result = await collection.find({}).toArray()
   
   return result;
}

app.get("/get-notifs", (req, res) => {

  getNotifs()
    .then((data) => res.json(data));

})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'front-end', 'index.html'));
})

/* registerAccount */

//API for Account Register
app.post('/check-register-acc', (req, res) => {
  
  const {email, password} = req.body;
  emailChecker(email, password, req)
    .then(data => res.json({isValid: data}))
    .catch(console.dir);
})

app.post('/add-register-acc', (req, res) => {
  registerAccount(req.body)
  .then((data) => res.json(data));
})

//API for acount login
app.post('/signup-acc', (req, res) => {
  const {email, password} = req.body;
  accountChecker(email, password, req)
    .then(data => res.json(data))
    .catch(err => console.dir(err));
})


//API for Google Authorization
app.post('/google-auth-acc', (req, res) => {
  const {email} = req.body;

  req.session.email = email;
  AccEmailCheck(email)
    .then(AccGoogleAdder)
    .then(data => res.json(data))
    .catch(err => console.log(err));
})


const AccEmailCheck = async (email) => {

     await client.connect();

     const db = client.db(dbName);
     const collection = db.collection('users');

     const result = await collection.find({email: email}).toArray();
     
     if (result.length > 0) {
       const AccsHasPass = await collection.find({email: email, password: {$exists: true}}).toArray();
       const userInfo = await collection.findOne({email: email})
       if (AccsHasPass.length > 0) {
        return {haveAccount: true, email: email, hasPass: true, userInfo};
       } 
       return {haveAccount: true, email: email, hasPass: false, userInfo};
     } 

     return {haveAccount: false, email: email};
  
}

const AccGoogleAdder = async ({haveAccount, email, userInfo}) => {

  if (haveAccount) {
    await statusSetter(email, true)

    return {complete: true, userInfo};
  } 

  
    await client.connect();
    
    const db = client.db(dbName);
    const collection = db.collection('users');

    const isAdmin = process.env.GMAIL_USER === email;
    await collection.insertOne({email: email,  status: true, cartProducts: [], personalInfo: {
      fullName: "",
      phoneNumber: "",
      email: email,
      address: "",
      zip: "",
      city: "",
      role: isAdmin ? "admin" : "customer"
    },upcomingOrders: []});

    
    const newUserInfo = await collection.findOne({email: email})
    
    return {userInfo: newUserInfo, complete: true};

}

const transporter = nodemailer.createTransport({
  tls: {
    rejectUnauthorized: false
  },
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'jhonwellespanola4@gmail.com',
    pass: 'froi qzrd djmj mwuz',
  },
});

const emailSender = async (otp, receiver) => {
  
  const emailTemplate = fs.readFileSync(path.join(__dirname, 'email_template.ejs'), 'utf-8');
  
  const renderedEmail = ejs.render(emailTemplate, {otp});

  await transporter.sendMail({
    from: process.env.GMAIL_USER, // sender address
    to: receiver, // list of receivers
    subject: "One Time Password", // Subject line
    html: renderedEmail
  });

  return
}



//API for sending an OTP

app.post('/email-otp',(req, res) => {
  const otp = otpGenerator.generate(4, otpObj);
  //res.json({otp: otp});

  AccEmailCheck(req.body.email)
    .then(data => {
      if (data.haveAccount) {
        /* res.json({otp: otp}) */
        if (data.hasPass) {
          emailSender(otp, req.body.email)
          .then(() => res.json({otp: otp}))
        } else {
        res.json({error: "The password of this account cannot be change."})

        }
        
      } else {
        res.json({error: "Email doesn't exist in this app"})
      }
    })
})

const updateUserPass = async ({email, pass}) => {
 
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('users');

    await collection.updateOne({email: email}, {$set: {
      password: pass
    }})
  
    return "updated"
 
}

//API for updating the user password
app.put('/update-pass', (req, res) => {
  updateUserPass(req.body)
  .then((data) => {
    res.json({status: data})
  })
})

//function to add a product to database 
const addProductDb = async (product, email) => {
 
   await client.connect();

   const db = client.db(dbName);
   const collection = db.collection("users");

   await collection.updateOne({email: email}, {$push: {cartProducts: product}})
 
}

//API for storing product inside database
app.put('/store-pro-cart', (req, res) => {
  const {product, email} = req.body;
  addProductDb(product, email);
})

//function to get the products
const getCartProducts = async (email) => {

    const db = client.db(dbName);
    const productsCartCollection = db.collection('users');

    const products = await productsCartCollection.findOne({email: email});
    
    return products.cartProducts;

}

//API for getting the products from the database
app.post('/get-cart-products', (req, res) => {

  const {email} = req.body;
 
  getCartProducts(email)
    .then(data => res.json(data))
})

const removeProDB = async (email, name, quantityPro, price) => {

    const db = client.db(dbName);
    const collection = db.collection('users');

    const result = await collection.updateOne({email: email}, { $pull: {cartProducts: {name: name, quantityPro: quantityPro, price}} })
}

//API for deleteing the products from the database
app.post('/remove-pro-cart', (req, res) => { 
  const {name, email, quantityPro, price} = req.body;

  removeProDB(email, name, quantityPro, price);
})

const storePersonalInfo = async (email ,info) => {

    const db = client.db(dbName);
    const collection = db.collection("users");

    await collection.updateOne({email: email}, {$set: {personalInfo: info, cartProducts: []}});
 
}


//API for updatng the user personal info in Buy now section
app.put('/store-user-info', (req, res) => {
  const {email, info} = req.body;

  storePersonalInfo(email, info)
    .then(() =>  res.json({complete: true}));
 
})

const getPersonalInfo = async (email) => {

    const db = client.db(dbName);
    const collection = db.collection("users");

    const info = await collection.findOne({email: email}, { personalInfo: 1});
    return info.personalInfo;

}

//API for getting teh personal info
app.post('/get-personal-info', (req, res) => {
  const {email} = req.body;

  getPersonalInfo(email)
    .then(data => res.json(data))

})

const storeUpcomingOrders = async (email, product) => {
 

    const db = client.db(dbName);
    const collection = db.collection('users');
    await collection.updateOne({email: email}, {$push: {upcomingOrders: product}})
  
}

const emailOrderConfirmation = async (receiver, order, info) => {

  const {grandTotal, date, products} = order;
  const {address, zip, city} = info;

  const listProducts = JSON.parse(products).map(({name, quantityPro, price}) => {
    return `<li>${name} - Quantity: ${quantityPro} - Price: ₱${price.toFixed(2)}</li>`
  });

  const purchaseMessage = fs.readFileSync(path.join(__dirname, 'purchase_email.ejs'), 'utf-8');

  const data = {
    grandTotal,
    date, 
    address,
    zip,
    city,
    products: JSON.parse(products),
    gmailUser: process.env.GMAIL_USER,
    shippingFee: '₱50.00'
  }
  const renderedMessage = ejs.render(purchaseMessage, data);
  await transporter.sendMail({
    from: process.env.GMAIL_USER, // sender address
    to: receiver, // list of receivers
    subject: "Order Confirmation from Comfoody",   // Subject line
    html: renderedMessage
  });

}

//API for storing upcoming orders
app.put('/store-upcoming-orders', (req, res) => {
 const {email, data, personalInfo} = req.body;

 storeUpcomingOrders(email, data)
   .then(() => {
   //emailOrderConfirmation(email, data, personalInfo)
    res.json({msg: true});
   })
   .catch(console.log)

})

const getUpcomingOrders = async (email) => {
  
    const db = client.db(dbName);
    const collection =  db.collection('users');

    const result = await collection.findOne({email: email});
    
    return await result.upcomingOrders
}

app.post('/get-upcoming-orders', (req, res) => {
  getUpcomingOrders(req.body.email)
    .then(data => res.json(data))
})

const cancelOrder = async (email, upOrders) => {

    const db = client.db(dbName);
    const collection = db.collection('users');


    await collection.updateOne({email: email}, {$set: {upcomingOrders: upOrders}})

}

//Cancel Order
app.post('/cancel-order', (req, res) => {
  const {email, order} = req.body;
   
  console.log(email, order);
  /* return */
  cancelOrder(email, order).
  then(() => res.send("success"));
})

//Reviews Getter
const reviewsGetter = async () => {

    const db = client.db(dbName);
    const collection = db.collection('reviews');

    const result = await collection.find({},{ projection: { _id: 0 }}).toArray();

    return result;
}

app.post('/get-reviews', (req, res) => {

  reviewsGetter()
    .then(data => res.json(data))
    .catch(err => console.log(err));

})

const addStocks = async (data) => {

     const db = client.db(dbName);
     const collection = db.collection('stocks');

     await collection.insertMany(data);
}

app.post('/restock', (req, res) => {

  addStocks(req.body)
    .then(() => {
      res.json({confirmation: true});
    })

})


const updateStocksDB = async product => {
   
    const {proName, description, price, imgSrc, type, bestSeller, variants, index} = product;

    const db = client.db(dbName);
    const collection = db.collection('stocks');
   
    await collection.replaceOne({_id: new ObjectId(product._id)}, {proName, description, price, imgSrc, type, bestSeller, variants, index})

}

/* 

app.post('/add-new-stock', (req, res) => {
  addNewStock(req.body)
    .then(() => {
      res.send("added succesfully")
    })
})
 
  
*/



const deleteProStocks = async (index) => {
  
     const db = client.db(dbName);
     const collection = db.collection('stocks');
     
     await collection.deleteOne({index: index})
}

app.post('/delete-pro-stocks', (req, res) => {
  const filePath = req.body.imgSrc.split('/');
  const fileName = filePath[filePath.length - 1];

  fs.unlink(path.join(__dirname, 'main-page', 'public', 'assets', 'Products Section', fileName), (err) => {
   
      deleteProStocks(req.body.index)
      .then(() => {
      res.json({confirmation: true})
    })
    
  })
})


const updateBestSellers = async (index, added) => {
    const db = client.db(dbName);
    const collection = db.collection('stocks');
    
    await collection.updateOne({index: index}, {$set: {bestSeller: added}})
  
}

app.post('/update-bestSellers', (req, res) => {

  const {index, isAdded} = req.body;
  updateBestSellers(index, isAdded)
    .then(() => {
      res.json({confirmation: true})
    })

})

const addNewStock = async (newProduct) => {

    const db = client.db(dbName);
    const collection = db.collection('stocks');

    await collection.insertOne(newProduct);

}

const renameOperation = (req) => {
  const newFileName = req.body.proName.split(' ').join('-').toLowerCase() + path.extname(req.file.filename);

  fs.renameSync(path.join(__dirname, 'main-page', 'public', 'assets', 'Products Section', req.file.filename), 
  path.join(__dirname, 'main-page', 'public', 'assets', 'Products Section', newFileName))
}

app.post('/add-stocks-photo', upload.single('file'), (req, res) => {
renameOperation(req)
res.send("success")
 
})

app.post('/add-new-stock', (req, res) => {
  addNewStock(req.body)
    .then(() => {
      res.send("added succesfully")
    })
})

app.post('/update-stocks', (req, res) => {
  updateStocksDB(req.body)
   .then(() => {
      res.send("updated")
   })  
})  


app.post('/update-stocks-photo', upload.single('file'), (req, res) => {
    renameOperation(req);
    res.send("hi")
})


app.post('/rename-stocks-photo', (req, res) => {
  const newName = req.body.newName.split(' ').join('-').toLowerCase() + '.png';
  const origName = req.body.origName.split(' ').join('-').toLowerCase() + '.png';

  const origFile = path.join(__dirname, 'main-page', 'public', 'assets', 'Products Section', origName);
  const newFile = path.join(__dirname, 'main-page', 'public', 'assets', 'Products Section', newName);

  fs.renameSync(origFile, newFile)

  res.send("hi")
})

app.post('/delete-previous-photo', (req, res) => {
  const {previousProName} =  req.body;

  const previousName = previousProName.split(' ').join('-').toLowerCase() + '.png';
  const previousFile = path.join(__dirname, 'main-page', 'public', 'assets', 'Products Section', previousName);

  fs.unlinkSync(previousFile);
  res.send("picture deleted");
})


/* Logout Functoinality */

const logoutAcc = async (email) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('users');

    await collection.updateOne({email}, {$set: {status: false}})
  }

  catch(err) {
    console.log(err)
  }
}

app.post('/logout-acc', (req, res) => {
  logoutAcc(req.body.email)
})

const sendInvMail = async (subject, textContent, receiver) => {

  const emailTemplate = fs.readFileSync(path.join(__dirname, 'InvEmail.ejs'), 'utf-8');
  const renderedTemplate = ejs.render(emailTemplate, {mailMessage: textContent});

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER, 
      to: receiver, 
      subject,   
      html: renderedTemplate
    })

    return true;
  }

  catch(err) {
    console.error(err);
  };

}

app.post('/sendInvMail', (req, res) => {
  const {mailMsg, mailSub, userEmail} = req.body;
  sendInvMail(mailSub,mailMsg, userEmail)
    .then(data => res.json({data}))
})

const removeAccDB = async (email) => {

  try {
    const db = client.db(dbName);
    const collection = db.collection('users');

    await collection.deleteOne({email: email})

    return null
  }

  catch(err) {
    console.log(err)
  }

}

app.post('/remove-acc', (req, res) => {
  removeAccDB(req.body.email)
   .then(() => res.json({valid: true}));
})

const updateOrderStats = async (email, upProducts) => {

  const db = client.db(dbName);
  const collection = db.collection('users');

  await collection.updateOne({email: email}, {$set: {upcomingOrders: [...upProducts]}})

  return true;
}

app.post('/update-order-status', (req, res) => {
 
  const {upProducts, email} = req.body;

  updateOrderStats(email, upProducts)
    .then(() => res.send("complete."));

})

/* Email Verfication Code */
app.post('/email-verfication', (req, res) => {
  const otpCode = otpGenerator.generate(5, { upperCaseAlphabets: false, specialChars: false });

  console.log(otpCode);
  res.statusCode = 200;
  
  emailSender(otpCode, req.body.userEmail)
    .then(() =>  {res.json({otp: otpCode}); console.log("sent")});
 ;
})


/* For notifications fcunctionalities*/

const addNotif = async (data) => {

  const db = client.db(dbName);
  const collection = db.collection('notifications');

  await collection.insertOne(data);

  return true

}

app.post('/store-notifs', (req, res) => {
 
  addNotif(req.body.notif)
    .then(() => res.send("success"));

})

const restoreNotifs = async (notifs) => {
  const db = client.db(dbName);
  const collection = db.collection('notifications');

  await collection.deleteMany({});

  if (!notifs.length) return;
  await collection.insertMany(notifs);

  return true;
}

app.post('/restore-notifs', (req, res) => {

  restoreNotifs(req.body.notifs)
    .then(() => res.send("sendd"))

})

const clearNotifs = () => {
  const db = client.db(dbName);
  const collection = db.collection('notifications');

  collection.drop();
}

app.delete('/clear-notifs', () => {
  clearNotifs()
})

server.listen(PORT, () => console.log("server is running on PORT 1200"));