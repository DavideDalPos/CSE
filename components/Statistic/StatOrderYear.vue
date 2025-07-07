<template>
  <section class="container mx-auto my-10 px-8 max-w-xl">
    <h2 class="text-2xl font-bold mb-6">Insect orders ending in <code>-tera</code> by Year</h2>
    <div v-for="(orders, year) in sortedYears" :key="year" class="mb-8">
      <h3 class="text-xl font-semibold mb-3 border-b border-primary pb-1">{{ year }}</h3>
      <ul>
        <li
          v-for="([order, count], idx) in orders"
          :key="order"
          class="flex justify-between p-2 hover:bg-primary/10 rounded cursor-pointer transition"
        >
          <span class="font-semibold text-primary">{{ order }}</span>
          <span class="font-mono">{{ count }} paper<span v-if="count > 1">s</span></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { data: files } = await useAsyncData('tera-year-count', () =>
  queryContent('/insecta_mundi').find()
)

const yearOrderCounts = {}

function extractYear(path) {
  const match = path.match(/\/insecta_mundi\/(\d{4})\//)
  return match ? match[1] : 'Unknown'
}

for (const file of files.value) {
  const year = extractYear(file._path)
  if (!yearOrderCounts[year]) yearOrderCounts[year] = {}

  const categories = file.categories || file.category || []
  const cats = Array.isArray(categories) ? categories : [categories]
  const countedThisFile = new Set()

  for (const cat of cats) {
    if (typeof cat === 'string') {
      const catTrimmed = cat.trim()
      if (catTrimmed.toLowerCase().endsWith('tera') && !countedThisFile.has(catTrimmed)) {
        countedThisFile.add(catTrimmed)
        yearOrderCounts[year][catTrimmed] = (yearOrderCounts[year][catTrimmed] || 0) + 1
      }
    }
  }
}

// Sort years descending (latest year first)
const sortedYears = Object.fromEntries(
  Object.entries(yearOrderCounts)
    .sort(([yearA], [yearB]) => {
      const numA = Number(yearA);
      const numB = Number(yearB);

      // Push invalid years to the bottom
      if (isNaN(numA)) return 1;
      if (isNaN(numB)) return -1;

      return numB - numA; // Descending numeric sort
    })
    .map(([year, orders]) => [
      year,
      Object.entries(orders).sort(([, countA], [, countB]) => countB - countA),
    ])
)

</script>

<style scoped>
code {
  background-color: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-weight: 600;
  font-family: monospace;
}
</style>
