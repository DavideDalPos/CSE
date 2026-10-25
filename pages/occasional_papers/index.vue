<template>
  <div>
    <PublicationsHeader
      :kicker="`FSCA series · ISSN ${info.issn}`"
      :title="info.title"
      :lede="info.blurb"
      :covers="covers"
    />
    <div class="container mx-auto px-6 py-12">
      <FscaSeries
        series="occasional_papers"
        searchable
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

const info = FSCA_SERIES['occasional_papers']
const covers = ['/images/otherpubs/FSCA_Occasional/OPFSCA_2021_013.jpg', '/images/otherpubs/FSCA_Occasional/OPFSCA_2019_012.jpg', '/images/otherpubs/FSCA_Occasional/OPFSCA_2004_011.jpg']

useHead({ title: `${info.short} · FSCA publications` })
</script>
