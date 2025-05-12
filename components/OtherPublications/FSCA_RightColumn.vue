<script setup lang="ts">
import CSE_PapersButton from './CSE_PapersButton.vue';
import InsectaMundiButton from './InsectaMundiButton.vue';
import InsectaMundiButtonNew from './InsectaMundiButtonNew.vue';

</script>

<template>
  <div class="w-full lg:w-[300px] shrink-0 bg-white p-4 ">
    <!-- Section Title -->
    <div class="mb-4">
                <h2 class="text-xl text-center font-semibold text-gray-700 dark:text-gray-200">Explore Our Publications</h2>
        <p class="text-center text-gray-500 dark:text-gray-400 mt-2">
  Click the buttons below to browse our latest work
</p>

    </div>
      <InsectaMundiButton />
      <InsectaMundiButtonNew />
      <CSE_PapersButton />
    </div>
  </template>