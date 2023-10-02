/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#6E4CD3",
        tertiary: "#01ACB5",
        quarternary: {
          a: "#FFFFFF",
          b: "#EDECEC",
          c: "#A5A5A5",
        },
      },
    },
  },
  plugins: [],
};
