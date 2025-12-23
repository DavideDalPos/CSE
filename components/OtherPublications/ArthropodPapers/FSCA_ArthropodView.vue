<script setup>
import IconArrowLeft from '@/components/Icon/IconArrowLeft.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

// Citation components
import FSCA_ArthropodCitation from './FSCA_ArthropodCitation.vue'
import FSCA_ArthropodCite from './FSCA_ArthropodCite.vue'

const props = defineProps({
  publication: {
    type: Object,
    required: true
  }
})

const paper = computed(() => props.publication)
const router = useRouter()

function goBack() {
  if (import.meta.client) {
    if (window.history.length > 1) router.back()
    else router.push('/arthropod_papers')
  }
}

function normalizedDoi(doi) {
  if (!doi) return ""
  const clean = doi.replace(/^doi:\s*/i, "").trim()
  return clean.startsWith("http://") || clean.startsWith("https://")
    ? clean
    : `https://doi.org/${clean}`
}

const zoobankUrl = (lsid) => {
  if (!lsid) return ""
  const parts = lsid.split(':')
  const idPart = parts.slice(4).join(':')
  return `https://zoobank.org/References/${idPart}`
}

// --- Split abstract into paragraphs ---
// --- Abstract as a single paragraph ---
const abstractParagraphs = computed(() => {
  if (!paper.value?.abstract) return []
  return [paper.value.abstract.trim()]  // keep it as one paragraph
})


// --- Determine if abstract is long ---
const abstractScrollableThreshold = 800
const isAbstractLong = computed(() => {
  return paper.value?.abstract?.length > abstractScrollableThreshold
})
</script>

<template>
  <section class="container mx-auto my-10 px-4 md:px-8 max-w-7xl space-y-6">
    <article v-if="paper" class="w-full text-center space-y-6">

      <!-- Title -->
      <h1 class="font-serif font-semibold text-4xl leading-tight text-otenary" v-html="paper.title" />

      <!-- Journal -->
      <p v-if="paper.journal" class="text-lg text-gray-700 font-semibold italic mt-1">
        {{ paper.journal }}
      </p>

      <!-- Volume & Year -->
<div class="flex justify-center mt-2">
  <span class="px-3 py-1 rounded-full bg-gray-200 text-gray-600 font-semibold text-sm">

    <span v-if="paper.volume">
      Volume {{ paper.volume }}
    </span>

    <span v-if="paper.volume && paper.year"> | </span>

    <span v-if="paper.year">
      {{ paper.year }} <span v-if="paper.yearrevised && paper.year"> (original) </span>
      <span v-if="paper.yearrevised && paper.year"> | </span>
      <span v-if="paper.yearrevised">
        {{ paper.yearrevised }} (revised)
      </span>
    </span>

  </span>
