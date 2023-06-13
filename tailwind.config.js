/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode:'class',
  theme: {
    extend: {
      "other":{'min':'200px', 'max':'1200px'}
    },
  },
  plugins: [],
}
