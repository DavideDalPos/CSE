<template>
  <LayoutHeader />
  <main class="flex-grow min-w-0">
    <slot />
  </main>
  <LayoutFooter />
  <SiteSearch />
</template>

<script setup>
import SiteSearch from '~/components/Search/SiteSearch.vue'
</script>
