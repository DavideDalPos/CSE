<script setup>
import IconArrowLeft from '@/components/Icon/IconArrowLeft.vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

// Citation component (contains everything)
import FSCA_OccasionalCitation from './FSCA_OccasionalCitation.vue'
import FSCA_OccasionalCite from './FSCA_OccasionalCite.vue'

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
    else router.push('/occasional_papers')
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

const showAbstract = ref(false)
function toggleAbstract() {
  showAbstract.value = !showAbstract.value
}

// --- NEW: split abstract into paragraphs ---
// --- NEW: split abstract into paragraphs by sentence endings ---
const abstractParagraphs = computed(() => {
  if (!paper.value?.abstract) return []

  // First try to split by double newline (common for Markdown)
  if (paper.value.abstract.includes('\n\n')) {
    return paper.value.abstract.split('\n\n')
  }

  // Otherwise, split intelligently by sentence endings
  const sentences = paper.value.abstract.match(/[^.!?]+[.!?]+(\s|$)/g)
  if (!sentences) return [paper.value.abstract] // fallback

  const paragraphs = []
  let temp = ''

  sentences.forEach((sentence) => {
    if ((temp + sentence).length > 400) { // target ~400 chars per paragraph
      paragraphs.push(temp.trim())
      temp = sentence
    } else {
      temp += sentence
    }
  })

  if (temp.trim().length) paragraphs.push(temp.trim())
  return paragraphs
})

</script>


<template>
  <section class="container mx-auto my-10 px-4 md:px-8 max-w-5xl space-y-6">
    <article v-if="paper" class="w-full text-center space-y-4">

      <!-- Title -->
<!-- Title -->
<h1
  class="font-serif font-semibold text-4xl leading-tight text-otenary"
  v-html="paper.title"
/>

<!-- Journal (NEW) -->
<!-- Journal (Improved) -->
<p v-if="paper.journal" class="text-lg text-gray-700 font-semibold italic mt-1">
  {{ paper.journal }}
</p>



<!-- Volume & Year -->
<div class="flex justify-center mt-2">
  <span class="px-3 py-1 rounded-full bg-gray-200 text-gray-600 font-semibold text-sm">
    <span v-if="paper.volume">Volume {{ paper.volume }}</span>
    <span v-if="paper.volume && paper.year"> | </span>
    <span v-if="paper.year">{{ paper.year }}</span>
  </span>
</div>


      <!-- Authors -->
      <div class="flex flex-col items-center gap-2 text-gray-700">
        <ul v-if="paper.authors" class="space-y-2">
          <li
            v-for="({ first_name, last_name, suffix, affiliation, orcid }, index) in paper.authors"
            :key="index"
          >
            <p class="font-bold text-lg">
              {{ first_name }} {{ last_name }}<span v-if="suffix">, {{ suffix }}</span>
            </p>
            <p v-if="affiliation" class="text-gray-500 text-sm mx-auto max-w-md text-center break-words">{{ affiliation }}</p>
            <a
              v-if="orcid"
              :href="orcid"
              target="_blank"
              class="text-quaternary text-sm inline-flex items-center gap-1 hover:underline"
            >
              <img src="/public/images/orcid.svg" class="w-4 h-4" />
              {{ orcid }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Abstract toggle -->
<!-- Abstract toggle or message -->
<div class="flex justify-center">
  <template v-if="paper.abstract">
    <button
      @click="toggleAbstract"
      class="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
    >
      {{ showAbstract ? 'Hide Abstract' : 'Read Abstract' }}
    </button>
  </template>
  <template v-else>
    <div class="bg-gray-100 border border-gray-300 p-6 rounded-lg text-gray-500 italic text-center max-w-2xl">
      No abstract available for this publication.
    </div>
  </template>
</div>

<!-- Abstract -->
<transition name="fade">
  <div
    v-if="showAbstract && paper.abstract"
    class="bg-primary/10 p-6 rounded-lg text-gray-700 text-justify"
    v-html="paper.abstract"
  ></div>
</transition>





      <!-- TWO COLUMN LAYOUT -->
      <div class="flex flex-col md:flex-row gap-6 bg-primary/10 p-6 rounded-lg">

        <!-- Left: Image -->
        <div class="md:w-1/2 flex items-center justify-center">
          <img
            v-if="paper.image"
            :src="paper.image"
            class="rounded shadow-md w-full max-w-lg object-contain"
          />
        </div>

        <!-- Right: Structured column -->
        <div class="md:w-1/2 flex flex-col">

          <!-- TOP -->
<div class="bg-gray-50 border border-gray-300 rounded-xl shadow-sm p-5 space-y-4 text-left max-w-md mx-auto">
  <!-- DOI -->
  <!-- DOI -->
<div class="flex flex-col">
  <span class="text-primary uppercase font-medium mb-1 flex items-center gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-quaternary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14h-2v-2h2zm0-4h-2V6h2z"/>
    </svg>
    DOI
  </span>
  <template v-if="paper.doi">
    <a
      :href="normalizedDoi(paper.doi)"
      target="_blank"
      class="text-novenary text-sm font-medium hover:underline break-all mt-1"
    >
      {{ paper.doi }}
    </a>
  </template>
  <template v-else>
    <span class="text-gray-500 italic text-sm mt-1">No DOI available</span>
  </template>
</div>

<hr class="border-gray-300" />

<!-- Zoobank -->
<div class="flex flex-col">
  <span class="text-primary uppercase font-medium mb-1 flex items-center gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-quaternary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14h-2v-2h2zm0-4h-2V6h2z"/>
    </svg>
    Zoobank
  </span>
  <template v-if="paper.zoobank">
    <a
      :href="zoobankUrl(paper.zoobank)"
      target="_blank"
      class="text-novenary text-sm font-medium hover:underline break-all mt-1"
    >
      {{ paper.zoobank }}
    </a>
  </template>
  <template v-else>
    <span class="text-gray-500 italic text-sm mt-1">No LSID number</span>
  </template>
</div>

</div>





          <!-- CENTER -->
<!-- CENTER -->
<div class="flex-1 flex flex-col items-center justify-center gap-4 py-6">
  <FSCA_OccasionalCite :publication="paper" />
  <FSCA_OccasionalCitation :publication="paper" />
</div>


          <!-- BOTTOM -->
          <div class="flex gap-3 justify-center">
            <a
              v-if="paper.pdf"
              :href="paper.pdf"
              target="_blank"
              class="px-3 py-1.5 text-sm bg-quaternary text-white rounded hover:bg-tertiary"
            >
              Download PDF
            </a>
            <a
              v-if="paper.pdfhigh"
              :href="paper.pdfhigh"
              target="_blank"
              class="px-3 py-1.5 text-sm bg-setenary text-white rounded hover:bg-secondary"
            >
              High-res PDF
            </a>
          </div>
        </div>
      </div>

      <!-- Back -->
      <div class="flex justify-center">
        <button
          class="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center gap-2"
          @click="goBack"
        >
          <IconArrowLeft class="h-4" /> Back
        </button>
      </div>
    </article>
  </section>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
