/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['dancing-script', 'roboto', 'sans-serif'],
        cursive: ['great-vibes', 'lobster', 'cursive'],
      },

      colors: {
        primary: '#A04747',
        secondary: '#343131',
        tertiary: '#D8A25e',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
};
