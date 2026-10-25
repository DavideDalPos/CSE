<template>
  <section
    :id="anchor || undefined"
    class="scroll-mt-24"
  >
    <!-- Series heading -->
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div class="max-w-2xl">
        <p
          v-if="showTitle"
          class="text-xs uppercase tracking-[0.18em] font-semibold text-senary"
        >
          FSCA series · ISSN {{ info.issn }}
        </p>
        <component
          :is="headingTag"
          v-if="showTitle"
          class="mt-1 font-serif font-bold text-2xl sm:text-3xl leading-tight text-ink"
        >
          <NuxtLink
            v-if="limit"
            :to="info.path"
            class="hover:text-senary"
            >{{ info.title }}</NuxtLink
          >
          <template v-else>{{ info.title }}</template>
        </component>
        <p
          v-if="showBlurb"
          class="mt-2 text-ink-soft leading-relaxed"
        >
          {{ info.blurb }}
        </p>
        <p class="mt-2 text-sm text-ink-soft">
          <span class="font-semibold text-ink">{{ volumes.length }}</span>
          {{ volumes.length === 1 ? 'volume' : 'volumes' }}<template v-if="yearRange"> · {{ yearRange }}</template>
          <template v-if="year">
            · <NuxtLink
              :to="info.path"
              class="text-senary hover:underline"
              >see all volumes</NuxtLink
            >
          </template>
        </p>
      </div>

      <label
        v-if="searchable && volumes.length > 6"
        class="relative w-full sm:w-72"
      >
        <span class="sr-only">Search this series</span>
        <svg
          class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <circle
            cx="11"
            cy="11"
            r="7"
          />
          <path
            stroke-linecap="round"
            d="m20 20-3.5-3.5"
          />
        </svg>
        <input
          v-model="search"
          type="search"
          placeholder="Search titles, authors, taxa…"
          class="w-full pl-9 pr-3 py-2 rounded-full border border-rule bg-white text-sm focus:outline-none focus:border-quaternary"
        />
      </label>
    </div>

    <!-- Cards -->
    <ul
      v-if="shown.length"
      class="mt-6 grid gap-x-5 gap-y-8"
      :class="gridClass"
    >
      <li
        v-for="book in shown"
        :key="book._path"
        class="group flex flex-col min-w-0"
      >
        <NuxtLink
          :to="book._path"
          class="relative block aspect-[7/9] rounded-lg overflow-hidden bg-paper border border-rule shadow-sm transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
          :aria-label="`Volume ${book.volume}`"
        >
          <img
            v-if="book.image"
            :src="book.image"
            alt=""
            loading="lazy"
            decoding="async"
            class="w-full h-full object-contain bg-white"
          />
          <span
            v-else
            class="absolute inset-0 grid place-items-center font-serif text-4xl text-ink-soft/40"
            >{{ book.volume }}</span
          >
          <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-ink/85 text-white text-[0.7rem] font-semibold tracking-wide">
            Vol. {{ book.volume }}
          </span>
        </NuxtLink>

        <p class="mt-3 text-xs text-ink-soft">
          {{ book.year }}<template v-if="book.pagination"> · {{ pageCount(book.pagination) }}</template>
        </p>
        <NuxtLink
          :to="book._path"
          class="mt-0.5 font-serif font-semibold leading-snug text-ink hover:text-senary line-clamp-3"
          :title="stripTags(book.title)"
        >
          <span v-html="book.title" />
        </NuxtLink>
        <p class="mt-1 text-sm text-ink-soft line-clamp-2">{{ shortAuthors(book.authors) }}</p>

        <div class="mt-auto pt-3 flex flex-wrap items-center gap-2">
          <a
            v-if="book.pdf"
            :href="book.pdf"
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
            v-if="book.pdfhigh"
            :href="book.pdfhigh"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center px-3 py-1 rounded-full border border-rule text-ink text-xs font-medium hover:border-quaternary hover:text-senary"
            >High-res</a
          >
          <a
            v-if="book.doi"
            :href="doiUrl(book.doi)"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-senary hover:underline"
            :title="doiShort(book.doi)"
            >DOI</a
          >
        </div>
      </li>
    </ul>
    <p
      v-else
      class="mt-6 p-6 rounded-xl border border-dashed border-rule text-center text-ink-soft"
    >
      No volumes match “{{ search }}”.
    </p>

    <div
      v-if="limit && volumes.length > limit"
      class="mt-8"
    >
      <NuxtLink
        :to="info.path"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-ink text-ink text-sm font-semibold hover:bg-ink hover:text-white transition-colors"
      >
        See all {{ volumes.length }} volumes <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { FSCA_SERIES, FSCA_LIST_FIELDS, sortVolumes, shortAuthors, doiShort, doiUrl } from '~/helpers/fscaSeries'

const props = defineProps({
  series: { type: String, required: true }, // 'arthropod_papers' | 'occasional_papers'
  year: { type: String, default: '' }, // limit to one year folder
  limit: { type: Number, default: 0 }, // show only the newest N, with a link to the full series
  searchable: { type: Boolean, default: false },
  showBlurb: { type: Boolean, default: true },
  showTitle: { type: Boolean, default: true },
  anchor: { type: String, default: '' },
  headingTag: { type: String, default: 'h2' },
  columns: { type: String, default: 'wide' } // 'wide' (full width) | 'narrow' (next to a sidebar)
})

const info = FSCA_SERIES[props.series]

const { data } = await useAsyncData(`fsca-${props.series}-${props.year || 'all'}`, () => {
  const q = props.year ? queryContent(info.collection, props.year) : queryContent(info.collection)
  return q.only(FSCA_LIST_FIELDS).find()
})

const volumes = computed(() => sortVolumes(data.value))

const yearRange = computed(() => {
  const ys = volumes.value.map((v) => Number(v.year)).filter(Boolean)
  if (!ys.length) return ''
  const lo = Math.min(...ys)
  const hi = Math.max(...ys)
  return lo === hi ? String(lo) : `${lo}–${hi}`
})

const search = ref('')

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return volumes.value
  return volumes.value.filter((v) => {
    const hay = [stripTags(v.title), v.year, v.volume, ...(v.authors || []).map((a) => `${a.first_name} ${a.last_name}`)]
      .join(' ')
      .toLowerCase()
    return hay.includes(q)
  })
})

const shown = computed(() => (props.limit ? filtered.value.slice(0, props.limit) : filtered.value))

const gridClass = computed(() =>
  props.columns === 'narrow' ? 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
)

function stripTags(s) {
  return String(s || '').replace(/<[^>]+>/g, '')
}

// "1-204" → "204 pp."
function pageCount(p) {
  const m = String(p).match(/(\d+)\s*[-–]\s*(\d+)/)
  if (m) return `${Number(m[2]) - Number(m[1]) + 1} pp.`
  return `pp. ${p}`
}
</script>
