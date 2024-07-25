// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          500: '#38b2ac',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
