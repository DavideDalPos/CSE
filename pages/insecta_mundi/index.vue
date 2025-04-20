<template>
  <section>
    <div class="container mx-auto px-8 my-10">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- LEFT COLUMN: Publications -->
        <div class="flex-1">
          <h1 class="text-4xl text-gray-700 font-bold">Publications</h1>
          <div class="my-4">
            <ContentList path="/insecta_mundi">
              <template #default="{ list }">
                <ul>
                  <li
                    v-for="publication in list"
                    :key="publication._path"
                    class="py-4"
                  >
                  <NuxtLink :to="publication._path" class="flex justify-between items-center">
                    <div class="flex-1">
                      <h2 class="font-bold text-primary text-[20px] text-justify hover:text-quaternary" v-html="publication.title"></h2>
                        <div class="flex flex-row flex-wrap gap-1">
                        <VTag
                          v-for="category in publication.categories"
                          :key="category"
                          class="bg-tertiary/60 text-gray-600 inline-block border border-quaternary"
                          >
                          {{ category }}
                        </VTag>
                      </div>
                    </div>
                    <div class="ml-4 flex items-center">
                      <span class="text-xs text-gray-500 whitespace-nowrap">
                        {{ publication.pagination }}
                      </span>
                    </div>
                  </NuxtLink>
                    <p class="text-gray-600 text-sm mt-1">
                      {{ publication.authors?.map(({ first_name, last_name }) => `${first_name} ${last_name}`).join('; ') }}
                    </p>
                    <div v-if="publication.doi" class="flex flex-row text-sm justify-between mt-1">
                      <p>
                        <span class="text-gray-700">DOI: </span>
                        <span class="text-primary hover:text-tertiary hover:underline cursor-pointer">
                          {{ publication.doi }}
                        </span>
                      </p>
                    </div>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <div
                        v-if="publication.download"
                        class="group border border-primary shadow px-2 py-1 text-xs rounded bg-secondary w-max text-yellow-700 hover:text-tertiary flex items-center space-x-1 hover:bg-primary transition duration-200 mt-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          class="w-4 h-4 text-yellow-700 group-hover:text-tertiary transition duration-200">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                        </svg>
                        <a :href="publication.download">PDF</a>
                      </div>
                      <div
                        v-for="(supp, index) in publication.supplementary"
                        :key="index"
                        class="group border border-primary shadow px-2 py-1 text-xs rounded bg-secondary w-max text-yellow-700 
                        hover:text-tertiary flex items-center space-x-1 hover:bg-primary transition duration-200 mt-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          class="w-4 h-4 text-yellow-700 group-hover:text-tertiary transition duration-200">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                        </svg>
                        <a :href="supp" target="_blank" rel="noopener">Suppl. Material {{ index + 1 }}</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </template>
              <template #not-found>
                <p>No articles found.</p>
              </template>
            </ContentList>
          </div>
        </div>

        <!-- RIGHT COLUMN: Contact box -->
<!-- RIGHT COLUMN: Contenitore della colonna destra con sfondo grigio -->
<div class="w-full lg:w-[300px] shrink-0 bg-gray-200 p-4 mt-20">
  <!-- Contact box inside the column -->
  <div class="bg-secondary/90 border-gray-200 p-4 border border-primary rounded shadow-md h-max">
    <h2 class="text-lg font-semibold text-gray-700 mb-2 border-b">Contact</h2>
    <p class="text-sm text-gray-600 font-medium mt-3">David Plotnik</p>
    <p class="text-sm text-gray-600 italic">Chief Editor</p>
    <p class="text-sm text-gray-600 mt-2">
      <p class="text-sm text-gray-600 font-medium">Paul E. Skelley</p>
      <p class="text-sm text-gray-600 italic">Assistant Editor</p>
    </p>
    <p class="text-sm text-gray-600 mt-2">
      Email:
      <a href="mailto:insectamundi@gmail.com" class="text-yellow-600 hover:underline">
        insectamundi@gmail.com
      </a>
    </p>
    <p class="text-sm text-gray-600 mt-2">
      Center for Systematic Entomology<br />
      P.O. Box 141874<br />
      Gainesville, FL 32614-1874 USA
    </p>
  </div>
<!-- Author Guidelines box (entire box clickable) -->
<a href="/insecta_mundi/authorguidelines" class="block w-full">
  <div class="bg-tertiary/90 p-2 border border-quaternary rounded shadow-md mt-3 h-max hover:bg-primary transition">
    <h2 class="text-base text-gray-700 hover:text-yellow-700">Author Guidelines</h2>
  </div>
</a>

</div>

      </div>
    </div>
  </section>
</template>
