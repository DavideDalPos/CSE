<!-- A number that counts up from 0 when `run` becomes true -->
<template>
  <span class="tabular-nums">{{ shown.toLocaleString('en-US') }}</span>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  value: { type: Number, required: true },
  run: { type: Boolean, default: false },
  duration: { type: Number, default: 1400 }
})

// Shows the final number before the animation starts (and for search engines)
const shown = ref(props.value)

watch(
  () => props.run,
  (go) => {
    if (!go || !import.meta.client) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const start = performance.now()
    const tick = (t) => {
      const k = Math.min(1, (t - start) / props.duration)
      shown.value = Math.round(props.value * (1 - Math.pow(1 - k, 3)))
      if (k < 1) requestAnimationFrame(tick)
    }
    shown.value = 0
    requestAnimationFrame(tick)
  },
  { immediate: true }
)
</script>
