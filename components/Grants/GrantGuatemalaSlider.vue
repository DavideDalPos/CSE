<template>
    <section class="relative overflow-hidden">
      <VSlider
        class="h-[calc(100vh-64px)]"
        :slides="slides"
      />
    </section>
  </template>
  
  <script setup>
  import IMLogo from '~/assets/images/IM_logo1.png'
import conference2025 from '~/assets/images/conference2025.avif'
import grantImage from '~/assets/images/jarmila_and_stewart_peck.avif'
  
  const slides = [
    {
      title: 'Travel Grant Application',
      description: `
      <p>Made possible by a generous gift from Stewart Peck, Ph.D., and Jarmila Peck, Ph.D., of Ottawa, Canada, through a donation to the Nature Foundation, the Canadian Museum of Nature and the Beaty Centre for Species Discovery are pleased to award the annual Stewart and Jarmila Peck Visiting-Scientist Awards in Entomology.</p>
      <p>These annual travel grants facilitate research in the study of beetle systematics and fossil insects in the museum’s world-class beetle and paleoentomology collections.</p>`,
      img: grantImage,
      copyright: 'Pierre Poirier © Canadian Museum of Nature',
      link: {
        label: 'Apply',
        href: '/grants'
      }
    },
    {
      title: 'New Publications',
      description: '',
      img: IMLogo,
      link: {
        label: 'Insecta Mundi Guidelines',
        href: '/guidelinesim'
      }
    },
    {
      title: 'Save the Date: 2026 CSE Annual Conference',
      description: '',
      img: conference2025,
      link: {
        label: 'Learn more and Submit',
        href: '/'
      }
    }
  ]
  </script>