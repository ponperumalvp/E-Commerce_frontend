/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primaryClr: "#607D82",
        secondaryClr: "#405357",
        thirdClr: "#80A6AD",
        // thirdClr: "#b8e0d2",
        // thirdClr: "#58a4b0",
        bgClr: "#EDEFF0",
        btClr2: "#464646",
        btHover: "#5e5e5e",
        textClr: "rgb(113 113 122)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
    flowbite.plugin(),
  ],
};
