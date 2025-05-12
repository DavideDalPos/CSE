<script setup lang="ts">
import FSCA_ArthropodsButton from './FSCA_ArthropodsButton.vue';
import FSCA_OccasionalButton from './FSCA_OccasionalButton.vue';
import InsectaMundiButton from './InsectaMundiButton.vue';
import InsectaMundiButtonNew from './InsectaMundiButtonNew.vue';

</script>

<template>
  <div class="w-full lg:w-[300px] shrink-0 p-4 border-gray-300 border-l-2">
    <!-- Section Title -->
    <div class="mb-4">
        <h2 class="text-xl text-center font-semibold text-setenary dark:text-gray-200">Explore Our Publications</h2>

    </div>
      <FSCA_ArthropodsButton />
      <FSCA_OccasionalButton />
      <InsectaMundiButton />
      <InsectaMundiButtonNew />
    </div>
  </template>