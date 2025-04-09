<template>
    <div class="container mx-auto px-8 my-10">
      <div class="flex items-center justify-center">
        <!-- Connector Line -->
        <div class="flex-1 h-1 bg-gray-300"></div>
        <!-- Timeline Items -->
        <div class="flex items-center space-x-8">
          <div v-for="(item, index) in checklistItems" :key="item.id" class="flex flex-col items-center">
            <!-- Number -->
            <div class="w-8 h-8 bg-red-500 text-white font-semibold rounded flex items-center justify-center">
              {{ index + 1 }}
            </div>
            <!-- Text -->
            <div class="text-sm text-gray-800 border mt-2">{{ item.text }}</div>
          </div>
        </div>
        <!-- Connector Line -->
        <div class="flex-1 h-1 bg-gray-300"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        checklistItems: [
          { id: 1, text: 'Manuscript and associated appendices or other files.' },
          { id: 2, text: 'Images arranged into plates, each plate submitted as a separate TIF, JPG, or PDF file.' },
          { id: 3, text: 'Copies of two critical reviews, showing reviewer comments.' },
          { id: 4, text: 'Copies of Reviewer Report forms, one for each reviewer in addition to the manuscript with comments.' },
          { id: 5, text: 'Copy of the signed Submission Contract, attesting that the manuscript is ready to go.' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Additional styling can be added here if necessary */
  </style>
  