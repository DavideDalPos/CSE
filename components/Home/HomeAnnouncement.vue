<template>
  <section class="bg-gray-100 py-6 border-t border-b border-gray-300">
    <div class="mx-auto prose !container dark:prose-invert">
      <h2 class="px-1 sm:px-9">Highlights</h2>
      <div class="flex gap-4 flex-col bg-transparent px-3">
        <VCard class="bg-white">
          <h3 class="mt-2 mb-0 flex items-center gap-2">
            New Insecta Mundi Issue
            <ExclamationCircleIcon class="text-red-600 w-7 h-7 animate-pulse" />
          </h3>
          <span class="text-gray-400">2023-10-27</span>
          <p>Check out our new Issue!</p>
        </VCard>

        <VCard class="bg-white">
          <h3 class="mt-2 mb-0">New Video</h3>
          <span class="text-gray-400">2023-10-27</span>
          <p>Check out our new Video!</p>
        </VCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline';
</script>
