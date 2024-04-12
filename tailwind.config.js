/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      noto: ["Noto Sans Syriac", "sans-serif"]
    },
    colors: {
      negroeee: '#eee4',
      sky1000: '#101a2e',
      sky1500: '#193251',
      sky008: '#0084B6',
      sky263: '#263e7b',
      pikfe7: '#fe7bad',
      geern80e: '#80ecf5',
      tomatef16: '#f1683a',
    },
    screens: {
      sm: '	640px',
      md: '768px',
      mdx: '825px',
    },
  },
  darkMode: "class",
  plugins: [
    nextui({})
  ],
}

