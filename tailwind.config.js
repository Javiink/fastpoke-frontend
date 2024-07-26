/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    transitionDuration: {DEFAULT: '300ms'}
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require('tailwind-scrollbar-hide')
  ],
}

