<template>
  <div>
  <InsectaMundiHeader
    kicker="Archive"
    lede="Every article published online, with full text PDFs. Search by title, author, taxon or issue number."
  >
    <template #title>All articles</template>
  </InsectaMundiHeader>
  <section class="container mx-auto px-6 py-10">
    <div class="flex flex-col lg:flex-row gap-10">
      <div class="flex-1 min-w-0">
        <InsectaMundiTemporaryBanner />

        <!-- Search & filters -->
        <div class="mt-6 sticky top-16 z-10 bg-white/95 backdrop-blur py-3 border-b border-rule">
          <div class="flex flex-col sm:flex-row gap-3">
            <label class="relative flex-1">
              <span class="sr-only">Search the archive</span>
              <svg
                class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.48l4.32 4.31a1 1 0 01-1.42 1.42l-4.31-4.32A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                v-model="searchQuery"
                type="search"
                placeholder="Search title, author, taxon or issue number…"
                class="w-full pl-9 pr-3 py-2.5 rounded-lg border border-rule bg-white text-sm focus:outline-none focus:ring-2 focus:ring-quaternary/50 focus:border-quaternary"
              />
            </label>
            <select
              v-model="selectedYear"
              class="sm:w-40 px-3 py-2.5 rounded-lg border border-rule bg-white text-sm"
              aria-label="Year"
            >
              <option :value="undefined">All years</option>
              <option
                v-for="y in years"
                :key="y"
                :value="y"
              >
                {{ y }}
              </option>
            </select>
            <select
              v-model="selectedMonth"
              class="sm:w-48 px-3 py-2.5 rounded-lg border border-rule bg-white text-sm"
              aria-label="Month"
            >
              <option :value="undefined">All months</option>
              <option
                v-for="{ date, label } in monthYearOptions"
                :key="date"
                :value="date"
              >
                {{ label }}
              </option>
            </select>
          </div>
          <div class="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
            <span class="text-ink-soft mr-1">Popular groups:</span>
            <button
              v-for="c in topCategories"
              :key="c.name"
              type="button"
              class="px-2.5 py-1 rounded-full border transition-colors"
              :class="
                searchQuery.toLowerCase() === c.name.toLowerCase()
                  ? 'bg-ink text-white border-ink'
                  : 'bg-white border-rule text-ink hover:border-quaternary'
              "
              @click="searchQuery = searchQuery.toLowerCase() === c.name.toLowerCase() ? '' : c.name"
            >
              {{ c.name }} <span class="opacity-60">{{ c.n }}</span>
            </button>
          </div>
        </div>

        <p class="mt-4 text-sm text-ink-soft">
          <b class="text-ink">{{ filteredList.length }}</b>
          {{ filteredList.length === 1 ? 'article' : 'articles' }}
          <template v-if="isFiltering"> match your search</template>
          <template v-else> online</template>
          <button
            v-if="isFiltering"
            type="button"
            class="ml-2 text-senary underline underline-offset-2"
            @click="clearFilters"
          >
            Clear
          </button>
        </p>

        <!-- Years -->
        <div class="mt-4 space-y-3">
          <section
            v-for="[year, months] in groupByYearAndMonth"
            :key="year"
            class="rounded-xl border border-rule overflow-hidden"
          >
            <button
              type="button"
              class="w-full flex items-center justify-between px-5 py-3 bg-paper hover:bg-tertiary/30 transition-colors"
              :aria-expanded="openYears.has(year)"
              @click="toggleYear(year)"
            >
              <span class="font-serif text-xl font-semibold text-ink">{{ year }}</span>
              <span class="flex items-center gap-3 text-sm text-ink-soft">
                {{ countIn(months) }} articles
                <svg
                  class="w-5 h-5 transition-transform"
                  :class="{ 'rotate-180': openYears.has(year) }"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <!-- Only open years are rendered, so the page stays light -->
            <div
              v-if="openYears.has(year)"
              class="px-5 pb-2"
            >
              <div
                v-for="[monthYear, group] in months"
                :key="monthYear"
              >
                <h3 class="mt-5 mb-1 text-xs uppercase tracking-[0.14em] font-semibold text-senary">
                  {{ formatMonthYear(monthYear) }}
                </h3>
                <ul class="divide-y divide-rule">
                  <li
                    v-for="item in sortByIssue(group)"
                    :key="item._path"
                    class="py-4"
                  >
                    <TablePublicationRow :publication="item" />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <p
          v-if="!filteredList.length"
          class="mt-8 text-ink-soft"
        >
          No articles match your search.
        </p>
      </div>

      <!-- Contact + guidelines -->
      <InsectaMundiSidebar />
    </div>
  </section>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { IM_LIST_FIELDS } from '~/helpers/contentFields'
