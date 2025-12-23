<script setup>
import { useRoute } from 'vue-router';
import FSCA_ArthropodView from '~/components/OtherPublications/ArthropodPapers/FSCA_ArthropodView.vue';

const route = useRoute()

// Directly fetch publication (like insecta_mundi)
const publication = await queryContent(
  'arthropod_papers',
  route.params.year,
  route.params.slug
).findOne()
</script>

<template>
  <FSCA_ArthropodView :publication="publication" />
</template>
