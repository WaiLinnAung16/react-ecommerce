/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        primary: "#232946",
        secondary: "#fffffe",
        danger: "#eebbc3",
        info: "#b8c1ec",
        accent: "#607AF8",
      },
    },
  },
  plugins: [],
};
