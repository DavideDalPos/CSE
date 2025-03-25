export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',  // Ensure Tailwind is included in the global styles
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
})

