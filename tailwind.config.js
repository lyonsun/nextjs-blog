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
      'neutral': '#f9f9fc',
      'dark-gray': '#333333',
      'gray': '#121212'
    }
  },
  plugins: [],
}
