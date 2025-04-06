<template>
  <div class="my-8">
    <div class="flex flex-col gap-3 w-full max-w-2xl">
      <div
        v-for="meeting in meetings"
        :key="meeting.year"
        class="bg-white p-5 rounded-lg flex flex-col justify-between items-start shadow-lg"
      >
      
      <div class="flex justify-between items-center w-full">
        <h3>{{ meeting.year }} - {{ meeting.title }}</h3>
        <span v-if="meeting.isNew" class="bg-red-600 text-white py-1 px-2 text-xs rounded-md">NEW</span>
      </div>

      <div class="flex items-center gap-4 mt-2">
        <!-- First PDF Link with Icon -->
        <a :href="meeting.pdfLink" target="_blank" class="flex items-center text-blue-600 hover:underline">
          <img src="/images/PDF_file_icon.svg" alt="PDF" class="w-5 h-5 mr-2" />
          <span>Program</span>
        </a>

        <!-- Second PDF Link with Icon -->
        <a v-if="meeting.secondPdfLink" :href="meeting.secondPdfLink" target="_blank" class="flex items-center text-blue-600 hover:underline">
          <img src="/images/PDF_file_icon.svg" alt="PDF" class="w-5 h-5 mr-2" />
          <span>Images</span>
        </a>

        <!-- YouTube Link -->
        <a v-if="meeting.link" :href="meeting.link" target="_blank" class="flex items-center text-blue-600 hover:underline">
          <img src="/images/youtube_icon_real.png" alt="YouTube" class="w-5 h-4 mr-2" />
          <span>Video</span>
        </a>
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
