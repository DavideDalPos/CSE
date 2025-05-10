<template>
  <div class="my-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full font-serif">
      <div
        v-for="meeting in meetings"
        :key="meeting.year"
        class="bg-foreground p-5 rounded-lg flex flex-col justify-between items-start shadow-lg hover:shadow-lg transition-shadow border border-gray-400"
      >
        <!-- Title Section -->
        <div class="flex justify-between items-center w-full mb-3">
          <a :href="meeting.pdfLink" target="_blank">
            <h3 class="text-lg text-bold text-primary hover:text-yellow-700 hover:underline text-center transition-colors duration-200">
                {{ meeting.year }} - {{ meeting.title }}
            </h3>
          </a>
          <span v-if="meeting.isNew" class="bg-quaternary text-white py-1 px-2 text-xs rounded-md">NEW</span>
        </div>

        <!-- Links Section with Flexbox for horizontal alignment -->
        <div class="flex flex-wrap gap-2 -mt-2">
          <!-- First PDF Link with Icon -->
          <div v-if="meeting.pdfLink" class="flex items-center gap-1 text-sm">
            <a :href="meeting.pdfLink" target="_blank" class="internal-link flex items-center gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="currentColor" 
         class="w-6 h-6 text-yellow-900 hover:text-yellow-600 transition duration-200">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
    </svg>
  </a>
</div>
          <!-- Second PDF Link with Icon -->
          <div v-if="meeting.secondPdfLink" class="flex items-center gap-1 text-sm">
            
            <a :href="meeting.secondPdfLink" target="_blank" class="internal-link">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-900 hover:text-yellow-600 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h4l1-2h8l1 2h4v12H3V7z" />
              <circle cx="12" cy="13" r="3" stroke="currentColor" stroke-width="2" fill="none" />
              </svg>
            </a>
          </div>

          <!-- YouTube Link -->
          <div v-if="meeting.link" class="flex items-center gap-1 text-sm">
            <a :href="meeting.link" target="_blank" class="internal-link flex items-center gap-1">
  <svg xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 24 24" 
       fill="none" 
       stroke="currentColor" 
       class="w-6 h-6 text-yellow-900 hover:text-yellow-600 transition duration-200">
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
    <polygon points="10,8 16,12 10,16" fill="currentColor"/>
  </svg>
</a>

</div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['meetings']
};
</script>

<style scoped>
/* Ensure the internal links look nice */

/* Optionally, adjust the layout */
.flex-wrap {
  flex-wrap: wrap;
}
</style>
