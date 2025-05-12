<template>
  <section class="font-serif bg-gradient-to-br from-gray-100 to-secondary/70 border-t border-b border-primary">
    <div
      id="grantguidelines"
      class="container mx-auto px-12 py-5 mb-8 scroll-m-18">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-2">Guidelines</h1>
    <h2 class="text-xl font-medium text-gray-500 -mt-2 mb-5">The Peck Fund</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Eligibility Section -->
        <div
          class="bg-white p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <h3 class="text-xl text-center font-semibold text-gray-800 mb-4">
            Eligibility
          </h3>
          <ul class="list-inside list-disc text-base text-gray-700">
            <li>
              Must be a
              <a
                href="/membership"
                target="_blank"
                class="internal-link"
                >CSE Member</a
              >
            </li>
            <li>Expertise in Insect Systematic and Taxonomy</li>
            <li>
              Must contact a
              <a
                href="https://thefsca.org/about/curators/"
                target="_blank"
                class="external-link"
                >FSCA Curator</a
              >
            </li>
          </ul>
        </div>

        <!-- Application & Submission Section -->
        <div
  class="bg-white p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
>
  <h3 class="text-xl text-center font-semibold text-gray-800 mb-4">
    Application & Submission
  </h3>
  <ul class="list-inside list-disc text-base text-gray-700">

    <li>Prepare Formal Proposal (1–2 pages)</li>
    <li>
      Submit Proposal to the
      <NuxtLink
        href="/about#gge"
        target="_blank"
        class="internal-link"
        >GGE Committee</NuxtLink
      >:
      <button
        @click="toggleDetails('applicationSubmission')"
        class="ml-1 text-teal-700 hover:text-teal-900 text-xs"
      >
        <span
          :class="{ 'rotate-90': detailsVisible.applicationSubmission }"
          class="inline-block transition-transform duration-200"
          >▶</span
        >
      </button>
    </li>
    <div v-if="detailsVisible.applicationSubmission">
      <p class="pl-10 text-base text-gray-700 text-sm py-2">
        Mail to: <br />
        <b>Grants Committee</b> <br />Center for Systematic
        Entomology,<br />
        P.O. Box 141874, Gainesville FL 32614-1874
      </p>

      <!-- Centered OR -->
      <div class="flex items-center">
        <hr class="flex-grow border-gray-300" />
        <span class="px-3 text-gray-600 text-sm font-semibold py-0.5">or</span>
        <hr class="flex-grow border-gray-300" />
      </div>

      <p class="pl-10 text-base text-gray-700 text-sm py-1">
        Email to: <br />
        <a
          href="mailto:csentomology@gmail.com"
          class="text-blue-600 hover:underline"
          >csentomology@gmail.com</a
        >
      </p>
    </div>
  </ul>
</div>


        <!-- Submission Section -->
        <div
          class="bg-white p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <h3 class="text-xl text-center font-semibold text-gray-800 mb-4">
            Final Report
          </h3>

          <ul class="list-inside list-disc text-base text-gray-700">
            <li>Prepare final report</li>
            <li>
              Send it to the
              <NuxtLink
                href="/about#gge"
                target="_blank"
                class="internal-link"
                >GGE Committee</NuxtLink
              >
            </li>
            <li>
              Report will be posted on the <b>CSE Website</b>:
              <button
                @click="toggleDetails('finalReport')"
                class="ml-1 text-teal-700 hover:text-teal-900 text-xs"
              >
                <span
                  :class="{ 'rotate-90': detailsVisible.finalReport }"
                  class="inline-block transition-transform duration-200"
                  >▶</span
                >
              </button>
            </li>
            <div v-if="detailsVisible.finalReport">
              <p class="pl-10 text-base text-gray-700 text-sm py-2">
                See
                <a
                  href="#reports"
                  class="internal-link"
                  >Reports</a
                >
                of previous projects
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Object to track visibility per item
const detailsVisible = ref({
  applicationSubmission: false,
  finalReport: false
})

const toggleDetails = (section) => {
  // Toggle visibility of the selected section
  detailsVisible.value[section] = !detailsVisible.value[section]
}
</script>

<style scoped>
/* Optional: Add extra styling if needed */
</style>
