/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/parts/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        fond: '#FFFAF2',
        text: '#4a0605', 
      },
    },
  },
  plugins: [],
}

