/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          darkBlue: '#263238',
          midBlue: '#16213e',
          navyBlue: '#0f3460',
          accentRed: '#e94560',
          customGray: '#878D90'
        },
      },
    },
    plugins: [],
  }