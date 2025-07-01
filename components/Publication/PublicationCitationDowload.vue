<template>
  <div class="flex justify-center">
    <div class="relative inline-block text-left">
      <!-- Button -->
      <div>
        <button
          @click="toggleDropdown"
          type="button"
          class="inline-flex justify-center items-center rounded-md bg-white border border-gray-400 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-0 transition" 
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
        class="origin-top-right absolute right-0 mt-2 w-42 rounded-md shadow-lg bg-white ring-1 ring-gray-400 ring-opacity-5 z-10"
      >
        <div class="py-1">
          <a
            href="#"
            @click.prevent="downloadFile('txt')"
            class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3M12 2a10 10 0 00-9.95 9.45M12 2v10"></path>
            </svg>
            Download as .txt
          </a>
          <a
            href="#"
            @click.prevent="downloadFile('ris')"
            class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 4v16m8-8H4"></path>
            </svg>
            Download as .ris
          </a>
          <a
            href="#"
            @click.prevent="downloadFile('bib')"
            class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4 4h16v16H4z"></path>
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4 8h16"></path>
            </svg>
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

const plainCitationStripped = computed(() => {
  const year = new Date(props.publication.date).getFullYear()
  const { title, journal, authors, issue, pagination, doi } = props.publication

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
          .join('') + ''
      return initials ? `${cleanLast} ${initials}` : `${cleanLast}`
    })
    .join(', ')

  return `${authorList}. ${year}. ${title}. ${journal} ${issue || ''}: ${pagination}. ${doi}`
})

const downloadFile = (type) => {
  const { title, journal, authors, date, doi, issue, pagination, volume, download } = props.publication
  const year = new Date(date).getFullYear()
  const fileIssue = issue || 'no-issue'
  const filename = `InsectaMundi_${fileIssue}.${type}`

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

    content = `
TY  - JOUR
${risAuthors}
TI  - ${title}
JO  - ${journal}
VL  - ${issue || ''}
PY  - ${year}
SP  - ${sp}
${ep ? `EP  - ${ep}` : ''}
DO  - ${doi}
ER  -
`.trim()

  } else if (type === 'bib') {
    const authorList = authors
      .map((a) => `${a.last_name}, ${a.first_name}`)
      .join(' and ')

    const citationKey = `${authors[0]?.last_name || 'Author'}${year}`.replace(/\s+/g, '')

    content = `@article{${citationKey},
  author    = {${authorList}},
  title     = {${title}},
  journal   = {${journal}},
  year      = {${year}},
  volume    = {${issue || ''}},
  pages     = {${pagination || ''}},
  ${doi ? `doi       = {${doi}},` : ''}
 }
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
