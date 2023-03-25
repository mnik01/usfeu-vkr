/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ".dark-mode"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/content/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./content/**/*.md",
    "./content/**/*.mdc",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: '"Montserrat", sans-serif',
        paragraph: '"Open Sans", sans-serif',
      },
      colors: {
        brand: "#29B657",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
