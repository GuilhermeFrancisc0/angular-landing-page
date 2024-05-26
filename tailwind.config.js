/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          light: "#B79FF7",
          main: "#8455FF",
          dark: "#5F3EB5"
        },
        secondary: {
          light: "#6a2FFF",
          main: "#5222D0",
          dark: "#351686",
        },
        title: "#0F172A",
      },
    },
  },
  plugins: [],
};
