/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        "8": "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "300px 25px 25px 25px",
      },
    },
  },
  plugins: [],
};
