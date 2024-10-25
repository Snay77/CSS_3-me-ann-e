/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/parts/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'blfonce': '#02C3BD',
        'violet': '#4E148C'
      }
    },
  },
  plugins: [],
}