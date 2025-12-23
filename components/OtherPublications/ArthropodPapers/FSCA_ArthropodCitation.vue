<template>
  <div class="flex justify-center">
    <div class="relative inline-block text-left">
      <!-- Button -->
      <div>
        <button
          @click="toggleDropdown"
          type="button"
          class="inline-flex justify-center items-center rounded-md bg-white border border-gray-400 px-4 py-2 text-sm font-medium text-gray-700 shadow-xl hover:bg-gray-100 focus:outline-none focus:ring-0 transition" 
          aria-haspopup="true"
          :aria-expanded="open.toString()"
        >
          Download Citation
          <svg 
            :class="['-mr-1 ml-2 h-5 w-5 text-gray-500 transition-transform duration-200', open ? 'rotate-180' : 'rotate-0']" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- Dropdown -->
      <div
        v-if="open"
        class="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-gray-400 ring-opacity-5 z-10"
      >
        <div class="py-1">
          <a
            href="#"
            @click.prevent="downloadFile('txt')"
            class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            Download as .txt
          </a>
          <a
            href="#"
            @click.prevent="downloadFile('ris')"
            class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            Download as .ris
          </a>
          <a
            href="#"
            @click.prevent="downloadFile('bib')"
            class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            Download as .bib
          </a>
        </div>
      </div>
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

const open = ref(false)

const toggleDropdown = () => {
  open.value = !open.value
}

// Plain TXT citation
const plainCitationStripped = computed(() => {
  const year = props.publication.year
  const { title, journal, authors, volume, issue, pagination, doi } = props.publication

  const authorList = authors
    .map((item) => {
      const cleanLast = item.last_name?.replace(/\./g, '') || ''
      const initials =
        item.first_name
          ?.split(' ')
          .map((n) =>
            n
              .split('-')
              .map((s) => s.charAt(0))
              .join('-')
          )
          .join('') || ''
      return initials ? `${cleanLast} ${initials}` : `${cleanLast}`
    })
    .join(', ')

  return `${authorList}. ${year}. ${title}. ${journal}${volume ? ', vol. ' + volume : ''}${issue ? ', issue ' + issue : ''}: ${pagination || ''}. ${doi || ''}`
})

const downloadFile = (type) => {
  const { title, journal, authors, year, doi, issue, pagination, volume } = props.publication
  const fileIssue = issue || 'no-issue'
  const filename = `FSCA_${fileIssue}.${type}`

  let content = ''
  let mimeType = 'text/plain'

  if (type === 'txt') {
    content = plainCitationStripped.value

  } else if (type === 'ris') {
    const risAuthors = authors
      .map((a) => `AU  - ${a.last_name}, ${a.first_name}`)
      .join('\n')

    // Split pagination into start/end pages if available (e.g., "123–130")
    let sp = ''
    let ep = ''
    if (pagination?.includes('–')) {
      [sp, ep] = pagination.split('–').map(s => s.trim())
    } else {
      sp = pagination
    }

    content = `TY  - JOUR
${risAuthors}
TI  - ${title}
JO  - ${journal}
VL  - ${volume || ''}
IS  - ${issue || ''}
PY  - ${year}
SP  - ${sp}
${ep ? `EP  - ${ep}` : ''}
DO  - ${doi || ''}
ER  -`.trim()

  } else if (type === 'bib') {
    const authorListBib = authors
      .map((a) => `${a.last_name}, ${a.first_name}`)
      .join(' and ')

    const citationKey = `${authors[0]?.last_name || 'Author'}${year}`.replace(/\s+/g, '')

    content = `@article{${citationKey},
  author    = {${authorListBib}},
  title     = {${title}},
  journal   = {${journal}},
  year      = {${year}},
  volume    = {${volume || ''}},
  number    = {${issue || ''}},
  pages     = {${pagination || ''}},
  ${doi ? `doi       = {${doi}},` : ''}
}`.trim()

    mimeType = 'application/x-bibtex'
  }

  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
  open.value = false
}
</script>
