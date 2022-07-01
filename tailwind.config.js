/** @type {import('tailwindcss').Config} */
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
  }
}
},
  plugins: [],
}