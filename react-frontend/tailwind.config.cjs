/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#4154F1",
          secondary: "#bcdcf4",
          accent: "#96f7e4",
          neutral: "#251825",
          "base-100": "#fafafa",
          info: "#4F6AE3",
          success: "#176958",
          warning: "#F9AC39",
          error: "#EE7274",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  theme: {
    extend: {
      colors: {
        proximaColor: "#4154F1",
      },
      fontFamily: {},
      gridTemplateColumns: {},
      gridTemplateRows: {},
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
};
