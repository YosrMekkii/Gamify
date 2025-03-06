/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",           
    "./public/**/*.css",      
    "./src/**/*.{html,js}",   
  ],
  theme: {
    extend: {
      colors: {
        primary: "#263238",
        secondary: "#4D4D4D",
        accent: "#FF5722",
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },

      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
      },

      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },

      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
