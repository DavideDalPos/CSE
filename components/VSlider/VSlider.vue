<template>
  <div class="relative w-full min-h-screen">
    <!-- Banner Block -->
    <div class="absolute top-1/4 left-0 right-0 z-30 flex flex-col items-center text-center 
    bg-secondary/40 backdrop-blur-sm px-6 py-6 shadow-md animate-fade-in rounded-md mx-auto max-w-6xl">
      <!-- Title -->
      <div class="text-white/90 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide whitespace-nowrap">
  Center for Systematic Entomology (CSE)
</div>

      <!-- Subtitle -->
      <div class="mt-3 text-white/80 md:text-xl lg:text-2xl font-light animate-fade-in delay-500">
        Advancing insect systematics
      </div>
    </div>

    <!-- Main Content (Slider) -->
    <div class="relative w-full h-full">
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
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
let interval

const currentSlide = computed(() => [props.slides[currentIndex.value]])

onMounted(() => {
  interval = setInterval(() => {
    if (currentIndex.value < props.slides.length - 1) {
      currentIndex.value++
    } else {
      currentIndex.value = 0
    }
  }, 5000)
})

onBeforeUnmount(() => clearInterval(interval))
</script>

<style>
/* Animation for the title */
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

/* Optional Slider Styling */
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
}

.fade-slide-leave-to {
  transform: translateX(-100%);
}
</style>
