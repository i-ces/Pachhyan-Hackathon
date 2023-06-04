/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens:{
      'mobile': '250px',
      'laptop': '750px'
    }
  },
  plugins: [],
}

