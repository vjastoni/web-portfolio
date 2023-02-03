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
        skyBlue: "rgb(0, 139, 139, 0.8)",
        modalBg: "rgba(0, 0, 0, .5)",
      },
      fontFamily: {
        poppins: ["Poppins"],
        raleway: ["Raleway"],
      },
      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-80px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-350px)" },
          "100%": { transform: "translateY(0)" },
        },
        popUp: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
        },
        moveTop: {
          0: {
            opacity: "0",
            transform: "translateY(-100px)",
          },
        },
        moveRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
        },
        moveLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
        },
      },
    },
  },
  plugins: [],
};
