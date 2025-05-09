<template>
  <div class="relative w-full min-h-screen">
    <!-- Banner Block -->
    <div
  class="absolute top-10 left-0 right-0 z-30 flex flex-col items-center text-center 
  bg-gradient-to-r from-gray-700/60 via-gray-500/60 to-gray-700/60 backdrop-blur-sm 
  px-6 py-6 rounded-md ring-1 ring-white/10 mx-auto max-w-6xl shadow-xl shadow-black/40 animate-fade-in"
>
  <!-- Title -->
  <div
    class="text-quaternary text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide whitespace-nowrap"
  >
    Center for Systematic Entomology (CSE)
  </div>

  <!-- Subtitle -->
  <div class="mt-3 text-secondary md:text-xl lg:text-2xl font-light animate-fade-in delay-500">
    Advancing Insect Systematics
  </div>
</div>


    <!-- Main Content (Slider) -->
    <div class="relative w-full h-[95%]">
      <TransitionGroup
        name="fade-slide"
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
      <div class="absolute inset-y-1/2 w-full flex justify-between items-center px-4 z-40">
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
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
let interval

const currentSlide = computed(() => [props.slides[currentIndex.value]])

const nextSlide = () => {
  currentIndex.value =
    currentIndex.value < props.slides.length - 1 ? currentIndex.value + 1 : 0
  resetInterval()
}

const prevSlide = () => {
  currentIndex.value =
    currentIndex.value > 0 ? currentIndex.value - 1 : props.slides.length - 1
  resetInterval()
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetInterval()
}

const resetInterval = () => {
  clearInterval(interval)
  interval = setInterval(() => {
    nextSlide()
  }, 5000)
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
.slide {
  position: absolute;
  width: 100%;
  height: 100%;
}

.fade-slide-enter-active {
  transition: transform 2s ease-in-out, opacity 2s ease-in-out;
}

.fade-slide-leave-active {
  transition: transform 2s ease-in-out, opacity 2s ease-in-out;
  position: absolute;
}

.fade-slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.fade-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
