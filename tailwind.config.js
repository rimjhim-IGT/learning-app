/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],       
        openSans: ['"open sans"', "sans-serif"], 
        inter :['"inter"' , "sans-serif"],
       sourceSans: ['"Source Sans Pro"', 'sans-serif']      
      },
      colors: {
        orange: "#FD4A36",
        dark: "#292B2C",
        light: "#666666",
        white: "#ffffff",
        black: "#000000",
        black1:"#333333",
        headerBg:"#F6F7FF",
        footerBg:"#221F26"
      },
    },
  },
  plugins: [],
}