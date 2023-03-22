/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "000000",
      white: "ffffff",
      yellow: "#F1D369",
      lighterYellow: "#E7FFB3",
      lightBlue: "#F2E5F5",
      darkBlue: "#50046F",
      darkerBlue: "#642080",
      darkColor: "#1D0E16",
      lightColor: "#8724AF",
      textBlue: "#DDB3ED",
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderHrColor: "rgba(29, 14, 22, 0.7)",
      grayColor: "rgba(242, 229, 245, 0.59)",
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
