<template>
  <section class="container mx-auto px-6 py-14">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Insecta Mundi</p>
        <h2 class="mt-2 font-serif text-3xl font-bold text-ink">
          Latest articles
          <span
            v-if="isNew"
            class="align-middle ml-2 text-xs font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-quaternary text-white"
            >New</span
          >
        </h2>
        <p
          v-if="latestLabel"
          class="mt-1 text-ink-soft"
        >
          Published {{ latestLabel }}
        </p>
      </div>
      <div class="flex gap-4 text-sm font-semibold">
        <NuxtLink
          to="/insecta_mundi/current"
          class="text-senary hover:underline underline-offset-4"
          >This month's issue →</NuxtLink
        >
        <NuxtLink
          to="/insecta_mundi"
          class="text-ink hover:underline underline-offset-4"
          >All {{ total }} articles →</NuxtLink
        >
      </div>
    </div>

    <ul class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="a in latest"
        :key="a._path"
      >
        <NuxtLink
          :to="a._path"
          class="group h-full flex flex-col p-5 rounded-xl bg-white border border-rule hover:border-quaternary hover:shadow-md transition"
        >
          <span class="text-xs font-semibold text-ink-soft"
            >No. {{ a.issue }} · {{ shortDate(a.date) }}</span
          >
          <span
            class="mt-2 font-serif font-semibold text-[1.05rem] leading-snug text-ink group-hover:text-senary line-clamp-4"
            v-html="a.title"
          />
          <span class="mt-2 text-sm text-ink-soft line-clamp-2">{{ makeAuthorsLabel(a.authors) }}</span>
          <span class="mt-auto pt-3 flex flex-wrap gap-1.5">
            <span
              v-for="c in (a.categories || []).slice(0, 3)"
              :key="c"
              class="text-[0.7rem] px-2 py-0.5 rounded-full bg-secondary/60 text-ink"
              >{{ c }}</span
            >
          </span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { makeAuthorsLabel } from '~/helpers'

// Only the 4 newest articles, plus a light count of all of them
const { data } = await useAsyncData('home-latest', () =>
  queryContent('insecta_mundi')
    .where({ date: { $ne: null } })
    .sort({ date: -1, issue: -1 })
    .limit(4)
    .only(['_path', 'title', 'date', 'issue', 'authors', 'categories'])
    .find()
)
const { data: count } = await useAsyncData('home-count', () =>
  queryContent('insecta_mundi').where({ date: { $ne: null } }).count()
)

const latest = computed(() => data.value || [])
const total = computed(() => count.value || '')
const latestDate = computed(() => latest.value[0]?.date)
const latestLabel = computed(() =>
  latestDate.value
    ? new Date(`${latestDate.value}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''
)
const isNew = computed(() => latestDate.value && (Date.now() - new Date(`${latestDate.value}T00:00:00`)) / 864e5 <= 14)

function shortDate(d) {
  return d ? new Date(`${d}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : ''
}
</script>
