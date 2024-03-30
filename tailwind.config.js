/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E7DFD8',
        'secondary': '#6A7775',
        'custom': '#e6f6ee'
      }
    },
  },
  plugins: [],
}