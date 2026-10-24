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
        },
        jb: {
          neon: "#00ff88",
          purple: "#9d4edd",
          crimson: "#ff2a55",
          cyan: "#00e5ff",
          dark: "#0b0c10",
          card: "#12141a",
          border: "#1f242e"
        }
      }
    },
  },
  plugins: [],
};
