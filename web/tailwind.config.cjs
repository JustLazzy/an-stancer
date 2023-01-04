/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },

  plugins: [require("tw-elements/dist/plugin")],
};

module.exports = config;
