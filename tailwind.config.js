/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        titanium: {
          desert: "#c2a382",
          natural: "#9b948a",
          white: "#e3e4e5",
          black: "#2f3133",
          bg: "#000000",
          card: "#121212",
        }
      }
    },
  },
  plugins: [],
};
