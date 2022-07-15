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
      },
      colors: {
        saltboxBlue: {
          50: "#dbdee6",
          100: "#ced2dd",
          200: "#b3bac9",
          300: "#98a4b5",
          400: "#7e8ca1",
          500: "#63748c",
          600: "#495b76",
          700: "#314160",
          800: "#1d2949",
          900: "#0e1432",
        },
        indigoLight: {
          50: "#dbdff1",
          100: "#ccd4f1",
          200: "#aebff0",
          300: "#90aaec",
          400: "#7294e2",
          500: "#577bd1",
          600: "#3f60b7",
          700: "#2b4497",
          800: "#1a2970",
          900: "#0d1446",
        }
      }
  }
},
  plugins: [],
}