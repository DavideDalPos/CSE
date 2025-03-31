<template>
  <NuxtLayout>
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in'
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
  font-weight: bold;
  color: rgba(58, 168, 91, 1.744);
  text-decoration: underline;
  transition: transform 0.2s ease-in-out;
  display: inline-block;
}

.external-link:hover {
  transform: scale(1.01);
}

.internal-link {
  font-weight: bold;
  color: rgba(21, 105, 214, 0.76); /* Pastel blue */
  text-decoration: underline;
  transition: transform 0.2s ease-in-out;
  display: inline-block;
}

.internal-link:hover {
  transform: scale(1.03);
}
</style>
