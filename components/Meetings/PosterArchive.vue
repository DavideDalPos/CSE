<template>
  <section id="posterarchive" class="container mx-auto px-12 py-11">
    <div class="my-8">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-8">Poster Archive</h1>
      <MeetingArchive :meetings="meetings" />
    </div>

    <!-- Grid layout for years -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Loop through each grouped year -->
      <div
        v-for="([year, yearPosters]) in groupedPosters"
        :key="`year-${year}`"
        class="mb-8"
      >
        <!-- Year Title -->
        <h2 class="text-3xl font-bold py-2 text-center text-yellow-600" style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">{{ year }}</h2>




        <!-- Poster List for the Year -->
        <div class="flex flex-col gap-3">
          <div
            v-for="poster in yearPosters"
            :key="poster.title"
             class="bg-secondary p-4 rounded-lg shadow-md border border-primary"
          >
            <div class="flex items-center justify-between mb-2">
              <a
                :href="poster.pdf"
                target="_blank"
                class="text-gray-800 hover:underline hover:text-yellow-600"
              >
                <h3 class="text-xl">{{ poster.title }}</h3>
              </a>
              <!-- Replace the PDF image with the SVG link -->
              <a
                :href="poster.pdf"
                target="_blank"
                class="internal-link flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 24 24" 
                     fill="none" 
                     stroke="currentColor" 
                     class="w-6 h-6 text-yellow-800 hover:text-quaternary transition duration-200">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                </svg>
              </a>
            </div>
            <p class="text-sm text-yellow-800">{{ poster.authors }}</p>
            <span
              v-if="poster.award"
              class="inline-block mt-2 bg-yellow-400 py-1 px-3 rounded-md font-semibold text-xs"
            >
              {{ poster.award }}
            </span>
          </div>
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
    if (!groups[poster.year]) {
      groups[poster.year] = [];
    }
    groups[poster.year].push(poster);
  });

  // Sort each year's posters alphabetically by title
  Object.keys(groups).forEach((year) => {
    groups[year].sort((a, b) => a.title.localeCompare(b.title));
  });

  // Convert to array and sort by year descending
  return Object.entries(groups).sort((a, b) => b[0] - a[0]);
});


</script>

<style scoped>
/* Styling for the Archive Section */
</style>
