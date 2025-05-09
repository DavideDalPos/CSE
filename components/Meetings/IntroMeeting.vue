<script setup lang="ts">
import ComingSoonBanner from './ComingSoonBanner.vue';

</script>

<template>
    <section class="container mx-auto px-12 py-12 -mb-10">
     
      <h1 class="text-4xl font-extrabold text-gray-800 mb-8">CSE Annual Conference</h1>
     <div class="flex flex-col gap-4 my-8">
       <p>
Every year, the CSE orgnaizes its Annual Conference, 
both in-person (Gainesville) and via zoom. 
Historically, the talks are varied, covering a vary of differenct arthropod taxa and topics.
       </p>
       <p>
The <b>2025 Annual Conference</b> just ended. You can find the entire program here: 
<a href="/PDF/CSE_Program_2025.pdf" target="_blank" class="internal-link" rel="noopener noreferrer">2025 Annual Conference Program</a>
              <!-- PDF Icon -->
              <a href="/PDF/CSE_Program_2025.pdf" target="_blank" class="internal-link" rel="noopener noreferrer">
                <img src="/images/PDF_file_icon.svg" alt="PDF icon" class="inline w-5 h-5 ml-1 -mt-2">
              </a>
       </p>
      <p>
      Check below when <b>2026 Annual Conference</b> will take place! 
      </p>
      </div>
      
       <ComingSoonBanner />

   </section>
</template>

<style scoped>

</style>