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
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};