<script setup lang="ts">
import newsletterData from './CSE_NewsLetterData.js'; // Importing the data
</script>

<template>
    <h2 class= "text-3xl font-semibold text-senary leading-relaxed max-w-3xl mb-4 mt-10">CSE Newsletters</h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      <!-- Loop through each newsletter entry and display it -->
      <div
        v-for="(newsletter, index) in newsletterData"
        :key="index"
        class="bg-gray-100 border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-102"
      >
        <h3 class="text-lg font-semibold text-quaternary mb-1">{{ newsletter.title }}</h3>
        
        <!-- PDF link with refined style -->
        <div class="mt-1">
          <a
            :href="newsletter.pdf"
            target="_blank"
            class="inline-block text-[12px] bg-primary text-white rounded px-3 py-1 hover:bg-tertiary/80 hover:text-primary transition shadow shadow-lg"
          >
            View PDF
          </a>
        </div>
      </div>
    </div>

</template>