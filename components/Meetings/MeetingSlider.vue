<template>
    <section class="relative overflow-hidden">
      <VSliderMini
        class="h-[calc(100vh-64px)]"
        :slides="slides"
      />
    </section>
  </template>
  
  <script setup>
  import Collage_1 from '~/public/images/meetings/Collage_1.png'
import Collage_2 from '~/public/images/meetings/Collage_2.png'
import Collage_3 from '~/public/images/meetings/Collage_3.png'
  
  const slides = [
  {
      img: Collage_1,
      copyright: ''
    },
    {
      img: Collage_2,
      copyright: ''
    },
    {
      img: Collage_3,
      copyright: ''
    }
  ]
  </script>