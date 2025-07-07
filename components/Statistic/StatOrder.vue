<template>
  <section class="container mx-auto my-10 px-8 max-w-xl">
    <h2 class="text-2xl font-bold mb-4">Total insect orders ending in <code>-tera</code></h2>
    <ul>
      <li
        v-for="([order, finalCount], index) in sortedOrders"
        :key="order"
        class="flex items-center justify-between p-3 mb-3 rounded-lg hover:bg-primary/10 cursor-pointer transition"
      >
        <span class="font-semibold text-primary">{{ order }}</span>
        <div class="flex items-center gap-4 w-48">
          <div
            class="h-4 rounded bg-primary/30 transition-width"
            :style="{ width: (animatedCounts[order] / maxCount) * 100 + '%' }"
            aria-label="Progress bar showing paper count"
          ></div>
          <span class="font-mono">{{ Math.round(animatedCounts[order]) }} paper<span v-if="finalCount > 1">s</span></span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue'

const { data: files } = await useAsyncData('tera-count', () =>
  queryContent('/insecta_mundi').find()
)

const orderCounts = {}

for (const file of files.value) {
  const categories = file.categories || file.category || []
  const cats = Array.isArray(categories) ? categories : [categories]
  const countedThisFile = new Set()

  for (const cat of cats) {
    if (typeof cat === 'string') {
      const catTrimmed = cat.trim()
      if (catTrimmed.toLowerCase().endsWith('tera') && !countedThisFile.has(catTrimmed)) {
        countedThisFile.add(catTrimmed)
        orderCounts[catTrimmed] = (orderCounts[catTrimmed] || 0) + 1
      }
    }
  }
}

const sortedOrders = Object.entries(orderCounts).sort((a, b) => b[1] - a[1])
const maxCount = Math.max(...sortedOrders.map(([, count]) => count))

// Reactive object to track animated counts, initialized to 0
const animatedCounts = reactive({})
sortedOrders.forEach(([order]) => (animatedCounts[order] = 0))

// Animate counts & bars from 0 to finalCount on mount
onMounted(() => {
  const duration = 1000 // animation duration in ms
  const startTime = performance.now()

  function animate(time) {
    const elapsed = time - startTime
    const progress = Math.min(elapsed / duration, 1)

    sortedOrders.forEach(([order, finalCount]) => {
      animatedCounts[order] = finalCount * progress
    })

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
})
</script>

<style scoped>
code {
  background-color: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-weight: 600;
  font-family: monospace;
}

.transition-width {
  transition: width 0.3s ease;
}
</style>
