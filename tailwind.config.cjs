/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        primary300: '#FFCC21',
        primary400: '#FF963C',
        primary500: '#EA6C00',
        secondary300: '#8FE9D0',
        primary300400: '#FFCC21',
        dark600: '#2E2E2E',
        dark500text: '#414141',
        gray400: '#777777',
      },
    },
  },
  plugins: [],
};
