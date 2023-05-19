/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/renderer/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        jetbrains: "JetBrains",
        ecam: "ECAM",
        mcdu: "MCDU",
        mcdu_small: "MCDU Small"
      },
      colors: {
        enabled: "#6bbe45"
      }
    }
  },
  variants: {},
  plugins: []
};
