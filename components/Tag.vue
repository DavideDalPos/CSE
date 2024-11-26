<template>
  <button
    type="button"
    class="px-3 py-1 text-primary-content rounded-lg text-xs align-middle uppercase"
  >
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>
