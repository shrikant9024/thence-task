/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-green": "#e8eee7",
      },
      fontFamily: {
        cbyg: ["Covered By Your Grace", "cursive"],
        nurom: ["Nurom", "cursive"],
        atyp: ["Atyp Display TRIAL", "cursive"],
      },
    },
  },
  plugins: [],
};
