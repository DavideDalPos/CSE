<template>
  <section class="container mx-auto px-8 my-10 font-serif">
    <h1 class="text-4xl font-extrabold text-gray-800 mb-2">Author Instructions</h1>
    <h2 class="text-xl font-medium text-gray-500 -mt-2">Insecta Mundi</h2>

    <!-- Resources and Contacts boxes placed here between the title and text -->
    <div class="flex flex-col lg:flex-row items-start mt-5">
      <!-- Left-side content for the text -->
      <div class="w-full lg:flex-1 flex flex-col gap-8 text-justify mt-15">
        <!-- New div here for additional text content -->
        <div class="flex flex-col gap-6 text-lg text-gray-700 text-justify leading-relaxed">
          <p class="leading-relaxed">
            <b>Insecta Mundi</b> is more than a journal — it is a collaborative, open-access platform built for taxonomists, by taxonomists. 
            Our mission is to make scientific knowledge accessible to everyone, without charging publication fees to authors. 
            This vision can only succeed with the help of contributors who are just as dedicated to excellence as we are.
          </p>

          <p class="leading-relaxed">
            To ensure smooth and timely publication, authors are expected to prepare their manuscripts with care and attention to detail. 
            High-quality submissions — both scientifically and technically — move through the review and editing process much faster. 
            On the other hand, incomplete or poorly formatted submissions may face significant delays or rejection.
          </p>

          <p class="leading-relaxed">
            We strongly encourage authors to familiarize themselves with our formatting standards, especially those involving 
            <span class="font-semibold">word processing, figures, citations, and layout requirements</span>. 
            The better your manuscript adheres to our guidelines, the more efficient the publication process will be.
          </p>

          <p class="leading-relaxed">
            If you're new to publishing with us, don't worry — we’ve created a set of easy-to-follow resources that walk you through 
            each step of manuscript preparation. From document formatting to high-resolution image guidelines, our tools are designed 
            to help you succeed.
          </p>

          <p class="leading-relaxed">
            Before submission, all manuscripts should be carefully reviewed — ideally by colleagues or mentors — and should comply with 
            our <NuxtLink href="/insecta_mundi/authorguidelines#checklist" class="internal-link">presubmission checklist</NuxtLink>. Submissions that do not meet these basic requirements will be returned without review.
          </p>

          <p class="leading-relaxed">
            Publishing with <b>Insecta Mundi</b> means joining a global community of entomologists committed to rigorous, open, and equitable science. 
            We look forward to working with you and helping bring your research to the world.
          </p>
        </div>
      </div>

      <!-- Vertical line between the columns -->
      <div class="hidden lg:block w-[1px] bg-gray-300 self-stretch mx-8"></div>


      <!-- Resources Box on the right -->
      <InsectaMundiResourcesBox />
    </div>
  </section>
</template>

<script>
// Import the ResourcesBox component
import InsectaMundiResourcesBox from './InsectaMundiResourcesBox.vue';

export default {
  components: {
    InsectaMundiResourcesBox
  }
};
</script>

<style scoped>
/* You can add specific styles for the AuthorInstructions component here */
</style>
