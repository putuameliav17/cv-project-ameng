/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // scan file HTML di root
    "./src/**/*.{html,js}" // scan semua file di folder src
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#db2777',   
        secondary: '#f43f5e', 
        dark: '#881337',      
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};