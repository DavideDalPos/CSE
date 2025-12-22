<template>
  <FSCA_OccasionalView v-if="publication" :publication="publication" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import FSCA_OccasionalView from '~/components/OtherPublications/OccasionalPapers/FSCA_OccasionalView.vue';

const route = useRoute()

// 🔹 Mimic insecta_mundi query: pass segments directly
const { data: publication } = await useAsyncData(() =>
  queryContent(
    'occasional_papers',
    route.params.year,
    route.params.slug
  ).findOne()
)
</script>

