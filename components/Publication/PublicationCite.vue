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

  return `${authors
    .map((item) => {const initials = item.first_name.split(' ')
            .map((name) => name.charAt(0))
            .join('.') + '.'
          return `${item.last_name}, ${initials}`
        })
    .join(', ')} (${year}). ${title}. <i>${journal}</i>, ${issue || ''}: ${pagination}. ${doi}`
})
</script>
