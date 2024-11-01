/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#000010",
          secondary: "#aaa6c3",
          tertiary: "#151030",
          "black-100": "#100d25",
          "black-200": "#090325",
          "white-100": "#f3f3f3",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #d8f9ff",
        },
        screens: {
          xs: "450px",
        },
      },
    },
    plugins: [],
  };
