<template>
  <section class="relative overflow-hidden">
    <ClientOnly>
      <VSliderMini
        class="h-[calc(80vh-100px)]"
        :slides="slides"
      />
    </ClientOnly>
  </section>
</template>

<script setup>
const slides = [
  {
    img: '/images/meetings/Collage_1.png',
    copyright: ''
  },
  {
    img: '/images/meetings/Collage_2.png',
    copyright: ''
  },
  {
    img: '/images/meetings/Collage_3.png',
    copyright: ''
  }
]
</script>
