// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      class: 'flex flex-col min-h-screen'
    }
  },

  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Roboto: true
    }
    // Options
  },

  compatibilityDate: '2025-03-31'
})