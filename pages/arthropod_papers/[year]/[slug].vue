<template>
  <FscaPaperView
    v-if="publication"
    :publication="publication"
    series="arthropod_papers"
  />
</template>

<script setup>
import FscaPaperView from '~/components/OtherPublications/FscaPaperView.vue'
import { useScholarMeta } from '~/composables/useScholarMeta'
import { FSCA_SERIES } from '~/helpers/fscaSeries'

const route = useRoute()

const { data: publication } = await useAsyncData(`arthropod_papers-${route.params.year}-${route.params.slug}`, () =>
  queryContent('arthropod_papers', route.params.year, route.params.slug).findOne()
)

if (!publication.value) {
  throw createError({ statusCode: 404, statusMessage: 'Volume not found', fatal: true })
}

// Google Scholar / reference managers
useScholarMeta(publication.value, {
  journal: FSCA_SERIES['arthropod_papers'].title,
  issn: [FSCA_SERIES['arthropod_papers'].issn],
  volume: publication.value.volume,
  year: publication.value.year
})
</script>