import InsectaMundiTemporaryBanner from '~/components/InsectaMundi/InsectaMundiTemporaryBanner.vue'
import InsectaMundiHeader from '~/components/InsectaMundi/InsectaMundiHeader.vue'
import InsectaMundiSidebar from '~/components/InsectaMundi/InsectaMundiSidebar.vue'

useHead({ title: 'Insecta Mundi — archive' })

// Only the fields the list needs (not abstracts and reference lists)
const { data } = await useAsyncData('im-archive', () =>
  queryContent('insecta_mundi').where({ date: { $ne: null } }).sort({ date: -1 }).only(IM_LIST_FIELDS).find()
)
const publications = computed(() => data.value || [])

const route = useRoute()
const router = useRouter()

const searchQuery = ref(String(route.query.search || ''))
const selectedMonth = ref(route.query.month || undefined)
const selectedYear = ref(route.query.year || undefined)
const openYears = ref(new Set())

const isFiltering = computed(() => !!(searchQuery.value || selectedMonth.value || selectedYear.value))

function clearFilters() {
  searchQuery.value = ''
  selectedMonth.value = undefined
  selectedYear.value = undefined
}

function toggleYear(year) {
  const s = new Set(openYears.value)
  s.has(year) ? s.delete(year) : s.add(year)
  openYears.value = s
}

const strip = (s = '') => s.replace(/<[^>]+>/g, '')

const filteredList = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return publications.value.filter((item) => {
    const matchesQuery =
      !q ||
      strip(item.title).toLowerCase().includes(q) ||
      String(item.issue || '').includes(q) ||
      item.categories?.some((cat) => cat.toLowerCase().includes(q)) ||
      item.authors?.some(({ first_name, last_name, suffix }) =>
        `${first_name} ${last_name} ${suffix || ''}`.toLowerCase().includes(q)
      )
    const matchesMonth = !selectedMonth.value || item.date?.startsWith(selectedMonth.value)
    const matchesYear = !selectedYear.value || item.date?.startsWith(selectedYear.value)
    return matchesQuery && matchesMonth && matchesYear
  })
})

function groupBy(list, len) {
  const out = new Map()
  list.forEach((item) => {
    const k = item.date?.slice(0, len)
    if (!out.has(k)) out.set(k, [])
    out.get(k).push(item)
  })
  return [...out.entries()].sort(([a], [b]) => b.localeCompare(a))
}

const groupByYearAndMonth = computed(() =>
  groupBy(filteredList.value, 4).map(([year, items]) => [year, groupBy(items, 7)])
)

const countIn = (months) => months.reduce((n, [, g]) => n + g.length, 0)
const sortByIssue = (g) => [...g].sort((a, b) => parseInt(b.issue) - parseInt(a.issue))

const years = computed(() => [...new Set(publications.value.map((p) => p.date?.slice(0, 4)).filter(Boolean))])

const monthYearOptions = computed(() =>
  [...new Set(publications.value.map((p) => p.date?.slice(0, 7)).filter(Boolean))]
    .filter((m) => !selectedYear.value || m.startsWith(selectedYear.value))
    .sort((a, b) => b.localeCompare(a))
    .map((m) => ({ date: m, label: formatMonthYear(m) }))
)

const topCategories = computed(() => {
  const counts = new Map()
  publications.value.forEach((p) => (p.categories || []).forEach((c) => counts.set(c, (counts.get(c) || 0) + 1)))
  return [...counts.entries()]
    .filter(([c]) => /ptera$|Araneae|Acari/i.test(c))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, n]) => ({ name, n }))
})

function formatMonthYear(ym) {
  return ym ? new Date(`${ym}-01T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : ''
}

// Open the newest year by default; open every year that has matches while filtering
watch(
  groupByYearAndMonth,
  (groups) => {
    openYears.value = new Set(isFiltering.value ? groups.map(([y]) => y) : groups.slice(0, 1).map(([y]) => y))
  },
  { immediate: true }
)

watch([selectedMonth, selectedYear, searchQuery], () => {
  router.replace({
    query: {
      ...(searchQuery.value ? { search: searchQuery.value } : {}),
      ...(selectedYear.value ? { year: selectedYear.value } : {}),
      ...(selectedMonth.value ? { month: selectedMonth.value } : {})
    }
  })
})
</script>
