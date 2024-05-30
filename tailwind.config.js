/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        110: "700px",
      },
      backgroundImage: {
        bg: "url('./src/assets/images/bg.jpg')",
        bg2: "url('./src/assets/images/bg2.png')",
      },
    },
  },
  plugins: [],
};
