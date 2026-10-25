<template>
  <FscaPaperView
    v-if="publication"
    :publication="publication"
    series="occasional_papers"
  />
</template>

<script setup>
import FscaPaperView from '~/components/OtherPublications/FscaPaperView.vue'
import { useScholarMeta } from '~/composables/useScholarMeta'
import { FSCA_SERIES } from '~/helpers/fscaSeries'

const route = useRoute()

const { data: publication } = await useAsyncData(`occasional_papers-${route.params.year}-${route.params.slug}`, () =>
  queryContent('occasional_papers', route.params.year, route.params.slug).findOne()
)

if (!publication.value) {
  throw createError({ statusCode: 404, statusMessage: 'Volume not found', fatal: true })
}

// Google Scholar / reference managers
useScholarMeta(publication.value, {
  journal: FSCA_SERIES['occasional_papers'].title,
  issn: [FSCA_SERIES['occasional_papers'].issn],
  volume: publication.value.volume,
  year: publication.value.year
})
</script>
