// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        16: '4rem',
        60: '15rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
