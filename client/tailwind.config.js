/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#395B64",
        bgColor: "#222831",
        brand: "#2666CF",
        text: {
          primary: "#f5f2e7",
          secondary: "#a8a299",
        },
      },
      screens: {
        xxs: "360px",
        xs: "430px",
      },
      keyframes: {
        wiggle: {
          "0%, 30%": { transform: "rotate(-5deg)" },
          "15%, 45%": { transform: "rotate(5deg)" },
          "52%, 100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  important: true,
};
