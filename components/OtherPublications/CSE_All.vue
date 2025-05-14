<template>
  <section
    class="container mx-auto px-6 py-10 bg-background text-foreground font-serif"
  >
    <div>
      <!-- Larger Title -->
      <h1 class="text-5xl font-extrabold text-gray-800 mb-12 text-center">
        Center for Systematic Entomology (CSE) Publications
      </h1>
      <h2 class="text-xl font-medium text-gray-500 text-center -mt-8 mb-8">
        Browse our <span class="font-semibold text-gray-700">journal</span> and
        other works published by the
        <span class="font-semibold text-gray-700">CSE</span>
      </h2>

      <!-- Subtitle (Smaller Title) -->
    </div>
    <div class="flex gap-10">
      <!-- Left side: CSE_Memoirs and CSE_Festschrift (takes 2/3 of the page) -->
      <div class="flex-2 mb-10">
        <CSE_IMIntro />
        <div
          id="festschrifts"
          class="scroll-mt-28 border-t border-gray-300 mb-10"
        >
          <CSE_Festschrift />
        </div>
        <div class="border-t border-gray-300 mb-10">
          <CSE_Memoirs />
        </div>

        <div class="border-t border-gray-300 mb-5">
          <CSE_NewsLetter />
        </div>
      </div>

      <!-- Right side: CSE_MemoirsRightColumn (takes 1/3 of the page) -->
      <div class="hidden md:block border-r border-gray-300"></div>
      <CSE_MemoirsRightColumn />
    </div>
  </section>
</template>

<script setup lang="ts">
import CSE_Festschrift from '~/components/OtherPublications/CSE_Festschrift.vue'
import CSE_Memoirs from '~/components/OtherPublications/CSE_Memoirs.vue'
import CSE_MemoirsRightColumn from '~/components/OtherPublications/CSE_MemoirsRightColumn.vue'
import CSE_NewsLetter from '~/components/OtherPublications/CSE_NewsLetter.vue'
import CSE_IMIntro from './CSE_IMIntro.vue'
</script>
