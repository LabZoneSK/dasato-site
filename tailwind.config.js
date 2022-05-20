module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["DM Serif Display"],
      body: ["Roboto"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        green: "#3AA677",
        red: "#DE2E3C",
        background: "#ffffff",
        "dark-blue": {
          DEFAULT: "#12186E",
          900: "#363547",
        },
      },
      lineHeight: {
        40: "40px",
        heading: "60px",
        "heading-extra": "80px",
      },
    },
  },
  plugins: [],
};
