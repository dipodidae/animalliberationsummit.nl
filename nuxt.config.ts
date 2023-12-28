export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', "@nuxt/content"],
  googleFonts: {
    families: {
      'Atkinson+Hyperlegible': true,
    },
  },
})