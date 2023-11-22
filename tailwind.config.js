/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C59354',
        'secondary':'#7F4D39',
        'texto':"#E3DAD7"
      }
    },
    fontFamily:{
      montserrat: ['Montserrat', 'sans-serif'],
      newsreader: ['Newsreader', 'serif']
    }
  },
  plugins: [],
}