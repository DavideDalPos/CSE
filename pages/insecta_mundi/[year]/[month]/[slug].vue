<template>
  <PublicationView :publication="data" />
</template>

<script setup>
const route = useRoute()
const { data } = await useAsyncData('publication', () =>
  queryContent(
    'insecta_mundi',
    route.params.year,
    route.params.month,
    route.params.slug
  ).findOne()
)
</script>
