<template>
  <!-- Clickable Title Section -->
  <div @click="toggleList" class="cursor-pointer group mb-2 mt-7">
    <h1 class="text-4xl font-extrabold text-gray-800" >
      Arthropods of Florida and Neighboring Land Areas
      <!-- Small Arrow Icon -->
      <span
        :class="{'transform rotate-180': showList}"
        class="ml-2 inline-block text-xl transition-transform duration-300"
      >
        &#8593; <!-- Up Arrow (^) -->
      </span>
    </h1>
    <h2 class="text-sm font-medium text-gray-500 -mt-2 mb-4">(ISSN 0066-8036)</h2>
  </div>
  
  <transition name="fade">
    <div v-if="showList" class="flex flex-col md:flex-row gap-4 mt-4">
      <!-- Left Column: Book Cards -->
      <div class="flex-1 space-y-4">
        <div
          v-for="(book, index) in books"
          :key="index"
          class="bg-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col md:flex-row gap-2 p-3"
        >
          <!-- Image Section -->
          <div class="flex-shrink-0 bg-secondary/70 p-2 group relative">
            <img
              v-if="book.image"
              :src="book.image"
              alt="Cover image"
              class="max-h-[145px] w-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
              @click="openModal(book.image)"
            />
            <div v-else class="text-gray-400 text-center text-xs">
              No Image Available
            </div>
          </div>

          <!-- Info Section -->
          <div class="flex-1 p-2 space-y-2">
            <!-- Volume -->
            <div class="text-sm text-senary font-semibold">
              Volume {{ book.volume }}
            </div>

            <!-- Title & Year -->
<h2 class="text-sm text-gray-800 break-words">
<NuxtLink
  :to="book._path"
  class="font-bold text-gray-800 hover:text-quinary transition-colors"
>

    <span v-html="book.title" class="font-bold"></span>
  </NuxtLink>
  <span class="block text-sm text-gray-500">
    ({{ book.year }})
  </span>
</h2>


            <!-- Author -->
<p class="text-sm text-gray-600">
  {{ formatAuthor(book.authors) }}
</p>

<p class="text-sm">
  <span class="text-gray-600">DOI: </span>
  <a
    :href="normalizedDoi(book.doi)"
    class="text-novenary hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ book.doi }}
  </a>
</p>




            <!-- PDF Buttons -->
            <div class="flex space-x-2">
              <!-- Regular PDF -->
              <div
                v-if="book.pdf"
                class="group shadow px-2 py-1 text-xs rounded bg-primary/80 w-max text-white hover:text-primary flex items-center space-x-1 hover:bg-tertiary transition duration-200"
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
                <a :href="book.pdf" target="_blank">Download PDF</a>
              </div>

              <!-- High Res PDF -->
              <div
                v-if="book.pdfhigh"
                class="group shadow px-2 py-1 text-xs rounded bg-primary/80 w-max text-white hover:text-primary flex items-center space-x-1 hover:bg-tertiary transition duration-200"
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
                <a :href="book.pdfhigh" target="_blank">High Res PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <!-- Modal for Enlarged Image -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
    @click.self="closeModal"
  >
    <div class="relative">
      <button class="absolute top-2 right-2 text-white text-3xl" @click="closeModal">&times;</button>
      <img
        :src="modalImage"
        alt="Enlarged Cover"
        class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-300"
      />
    </div>
  </div>
</template>



<script setup>
import { computed, ref } from 'vue'

const showList = ref(false)
const isModalOpen = ref(false)
const modalImage = ref('')

function toggleList() {
  showList.value = !showList.value
}

function openModal(imageUrl) {
  modalImage.value = imageUrl
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  modalImage.value = ''
}

/* 🔑 Nuxt Content query */
const { data } = await useAsyncData('fsca-arhtropod', () =>
  queryContent('arthropod_papers')
    .find()
)



function getInitials(name) {
  if (!name) return ''
  return name
    .split(' ')
    .map(n => n[0] + '.')
    .join(' ')
}

function formatAuthor(authors) {
  if (!authors || !Array.isArray(authors)) return ''
  return authors
    .map(a => `${a.last_name}, ${getInitials(a.first_name)}`)
    .join('; ')
}

function normalizedDoi(doi) {
  if (!doi) return ""
  const clean = doi.replace(/^doi:\s*/i, "").trim()
  return clean.startsWith("http://") || clean.startsWith("https://")
    ? clean
    : `https://doi.org/${clean}`
}

/* 🔑 Keep the SAME variable name your template expects */
const books = computed(() => {
  return (data.value || []).sort((a, b) => {
    // Sort by year descending
    const yearA = a.year || 0
    const yearB = b.year || 0
    if (yearB !== yearA) return yearB - yearA

    // Sort by volume descending (convert to number)
    const volA = Number(a.volume) || 0
    const volB = Number(b.volume) || 0
    return volB - volA
  })
})
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
