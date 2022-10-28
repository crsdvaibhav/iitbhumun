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
<<<<<<< HEAD
      backgroundImage_register: {
        "image": "url('/assets/BG 1.svg')"
      }
    }
  },
  plugins: []
=======
      fontFamily:{
        'custom':['"Inter"'],
        'heading':['"Montserrat"']
      }
    },
  },
>>>>>>> 2b78e0fc8f040f590a25b93f5530f8011b4abbf6
}