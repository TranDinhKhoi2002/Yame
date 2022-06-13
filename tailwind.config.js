module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee4266",
      },
      keyframes: {
        headerMenuFadeIn: {
          from: {
            transform: "translateY(15px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        imageScale: {
          from: {
            transform: "scale(0.8)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        headerMenuFadeIn: "headerMenuFadeIn 0.2s linear",
        image: "imageScale 0.9s ease",
      },
    },
    screens: {
      xsm: "440px",
      // => @media (min-width: 440px) { ... }
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
  },
  plugins: [],
};
