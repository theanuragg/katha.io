/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange': '#BD5631',
        'facey':'#FEE9D5',
        'button':'#F97316'
      }
    },
  },
  plugins: [],
}

