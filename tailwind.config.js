/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: '#4CAF4F',
        sec: '#4D4D4D',
        'prime-bg': '#F5F7FA',
      },
      container: {
        center: true,
        padding : '2rem',
        screens: {
          DEFAULT : '100%',
          sm: '680px',
          md: '768px',
          lg: '1024px',
          xl: '1216px',
          // '2xl': '1536px'

        }
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
