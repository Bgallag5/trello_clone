/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#eae6ff',
        blueLight: '#e6fcff',
        blueDark: '#091e42',
        grey: '#8993A4',
        white: '#ffffff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
