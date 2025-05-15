<template>
  <section class="relative overflow-hidden">
    <ClientOnly>
      <VSliderMini
        class="h-[calc(80vh-100px)]"
        :slides="slides"
      />
    </section>
  </template>
  
  <script setup>
  import people from '~/public/images/meetings/people.jpg'
import people2 from '~/public/images/meetings/people2.jpg'
import people3 from '~/public/images/meetings/people3.jpg'
import people4 from '~/public/images/meetings/people4.jpg'
import poster from '~/public/images/meetings/poster.jpg'
import presentation from '~/public/images/meetings/presentation.jpg'
import presentation1 from '~/public/images/meetings/presentation1.jpg'
  
  const slides = [
  {
      img: people,
    },
    {
      img: people2,
    },
    {
      img: people3,
    },
    {
      img: people4,
    },
    {
      img: poster,

    },
    {
      img: presentation,
    },
    {
      img: presentation1,
    },
  ]
  </script>