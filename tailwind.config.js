import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "textPrimary" : "#468DE6",
        "textSec": "#CAA6F7",
        "bgPrimary": "#1D1D1D",
        "secondary" : "#1E1E2E",
        "gradient": "linear-gradient(to bottom right, #FF7E5F, #FEB47B)",
        "gradientButton": "linear-gradient(to right, #06b6d4, #3b82f6);"
      },
      extend: {
        animation: {
          "meteor-effect": "meteor 5s linear infinite",
        },
        keyframes: {
          meteor: {
            "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
            "70%": { opacity: "1" },
            "100%": {
              transform: "rotate(215deg) translateX(-500px)",
              opacity: "0",
            },
          },
        },
      },
    },
  },
  plugins: [],
}

