const appTitle = 'Animal Liberation Summit'

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-pink-50 text-stone-900 dark:bg-stone-900 dark:text-pink-50 pt-[50ch]',
      },
      title: appTitle,
      titleTemplate: (pageTitle) => {
        return pageTitle ? `${pageTitle} - ${appTitle}` : appTitle
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'Join the Animal Liberation Summit in the Netherlands, a transformative event uniting diverse animal activists. Together, we strive for a stronger, more connected movement through collaboration, skill-sharing, and mutual support. Discover campaigns, acquire new skills, and engage in crucial discussions, fostering inclusivity for marginalized groups. Resist oppression of both human and non-human animals in a space committed to minimizing oppressive behavior. Together, we amplify our impact for a more compassionate world.',
        },
        {
          name: 'msapplication-TileColor',
          content: '#da532c',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
        },
      ],
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    '@nuxtjs/i18n',
    "@nuxt/image"
  ],
  googleFonts: {
    families: {
      'Atkinson+Hyperlegible': true,
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        label: 'English',
        file: 'lang/en.json',
      },
      {
        code: 'nl',
        label: 'Nederlands',
        file: 'lang/nl.json',
      },
    ],
  },
})
