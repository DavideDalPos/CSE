<template>
    <TransitionGroup
      name="fade-slide"
      tag="div"
      class="relative flex flex-row"
    >
      <VSliderSlideMini
        v-for="slide in currentSlide"
        :key="currentIndex"
        :slide="slide"
      />
    </TransitionGroup>
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
  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .fade-slide-enter-active {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }
  
  .fade-slide-leave-active {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    position: absolute;
  }
  
  .fade-slide-enter-from {
    transform: translateX(100%);
  }
  
  .fade-slide-leave-to {
    transform: translateX(-100%);
  }
  </style>
  