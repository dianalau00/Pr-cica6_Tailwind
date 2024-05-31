/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['Tailwind.html'],
  theme: {
    extend: {
      colors:{
        danger: '##818cf8', 
        info:{
          900: '#ec4899',
          800: '#67e8f9',
        },
      },
    },
    fontFamily: {
      rale: ['Raleway'],
    },
  },
  plugins: [],
}

