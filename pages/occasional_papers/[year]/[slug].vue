<template>
  <FSCA_OccasionalView v-if="publication" :publication="publication" />
</template>

<script setup>
import FSCA_OccasionalView from '~/components/OtherPublications/OccasionalPapers/FSCA_OccasionalView.vue';

const route = useRoute()

const { data: publication } = await useAsyncData(() =>
  queryContent(
    'occasional_papers',
    route.params.year,
    route.params.slug
  ).findOne()
)
</script>
