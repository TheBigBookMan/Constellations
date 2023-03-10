/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        elianto: ["Elianto", "sans-serif"],
      },
      backgroundImage: {
        Space: "url('/src/images/Space.jpg')",
      },
    },
  },
  plugins: [],
};
