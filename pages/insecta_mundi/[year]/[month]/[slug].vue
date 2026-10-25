<template>
  <PublicationView
    v-if="data"
    :publication="data"
  />
</template>

<script setup>
import { useScholarMeta } from '~/composables/useScholarMeta'

const route = useRoute()
const { data } = await useAsyncData(`im-${route.params.year}-${route.params.month}-${route.params.slug}`, () =>
  queryContent('insecta_mundi', route.params.year, route.params.month, route.params.slug).findOne()
)

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

// Google Scholar / reference managers
useScholarMeta(data.value, {
  journal: 'Insecta Mundi',
  issn: ['0749-6737', '1942-1354'],
  issue: data.value.issue
})
</script>
