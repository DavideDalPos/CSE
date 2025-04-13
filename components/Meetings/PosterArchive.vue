<template>
    <section class="container mx-auto px-12 py-11">
     <div class= "my-8">
        <h1 class="text-4xl"> Meeting Archive</h1>
        <MeetingArchive :meetings="meetings" />
      </div>
    <!-- Loop through each grouped year -->
    <div v-for="(yearPosters, year) in groupedPosters" :key="`year-${year}`" class="mb-8">
      <!-- Year Title -->
      <h2 class="text-2xl font-bold py-2">{{ year }}</h2>

      <!-- Poster List for the Year -->
      <div class="flex flex-col gap-4">
        <div
          v-for="poster in yearPosters"
          :key="`${year}-${poster.title}`"
          class="bg-white p-4 rounded-lg shadow-md"
        >
          <a
            :href="poster.pdf"
            target="_blank"
            class="flex items-center gap-2 mb-2 text-red-700 hover:underline"
          >
            <img src="/images/PDF_file_icon.svg" alt="PDF" class="w-5 h-5" />
            <h3 class="text-md font-semibold">{{ poster.title }}</h3>
          </a>
          <p class="text-sm text-gray-700">{{ poster.authors }}</p>
          <span
            v-if="poster.award"
            class="inline-block mt-2 bg-yellow-400 py-1 px-3 rounded-md font-semibold text-xs"
          >
            {{ poster.award }}
          </span>
        </div>
      </div>
    </div>
</section>
</template>

<script setup>
// Importing computed from Vue to handle reactive data
import { computed } from 'vue';

// Receiving props from the parent (which should pass the posters data)
const props = defineProps({
  posters: Array
});

// Compute the sorted posters first
const sortedPosters = computed(() => {
  return props.posters.sort((a, b) => b.year - a.year); // Sorting by year in descending order
});

// Now group posters by year
const groupedPosters = computed(() => {
  const groups = {};
  sortedPosters.value.forEach((poster) => {
    // Group posters by year
    if (!groups[poster.year]) {
      groups[poster.year] = [];
    }
    groups[poster.year].push(poster);
  });

  return groups;
});
</script>

<style scoped>
/* Styling for the Archive Section */
.archive-section {
  margin-bottom: 80px;
}

.poster-card {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
