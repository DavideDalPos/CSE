<template>
  <section class="relative w-full h-[50vh] flex items-center justify-center">
    <div
      :class="['absolute inset-0 bg-cover bg-center bg-no-repeat']"
      :style="{ backgroundImage: `url(${imageSrc})` }"
    >
      <div class="absolute inset-0 bg-black/55"></div>

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
    default: ''
  }
})
</script>
