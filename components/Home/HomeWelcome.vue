<template>
  <section class="container mx-auto px-8 py-1">
    <h1 class="text-4xl font-semibold text-gray-800 mb-10 text-center">
      Center for Systematic Entomology (CSE)
    </h1>

    <!-- Flex container: text left, image right -->
    <div class="flex flex-col lg:flex-row gap-8 items-start mb-10">
      <!-- Left side: text -->
      <div class="flex-1 space-y-8 mt-5">
        <div>
          <p class="text-justify">
            For the past 35+ years the
            <b>Center for Systematic Entomology (CSE)</b> has served as a non-profit
            organization designed to further systematics in its broadest sense. It
            has supported the
            <a
              href="https://thefsca.org"
              target="_blank"
              class="external-link"
              >Florida State Collection of Arthropods (FSCA)</a
            >.
            The CSE has also provided a number of grants for specialists to study at
            the FSCA. Because the Research Associate program supports insect
            systematics in many of the same ways, we believe that membership in CSE
            provides another way that Research Associates can assist.
          </p>
        </div>

        <div>
          <p>Publications of the CSE include:</p>
          <ul class="list-disc list-inside pl-6">
            <li><b>CSE Newsletter</b> (discontinued after 2003)</li>
            <li><b>Insecta Mundi (IM)</b> - a journal devoted exclusively to arthropod systematics</li>
            <li><b>CSE Memoirs Series</b></li>
          </ul>
        </div>

        <div>
          <p class="text-justify">
            One of the advantages of membership is 
            publishing in <b><i>Insecta Mundi</i></b> without page charges. We urge all 
            Research Associates to support the CSE and simultaneously support FSCA 
            and its various systematics projects. 
            For $40 you can be an important part of this effort. 
          </p>
        </div>
      </div>

      <!-- Right side: image -->
      <HomeLogo />
    </div>
  </section>
</template>


<script setup lang="ts">
import HomeLogo from './HomeLogo.vue';

</script>
