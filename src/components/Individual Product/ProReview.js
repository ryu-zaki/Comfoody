import React from 'react'

export default function ProReview({username, date, comment, stars}) {

    let starsList = [];
    for (let i = 0; i < stars; i++) {
      starsList.push(i);
    }

    const starReviewsList = starsList.map(() => {
        return <img draggable="false" alt='' width={15} src='../assets/Products Section/star-fill.png'/>
    })

  return (
    <div className='flex flex-col gap-2 pro-review rounded-lg'>
           <div className="flex justify-between text-dark">
            <div className="flex gap-2">
              <img src="../assets/user-icon.png" alt=""/>
              <p className="font-semibold">{username}</p>
            </div>
            <p className='text-sm'>{date}</p>
           </div>

           <div className="flex gap-2">
             {
                starReviewsList
             }
             {/* <img alt='' width={15} src='./assets/Products Section/star-fill.png'/> */}
           </div>
           <p className="mt-2 text-sm">{comment}</p>
         </div>
  )
}
