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
  font-weight: normal;
  color: #7ca2a1;
  text-decoration: none; /* Remove default underline */
  transition: text-decoration 0.2s ease-in-out;
  display: inline-block;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle text shadow */
}

.external-link:hover {
  color: #c68f4d; /* Slightly darker version of #dfa75a */
  text-decoration: underline; /* Underline on hover */
}


.internal-link {
  font-weight: normal;
  color: #dfa75a; /* Pastel blue */
  text-decoration: none; /* Remove default underline */
  transition: text-decoration 0.2s ease-in-out;
  display: inline-block;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle text shadow */
}

.internal-link:hover {
  color: #6b8f8e; /* Slightly darker version of #dfa75a */
  text-decoration: underline; /* Underline on hover */
}

</style>