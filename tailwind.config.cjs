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
      fontSize: {
        heading: ["5rem", { lineHeight: "1" }],
        main: ["3rem", { lineHeight: "1" }],
      },
    },
  },

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },

  plugins: [require("daisyui")],
};

module.exports = config;
