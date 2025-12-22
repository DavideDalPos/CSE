<template>
  <FSCA_OccasionalView v-if="publication" :publication="publication" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import FSCA_OccasionalView from '~/components/OtherPublications/OccasionalPapers/FSCA_OccasionalView.vue';

const route = useRoute()

// 🔹 Use _path for production-safe query
const { data: publication } = await useAsyncData(() =>
  queryContent()
    .where({ _path: `/occasional_papers/${route.params.year}/${route.params.slug}` })
    .findOne()
)
</script>
