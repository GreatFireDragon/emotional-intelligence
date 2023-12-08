import themes from "./src/lib/themes";

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      // sans: ["Jura", "sans-serif"],
      sans: ["OpenDyslexic", "sans-serif"],
      // display: ["Julius Sans One", "sans-serif"],
      display: ["OpenDyslexic", "sans-serif"],
    },
    width: {
      screen: "100svw",
    },
    height: {
      screen: "100svh",
    },

    extend: {
      screens: {
        xs: "400px",
      },
      fontSize: {
        heading: ["5rem", { lineHeight: "1" }],
        main: ["3rem", { lineHeight: "1" }],
      },
    },
  },

  daisyui: {
    themes: themes,
  },

  plugins: [require("daisyui")],
};

module.exports = config;
