<template>
  <FSCA_OccasionalView v-if="publication" :publication="publication" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import FSCA_OccasionalView from '~/components/OtherPublications/OccasionalPapers/FSCA_OccasionalView.vue'

const route = useRoute()
const year = route.params.year
const slug = route.params.slug.toLowerCase() // normalize slug to lowercase

// 🔹 Case-insensitive query
const { data: publication } = await useAsyncData(() =>
  queryContent('occasional_papers')
    .where({ _path: { $regex: new RegExp(`/occasional_papers/${year}/${slug}`, 'i') } })
    .findOne()
)
</script>
