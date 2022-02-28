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
      'jet': '#333333',
      'davys-gray': '#4f4f4f',
      'silver': '#c4c4c4',
      'smoky-black': '#121212'
    }
  },
  plugins: [],
}
