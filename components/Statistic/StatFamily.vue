<template>
  <section class="container mx-auto my-10 px-8">
    <div>
      <p>Total insect families ending in <code>-idae</code>:</p>
      <ul>
        <li v-for="(count, family) in familyCounts" :key="family">
          {{ family }}: {{ count }} paper<span v-if="count > 1">s</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { data: files } = await useAsyncData('idae-count', () =>
  queryContent('/insecta_mundi').find()
)

const familyCounts = {}

for (const file of files.value) {
  const categories = file.categories || file.category || []

  const cats = Array.isArray(categories) ? categories : [categories]

  const countedThisFile = new Set()

  for (const cat of cats) {
    if (typeof cat === 'string') {
      const catTrimmed = cat.trim()
      const catLower = catTrimmed.toLowerCase()
      if (catLower.endsWith('idae') && !countedThisFile.has(catTrimmed)) {
        countedThisFile.add(catTrimmed)
        if (familyCounts[catTrimmed]) {
          familyCounts[catTrimmed]++
        } else {
          familyCounts[catTrimmed] = 1
        }
      }
    }
  }
}
</script>
