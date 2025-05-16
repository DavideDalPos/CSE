<template>
  <div class="relative w-full min-h-screen">
    <!-- Banner Block -->
<div
  class="absolute top-10 left-0 right-0 z-30 flex flex-col items-center text-center 
  bg-gradient-to-r from-gray-700/60 via-gray-500/60 to-gray-700/60 backdrop-blur-sm 
  px-4 sm:px-4 md:px-8 lg:px-10 py-4 sm:py-6 rounded-md ring-1 ring-white/10 
  mx-auto w-[90%] sm:w-fit shadow-xl shadow-black/40 animate-fade-in"
>
  <!-- Title -->
  <div
    class="font-serif text-quaternary text-xl sm:text-lg md:text-2xl lg:text-3xl xl:text-6xl font-semibold 
    tracking-wide whitespace-nowrap"
  >
    Center for Systematic Entomology (CSE)
  </div>

  <!-- Subtitle -->
  <div class="mt-3 text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light animate-fade-in delay-500">
    Advancing Insect Systematics
  </div>
</div>


    <!-- Main Content (Slider) -->
    <div class="relative w-full h-[95%]">
      <TransitionGroup
        :name="direction === 'next' ? 'fade-slide-next' : 'fade-slide-prev'"
        tag="div"
        class="relative flex flex-row w-full h-full"
      >
        <VSliderSlide
          v-for="slide in currentSlide"
          :key="currentIndex"
          :slide="slide"
        />
      </TransitionGroup>

      <!-- Navigation Arrows -->
      <div class="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 z-40 -translate-y-1/2">
        <button
          @click="prevSlide"
          class="text-white bg-primary/30 hover:bg-primary/50 rounded-full p-3 text-3xl transition"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          @click="nextSlide"
          class="text-white bg-primary/30 hover:bg-primary/50 rounded-full p-3 text-3xl transition"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <!-- Dots Navigation -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex gap-3">
        <button
          v-for="(slide, index) in props.slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-2 h-2 rounded-full transition-colors duration-300"
          :class="currentIndex === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'"
          aria-label="Go to slide"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
const direction = ref('next') // 'next' or 'prev'
let interval

const currentSlide = computed(() => [props.slides[currentIndex.value]])

const nextSlide = () => {
  direction.value = 'next'
  currentIndex.value =
    currentIndex.value < props.slides.length - 1 ? currentIndex.value + 1 : 0
  resetInterval()
}

const prevSlide = () => {
  direction.value = 'prev'
  currentIndex.value =
    currentIndex.value > 0 ? currentIndex.value - 1 : props.slides.length - 1
  resetInterval()
}

const goToSlide = (index) => {
  // Determine direction based on index relative to currentIndex
  direction.value = index > currentIndex.value ? 'next' : 'prev'
  currentIndex.value = index
  resetInterval()
}

const resetInterval = () => {
  clearInterval(interval)
  interval = setInterval(() => {
    nextSlide()
  }, 6500)
}

onMounted(() => {
  resetInterval()
})

onBeforeUnmount(() => clearInterval(interval))
</script>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1.5s ease-out forwards;
}

/* Slider Transitions */

/* Next (right arrow) */
.fade-slide-next-enter-active,
.fade-slide-next-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
}

.fade-slide-next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.fade-slide-next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Prev (left arrow) */
.fade-slide-prev-enter-active,
.fade-slide-prev-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
}

.fade-slide-prev-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.fade-slide-prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
