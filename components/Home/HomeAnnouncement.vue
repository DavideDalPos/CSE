<template>
  <section class="py-12 border-t border-b border-quinary font-serif">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-700 mb-10">Latest Publication</h2>

      <!-- Card Layout -->
      <div class="flex flex-wrap justify-center gap-8">

        <!-- Latest Publication Card -->
        <VCard class="bg-foreground max-w-md w-full py-8 p-6 rounded-2xl shadow-lg flex flex-col justify-between text-center">
          <div>
            <h3 class="text-2xl font-bold flex justify-center items-center gap-2 mb-3 text-gray-800">
              {{ monthYear }} Publication
              <span
                v-if="showNewBadge"
                class="text-xs bg-red-600 text-white rounded-full px-2 py-0.5 animate-pulse"
              >
                NEW
              </span>
            </h3>

            <span class="text-gray-500 text-sm mb-4 block">
              Published on {{ latestPubDate || '...' }}
            </span>

            <p class="text-base text-muted mb-4">
              {{ latestPubTitle || 'Loading...' }}
            </p>

            <p class="text-sm text-gray-500 mb-6">
              Browse this publication in your collection
            </p>
          </div>

          <div class="flex justify-center gap-4">
            <NuxtLink
              v-if="latestPubPDF"
              :href="latestPubPDF"
              target="_blank"
              class="no-underline inline-flex items-center gap-2 rounded-full bg-otenary/90 px-6 py-2 text-white text-sm shadow-lg hover:bg-quinary/80 transition"
            >
              Download PDF
            </NuxtLink>

            <NuxtLink
              href="/publications"
              class="no-underline inline-flex items-center gap-2 rounded-full bg-setenary/90 px-6 py-2 text-white shadow-lg text-sm hover:bg-quinary/80 transition"
            >
              View All Publications
            </NuxtLink>
          </div>
        </VCard>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const latestPubTitle = ref('')
const latestPubDate = ref('')
const monthYear = ref('')
const showNewBadge = ref(false)
const latestPubPDF = ref('')

// Fetch the latest publication client-side to avoid Nuxt Content import issues in component
onMounted(async () => {
  try {
    const latest = await queryContent('publications')
      .sort({ date: -1 })
      .limit(1)
      .findOne()

    if (!latest) return

    latestPubTitle.value = latest.title
    latestPubPDF.value = latest.pdf || ''

    const dateObj = new Date(latest.date)
    latestPubDate.value = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    }).format(dateObj)

    monthYear.value = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })

    // Show NEW badge if published within the last 14 days
    const now = new Date()
    const diffInDays = (now - dateObj) / (1000 * 60 * 60 * 24)
    showNewBadge.value = diffInDays <= 14

  } catch (err) {
    console.error('Failed to load latest publication:', err)
  }
})
</script>
