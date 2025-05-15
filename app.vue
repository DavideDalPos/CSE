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
useHead({
  title: 'Center for Systematic Entomology',
  meta: [
    {
      name: 'keywords',
      content:
        'Florida State Collection of Arthropods, FSCA, systematics, taxonomy, entomology'
    },
    {
      name: 'description',
      content:
        'Center for Systematic Entomology (CSE), a non-profit corporation designed to further systematics in its broadest sense'
    }
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.svg' }],
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
  transition: all 0.25s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(0px);
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
