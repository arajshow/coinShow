/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "backgroundColor" : "rgb(239, 242, 245)",
        "bgblue" : "rgb(0, 82, 254)",
        "lightblue" : "rgb(232, 244, 253)",
        "bggreen" : "rgb(15, 186, 131)",
        "lightgreen" : "rgb(235, 249, 244)",
        "bgred": "rgb(247, 50, 76)",
        "lightred" : "#FFF4ED",
        "color1" : "rgb(201,223,236)",
        "highlight" : "rgb(237,255,135)",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1180px',
      'clg': '1260px', // To handle progress-bar responsivness
    }
  },
  plugins: [],
}

