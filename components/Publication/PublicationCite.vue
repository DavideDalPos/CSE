<template>
  <span v-html="cite" />
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
  const year = new Date(props.publication.date).getFullYear()
  const { title, journal, authors, issue, pagination, doi } = props.publication

  const authorList = authors
.map((item) => {
  const lastName = item.last_name?.replace(/\./g, '') || ''
  const initials = item.first_name
    ?.split(' ')
    .map(namePart =>
      namePart
        .split('-')
        .map(subPart => subPart.charAt(0))
        .join('-')
    )
    .join('') || ''
  return item.suffix
    ? `${lastName} ${initials} ${item.suffix}`
    : `${lastName} ${initials}`
})

    .join(', ')

  return `<b>${authorList}.</b> <b>${year}</b>. ${title}. ${journal} ${
    issue || ''
  }: ${pagination}. ${doi}`
})


</script>
