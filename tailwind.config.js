/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito:['Nunito', 'sans-serif'],
      },
      colors:{
        'custom-1':'#d7d8d3',
      }
    },
  },
  plugins: [],
}

