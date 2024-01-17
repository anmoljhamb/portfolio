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
    },
  },
  plugins: [],
};
