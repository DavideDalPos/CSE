<template>
  <FSCA_ArthropodView v-if="publication" :publication="publication" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import FSCA_ArthropodView from '~/components/OtherPublications/ArthropodPapers/FSCA_ArthropodView.vue';

const route = useRoute()

// 🔹 Mimic insecta_mundi query: pass segments directly
const { data: publication } = await useAsyncData(() =>
  queryContent(
    'arthropod_papers',
    route.params.year,
    route.params.slug
  ).findOne()
)
</script>

