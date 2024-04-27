/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'yellow': '#ccac74',
        'yellow-light': '#fbf3eb',
        'white' : '#FFFFFF',
        'black' : '#000000'
      },
    },
  },
  plugins: [],
}