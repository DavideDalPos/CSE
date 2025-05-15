<template>
<section class="w-full h-[70vh] flex items-center justify-center overflow-hidden">



    <div
      class="relative overflow-hidden mx-auto "
      :style="{ height: imageHeight }"
    >
      <img
        :src="slide.img"
        class="object-contain mx-auto max-h-[250px] border"
        :style="{ maxHeight: imageHeight }"
      />

      </div>
</section>
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
  const img = new Image()
  img.src = props.slide.img

  return img.width > img.height ? '60vh' : 'auto' // Set height based on image aspect ratio
})
</script>
