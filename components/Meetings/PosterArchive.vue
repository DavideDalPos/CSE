<template>
  <section id="posterarchive" class="container mx-auto px-12 py-16 font-serif">
    <div class="my-8">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">Poster Archive</h1>
      <MeetingArchive :meetings="meetings" />
    </div>

    <!-- Grid layout for years -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Loop through each grouped year -->
      <div
        v-for="([year, yearPosters]) in groupedPosters"
        :key="`year-${year}`"
        class="mb-8"
      >
        <!-- Year Title -->
        <h2 class="text-4xl font-semibold text-center text-yellow-600 py-2 mb-4" style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">{{ year }}</h2>

        <!-- Poster List for the Year -->
        <div
          v-for="poster in yearPosters"
          :key="poster.title"
          class="bg-white p-6 rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
        >
          <div class="flex items-start gap-6">
            <!-- Text content -->
            <div class="flex-1">
              <div class="flex items-center justify-between mb-2">
                <a
                  :href="poster.pdf"
                  target="_blank"
                  class="text-gray-800 hover:underline hover:text-yellow-600"
                >
                  <h3 class="text-xl font-medium">{{ poster.title }}</h3>
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

          <!-- Horizontal Line Between Image and Text -->
          <div class="border-t border-gray-300 my-4"></div>

          <!-- Thumbnail image below the text content -->
          <div class="mt-4 flex items-center gap-6">

            <!-- Download Poster Button -->
              <div
                v-if="poster.pdf"
                class="group shadow px-2 py-1 text-xs rounded bg-primary/80 w-max text-white hover:text-primary flex items-center space-x-1 hover:bg-tertiary transition duration-200 mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="w-4 h-4 text-white group-hover:text-primary transition duration-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                  />
                </svg>
                <a :href="poster.pdf" target="_blank">Download PDF</a>
              </div>
 <img
              v-if="poster.image"
              :src="poster.image"
              alt="Poster thumbnail"
              class="w-52 h-32 object-cover rounded-md cursor-pointer transform hover:scale-110 transition duration-300 ml-auto"
              @click="openModal(poster.image)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <img
        :src="modalImage"
        alt="Enlarged Poster"
        class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-300"
      />
    </div>
  </section>
</template>


<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  posters: Array
});

const sortedPosters = computed(() => {
  return props.posters.sort((a, b) => b.year - a.year);
});

const groupedPosters = computed(() => {
  const groups = {};
  sortedPosters.value.forEach((poster) => {
    if (!groups[poster.year]) {
      groups[poster.year] = [];
    }
    groups[poster.year].push(poster);
  });

  Object.keys(groups).forEach((year) => {
    groups[year].sort((a, b) => a.title.localeCompare(b.title));
  });

  return Object.entries(groups).sort((a, b) => b[0] - a[0]);
});

const showModal = ref(false);
const modalImage = ref(null);

const openModal = (image) => {
  modalImage.value = image;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  modalImage.value = null;
};
</script>
