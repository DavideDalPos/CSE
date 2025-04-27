<script setup lang="ts">
import CSE_Festschrift from '~/components/OtherPublications/CSE_Festschrift.vue';
import CSE_Memoirs from '~/components/OtherPublications/CSE_Memoirs.vue';
import CSE_MemoirsRightColumn from '~/components/OtherPublications/CSE_MemoirsRightColumn.vue';
</script>

<template>
   <section class="container mx-auto px-6 py-10 bg-background text-foreground font-sans">
  <div class="flex gap-10">
    <!-- Left side: CSE_Memoirs and CSE_Festschrift (takes 2/3 of the page) -->
    <div class="flex-2">
      <div class="mb-10">
        <CSE_Memoirs />
      </div>
      <CSE_Festschrift />
    </div>

    <!-- Right side: CSE_MemoirsRightColumn (takes 1/3 of the page) -->
      <CSE_MemoirsRightColumn />

  </div>
  </section>
</template>

<style scoped>
/* Optional: Add custom styles for spacing, responsiveness */
</style>