<template>
  <section id="posterarchive" class="container mx-auto px-12 py-10 font-serif">
    <div>
      <h1 class="text-4xl font-extrabold text-gray-800 mb-2">Poster</h1>
      <h2 class="text-xl font-medium text-gray-500 -mt-2">Archive</h2>
    </div>

    <!-- Per-Year Poster Layout -->
    <div class="space-y-5 mt-3">
      <div v-for="[year, yearPosters] in groupedPosters" :key="`year-${year}`">
        <!-- Year Heading with toggle -->
        <div
          class="flex items-center gap-2 cursor-pointer py-2"
          @click="toggleYear(year)"
        >
          <h2
            class="text-4xl font-semibold text-otenary"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1)"
          >
            {{ year }}
          </h2>
          <svg
            :class="[ 'w-6 h-6 transition-transform duration-300 text-otenary', openYears[year] ? 'rotate-180' : 'rotate-0' ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>

        <!-- Grid layout for posters within this year (toggleable) -->
        <transition name="fade" mode="out-in">
          <div
            v-show="openYears[year]"
            class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div
              v-for="poster in yearPosters"
              :key="poster.title"
              class="bg-foreground p-6 rounded-xl shadow-xl border border-gray-300 hover:shadow-2xl transition-all duration-300"
            >
              <div class="flex items-start gap-6">
                <!-- Text content -->
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <a
                      :href="poster.pdf"
                      target="_blank"
                      class="text-otenary hover:underline text-sm hover:text-yellow-600"
                    >
                      <h3 class="font-medium">{{ poster.title }}</h3>
                    </a>
                  </div>

                  <p class="text-xs text-gray-600">{{ poster.authors }}</p>

                  <span
                    v-if="poster.award"
                    class="inline-block mt-2 bg-yellow-400 py-1 px-3 rounded-md font-semibold text-xs"
                  >
                    {{ poster.award }}
                  </span>
                </div>
              </div>

              <!-- Horizontal Line -->
              <div class="border-t border-gray-300 my-4"></div>

              <!-- Thumbnail and download -->
              <div class="mt-4 flex items-center gap-6">
                <div
                  v-if="poster.pdf"
                  class="group shadow px-2 py-1 text-xs rounded bg-novenary/80 w-max text-white hover:text-primary flex items-center space-x-1 hover:bg-tertiary transition duration-200 mt-1"
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
                  loading="lazy"
                  v-if="poster.image"
                  :src="poster.image"
                  alt="Poster thumbnail"
                  @mousedown="startPan"
                  @mousemove="panImage"
                  @mouseup="endPan"
                  @mouseleave="endPan"
                  @wheel.prevent="zoomImage"
                  class="w-32 h-22 object-cover rounded-md cursor-pointer transform hover:scale-110 transition duration-300 ml-auto"
                  @click="openModal(poster.fullImage || poster.image)"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/80 bg-opacity-75 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <img
        :src="modalImage"
        alt="Enlarged Poster"
        class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-300"
        :style="zoomStyle"
        @mousedown="startPan"
        @mousemove="panImage"
        @mouseup="endPan"
        @mouseleave="endPan"
        @wheel.prevent="zoomImage"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  posters: {
    type: Array,
    default: () => []
  }
})

const sortedPosters = computed(() => {
  return props.posters.sort((a, b) => b.year - a.year)
})

const groupedPosters = computed(() => {
  const groups = {}
  sortedPosters.value.forEach((poster) => {
    if (!groups[poster.year]) {
      groups[poster.year] = []
    }
    groups[poster.year].push(poster)
  })

  Object.keys(groups).forEach((year) => {
    groups[year].sort((a, b) => a.title.localeCompare(b.title))
  })

  return Object.entries(groups).sort((a, b) => b[0] - a[0])
})

// Modal handling
const showModal = ref(false)
const modalImage = ref(null)
const zoomLevel = ref(1)
const offset = ref({ x: 0, y: 0 })
const isPanning = ref(false)
const start = ref({ x: 0, y: 0 })

const zoomStyle = computed(() => {
  return `transform: scale(${zoomLevel.value}) translate(${offset.value.x}px, ${offset.value.y}px);`
})

const openModal = (image) => {
  modalImage.value = image
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  modalImage.value = null
  zoomLevel.value = 1
  offset.value = { x: 0, y: 0 }
}

// Zoom and pan logic for modal image
const startPan = (e) => {
  isPanning.value = true
  start.value = { x: e.clientX, y: e.clientY }
}

const panImage = (e) => {
  if (!isPanning.value) return
  offset.value.x += (e.clientX - start.value.x) / zoomLevel.value
  offset.value.y += (e.clientY - start.value.y) / zoomLevel.value
  start.value = { x: e.clientX, y: e.clientY }
}

const endPan = () => {
  isPanning.value = false
}

const zoomImage = (e) => {
  const delta = -e.deltaY * 0.001
  const newZoom = Math.min(Math.max(zoomLevel.value + delta, 1), 5)
  zoomLevel.value = newZoom
}

// Toggle per year
const openYears = ref({})

onMounted(() => {
  groupedPosters.value.forEach(([year]) => {
    openYears.value[year] = false // set to false if you want them collapsed by default
  })
})

const toggleYear = (year) => {
  openYears.value[year] = !openYears.value[year]
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
