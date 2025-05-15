<template>
  <section class="container mx-auto px-8 py-1 font-serif">
    <h1 class="text-5xl font-extrabold text-gray-800 mb-2 text-center">
      Welcome to the Center for Systematic Entomology (CSE)
    </h1>
    <h2 class="text-xl font-medium text-gray-500 text-center -mt-1 mb-8">
      Advancing <span class="font-semibold text-gray-700">Arthropod Systematics</span> Since 1985
    </h2>

    <!-- Flex container: text left, image right -->
    <div class="flex flex-col lg:flex-row gap-8 items-start mb-10">
      <!-- Left side: text -->
      <div class="flex-1 space-y-8 mt-5">
        <div class="flex flex-col gap-6 text-lg text-gray-700 text-justify leading-relaxed">
<p>
  For <span class="font-bold">{{ years }}</span> years, the <b>Center for Systematic Entomology (CSE)</b> has operated as a non-profit organization 
  dedicated to advancing systematics in its broadest sense. The CSE has supported the 
  <a href="https://thefsca.org" target="_blank" class="external-link">
    Florida State Collection of Arthropods (FSCA)
  </a> 
  and awarded numerous grants to specialists conducting research there. 
  Given that the Research Associate program shares a similar mission to promote insect systematics, 
  CSE membership offers an additional avenue for Research Associates to contribute meaningfully to the field.
</p>


          <p>Publications of the CSE include:</p>
          <ul class="list-disc list-inside pl-6">
            <li><b>CSE Newsletter</b> (discontinued after 2003)</li>
            <li><b>Insecta Mundi (IM)</b> - a journal devoted exclusively to arthropod systematics</li>
            <li><b>CSE Memoirs Series</b></li>
          </ul>

          <p class="text-justify">
            One of the advantages of becoming a <strong>CSE member</strong> is 
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

const startYear = 1985;
const currentYear = new Date().getFullYear();
const years = currentYear - startYear;
</script>

