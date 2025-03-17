/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "700px",
      md: "1000px", // md ahora empieza en 1080px
      lg: "1920px", // lg ahora empieza en 1920px
    },
    fontFamily:{
      sans: ['Now', 'sans-serif']
    },
    
  },
  plugins: [],
}