/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greentree: {
          50:  "#b0e5ea",
          100: "#97cbd1",
          200: "#7fb1b7",
          300: "#67979d",
          400: "#4f7d83",
          500: "#37636a",
          600: "#1f4950",
          700: "#0d3c46",
          800: "#05292f",
          900: "#031b1f"
        },
        primary: "#062f37",
        gold: "#d3c397",
        sand: "#b2a47b",
      },
    },
  },
  plugins: [],
}