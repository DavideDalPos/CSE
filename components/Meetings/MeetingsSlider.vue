<template>
  <!-- Wrap the entire slider in ClientOnly to avoid SPA hydration issues -->
  <ClientOnly placeholder="Loading slider...">
    <section class="relative overflow-hidden">
      <VSliderMini
        class="h-[calc(80vh-100px)]"
        :slides="slides"
      />
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
// Correctly import **images**, not components
import people from '~/public/images/meetings/people.jpg'
import people2 from '~/public/images/meetings/people2.jpg'
import people3 from '~/public/images/meetings/people3.jpg'
import people4 from '~/public/images/meetings/people4.jpg'
import poster from '~/public/images/meetings/poster.jpg'
import presentation from '~/public/images/meetings/presentation.jpg'
import presentation1 from '~/public/images/meetings/presentation1.jpg'

// Slides array — all entries must have proper image paths
const slides = [
  { img: people, alt: 'CSE Conference 2026 - group photo' },
  { img: people2, alt: 'CSE attendees 2026' },
  { img: people3, alt: 'Conference session' },
  { img: people4, alt: 'Networking event' },
  { img: poster, alt: 'Conference poster' },
  { img: presentation, alt: 'Presentation session' },
  { img: presentation1, alt: 'Another presentation' },
]
</script>
