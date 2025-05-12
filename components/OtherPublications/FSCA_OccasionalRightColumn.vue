<script setup lang="ts">
import CSE_PapersButton from './CSE_PapersButton.vue';
import FSCA_ArthropodsButton from './FSCA_ArthropodsButton.vue';
import InsectaMundiButton from './InsectaMundiButton.vue';
import InsectaMundiButtonNew from './InsectaMundiButtonNew.vue';

</script>

<template>
  <div class="w-full lg:w-[300px] shrink-0 bg-white p-4 border-l-2 border-gray-300">
    <!-- Section Title -->
    <div class="mb-4">
        <h2 class="text-xl text-center font-semibold text-setenary dark:text-gray-200">Explore Our Publications</h2>

    </div>
      <FSCA_ArthropodsButton />
      <InsectaMundiButton />
      <InsectaMundiButtonNew />
      <CSE_PapersButton />
    </div>
  </template>