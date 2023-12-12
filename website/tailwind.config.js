/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-gunung": "url('/src/assets/image/foto_gunung.jpeg')",
        "bg-login": "url('/src/assets/image/gambar_login.png')",
      },
      fontFamily: {
        popblack: ["popblack"],
        popbold: ["popbold"],
        popextralight: ["popextralight"],
        poplight: ["poplight"],
        popmedium: ["popmedium"],
        popregular: ["popregular"],
        popsemibold: ["popsemibold"],
        popthin: ["popthin"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
