const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(snippet|button|ripple|spinner|popover).js",
  ],
  theme: {
    extend: {
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
        "hover-none": { raw: "(hover: none)" },
      },
      transitionProperty: {
        ...defaultTheme.transitionProperty,
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
      colors: {
        theme: {
          light: "#f2f2e6",
          dark: "#07020a",
        },
        deepSpaceRoyal: {
          50: "#e8c9dd",
          100: "#deaed8",
          200: "#b07dc9",
          300: "#7156b4",
          400: "#38399e",
          500: "#233987",
          600: "#16336f",
          700: "#0e2657",
          800: "#09173e",
          900: "#050924",
        },
        noblePlum: {
          50: "#e8cfc9",
          100: "#deb0ae",
          200: "#c97d8c",
          300: "#b4567d",
          400: "#9e3877",
          500: "#872372",
          600: "#6f1669",
          700: "#540e57",
          800: "#37093e",
          900: "#1e0524",
        },
        yukonGold: {
          50: "#e7e8c9",
          100: "#dcdeae",
          200: "#c9c87d",
          300: "#b4ae56",
          400: "#9e8e38",
          500: "#876a23",
          600: "#6f4516",
          700: "#57250e",
          800: "#3e0c09",
          900: "#24050c",
        },
        gorgeousGreen: {
          50: "#cde8c9",
          100: "#aedeae",
          200: "#7dc98b",
          300: "#56b471",
          400: "#389e57",
          500: "#238738",
          600: "#166f16",
          700: "#26570e",
          800: "#303e09",
          900: "#241c05",
        },
      },
    },
  },
  plugins: [nextui()],
};
