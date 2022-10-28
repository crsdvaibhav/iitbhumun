/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image": "url('/assets/bg-image-delegates.jpg')"
      },
      backgroundImage_register: {
        "image": "url('/assets/BG 1.svg')"
      }
    }
  },
  plugins: []
}