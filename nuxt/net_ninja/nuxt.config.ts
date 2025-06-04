// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', 'nuxt-mcp', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt 3 Ninja App',
      meta: [
        {
          name: 'description',
          content: 'A Nuxt 3 application built by The Net Ninja'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }]
    },
  },
  css: ['~/assets/css/tailwind.css'],
})