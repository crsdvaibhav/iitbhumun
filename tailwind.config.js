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
        'custom':['"Inter"']
      }
    },
    colors: {
      'magenta-light': '#AB0048',
      'magenta-dark': '#65002A',
      'yellow-light': '#FFFDE8',
      'yellow-dark': '#FDBD55'
    },
  },
  plugins: [],
}