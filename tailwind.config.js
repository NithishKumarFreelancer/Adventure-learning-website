/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'sm-90': '90%',
      },
      height: {
        '5vh': '5vh',
        '7vh': '7vh',
      },
      colors: {
        'custom-purple': '#270D5B',
        "custom-bar-bg":"#F7F3F3",
      },
    },
  },
  plugins: [],
}