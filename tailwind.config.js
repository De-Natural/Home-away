/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#634294",
        "primary-dark": "#351e4c",
        gold: "#f9aa33",
        "light-gray": "#f7f7f7",
        "border-gray": "#dddddd",
        "body-text": "#333333",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      maxWidth: {
        container: "1170px",
      },
    },
  },
  plugins: [],
};
