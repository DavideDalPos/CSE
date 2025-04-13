<template>
  <section class="py-6 border-t border-b border-primary">
    <div class="mx-auto prose !container dark:prose-invert">
      <h2 class="px-1 sm:px-9">News & Highlight</h2>

      <!-- Updated layout: flex-row with wrap -->
      <div class="flex flex-row flex-wrap gap-4 bg-transparent px-3">
        <VCard class="bg-foreground flex-1 min-w-[300px]">
          <h3 class="mt-2 mb-0 flex items-center gap-2">
            New Insecta Mundi Issue
            <ExclamationCircleIcon class="text-red-600 w-7 h-7 animate-pulse" />
          </h3>
          <span class="text-gray-700">2023-10-27</span>
          <p>Check out our new Issue!</p>
        </VCard>

        <VCard class="bg-foreground flex-1 min-w-[300px]">
          <h3 class="mt-2 mb-0">New Video</h3>
          <span class="text-gray-700">2023-10-27</span>
          <p>Check out our new Video!</p>
        </VCard>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline';
</script>
