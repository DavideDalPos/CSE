// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    rootAttrs: {
      class: 'flex flex-col min-h-screen'
    }
  },

  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  // Feed and sitemap are generated at build time (see server/routes)
  nitro: {
    prerender: {
      routes: ['/feed.xml', '/sitemap.xml', '/search-index.json', '/im-stats.json']
    }
  },

  compatibilityDate: '2025-03-31'
})
