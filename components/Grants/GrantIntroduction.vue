<template>
  <section class="container mx-auto px-8 py-12 text-justify">
    <h1 class="text-4xl font-semibold text-gray-800 mb-8">The Peck Collection Enhancement Endowment</h1>
    <div class="flex gap-10">
      <!-- Left-side content for the text -->
      <div class="w-full lg:flex-1 flex flex-col gap-8 text-justify ">
      <p class="text leading-relaxed">
        In 2021, <b>Stewart</b> and <b>Jarmila Peck</b> established the <b>Stewart and Jarmila Peck Collection Enhancement Endowment</b> 
        (aka the <b>Peck Fund</b>) with the Center for Systematic Entomology (CSE). 
        The primary purpose of the <b>Peck Fund</b> is to facilitate research travels to 
        the <a href="https://thefsca.org" target="_blank" class="external-link">Florida State Collection of Arthropods (FSCA)</a>
        to work with and ultimately improve the collections.
      </p>

    <!-- Enhanced Curation Section -->
      <p class="-mb-5">Enhanced curation could include:</p>
      <ul class="list-disc list-inside pl-7 mb-3">
        <li><b>Specimen sorting and identification</b></li>
        <li><b>Designation of types</b></li>
        <li><b>Updated taxonomy</b></li>
      </ul>

    <!-- Grant Proposal Evaluation -->
      <p>
        Grant awards are limited, and proposals will be evaluated by the <NuxtLink href="/about#gge" target="_blank" class="internal-link">Gifts, Grants and Endowment (GGE) Committee</NuxtLink> 
        semiannually (<b>January 15th</b> and <b>July 15th</b>) and approved by the <a href="about#board" target="_blank" class="internal-link">CSE Board of Directors</a>.
        Applicants must be CSE members and should contact the appropriate curator at the FSCA to inquire about potential work.
      </p>


    <!-- Proposal Requirements -->
      <p class="-mb-5">Applicants should submit a short (1–2 pages) formal proposal composed of the following:</p>
      <ul class="roman-list list-inside pl-7">
        <li><b>Title</b></li>
        <li><b>Author(s)</b></li>
        <li><b>Author’s Affiliation & Contact Information</b> – major professor if a student</li>
        <li><b>FSCA Contact/Collaborator</b></li>
        <li><b>Contribution to FSCA Improvement</b></li>
        <li><b>Budget and justification (itemized)</b> – limited to $<u>2000</u></li>
        <li><b>References</b></li>
      </ul>

    <!-- Proposal Submission Info -->
      <p>
        The proposal must be sent to the <NuxtLink href="/about#gge" target="_blank" class="internal-link">GGE Committee</NuxtLink>. 
        See under <a href="#grantguidelines" class="internal-link">Guidelines</a> (below) the mail and email address.
      </p>

    <!-- Report Submission -->
      <p>
        After the project is completed, a <b>report</b> of the accomplished work with some <b>photographs</b> should be sent to the 
        <NuxtLink href="/about#gge" target="_blank" class="internal-link">GGE Committee</NuxtLink>. 
        <br>This report will be formatted and posted on the CSE website (See <a href="#reports" class="internal-link">Reports</a> of previous projects). 
      </p>

    <!-- Process Summary -->
      <p>
        A summary of this entire process is also posted below under <a href="#grantguidelines" class="internal-link">Guidelines</a>.
      </p>
    </div>
<GrantRightColumn />
  </div>

  <div class="flex flex-col gap-3 my-8 py-5 text-center items-center bg-quinary/20 border-l-4 border-quinary rounded-lg p-6 shadow-lg">
<Counter />
  </div>
<div class="flex flex-col gap-3 my-8 py-5 text-center items-center bg-senary/20 border-l-4 border-senary rounded-lg p-6 shadow-lg">
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


<script>

import GrantAcknowledge from '@/components/Grants/GrantAcknowledge.vue';
import Counter from './Counter.vue';
import GrantRightColumn from './GrantRightColumn.vue';

export default {
  components: {
    GrantAcknowledge,
    Counter,
    GrantRightColumn
  }
}
</script>
