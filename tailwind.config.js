/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "000000",
      white: "ffffff",
      lightBlue: "#F2E5F5",
      darkColor: "#1D0E16",
      lightColor: "#8724AF",
      textBlue: "#DDB3ED",
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderHrColor: "rgba(29, 14, 22, 0.7)",
    },
    fontFamily: {
      "sans-serif": ["Space Grotesk", "sans-serif"],
    },
    // fontFamily: {
    //   'Space Grotesk': ['Space Grotesk', 'sans-serif']
    // },
  },
  plugins: [],
};
