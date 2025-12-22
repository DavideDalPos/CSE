<template>
  <div
    class=" rounded-md bg-white shadow-sm max-w-[420px] mx-auto"
  >
    <!-- Header -->
    <h3
      class="text-sm font-semibold text-white bg-primary px-4 py-1 rounded-t-md"
    >
      How to cite
    </h3>

    <!-- Citation -->
    <div class="px-4 py-3 text-sm text-gray-700 leading-relaxed text-left">
      <span v-html="cite" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  publication: {
    type: Object,
    required: true
  }
})

const cite = computed(() => {
  const year = props.publication.year || new Date(props.publication.date).getFullYear()
  const { title, journal, authors, issue, volume, pagination, doi } = props.publication

  const authorList = authors
    .map((item) => {
      const lastName = item.last_name?.replace(/\./g, '') || ''
      const initials = item.first_name
        ?.split(' ')
        .map(n =>
          n.split('-').map(s => s.charAt(0)).join('-')
        )
        .join('') || ''
      return item.suffix
        ? `${lastName} ${initials} ${item.suffix}`
        : `${lastName} ${initials}`
    })
    .join(', ')

  const formattedPagination = pagination
    ? pagination.replace(/(\d)-(\d)/g, '$1–$2')
    : ''

  return `<b>${authorList}.</b> <b>${year}</b>. ${title}. ${journal}${volume ? ', Volume ' + volume : ''}${issue ? ', issue ' + issue : ''}: ${formattedPagination}. ${doi || ''}`
})
</script>
