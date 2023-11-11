/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '520px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '930px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1220px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1350px',
      // => @media (min-width: 1350px) { ... }
    },
    colors: {
      'darkBlue': '#020826',
      'lightBrown': '#8c7851',
      'brown': "#4E3B34",
      'orange': '#C64800',
      'bgOrange': 'rgb(254,247,221)',
      "lightGreen": "#D9E1D4",
      "green": "#08A88A",
      "grayBg": "#f4f4f4",
      "white": "#fff",
      "black": "#333",
      "yellow": "#F7C25B"
    },
    extend: {},
  },
  plugins: [],
}

