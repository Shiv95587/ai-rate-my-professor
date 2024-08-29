/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-linear-gradient":
          "linear-gradient(90deg, #c0392b 0%, #8e44ad 100%)",
      },
    },
  },
  plugins: [],
};
