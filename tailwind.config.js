/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "ctm-lila": "#818cf8",
        "ctm-darklila": "#4338ca",
        "ctm-lightlila": "#a5b4fc",
        "ctm-bglila": "#e9d5ff",
      },
    },
  },
  plugins: [],
};
