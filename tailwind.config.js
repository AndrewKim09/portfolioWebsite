/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '320px',
      'md': '581px',
      'lg': '1045px',
      'xl': '1471px'
    }
  },
  plugins: [],
}