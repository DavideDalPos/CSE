<template>
  <section class="container mx-auto px-8 py-12 text-justify font-serif">
            <h1 class="text-5xl font-extrabold text-gray-800 mb-2 text-center">
          The Peck Collection Enhancement Endowment
        </h1>
        <h2 class="text-xl font-medium text-gray-500 text-center -mt-1 mb-8">
          Established in 2021 by <span class="font-semibold text-gray-700">Stewart & Jarmila Peck</span>
        </h2>
    
    <div class="flex gap-10 ">
      <!-- Left-side content for the text -->
      <div class="w-full lg:w-3/4 flex flex-col gap-8 text-justify flex flex-col gap-6 text-lg text-gray-700 text-justify leading-relaxed">
      <!-- Intro Paragraph with Side Image -->

<div class="text-lg leading-relaxed text-gray-700">
<div class="float-left mr-8 w-[400px] cursor-pointer" @click="showModal = true">
<div
  class="relative w-full max-w-[450px] rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
  @click="showModal = true"
>
  <img 
    src="/images/jarmila_and_stewart_peck.avif" 
    alt="Stewart and Jarmila Peck" 
    class="w-full rounded-lg"
  />
  <p class="absolute top-2 left-2 text-white font-semibold text-sm bg-black/60 rounded px-2 py-0.5">
    Jarmila & Stewart Peck
  </p>
  <p class="absolute bottom-2 right-2 text-[9px] text-white bg-black/60 rounded px-1">
    &copy; Pierre Poirier, Canadian Museum of Nature
  </p>
</div>




</div>
  
  <p class="mb-6 mt-1">
    In 2021, <b>Stewart</b> and <b>Jarmila Peck</b> established the
    <b>Stewart and Jarmila Peck Collection Enhancement Endowment</b> 
    (aka the <b>Peck Fund</b>) with the Center for Systematic Entomology (CSE).
    The primary purpose of the <b>Peck Fund</b> is to facilitate research travels to the 
    <a href="https://thefsca.org" target="_blank" class="external-link">
      Florida State Collection of Arthropods (FSCA)
    </a>
    to work with and ultimately improve the collections.
  </p>
  
<div class="text-center">
  <p class="text-lg font-semibold tracking-wide mb-5 border-b border-gray-300 inline-block pb-1">
    Enhanced curation could include:
  </p>

<div class="flex justify-center items-center text-base border border-gray-300 rounded-lg overflow-hidden max-w-xl mx-auto">
  <div class="px-6 py-1 hover:bg-gray-50 cursor-default">Specimen sorting &amp; identification</div>
  <div class="border-l border-gray-300 h-6"></div>
  <div class="px-6 py-1 hover:bg-gray-50 cursor-default">Designation of types</div>
  <div class="border-l border-gray-300 h-6"></div>
  <div class="px-6 py-1 hover:bg-gray-50 cursor-default">Taxonomy updates</div>
</div>

</div>


  <p class="mt-8">
    Grant awards are limited, and proposals will be evaluated by the 
    <NuxtLink href="/about#gge" class="internal-link">Gifts, Grants and Endowment (GGE) Committee</NuxtLink> 
    semiannually (<b>January 15th</b> and <b>July 15th</b>) and approved by the 
    <NuxtLink href="/about#board" class="internal-link">CSE Board of Directors</NuxtLink>.
    Applicants must be CSE members and should contact the appropriate curator at the FSCA to inquire about potential work.
  </p>
</div>








<!-- Modal Viewer -->
<div
  v-if="showModal"
  class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
  @click.self="showModal = false"
>
  <div class="relative max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl">
    <img
      src="/images/jarmila_and_stewart_peck.avif"
      alt="Stewart and Jarmila Peck"
      class="rounded-lg max-h-[90vh] max-w-[90vw]"
    />
    <p class="absolute top-3 left-3 text-white font-semibold text-lg bg-black/60 rounded px-2 py-0.5 select-none pointer-events-none">
      Jarmila & Stewart Peck
    </p>
    <p class="absolute bottom-3 right-2 text-[15px] text-white bg-black/60 rounded px-2 py-0.5 select-none pointer-events-none">
      &copy; Pierre Poirier, Canadian Museum of Nature
    </p>
  </div>
</div>



    <!-- Grant Proposal Evaluation -->



    <!-- Proposal Requirements -->
      <p class="-mb-5">Applicants should submit a short (1–2 pages) formal proposal composed of the following:</p>
      <ul class="roman-list list-inside pl-7 text-base">
        <li><b>Title</b></li>
        <li><b>Author(s)</b></li>
        <li><b>Author’s Affiliation & Contact Information</b> – <u>include</u> major professor if a student</li>
        <li><b>FSCA Contact/Collaborator</b></li>
        <li><b>Proposed dates of travel (can change)</b></li>
        <li><b>Project background/justification</b></li>
        <li><b>Contribution to FSCA Improvement</b></li>
        <li><b>Budget and justification (itemized)</b> – limited to $<u>2000</u></li>
        <li><b>References</b></li>
      </ul>

    <!-- Proposal Submission Info -->
      <p>
        The proposal must be sent to the <NuxtLink href="/about#gge" class="internal-link">GGE Committee</NuxtLink>. 
        See under <a href="#grantguidelines" class="internal-link">Guidelines</a> (below) the mail and email address and,
        after the project is completed, a <b>report</b> of the accomplished work with some <b>photographs</b> should be sent to the 
        <NuxtLink href="/about#gge" class="internal-link">GGE Committee</NuxtLink>. This report will be formatted and posted on the 
        CSE website (See <a href="#reports" class="internal-link">Reports</a> of previous projects). 
      </p>

    <!-- Process Summary -->
      <p>
        A summary of this entire process is also posted below under <a href="#grantguidelines" class="internal-link">Guidelines</a>.
      </p>
    </div>
<div class="flex flex-col gap-4 flex-1"> <!-- Right column, now takes 1/3 of the space -->
        <GrantRightColumn />
      </div>
  </div>
 <div class="flex flex-col gap-5 my-8 py-6 text-center items-center bg-gradient-to-r from-gray-100 to-gray-200 border-l-4 border-gray-600/50 rounded-lg p-8 shadow-2xl transform transition duration-300 hover:scale-105">
    <GrantAcknowledge />
  </div>


  </section>
</template>

<style scoped>

.roman-list {
  list-style-type: none; /* Removes default bullets */
  counter-reset: roman-counter; /* Initialize the counter */
  padding-left: 4em;
}

.roman-list li {
  counter-increment: roman-counter; /* Increment the counter for each item */
  position: relative;
}

.roman-list li::before {
  content: counter(roman-counter, upper-roman) ". "; /* Use Roman numerals */
  position: absolute;
  left: -2em; /* Adjust the position as needed */
}
@keyframes text-pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

.pulsating-text {
  animation: text-pulse 1.5s infinite;
}
</style>


<script setup lang="ts">
import GrantAcknowledge from '@/components/Grants/GrantAcknowledge.vue';
import { ref } from 'vue';
import GrantRightColumn from './GrantRightColumn.vue';

const showModal = ref(false);

</script>
