// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Raleway: {
        wght: [400, 700]
      },
      "Open Sans": {
        wght: [400]
      }
    }
  }
});
