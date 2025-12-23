<template>
  <FSCA_ArthropodView v-if="publication" :publication="publication" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import FSCA_ArthropodView from '~/components/OtherPublications/ArthropodPapers/FSCA_ArthropodView.vue';

const route = useRoute()

const { data: publication } = await useAsyncData(
  () => `arthropod-paper-${route.params.slug}`,  // unique key
  () => queryContent(
    'arthropod_papers',
    route.params.year,
    route.params.slug
  ).findOne(),
  {
    watch: [() => route.params.slug]   // ⚡ refetch when slug changes
  }
)

</script>

