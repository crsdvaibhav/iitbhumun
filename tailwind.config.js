/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/assets/bg-image-delegates.jpg')",
      },
      fontFamily: {
        custom: ['Inter'],
        heading: ['Montserrat'],
      }
    },
  },
});
