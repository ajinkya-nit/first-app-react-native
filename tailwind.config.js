/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class', // <-- Add this line
  theme: {
    extend: {},
  },
  plugins: [],
}