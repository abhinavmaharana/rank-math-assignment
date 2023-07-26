/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        notification: 'notification 3s ease',
        glare: 'glare 2s ease-out infinite'
      },
      keyframes: {
        notification: {
          '0%': { transform: 'translateY(0px)', opacity: 0 },
          '10%,80%': { transform: 'translateY(32px)', opacity: 1 },
          '100%': { transform: 'translateY(0px)', opacity: 0 },
        },
        glare: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(110%)' }
        }
      },
      colors: {
        surface: '#ffffff',
        lightsurface: '#f3f6f9',
        primaryText: '#4c5968',
        secondaryText: '#aeb8c4',
        red1: '#ee225d',
        green1: '#1ec070',
        blue1: '#19aaf8',
        pink1: '#fd498d'
      }
    },
  },
  plugins: [],
}

