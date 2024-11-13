/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Include all your Vue and JS files
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px'
      }
    },
  },
  plugins: [],
};
