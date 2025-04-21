<template>
  <div>
    <NuxtLink
      :to="publication._path"
      class="flex justify-between items-center"
    >
      <div class="flex-1">
        <h2
          class="font-bold text-gray-500 text-[17px] text-justify hover:text-primary/60 pr-20"
          v-html="publication.title"
        ></h2>
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
        class="group border border-primary shadow px-2 py-1 text-xs rounded bg-secondary w-max text-yellow-700 hover:text-tertiary flex items-center space-x-1 hover:bg-primary transition duration-200 mt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 text-yellow-700 group-hover:text-tertiary transition duration-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
          />
        </svg>
        <a :href="publication.download">PDF</a>
      </div>
      <div
        v-for="(supp, index) in publication.supplementary"
        :key="index"
        class="group border border-primary shadow px-2 py-1 text-xs rounded bg-secondary w-max text-yellow-700 hover:text-tertiary flex items-center space-x-1 hover:bg-primary transition duration-200 mt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 text-yellow-700 group-hover:text-tertiary transition duration-200"
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
import { makeAuthorsLabel } from '~/helpers'

const props = defineProps({
  publication: {
    type: Object,
    required: true
  }
})
</script>
