<template>
  <section class="relative overflow-hidden">
    <VSlider
      class="h-[calc(100vh-64px)]"
      :slides="slides"
    />
  </section>
</template>

<script setup>
import CSELogo from '~/assets/images/IM_Skelley.png'
import IMLogo from '~/assets/images/IM_logo2.png'
import conference2025 from '~/assets/images/conference2025.avif'
import grantImage from '~/assets/images/jarmila_and_stewart_peck.avif'

const slides = [
{
    title: 'CSE Membership',
    description: `
    <p>The Center for Systematic Entomology is dedicated to facilitate and advance insect systematics via its annual conference, publications and travel grant. The annual membership is of $40 
      and you can publish for free on our journal Insecta Mundi.</p>
    <p>We also accept donations to support research efforts in the area of arthropod systematics</p>`,
    img: CSELogo,
    copyright: 'Pierre Poirier © Canadian Museum of Nature',
    link: {
      label: 'Become a Member',
      href: '/membership'
    }
  },
  {
    title: 'The Peck Fund Travel Grant',
    description: `
    <p>Made possible by a generous gift from Stewart Peck, Ph.D., and Jarmila Peck, Ph.D., of Ottawa, Canada, through a donation to the Nature Foundation, the 
      Canadian Museum of Nature and the Beaty Centre for Species Discovery are pleased to award the annual Stewart and Jarmila Peck Visiting-Scientist Awards in Entomology.</p>
    <p>These annual travel grants facilitate research in the study of beetle systematics and fossil insects in the museum’s world-class beetle and paleoentomology collections.</p>`,
    img: grantImage,
    copyright: 'Pierre Poirier © Canadian Museum of Nature',
    link: {
      label: 'Apply',
      href: '/grants'
    }
  },
  {
    title: 'Insecta Mundi Journal',
    description: `
    <p>A journal of World Insect Systematics since 1985. Openly accessible and free for authors. </p>
    <p>Openly accessible and free for authors</p> `,
    img: IMLogo,
    link: {
      label: 'Guidelines',
      href: '/insecta_mundi/journal'
    }
  },
  {
    title: '2026 CSE Annual Conference',
    description: `
    <p>Every year the CSE host an hybrid (online and in-person) conference, which is free and open to anyone who want to share their research on insect systematics, behaviour, ecology, evolution,
      and more. </p>
    <p>Check out how to participate and when the 2026 Conference is happening!</p> `,
    img: conference2025,
    link: {
      label: 'Learn More',
      href: '/'
    }
  }
]
</script>
