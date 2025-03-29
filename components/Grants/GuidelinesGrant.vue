<template>
  <section class="bg-gray-100 border-t border-b border-gray-300">
    <div id="grantguidelines" class="container mx-auto px-12 py-5">
      <h1 class="text-4xl text-gray-900 mb-12">Guidelines</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Eligibility Section -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-xl text-center font-semibold text-gray-800 mb-4">Eligibility</h3>
          <ul class="list-inside list-disc text-base text-gray-700">
            <li>Must be a <a href="/membership" target="_blank" class="internal-link">CSE Member</a></li>
            <li>Expertise in Insect Systematic and Taxonomy</li>
            <li><b><i>Not</i></b> a CSE Board Member</li>
            <li><b><i>Not</i></b> a FSCA Employee</li>
          </ul>
        </div>

        <!-- Application & Submission Section -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-xl text-center font-semibold text-gray-800 mb-4">Application & Submission</h3>
          <ul class="list-inside list-disc text-base text-gray-700">
            <li>Download Formal Proposal
              <!-- PDF Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-5 h-5 ml-2 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM12 2v8H8m4 8h4"></path>
      </svg>
            </li>
            <li>
              Prepare Formal Proposal (1–2 pages)
            </li>
            <li>Submit Proposal to the GGE Committee:
              <button @click="toggleDetails" class="ml-1 text-teal-700 hover:text-teal-900 text-xs">
                <span :class="{'rotate-90': showDetails}" class="inline-block transition-transform duration-200">▶</span>
              </button>
            </li>
            <div v-if="showDetails">
              <p class="pl-10 text-base text-gray-700 text-sm py-2">
                Mail to: <br> 
                <b>Grants Committee</b> <br>Center for Systematic Entomology,<br>
                P.O. Box 141874, Gainesville FL 32614-1874
              </p>

              <!-- Centered OR -->
              <div class="flex items-center">
                <hr class="flex-grow border-gray-300">
                <span class="px-3 text-gray-600 text-sm font-semibold py-0.5">or</span>
                <hr class="flex-grow border-gray-300">
              </div>

              <p class="pl-10 text-base text-gray-700 text-sm py-1">
                Email to: <br> <a href="mailto:csentomology@gmail.com" class="text-blue-600 hover:underline">csentomology@gmail.com</a>
              </p>
            </div>
          </ul>
        </div>

        <!-- Submission Section -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 class="text-xl text-center font-semibold text-gray-800 mb-4">Report</h3>
          <p class="text-base text-gray-700 leading-relaxed">
            Text about the submission process. This can include steps, guidelines, and deadlines for submitting the necessary materials or documents.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const showDetails = ref(false);

const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};
</script>