/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // É AQUI QUE A MÁGICA ACONTECE
      colors: {
        // 1. Definimos 'primary' como uma cor única (blue-600)
        primary: '#2563eb', 

        // 2. Definimos 'primary-dark' como uma cor separada (blue-700)
        'primary-dark': '#1d4ed8',
      }
    },
  },
  plugins: [],
}