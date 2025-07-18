/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    darkMode: 'class',
  theme: {
    extend: {    
        screens: {
        'xs': '20rem',
      },
    },
  },
  plugins: [],
}

