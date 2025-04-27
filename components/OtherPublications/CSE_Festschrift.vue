<template>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
        <div
          v-for="(book, index) in books"
          :key="index"
          class="rounded-xl bg-gray-200 shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center group"
        >
          <div @click="openModal(book.image)" class="w-full cursor-pointer overflow-hidden rounded-lg">
            <img
              v-if="book.image"
              :src="book.image"
              alt="Cover"
              class="w-full h-52 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div v-else class="h-52 flex items-center justify-center text-gray-400 text-sm bg-gray-100 rounded-lg">
              No Image
            </div>
          </div>
  
          <div class="mt-6 space-y-2">
                <h2 class="text-lg font-semibold text-gray-800 leading-tight">
                    <a
                        v-if="book.link"
                        :href="book.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:underline hover:text-senary transition-colors"
                        v-html="book.title"
                    ></a>
                    <span v-else v-html="book.title"></span>
                </h2>
                <p class="text-sm text-gray-500">{{ book.year }}</p>
          </div>
  
          <div v-if="book.pdf" class="mt-3">
            <a
              :href="book.pdf"
              target="_blank"
              class="inline-block text-[12px] bg-primary text-white rounded-full px-5 py-2 hover:bg-tertiary/80 hover:text-primary transition"
            >
              Cover & Table of Contents
            </a>
          </div>
          <div v-if="book.link" class="mt-1">
            <a
              :href="book.linf"
              target="_blank"
              class="inline-block text-[12px] bg-quinary text-white rounded-full px-5 py-2 hover:bg-tertiary/80 hover:text-primary transition"
            >
              See Full Festschrift
            </a>
          </div>
        </div>
      </div>
  
      <!-- Modal for image preview -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
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
            alt="Enlarged"
            class="max-w-[90vw] max-h-[90vh] object-contain rounded-md"
          />
        </div>
      </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import CSE_Festchrift from './CSE_Festchrift';
  
  const books = CSE_Festchrift;
  
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
  