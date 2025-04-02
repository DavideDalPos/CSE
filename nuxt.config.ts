// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    rootAttrs: {
      class: 'flex flex-col min-h-screen'
    }
  },

  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/google-fonts'],

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      Roboto: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  compatibilityDate: '2025-03-31'
})
