/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "dark-blue": "hsl(243, 87%, 12%)",
          "desaturated-blue": "hsl(238, 22%, 44%)"
        },
        accent: {
          "blue": "hsl(224, 93%, 58%)",
          "cyan": "hsl(170, 45%, 43%)"
        },
        neutral: {
          "blue": "hsl(240, 75%, 98%)",
          "gray": "hsl(0, 0%, 75%)"
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
};
