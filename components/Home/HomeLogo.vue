<template>
    <div class="w-full lg:w-[400px] shrink-0">
      <!-- Thumbnail Image -->
      <img
        :src="modalImage"
        alt="CSE Logo"
        class="rounded shadow-md w-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
        @click="isModalOpen = true"
      />
  
      <!-- Modal -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        @click.self="closeModal"
      >
        <div class="relative">
          <button
            class="absolute top-2 right-2 text-white text-3xl"
            @click="closeModal"
          >
            &times;
          </button>
          <img
            :src="modalImage"
            alt="Enlarged Cover"
            class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const isModalOpen = ref(false);
  const modalImage = ref('/images/Logo_CSE.png');
  
  // Ensure the image loads on page mount
  onMounted(() => {
    modalImage.value = '/images/Logo_CSE.png';
  });
  
  function closeModal() {
    isModalOpen.value = false;
  }
  </script>
  