/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",               // Matches root-level HTML files
    "./src/**/*.{html,js,jsx,ts,tsx}", // Matches files inside src
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
};
