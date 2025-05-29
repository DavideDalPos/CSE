<template>
  <section class="py-12 border-t border-b border-quinary font-serif">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-700 mb-10">Monthly Publication Updates</h2>

      <!-- Cards Layout -->
      <div class="flex flex-wrap justify-center gap-8">
        
        <!-- Latest Monthly Update Card -->
        <VCard class="bg-foreground max-w-md w-full py-8 p-6 rounded-2xl shadow-lg flex flex-col justify-between text-center">
          <div>
            <h3 class="text-2xl font-bold flex justify-center items-center gap-2 mb-3 text-gray-800">
              {{ monthYear }} Publications
<span
  v-if="showNewBadge"
  class="text-xs bg-red-600 text-white rounded-full px-2 py-0.5 animate-pulse"
>
  New
</span>

            </h3>
            <span class="text-gray-500 text-sm mb-4 block">Published on {{ latestPubDate || '...' }} </span>
            <p class="text-base text-muted mb-6">
              Browse this month's publications in <i>Insecta Mundi</i>
            </p>
          </div>
          <div class="flex justify-center">
            <NuxtLink
              href="/insecta_mundi/current"
              class="no-underline inline-flex items-center gap-2 rounded-full bg-otenary/90 px-6 py-2 text-white text-sm shadow-lg hover:bg-quinary/80 transition"
            >
              View New Publications
            </NuxtLink>
          </div>
        </VCard>

        <!-- Archive Card -->
        <VCard class="bg-foreground max-w-md w-full py-8 p-6 rounded-2xl shadow-lg flex flex-col justify-between text-center border border-primary/20">
          <div>
            <h4 class="text-xl font-semibold mb-3 text-gray-800">Looking for earlier publications?</h4>
            <p class="text-base text-muted mb-6">
              Explore the complete archive of <i>Insecta Mundi</i>.
            </p>
            <p class="text-sm text-gray-500 mb-6">
    Access past publications clicking below!
  </p>
          </div>
          <div class="flex justify-center">
            <NuxtLink
              href="/insecta_mundi"
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

const latestPubDate = ref('')
const monthYear = ref('')
const showNewBadge = ref(false)


// Fetch the latest date
onMounted(async () => {
  try {
    const latest = await queryContent('insecta_mundi')
      .where({ date: { $ne: null } })
      .sort({ date: -1 })
      .limit(1)
      .only(['date'])
      .findOne()

    const dateObj = new Date(latest.date)
   latestPubDate.value = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    }).format(dateObj)

    // Set the monthYear after dateObj is defined
    monthYear.value = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })

    // Calculate if within 14 days
    const now = new Date()
    const diffInDays = (now - dateObj) / (1000 * 60 * 60 * 24)
    showNewBadge.value = diffInDays <= 14

  } catch (error) {
    console.error('Failed to load latest publication date:', error)
  }
})
</script>


