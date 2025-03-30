<template>
    <section id="guatemala" class="container mx-auto px-8 py-10">
      <h1 class="text-4xl">A trip to Guatemala!</h1>
        <div class="flex flex-col gap-4 my-8">
            <p>
                In 2009, as part of an on‐going survey of Diptera of Guatemala in cooperation with the Systematic Entomology Laboratory at the Universidad del Valle de Guatemala (UVG), 
                Gary Steck and Bruce Sutton visited Guatemala from May 28 to June 11, 2009. Partial funding for this trip was provided by CSE.
                <br><a href="/PDF/2009_DipteraReport.pdf" target="_blank" class="internal-link" rel="noopener noreferrer">Dowload their report</a> <a href="/PDF/2009_DipteraReport.pdf" target="_blank" class="internal-link" rel="noopener noreferrer">
                    <img src="/images/PDF_file_icon.svg" alt="PDF icon" class="inline w-5 h-5 ml-1 "></a>
            </p>
        </div>

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
