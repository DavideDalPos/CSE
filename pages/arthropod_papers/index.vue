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
        series="arthropod_papers"
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

const info = FSCA_SERIES['arthropod_papers']
const covers = ['/images/otherpubs/FSCA_Arthropods/AFNLA_2003_017.jpg', '/images/otherpubs/FSCA_Arthropods/AFNLA_1990_014.jpg', '/images/otherpubs/FSCA_Arthropods/AFNLA_1986_012.jpg']

useHead({ title: `${info.short} · FSCA publications` })
</script>
