<template>
  <PublicationView :publication="data" />
</template>

<script setup>
const route = useRoute()
const data = await queryContent(
  'insecta_mundi',
  route.params.year,
  route.params.month,
  route.params.slug
).findOne()
</script>
