<template>
  <PublicationView :publication="data" />
</template>

<script setup>
const { data } = await useAsyncData('current-issue', () =>
  queryContent('insecta_mundi')
    .where({ date: { $ne: null } })
    .sort({ date: -1 })
    .findOne()
)
</script>
