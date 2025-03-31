<template>
  <PublicationView :publication="data" />
</template>

<script setup>
const route = useRoute()
const { data } = await useAsyncData('publication', () =>
  queryContent('publications', route.params.slug).findOne()
)
</script>
