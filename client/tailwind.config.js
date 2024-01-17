/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#222831",
        secondary: "#395B64",
        brand: "#2666CF",
        text: "#F5F2E7",
      },
    },
  },
  plugins: [],
};
