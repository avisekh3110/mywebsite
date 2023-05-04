/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          a: "#13101B",
          b: "#25212F",
          c: "#302D3E",
          d: "#5F5A71",
        },
        secondary: "#6E4CD3",
        tertiary: "#01ACB5",
        quarternary: {
          a: "#EDECEC",
          b: "#A5A5A5",
        },
      },
    },
  },
  plugins: [],
};
