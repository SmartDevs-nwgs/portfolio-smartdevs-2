/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      blue1: '#2cbffe',
      blue2: '#6ad2ff',
      blue3: '#7CF0EE',

      black: '#000000',
      white: '#ffffff',

      sand1: '#fbcf9a',
      sand2: '#f8a470',

      orange1: '#DE8603',
      orange2: '#F29D1D',

      green: '#4C9F64',

      purple: '#864EE1',
    },
    fontFamily: {
      'koulen': ['Koulen', 'cursive'],
      'inter': ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
