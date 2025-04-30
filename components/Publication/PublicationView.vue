<template>
  <section class="container mx-auto flex my-10 justify-between px-8">
    <article>
      <div class="text-[35px]">
        <span
          class="font-bold"
          v-html="publication.title"
        />
        <template v-if="publication?.categories?.length">
          <span> – </span>
          <VTag
            v-for="category in publication?.categories"
            class="bg-setenary/90 text-white inline-block text-[11px] py-1 mr-1"
          >
            {{ category }}
          </VTag>
        </template>
      </div>
      <div class="flex flex-row justify-between gap-4">
        <div>
          <div class="flex flex-row justify-between my-4 gap-4 text-gray-800">
            <div>
              <ul v-if="publication.authors">
                <li
                  v-for="{ first_name, last_name, affiliation, orcid } in publication.authors"
                  class="py-2"
                >
                  <p class="font-bold text-[20px]">{{ first_name }} {{ last_name }}</p>
                  <p class="text-[15px] text-gray-500 prose leading-tight">{{ affiliation }}</p>
                  <a
                    v-if="orcid"
                    :href="orcid"
                    class="text-sm text-quinary hover:underline hover:text-quaternary inline-flex items-center gap-1"
                    target="_blank"
                                    >
                    <img src="/images/orcid.svg" alt="ORCID icon" class="w-4 h-4">
                    {{ orcid }}
                  </a>
                </li>
              </ul>
            </div>
          </div>      
          <div v-if="publication.doi" class="flex flex-row justify-between my-4 gap-4">
            <p>
              <span class="text-gray-700 font-bold">DOI: </span>
              <a
                :href="publication.doi"
                target="_blank"
                rel="noopener noreferrer"
                class="text-quinary hover:text-quaternary hover:underline cursor-pointer"
                >
                {{ publication.doi }}
              </a>  
            </p>
          </div>

          <div v-if="publication.zoobank" class="flex flex-row justify-between my-4 gap-4">
            <p>
              <span class="text-gray-700 font-bold">Zoobank: </span>
              <a
                :href="zoobankUrl(publication.zoobank)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-quinary hover:text-quaternary hover:underline cursor-pointer"
              >
                {{ publication.zoobank }}
              </a>  
            </p>
          </div>
          
          <template v-if="publication?.keywords?.length">
            <div class="mb-10">
              <span class="text-gray-700 font-bold">Keywords: </span>
                <span class="text-gray-500">
                  <template v-for="(keyword, index) in publication.keywords" :key="index">
                    <span v-html="keyword"></span><span v-if="index < publication.keywords.length - 1">, </span>
                  </template>
                </span>
            </div>
          </template>

          <div class="prose max-w- max-w-6xl">

            <template v-if="publication.abstract">
              <h3 class="text-2xl">Abstract</h3>
              <p v-html="publication.abstract" class="text-justify" />
            </template>

            <template v-if="publication.resumen">
              <h3 class="text-2xl">Resumen</h3>
              <p v-html="publication.resumen" class="text-justify" />
            </template>

            <template v-if="publication.references">
              <h3 class="text-2xl">References</h3>
              <ul>
                <li
                  v-for="reference in publication.references"
                  :key="reference"
                  class="text-justify"
                >
                  <span class="font-bold"
                    >{{ reference.authors }} {{ reference.year }}. </span
                  >
                  <span v-html="reference.title" /><span v-if="reference.pages"
                    >: {{ reference.pages }}. </span
                  >
                  <span v-if="reference.doi">
                    <a :href="reference.doi" target="_blank" rel="noopener noreferrer" class="text-quinary hover:text-quaternary hover:underline cursor-pointer">{{ reference.doi }}</a>
                  </span>
                  <span v-if="reference.url">
                     Available at <a :href="reference.url" target="_blank" rel="noopener noreferrer"
                     class="text-quinary hover:text-quaternary hover:underline cursor-pointer">{{ reference.url }} </a> 
                  </span>&nbsp;
                  <span v-if="reference.access">{{ reference.access }}</span>
                </li>
              </ul>
            </template>
          </div>
        </div>

        <!-- RIGHT COLUMN with gray background -->
        <div class="flex flex-col gap-3 max-w-96 mt-6 bg-setenary/10 p-4">
          <div v-if="publication.date"
              class="border border-senary bg-senary/10 px-4 rounded shadow max-w-[300px]">
              <p class="text-white bg-senary px-4 w-[calc(100%+2rem)] -mx-4 border-quaternary py-1 mb-1">Publication</p> 
              <div class="mb-1">
                <span class="text-[15px] text-black/80">{{ publication.issue }}</span>
              </div>
          </div>
          <div v-if="publication.date"
              class="border border-quaternary bg-tertiary/40 px-4 rounded shadow max-w-[300px]">
              <p class="text-white bg-quaternary/90 px-4 w-[calc(100%+2rem)]  -mx-4 border-quaternary py-1 mb-1">Published</p> 
              <div class="mb-1">
                <span class="text-[15px] text-black/80">{{ publication.date }}</span>
              </div>
          </div>
          <div class="border border-primary px-4 rounded bg-secondary/70 shadow max-w-[300px] ">
            <h3 class="text-lg text-white bg-primary/70 px-4 w-[calc(100%+2rem)] -mx-4 border-primary py-1 mb-2">
              How to cite
            </h3>
            <div class="mb-2">
              <PublicationCite class="text-sm text-black/80 mt-2" :publication="publication" />
            </div>
          </div>
          <div
            v-if="publication.download"
            class="group border border-quaternary/50 text-gray-700 bg-quaternary/80 px-4 py-[0.5px] text-lg rounded flex items-center space-x-2 hover:bg-quaternary/40  transition duration-200 max-w-[300px] shadow"
          >
          <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              class="w-4 h-4 transition font-semibold duration-200">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
            </svg>
            <a :href="publication.download">PDF</a>
          </div>
          <div
             v-for="(supp, index) in publication.supplementary"
            :key="index"
            class="group border border-quinary/50 text-gray-800 bg-quinary/80 px-4 py-[0.5px] rounded
            flex items-center space-x-2 hover:bg-quinary/40 transition duration-200 max-w-[300px] shadow text-[17px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="w-4 h-4 transition font-semibold duration-200"
              >
              <path
               stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
              />
              </svg>
                <a :href="supp" target="_blank" rel="noopener">Suppl. Material {{ index + 1 }}</a>
          </div>

        </div>

      </div>

      <NuxtLink
        class="uppercase items-center flex my-10 gap-1.5"
        to="/insecta_mundi"
      >
        <IconArrowLeft class="h-4 inline-block" />
        <span>Back</span>
      </NuxtLink>
    </article>
  </section>
</template>

<script setup>
defineProps({
  publication: {
    type: Object,
    required: true
  }
});
const zoobankUrl = (lsid) => {
  const parts = lsid.split(':');
  const idPart = parts.slice(4).join(':');
  return `https://zoobank.org/References/${idPart}`;
};
</script>
