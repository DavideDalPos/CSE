<template>
  <div class="flex flex-col gap-3 my-8">
    <div v-for="poster in posters" :key="poster.authors" class="bg-white p-3 rounded-lg flex justify-between items-center shadow-lg">
      <a :href="poster.pdf" target="_blank" class="flex items-center text-gray-800">
        <img src="/images/PDF_file_icon.svg" alt="PDF" class="w-5 h-5 mr-2" />
        <span>{{ poster.authors }}</span>
      </a>
      <span v-if="poster.award" class="bg-yellow-400 py-1 px-3 rounded-md font-semibold">{{ poster.award }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posters']
};
</script>
