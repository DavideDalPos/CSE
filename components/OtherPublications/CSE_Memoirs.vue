<template>
                    <h1 class="text-4xl font-extrabold text-gray-800 mb-2 mt-7">Memoirs</h1>
               <h2 class="text-xl font-medium text-gray-500 -mt-2 mb-4">CSE Publications</h2>
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Left Column: Book Cards -->
        <div class="flex-1 space-y-4">
          <div
            v-for="(book, index) in books"
            :key="index"
            class="bg-gray-100 border border-gray-300 shadow-sm rounded-lg overflow-hidden flex flex-col md:flex-row gap-2 p-3"
          >
            <!-- Left Column (Image) -->
            <div class="flex-shrink-0 bg-secondary/70 p-2 group relative">
              <img
                v-if="book.image"
                :src="book.image"
                alt="Cover image"
                class="max-h-[135px] w-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
                @click="openModal(book.image)"
              />
              <div v-else class="text-gray-400 text-center text-xs">
                No Image Available
              </div>
            </div>
  
            <!-- Right Column (Info) -->
            <div class="flex-1 p-2 space-y-2">
              <!-- Volume -->
              <div class="text-sm text-quaternary font-semibold">
                {{ book.volume }}
              </div>
  
              <!-- Title and Year -->
              <h2 class="text font-medium text-gray-800 break-words">
                <a :href="book.pdf" target="_blank" class="font-bold text-gray-800 hover:text-quinary transition-colors">
                <span v-html="book.title" class="font-bold"></span>
                </a>
                <span class="block text-sm text-gray-500">({{ book.year }})</span>
              </h2>
  
              <!-- Author -->
              <p class="text-sm text-gray-600">
                {{ book.author }}
              </p>
  
              <!-- PDF Download Button -->
              <div
                v-if="book.pdf"
                class="group shadow px-2 py-1 text-xs rounded bg-otenary/80 w-max text-white hover:text-primary flex items-center space-x-1 hover:bg-tertiary transition duration-200 mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="w-4 h-4 text-white group-hover:text-primary transition duration-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                  />
                </svg>
                <a :href="book.pdf" target="_blank">Download PDF</a>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right Column: InsectaMundiRightColumn Component -->
      </div>
  
      <!-- Modal for Enlarged Image -->
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
  </template>
  
  <script setup>
  import { ref } from 'vue';
import CSE_MemoirsData from '~/components/OtherPublications/CSE_MemoirsData.js';
  
  const books = CSE_MemoirsData;
  
  // Modal state
  const isModalOpen = ref(false);
  const modalImage = ref('');
  
  function openModal(imageUrl) {
    modalImage.value = imageUrl;
    isModalOpen.value = true;
  }
  
  function closeModal() {
    isModalOpen.value = false;
    modalImage.value = '';
  }
  </script>
  