/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all your React components for classes
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sets 'Inter' as the default font, as used in App.css
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
