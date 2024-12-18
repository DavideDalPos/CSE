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
  const { title, journal, authors, issue } = props.publication

  return `${authors
    .map((item) => item.name)
    .join(', ')}. ${year}. ${title}. ${journal}. ${issue || ''}`
})
</script>
