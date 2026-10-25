<template>
  <article>
    <NuxtLink
      :to="publication._path"
      class="block font-serif font-semibold text-lg leading-snug text-ink hover:text-senary"
    >
      <span v-html="publication.title" />
    </NuxtLink>
    <p class="mt-1 text-sm text-ink-soft">{{ makeAuthorsLabel(publication.authors) }}</p>

    <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-ink-soft">
      <span
        v-if="publication.issue"
        class="font-semibold text-ink"
        >No. {{ publication.issue }}</span
      >
      <span v-if="publication.pagination">pp. {{ formatPagination(publication.pagination) }}</span>
      <span v-if="publication.date">{{ publication.date }}</span>
      <a
        v-if="publication.doi"
        :href="doiUrl(publication.doi)"
        target="_blank"
        rel="noopener noreferrer"
        class="text-senary hover:underline"
        >doi:{{ doiShort(publication.doi) }}</a
      >
      <span
        v-for="category in publication.categories"
        :key="category"
        class="px-2 py-0.5 rounded-full bg-secondary/60 text-ink"
        >{{ category }}</span
      >
    </div>

    <div
      v-if="publication.download || publication.supplementary?.length"
      class="mt-3 flex flex-wrap gap-2"
    >
      <a
        v-if="publication.download"
        :href="publication.download"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-quaternary text-white text-xs font-semibold hover:bg-senary transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="w-3.5 h-3.5"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"
          />
        </svg>
        PDF
      </a>
      <a
        v-for="(supp, index) in publication.supplementary || []"
        :key="index"
        :href="suppUrl(supp)"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center px-3 py-1 rounded-full border border-rule text-ink text-xs font-medium hover:border-quaternary hover:text-senary"
        >{{ suppShortLabel(supp, index) }}</a
      >
    </div>
  </article>
</template>

<script setup>
import { makeAuthorsLabel } from '~/helpers'

defineProps({
  publication: {
    type: Object,
    required: true
  }
})

function suppUrl(supp) {
  return typeof supp === 'string' ? supp : supp.url
}

function suppShortLabel(supp, index) {
  if (typeof supp === 'string') return `Suppl. ${index + 1}`
  return (supp.label || `Suppl. ${index + 1}`)
    .replace(/Supplementary/i, 'Suppl.')
    .replace(/Figure/i, 'Fig.')
    .replace(/Table/i, 'Tab.')
}

// DOIs are stored either bare (10.xxx) or as full https://doi.org/ links
function doiShort(doi) {
  return String(doi).replace(/^(doi:\s*|https?:\/\/(dx\.)?doi\.org\/)/i, '').trim()
}
function doiUrl(doi) {
  return `https://doi.org/${doiShort(doi)}`
}

// Hyphens between digits become en dashes (pp. 1–4)
function formatPagination(pagination) {
  return pagination ? String(pagination).replace(/(\d)-(\d)/g, '$1–$2') : ''
}
</script>
