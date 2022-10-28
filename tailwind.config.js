/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderStyle: ['hover'],
      backgroundImage: {
        "image": "url('/assets/bg-image-delegates.jpg')"
      },
      fontFamily:{
        'custom':['"Inter"'],
        'heading':['"Montserrat"']
      }
    },
  },
}