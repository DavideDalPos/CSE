<template>
  <section class="container mx-auto px-8 my-16">
    <h1 class="text-4xl font-extrabold text-gray-800 mb-8 ">Author Instructions</h1>

    <!-- Resources and Contacts boxes placed here between the title and text -->
    <div class="flex flex-col lg:flex-row items-start gap-12 mt-8">
      <!-- Left-side content for the text -->
      <div class="w-full lg:flex-1 flex flex-col gap-8 text-justify mt-8">
        <p class="leading-relaxed text-lg">
          <b>Insecta Mundi</b> is a continuing experiment in publication. Our goal is to publish taxonomic works not only free to the author but also openly accessible. This can only be done with authors submitting manuscripts publishable by journal standards, not just in quality, but also in technical details. The length of time needed to publish any manuscript is inversely proportional to the amount of time, effort, and attention to details the author and reviewers spend prior to submission. Authors who understand how to build and clean manuscripts with word processing and photo editing programs will have no difficulty following our requirements and publishing in Insecta Mundi.
        </p>
        <p class="mt-6 leading-relaxed text-lg">
          If you wish to publish in <b>Insecta Mundi</b>, we have various guides available to help you through manuscript preparation processes. Papers not adequately reviewed, or which have not been subjected to the presubmission processes, will be returned or rejected.
        </p>
      </div>

      <!-- Resources Box on the right -->
      <InsectaMundiResourcesBox class="lg:basis-[35%] lg:ml-8 mt-8 lg:mt-0" />
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
