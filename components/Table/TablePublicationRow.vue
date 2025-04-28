<template>
  <div class="py-1">
    <NuxtLink
      :to="publication._path"
      class="flex justify-between items-center"
    >
      <div class="flex-1">
        <h2
          class="font-bold text-senary text-[17px] text-justify hover:text-quaternary/80 pr-20"
          v-html="publication.title"
        ></h2>
        <div class="flex flex-row flex-wrap gap-1">
          <VTag
            v-for="category in publication.categories"
            :key="category"
            class="bg-quinary/45 text-gray-700 inline-block"
          >
            {{ category }}
          </VTag>
        </div>
      </div>
    </NuxtLink>
    <p class="text-gray-600 text-sm mt-1">
      {{ makeAuthorsLabel(publication.authors) }}
    </p>
    <div
      v-if="publication.doi"
      class="flex flex-row text-sm justify-between mt-1"
    >
      <p>
        <span class="text-gray-700">DOI: </span>
        <span
          class="text-primary hover:text-tertiary hover:underline cursor-pointer"
        >
          {{ publication.doi }}
        </span>
      </p>
    </div>
    <div class="flex flex-wrap gap-1 mt-1">
      <div
        v-if="publication.download"
        class="group shadow px-2 py-1 text-xs rounded bg-primary/80 w-max text-white hover:text-primary flex items-center space-x-1 hover:bg-tertiary transition duration-200 mt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 text-white group-hover:text-primary transition duration-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
          />
        </svg>
        <a :href="publication.download">Download PDF</a>
      </div>
      <div
        v-for="(supp, index) in publication.supplementary"
        :key="index"
        class="group shadow px-2 py-1 text-xs rounded bg-primary/80 w-max text-white hover:text-primary flex items-center space-x-1 hover:bg-tertiary transition duration-200 mt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 text-white group-hover:text-primary transition duration-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
          />
        </svg>
        <a
          :href="supp"
          target="_blank"
          rel="noopener"
          >Suppl. Material {{ index + 1 }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { makeAuthorsLabel } from '~/helpers';

const props = defineProps({
  publication: {
    type: Object,
    required: true
  }
})
</script>
