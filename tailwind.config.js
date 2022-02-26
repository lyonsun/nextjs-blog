const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': colors.indigo,
      'white': colors.white,
      'neutral': '#f6f6fc',
      'yellow': '#eec01c',
      'dark-gray': '#333333',
      'light-gray': '#c4c4c4',
      'gray': '#121212'
    }
  },
  plugins: [],
}
