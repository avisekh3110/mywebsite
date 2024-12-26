import { animate } from 'framer-motion';
import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'recent-cascad': "url('https://static.canva.com/web/images/e733916c4616f5baa19098cc2844369b.jpg')",
      },
      colors: {
        primary: "#000000",
        secondary: "#6E4CD3",
        tertiary: "#04BDCA",
        quarternary: {
          a: "#FFFFFF",
          b: "#EDECEC",
          c: "#A5A5A5",
        }
      },
      fontFamily: {
        DynaPuff: ["DynaPuff", "serif"],
        sourGummy: ["Sour Gummy", "sans-serif"]
      },
      letterSpacing: {
        widest: '0.2em', // Adjust this value to make it wider
      }
    },
  },
  plugins: [],
};
