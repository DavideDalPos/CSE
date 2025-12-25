<template>
  <div class="border border-gray-400 rounded-lg shadow-xl max-w-[430px] mx-auto overflow-hidden relative">
    <!-- Header with copy icon -->
<div class="relative bg-primary/90 px-4 py-2 flex items-center">
  <!-- Centered title -->
  <h3 class="absolute left-1/2 -translate-x-1/2 text-gray-100 text-lg">
    How to cite
  </h3>

  <!-- Spacer pushes icon to the right -->
  <div class="ml-auto relative">
<button
  @click="copyCitation"
  title="Copy citation"
  class="
    p-1 rounded
    bg-transparent
    transition
    active:translate-y-[1px]
    active:scale-95
    active:bg-gray-300
    active:shadow-inner
    hover:bg-gray-200
    focus:outline-none
    group
  "
>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
           class="w-6 h-6 stroke-white group-hover:stroke-gray-700 transition">
        <path stroke-linecap="round" stroke-linejoin="round" 
          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"/>
      </svg>
    </button>

    <!-- Tooltip -->
    <div v-show="copied"
         class="absolute -bottom-6 right-0 bg-gray-500 text-white text-xs px-2 py-1 rounded opacity-90 whitespace-nowrap">
      Citation copied!
    </div>
  </div>
</div>


    <!-- Citation Body -->
<!-- Citation Body -->
<!-- Citation Body -->
<div class="px-4 py-4 text-gray-700 bg-white text-sm text-left leading-relaxed">
  <span v-html="formattedCitation" class="break-words"></span>
  &nbsp;

  <!-- DOI link if available -->
  <span v-if="props.publication.doi" class="ml-1 underline text-novenary hover:text-novenary/40">
    <a :href="`https://doi.org/${props.publication.doi.replace(/^doi:\s*/i, '')}`" target="_blank">
      {{ props.publication.doi }}
    </a>
  </span>
</div>


  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  publication: {
    type: Object,
    required: true
  }
})

// Tooltip state
const copied = ref(false)

// Formatted citation
const formattedCitation = computed(() => {
  const year = props.publication.year || new Date(props.publication.date).getFullYear()
  const { title, journal, authors, issue, volume, pagination, doi } = props.publication

  const authorList = authors
    .map(a => {
      const last = a.last_name?.replace(/\./g, '') || ''
      const initials = a.first_name
        ?.split(' ')
        .map(n => n.split('-').map(s => s.charAt(0)).join('-'))
        .join('') || ''
      return a.suffix ? `${last} ${initials} ${a.suffix}` : `${last} ${initials}`
    })
    .join(', ')

  const page = pagination ? pagination.replace(/(\d)-(\d)/g, '$1–$2') : ''

  return `<span class="font-bold">${authorList}.</span> <span class="font-semibold">${year}</span>. ${title}. <i>${journal}</i>${volume ? ', Volume ' + volume : ''}${issue ? ', Issue ' + issue : ''}${page ? ': ' + page : ''}.`
})

// Copy to clipboard including DOI
function copyCitation() {
  let citationText = formattedCitation.value.replace(/<[^>]+>/g, '')
  if (props.publication.doi) {
    const cleanDoi = props.publication.doi.replace(/^doi:\s*/i, '')
    citationText += ` DOI: https://doi.org/${cleanDoi}`
  }

  navigator.clipboard.writeText(citationText)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

