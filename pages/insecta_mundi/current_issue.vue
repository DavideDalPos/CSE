<template>
  <section class="container mx-auto px-8 my-10 font-serif">
    <div>
      <h1 class="text-4xl font-bold text-gray-800">Insecta Mundi</h1>
      <h2 class="text-xl text-gray-500 mt-1 tracking-wide italic">
        Current Publications
      </h2>
    </div>
    <div class="mt-2 text-sm text-gray-400 italic mb-10">
      paper ISSN 0749-6737 · CD-ROM 1942-1362 · online 1942-1354
    </div>
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- LEFT COLUMN: Publications -->
      <div>
        <div
          class="flex items-center justify-between px-4 py-3 bg-quaternary/20 border-l-4 border-quaternary/80 cursor-pointer"
        >
          <h2 class="text-lg text-gray-800 font-medium">
            {{ formattedDate }}
          </h2>
        </div>

        <!-- Table Component or List -->
        <TablePublicationCurrent
          :list="publications"
          class="my-2"
        />

        <!-- Fallback message -->
        <div class="px-4">
          <p v-if="publications.length === 0">No articles found.</p>
        </div>
      </div>
      <div class="hidden lg:block w-[1px] bg-gray-300 self-stretch"></div>
      <!-- RIGHT COLUMN -->
      <InsectaMundiRightColumn />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import InsectaMundiRightColumn from '~/components/InsectaMundi/InsectaMundiRightColumn.vue'
import TablePublicationCurrent from '~/components/Table/TablePublicationCurrent.vue'

const formattedDate = ref('')
const publications = ref([])

onMounted(async () => {
  const latestPublication = await queryContent('insecta_mundi')
    .where({ date: { $ne: null } })
    .sort({ date: -1 })
    .limit(1)
    .only(['date'])
    .findOne()

  if (latestPublication?.date) {
    const dateObj = new Date(latestPublication.date)
    formattedDate.value = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const yearAndMonth = latestPublication.date.slice(
      0,
      latestPublication.date.lastIndexOf('-')
    )

    const response = await queryContent('insecta_mundi')
      .where({
        date: {
          $contains: yearAndMonth
        }
      })
      .find()

    publications.value = response
  }
})
</script>
