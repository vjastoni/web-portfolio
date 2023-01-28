/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        darkCyan: "#0563bb",
        whitesmoke: "#f2f3f5",
        darkGray: "#45505b",
        brown: "#fec245",
        orange: "#ff5828",
        whitebg: "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
