<template>
    <div class="w-full h-full absolute">
      <div class="relative overflow-hidden mx-auto" :style="{ height: imageHeight }">
        <img
          :src="slide.img"
          class="object-contain mx-auto"
          :style="{ maxHeight: imageHeight }"
        />
    
        <div class="absolute w-full h-full bg-black bg-opacity-65 -z-10" />
    
        <!-- Copyright section positioned below the image and centered -->
        <div
          v-if="slide.copyright"
          class="absolute bottom-[5px] left-0 right-0 text-center text-white opacity-75"
        >
          {{ slide.copyright }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    slide: {
      type: Object,
      required: true
    }
  })
  
  // Function to compute the height based on the aspect ratio of the image
  const imageHeight = computed(() => {
    const img = new Image();
    img.src = props.slide.img;
  
    return img.width > img.height ? '60vh' : 'auto'; // Set height based on image aspect ratio
  });
  </script>
  