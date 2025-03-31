<template>
  <section class="relative overflow-hidden">
    <VSliderMini
      class="h-[calc(100vh-64px)]"
      :slides="slides"
    />
  </section>
</template>

<script setup>
import conference2025 from '~/assets/images/conference2025.avif'
import grantImage from '~/assets/images/jarmila_and_stewart_peck.avif'
import B1_Barkeria from '~/public/images/guatemala/B1_Barkeria.jpg'

const slides = [
{
    img: B1_Barkeria,
    copyright: 'Pierre Poirier © Canadian Museum of Nature'
  },
  {
    img: grantImage,
    copyright: 'Pierre Poirier © Canadian Museum of Nature'
  },
  {
    img: conference2025,
    copyright: 'CSE 2026 Conference © 2025'
  }
]
</script>
