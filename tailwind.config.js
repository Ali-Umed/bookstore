/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        beetle: "url('./public/bgdiscount1.jpg')",
      },
    },
  },
  plugins: [],
};
