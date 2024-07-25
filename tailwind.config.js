// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
