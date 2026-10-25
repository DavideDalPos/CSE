<template>
  <div>
    <PublicationsHeader
      :kicker="info.short"
      :title="`Volumes published in ${year}`"
      :lede="info.title"
    />
    <div class="container mx-auto px-6 py-12">
      <FscaSeries
        series="arthropod_papers"
        :year="year"
        :show-blurb="false"
        :show-title="false"
      />
    </div>
  </div>
</template>

<script setup>
import PublicationsHeader from '~/components/OtherPublications/PublicationsHeader.vue'
import FscaSeries from '~/components/OtherPublications/FscaSeries.vue'
import { FSCA_SERIES } from '~/helpers/fscaSeries'

const info = FSCA_SERIES['arthropod_papers']
const route = useRoute()
const year = String(route.params.year)

useHead({ title: `${info.short} · ${year}` })
</script>
