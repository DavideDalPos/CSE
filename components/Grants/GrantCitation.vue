<template>
    <section class="container mx-auto px-8 py-10 -mt-7 text-justify font-serif">
    <div class="flex justify-center">
      <button
        @click="showCitations = !showCitations"
        class="px-6 py-2 bg-setenary text-white rounded hover:bg-quaternary transition shadow-lg disabled:opacity-30 flex items-center space-x-2"
      >
        {{ showCitations ? 'Hide citations' : 'Publications output from the Peck Fund' }}
      </button>
      </div>
  
      <transition name="fade">
        <div
          v-if="showCitations"
          class="mt-6 bg-white border border-gray-300 rounded-lg p-6 space-y-4 shadow-md"
        >
          <!-- Iterate over citations data -->
          <div
            v-for="(citation, index) in citations"
            :key="index"
            class="text-sm leading-relaxed text-gray-800"
          >
            <span v-html="citation.text" />
            <a
              :href="citation.doi"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:underline transition ml-1" 
            >
              {{ citation.doi }}
            </a>
          </div>
        </div>
      </transition>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import GrantCitationData from '~/components/Grants/GrantCitationData.js';
  
  const citations = GrantCitationData;
  const showCitations = ref(false);
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  