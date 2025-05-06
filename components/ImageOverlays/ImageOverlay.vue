<template>
  <section class="relative w-full h-[70vh] flex items-center justify-center">
    <div
      :class="['absolute inset-0 bg-cover bg-center bg-no-repeat']"
      :style="{ backgroundImage: `url(${imageSrc})` }"
    >
      <div class="absolute inset-0 bg-black/55"></div>

      <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide">
          {{ overlayTitle }}
        </h1>
        <p class="mt-2 text-lg md:text-xl max-w-xl text-white/90">
          {{ description }}
        </p>
      </div>
      <div
        v-if="copyright"
        class="bottom-4 right-4 text-white absolute opacity-75 z-10"
      >
        {{ copyright }}
      </div>
    </div>
  </section>
</template>


<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  overlayTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  copyright: {
    type: String,
    required: true
  }
})
</script>

