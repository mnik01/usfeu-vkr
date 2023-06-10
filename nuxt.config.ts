// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  nitro: {
    compressPublicAssets: true,
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
  ],
});
