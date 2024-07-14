/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "0px", max: "600px" },
      tb: { min: "601px", max: "800px" },
      lp: { min: "801px", max: "1425px" },
      lg: { min: "1426px" },
      'max-1088': { 'max': '1088px' },
    },
    extend: {
      colors: {
        "custom-purple": "#270D5B",
        "custom-bar-bg": "#F7F3F3",
        nav: "#DFDFDF",
        navbutton: "#3E3AEC",
        buttonColor: "#fffff",
        lightblue: "blue",
        navbg:"#F7F3F3",
        whyadvBG:"#F4F4F4",
        navBorder:"#E5E8F1",
        active_users:"#eb753b",
        enroll_users:"#143aa0",
        learnsmarter_text_Color:"#877f7f",
        learnsmarter_text_p:"#5d7286",     
        whyAdvbutton:"#042C9A14",
        course_level:"#A7A4A4",
      },
    },
  },
  plugins: [],
};