<script setup lang="ts">
import FSCA_Arthropods from '~/components/OtherPublications/FSCA_Arthropods.vue';
import FSCA_Occasional from '~/components/OtherPublications/FSCA_Occasional.vue';
import FSCA_ArthropodsTitle from './FSCA_ArthropodsTitle.vue';
import FSCA_RightColumn from './FSCA_RightColumn.vue';
</script>

<template>
  <section class="container mx-auto px-6 py-10 bg-background text-foreground font-serif">
    <FSCA_ArthropodsTitle class="mb-15" />

    <div class="flex flex-col md:flex-row gap-10">
      
      <!-- Left side: 2/3 width -->
      <div class="w-full pr-10">
        <div class="mb-10">
          <FSCA_Arthropods />
        </div>
        <div class="border-t border-gray-300 mb-10">
          <FSCA_Occasional />
        </div>
      </div>

      <!-- Vertical Line Separation -->
      <div class="hidden md:block border-r border-gray-300"></div>

      <!-- Right side: 1/3 width -->
      <div class="md:w-1/3 w-full">
        <FSCA_RightColumn />
      </div>

    </div>
  </section>
</template>


