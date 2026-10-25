<template>
  <NuxtLayout>
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in',
        onAfterEnter
      }"
    />
  </NuxtLayout>
</template>

<script setup>
import site from '~/data/site'

useHead({
  titleTemplate: (t) => (t && t !== site.name ? `${t} · CSE` : site.name),
  meta: [
    {
      name: 'keywords',
      content: 'Insecta Mundi, Florida State Collection of Arthropods, FSCA, systematics, taxonomy, entomology'
    },
    { name: 'description', content: site.description },
    // Link previews (email, Slack, social media) — pages can override these
    { property: 'og:site_name', content: site.name },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: site.name },
    { property: 'og:description', content: site.description },
    { property: 'og:image', content: `${site.url}${site.shareImage}` },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'alternate', type: 'application/rss+xml', title: 'Insecta Mundi — new articles', href: '/feed.xml' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: `bg-background-color`
  }
})

async function onAfterEnter() {
  const route = useRoute()

  if (route.hash) {
    await nextTick()
    const element = document.querySelector(route.hash)
    if (element) {
      element.scrollIntoView()
    }
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
}

.external-link {
  font-weight: 500;
  color: #b45309; /* Tailwind amber-700 */
}

.external-link:hover {
  color: #fbbf24; /* Tailwind amber-400 */
  text-decoration: underline;
}

.internal-link {
  color: #c2410c; /* Tailwind's orange-700 */
  font-weight: 600;
}

.internal-link:hover {
  text-decoration: underline;
  color: #dfa75a; /* brighter orange for hover */
}
</style>
