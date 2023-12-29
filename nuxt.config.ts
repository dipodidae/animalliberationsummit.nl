export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@nuxt/content', '@nuxtjs/i18n'],
  googleFonts: {
    families: {
      'Atkinson+Hyperlegible': true,
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        id: 'en',
        label: 'English',
      },
      {
        code: 'nl',
        id: 'nl',
        label: 'Nederlands',
      },
    ],
  },
})
