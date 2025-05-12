<script setup lang="ts">
import FSCA_ArthropodsButton from './FSCA_ArthropodsButton.vue';
import FSCA_OccasionalButton from './FSCA_OccasionalButton.vue';
import InsectaMundiButton from './InsectaMundiButton.vue';
import InsectaMundiButtonNew from './InsectaMundiButtonNew.vue';

</script>

<template>
  <div class="w-full lg:w-[300px] shrink-0 p-4 ">
    <!-- Section Title -->
    <div class="mb-4">
        <h2 class="text-xl text-center font-semibold text-gray-700 dark:text-gray-200">Explore Our Publications</h2>
        <p class="text-center text-gray-500 dark:text-gray-400 mt-2">
  Click the buttons below to browse our latest work
</p>

    </div>
      <FSCA_ArthropodsButton />
      <FSCA_OccasionalButton />
      <InsectaMundiButton />
      <InsectaMundiButtonNew />
    </div>
  </template>