</div>


      <!-- Authors -->
      <div class="flex flex-col items-center gap-2 text-gray-700">
        <ul v-if="paper.authors" class="space-y-2">
          <li v-for="({ first_name, last_name, suffix, affiliation, orcid }, index) in paper.authors" :key="index">
            <p class="font-bold text-lg">
              {{ first_name }} {{ last_name }}<span v-if="suffix">, {{ suffix }}</span>
            </p>
            <p v-if="affiliation" class="text-gray-500 text-sm mx-auto max-w-md text-center break-words">{{ affiliation }}</p>
            <a v-if="orcid" :href="orcid" target="_blank" class="text-quaternary text-sm inline-flex items-center gap-1 hover:underline">
              <img src="/public/images/orcid.svg" class="w-4 h-4" />
              {{ orcid }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Two-column layout: Image + DOI/Zoobank/Citations/PDFs -->
      <div class="flex flex-col md:flex-row gap-6 md:px-8 max-w-7xl bg-gray-100 p-6 rounded-lg border border-gray-300">
<!-- Left: Image -->
<div class="md:w-1/2 flex items-center justify-center">
  <a v-if="paper.pdf" :href="paper.pdf" target="_blank" class="w-full flex justify-center">
    <img
      v-if="paper.image"
      :src="paper.image"
      class="rounded shadow-md max-w-lg w-full object-contain cursor-pointer transform transition-transform duration-200 hover:scale-105"
    />
  </a>
  <img
    v-else-if="paper.image"
    :src="paper.image"
    class="rounded shadow-md max-w-lg w-full object-contain"
  />
</div>



        <!-- Right: Structured column -->
        <div class="md:w-1/2 flex flex-col">
          <!-- Top: DOI & Zoobank -->
         <div class="bg-white border border-gray-200 rounded-xl shadow-md p-5 max-w-3xl mx-auto space-y-5">
  
  <!-- DOI -->
  <div class="flex flex-col">
    <span class="text-sm font-semibold text-gray-600 uppercase mb-1">DOI</span>
    <div class="flex items-center justify-between gap-2">
      <a v-if="paper.doi"
         :href="normalizedDoi(paper.doi)"
         target="_blank"
         class="text-novenary text-sm font-medium hover:underline break-words flex-1">
        {{ paper.doi }}
      </a>
      <button v-if="paper.doi" @click="copyToClipboard(paper.doi)" 
              class="p-1 rounded hover:bg-gray-100 transition" title="Copy DOI">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-600">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>
      </button>
      <span v-else class="text-gray-400 italic text-sm">No DOI available</span>
    </div>
  </div>

  <hr class="border-gray-200" />

  <!-- Zoobank -->
  <div class="flex flex-col">
    <span class="text-sm font-semibold text-gray-600 uppercase mb-1">Zoobank</span>
    <div class="flex items-center justify-between gap-2">
      <a v-if="paper.zoobank"
         :href="zoobankUrl(paper.zoobank)"
         target="_blank"
         class="text-novenary text-sm font-medium hover:underline break-words flex-1">
        {{ paper.zoobank }}
      </a>
      <button v-if="paper.zoobank" @click="copyToClipboard(paper.zoobank)" 
              class="p-1 rounded hover:bg-gray-100 transition" title="Copy Zoobank LSID">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-600">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
        </svg>
      </button>
      <span v-else class="text-gray-400 italic text-sm">No LSID number</span>
    </div>
  </div>

</div>




          <!-- Center: Citations -->
          <div class="flex-1 flex flex-col items-center justify-center gap-4 py-6">
            <FSCA_ArthropodCite :publication="paper" />
            <FSCA_ArthropodCitation :publication="paper" />
          </div>

          <!-- Bottom: PDFs -->
<div class="flex gap-4 justify-center">
  <a v-if="paper.pdf" :href="paper.pdf" target="_blank"
     class="px-6 py-3 shadow-lg text-base bg-quaternary text-white rounded-lg hover:bg-tertiary transition">
    Download PDF
  </a>
  <a v-if="paper.pdfhigh" :href="paper.pdfhigh" target="_blank"
     class="px-6 py-3 text-base  bg-setenary text-white rounded-lg hover:bg-secondary transition">
    High-res PDF
  </a>
</div>

        </div>
      </div>

<!-- Abstract: After all sections -->
<div v-if="paper.abstract"
     class="abstract-container p-6 bg-gray-100 rounded-lg text-gray-700 max-w-5xl mx-auto leading-relaxed text-justify border border-gray-300">
  <!-- Abstract Title -->
  <h2 class="font-semibold text-center text-3xl mb-4 text-otenary">Abstract</h2>

  <!-- Abstract content: always resizable -->
  <div class="abstract-content space-y-4">
    <div v-for="(para, i) in abstractParagraphs" :key="i" class="break-words" v-html="para"></div>
  </div>
</div>






      <!-- Back button -->
      <div class="flex justify-center">
        <button class="px-6 py-2 bg-primary text-white rounded hover:bg-gray-300 flex items-center gap-2" @click="goBack">
          <IconArrowLeft class="h-4" /> Back
        </button>
      </div>

    </article>
  </section>
</template>

<style>
.abstract-content {
  height: 300px;           /* starting height */
  min-height: 150px;       /* minimum */
  max-height: 100vh;        /* allow it to grow up to 80% of viewport height */
  overflow: auto;          /* needed for resize to work */
  resize: vertical;        /* allows dragging vertically */
  border: 1px solid #d1d5db;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f9fafb;
}



/* smooth transition if desired */
.abstract-content {
  transition: max-height 0.2s ease;
}




.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
