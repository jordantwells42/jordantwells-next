/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': {'raw': '(hover: hover)'},
        'hover-none': {'raw': '(hover: none)'},
      },
      transitionProperty: {
        ...defaultTheme.transitionProperty,
        width: "width",
        height: "height",
        spacing: 'margin, padding',
      }
}
},
  plugins: [],
}