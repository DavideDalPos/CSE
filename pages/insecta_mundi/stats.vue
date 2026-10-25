<!--
  Insecta Mundi in numbers. All figures are recalculated at every deploy from the
  article files (server/routes/im-stats.json.js) — nothing to update by hand.
-->
<template>
  <div v-if="stats">
    <InsectaMundiHeader
      kicker="In numbers"
      lede="What we publish, who writes it and how the journal has grown — recalculated automatically every time a new article goes online."
    >
      <template #title>The journal <span class="text-quaternary">in numbers</span></template>
    </InsectaMundiHeader>

    <div class="container mx-auto px-6 py-12 space-y-20">
      <!-- ============ Headline counters ============ -->
      <section
        ref="countersEl"
        aria-label="Key figures"
      >
        <!-- ============ Coverage disclaimer ============ -->
        <aside
          class="mb-4 flex gap-3 p-4 sm:p-5 rounded-xl border border-quaternary/50 bg-quaternary/10 text-ink"
          role="note"
        >
          <svg
            class="w-5 h-5 mt-0.5 shrink-0 text-senary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
            />
            <path
              stroke-linecap="round"
              d="M12 8h.01M11 12h1v5h1"
            />
          </svg>
          <p class="text-sm leading-relaxed">
            <b>These figures cover only part of the journal.</b> <i>Insecta Mundi</i> has been published since {{ FOUNDED }}, but the online archive on
            this website currently starts in {{ stats.totals.firstYear
            }}<template v-if="stats.totals.missingYears.length"> and does not yet include {{ stats.totals.missingYears.join(', ') }}</template>. Older
            articles are being added, and the numbers on this page will update automatically as they go online.
          </p>
        </aside>

        <dl class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <div
            v-for="(c, i) in counters"
            :key="c.label"
            class="rounded-2xl border border-rule bg-paper p-5 transition-all duration-700"
            :class="countersSeen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <dt class="text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">{{ c.label }}</dt>
            <dd class="mt-1 font-serif text-4xl font-bold text-ink">
              <CountUp
                :value="c.value"
                :run="countersSeen"
              />
            </dd>
            <dd class="mt-1 text-xs text-ink-soft leading-snug">{{ c.note }}</dd>
          </div>
        </dl>
      </section>

      <!-- ============ Orders and families ============ -->
      <section
        id="orders"
        ref="ordersEl"
        class="scroll-mt-24 grid lg:grid-cols-12 gap-10"
      >
        <div class="lg:col-span-4 lg:sticky lg:top-24 self-start">
          <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Taxonomic coverage</p>
          <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Which orders we publish on</h2>
          <p class="mt-3 text-ink-soft leading-relaxed">
            <b class="text-ink">{{ top.name }}</b> lead the way: {{ topShare }}% of all articles deal with them, across
            <b class="text-ink">{{ top.families.length }}</b> families. In total the journal covers
            <b class="text-ink">{{ stats.totals.families }}</b> families in <b class="text-ink">{{ stats.totals.orders }}</b> orders of {{ groupsText }}.
          </p>
          <p class="mt-4 text-sm text-ink-soft">Click an order to see its families.</p>
        </div>

        <ul class="lg:col-span-8 space-y-1">
          <li
            v-for="(o, i) in stats.orders"
            :key="o.name"
          >
            <button
              type="button"
              class="group w-full grid grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr] items-center gap-3 rounded-lg px-2 py-2 text-left hover:bg-paper disabled:cursor-default"
              :aria-expanded="open === o.name"
              :disabled="!o.families.length"
              :title="`${o.name}: ${o.articles} articles, ${o.families.length} families`"
              @click="open = open === o.name ? null : o.name"
            >
              <span class="min-w-0">
                <span class="block font-serif font-semibold text-ink leading-tight truncate">{{ o.name }}</span>
                <span class="block text-[0.7rem] text-ink-soft">
                  {{ o.cls }}<template v-if="o.families.length"> · {{ o.families.length }} {{ o.families.length === 1 ? 'family' : 'families' }}</template>
                </span>
              </span>
              <span class="flex items-center gap-2 min-w-0">
                <span class="relative h-5 flex-1">
                  <span
                    class="absolute inset-y-0 left-0 rounded-r bg-senary transition-[width] duration-1000 ease-out group-hover:bg-ink"
                    :style="{ width: ordersSeen ? `${Math.max(1.5, (o.articles / maxOrder) * 100)}%` : '0%', transitionDelay: `${i * 70}ms` }"
                  />
                </span>
                <span class="w-10 shrink-0 text-sm font-semibold text-ink tabular-nums">{{ o.articles }}</span>
                <svg
                  v-if="o.families.length"
                  class="w-4 h-4 shrink-0 text-ink-soft transition-transform"
                  :class="open === o.name ? 'rotate-180' : ''"
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
                <span
                  v-else
                  class="w-4 shrink-0"
                />
              </span>
            </button>

            <!-- Families of this order -->
            <div
              class="grid transition-[grid-template-rows] duration-500 ease-out"
              :class="open === o.name ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden">
                <ul class="ml-2 sm:ml-[10.5rem] mr-12 my-2 pl-4 border-l-2 border-rule grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                  <li
                    v-for="(f, j) in o.families"
                    :key="f.name"
                    class="grid grid-cols-[1fr_auto] items-center gap-2 text-sm"
                  >
                    <NuxtLink
                      :to="{ path: '/insecta_mundi', query: { search: f.name } }"
                      class="min-w-0"
                      :title="`Articles on ${f.name}`"
                    >
                      <span class="block truncate text-ink hover:text-senary">{{ f.name }}</span>
                      <span class="mt-0.5 block h-1.5 rounded-r bg-rule overflow-hidden">
                        <span
                          class="block h-full rounded-r bg-senary transition-[width] duration-700 ease-out"
                          :style="{ width: open === o.name ? `${(f.articles / maxFamily) * 100}%` : '0%', transitionDelay: `${j * 30}ms` }"
                        />
                      </span>
                    </NuxtLink>
                    <span class="text-xs font-semibold text-ink tabular-nums">{{ f.articles }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <!-- ============ Years + top families ============ -->
      <section class="grid lg:grid-cols-2 gap-10">
        <div ref="yearsEl">
          <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Growth</p>
          <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Articles per year</h2>
          <div
            class="mt-8 h-64 flex items-end gap-3 border-b border-rule"
            role="img"
            :aria-label="`Articles per year: ${stats.perYear.map((y) => `${y.year} ${y.missing ? 'not in archive' : y.articles}`).join(', ')}`"
          >
            <div
              v-for="(y, i) in stats.perYear"
              :key="y.year"
              class="flex-1 h-full flex flex-col justify-end items-center"
              :title="y.missing ? `${y.year}: not yet in the online archive` : `${y.year}: ${y.articles} articles`"
            >
              <span class="mb-1 text-xs font-semibold text-ink tabular-nums">{{ y.missing ? '—' : y.articles }}</span>
              <span
                v-if="!y.missing"
                class="w-full max-w-12 rounded-t bg-senary transition-[height] duration-1000 ease-out"
                :class="y.year === currentYear ? 'opacity-60' : ''"
                :style="{ height: yearsSeen ? `${(y.articles / maxYear) * 85}%` : '0%', transitionDelay: `${i * 90}ms` }"
              />
              <span
                v-else
                class="w-full max-w-12 h-8 rounded-t border-2 border-dashed border-rule"
              />
            </div>
          </div>
          <div class="mt-2 flex gap-3">
            <span
              v-for="y in stats.perYear"
              :key="y.year"
              class="flex-1 text-center text-xs text-ink-soft tabular-nums"
              >{{ y.year }}</span
            >
          </div>
          <p class="mt-3 text-xs text-ink-soft">
            {{ currentYear }} is still in progress<template v-if="stats.totals.missingYears.length">
              · {{ stats.totals.missingYears.join(', ') }} not yet in the online archive</template
            >.
          </p>
        </div>

        <div ref="famEl">
          <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Most studied</p>
          <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Top 10 families</h2>
          <ol class="mt-8 space-y-2.5">
            <li
              v-for="(f, i) in stats.topFamilies"
              :key="f.name"
              class="grid grid-cols-[1.5rem_8.5rem_1fr_2rem] sm:grid-cols-[1.5rem_10rem_1fr_2rem] items-center gap-2"
            >
              <span class="font-serif text-sm text-ink-soft tabular-nums">{{ i + 1 }}</span>
              <NuxtLink
                :to="{ path: '/insecta_mundi', query: { search: f.name } }"
                class="min-w-0 truncate"
              >
                <span class="font-semibold text-ink hover:text-senary">{{ f.name }}</span>
                <span class="block text-[0.7rem] text-ink-soft">{{ f.order }}</span>
              </NuxtLink>
              <span class="h-4">
                <span
                  class="block h-full rounded-r bg-senary transition-[width] duration-1000 ease-out"
                  :style="{ width: famSeen ? `${(f.articles / maxFamily) * 100}%` : '0%', transitionDelay: `${i * 70}ms` }"
                />
              </span>
              <span class="text-sm font-semibold text-ink tabular-nums">{{ f.articles }}</span>
            </li>
          </ol>
        </div>
      </section>

      <!-- ============ Authors & records ============ -->
      <section
        ref="authEl"
        class="grid lg:grid-cols-12 gap-10"
      >
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Our authors</p>
          <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Most published authors</h2>
          <ol class="mt-6 divide-y divide-rule">
            <li
              v-for="(a, i) in stats.topAuthors"
              :key="a.name"
              class="py-2.5 flex items-center gap-3 transition-all duration-500"
              :class="authSeen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'"
              :style="{ transitionDelay: `${i * 70}ms` }"
            >
              <span
                class="grid place-items-center w-8 h-8 rounded-full text-sm font-semibold"
                :class="i < 3 ? 'bg-ink text-white' : 'bg-paper text-ink border border-rule'"
                >{{ i + 1 }}</span
              >
              <NuxtLink
                :to="{ path: '/insecta_mundi', query: { search: a.name.split(' ').at(-1) } }"
                class="flex-1 font-medium text-ink hover:text-senary"
                >{{ a.name }}</NuxtLink
              >
              <span class="text-sm text-ink-soft tabular-nums">{{ a.articles }} articles</span>
            </li>
          </ol>
        </div>

        <div class="lg:col-span-7 grid sm:grid-cols-2 gap-4 self-start">
          <div class="rounded-2xl bg-ink text-white p-6">
            <p class="text-xs uppercase tracking-[0.16em] text-quaternary font-semibold">Teamwork</p>
            <p class="mt-2 font-serif text-5xl font-bold">{{ stats.totals.meanAuthors }}</p>
            <p class="mt-1 text-white/75 text-sm">authors per article on average — and {{ stats.totals.soloShare }}% are written by a single author.</p>
          </div>
          <div class="rounded-2xl border border-rule bg-paper p-6">
            <p class="text-xs uppercase tracking-[0.16em] text-senary font-semibold">New to science</p>
            <p class="mt-2 font-serif text-5xl font-bold text-ink">{{ newTaxaShare }}%</p>
            <p class="mt-1 text-ink-soft text-sm">of articles describe new species, genera or other new taxa in their title.</p>
          </div>
          <NuxtLink
            :to="stats.records.longest.path"
            class="group rounded-2xl border border-rule bg-white p-6 hover:border-quaternary"
          >
            <p class="text-xs uppercase tracking-[0.16em] text-senary font-semibold">Longest article</p>
            <p class="mt-2 font-serif text-4xl font-bold text-ink">{{ stats.records.longest.pages }} <span class="text-lg font-normal">pages</span></p>
            <p class="mt-2 text-sm text-ink group-hover:text-senary leading-snug line-clamp-3">{{ stats.records.longest.title }}</p>
            <p class="mt-1 text-xs text-ink-soft">No. {{ stats.records.longest.issue }} · {{ stats.records.longest.year }}</p>
          </NuxtLink>
          <NuxtLink
            :to="stats.records.mostAuthors.path"
            class="group rounded-2xl border border-rule bg-white p-6 hover:border-quaternary"
          >
            <p class="text-xs uppercase tracking-[0.16em] text-senary font-semibold">Biggest team</p>
            <p class="mt-2 font-serif text-4xl font-bold text-ink">
              {{ stats.records.mostAuthors.authors }} <span class="text-lg font-normal">authors</span>
            </p>
            <p class="mt-2 text-sm text-ink group-hover:text-senary leading-snug line-clamp-3">{{ stats.records.mostAuthors.title }}</p>
            <p class="mt-1 text-xs text-ink-soft">No. {{ stats.records.mostAuthors.issue }} · {{ stats.records.mostAuthors.year }}</p>
          </NuxtLink>
        </div>
      </section>

      <p class="text-xs text-ink-soft leading-relaxed max-w-3xl">
        <b>How these numbers are made.</b> Figures cover the {{ stats.totals.articles }} articles in the online archive ({{ stats.totals.firstYear }}–{{
          stats.totals.lastYear
        }}) and are recalculated every time the website is updated. Orders and families come from the taxa each article is tagged with; a family
        is placed in the order it is most often tagged with, and an article can count for more than one order. Authors are matched by surname and
        first initial. New taxa are counted from article titles.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import CountUp from '~/components/Stats/CountUp.vue'
import InsectaMundiHeader from '~/components/InsectaMundi/InsectaMundiHeader.vue'
import { useInView } from '~/composables/useInView'

const { data: stats } = await useAsyncData('im-stats', () => $fetch('/im-stats.json'))

const currentYear = new Date().getFullYear()
const FOUNDED = 1985 // first volume of Insecta Mundi
const open = ref(null)

const { el: countersEl, seen: countersSeen } = useInView(0.3)
const { el: ordersEl, seen: ordersSeen } = useInView(0.15)
const { el: yearsEl, seen: yearsSeen } = useInView(0.3)
const { el: famEl, seen: famSeen } = useInView(0.3)
const { el: authEl, seen: authSeen } = useInView(0.2)

const t = computed(() => stats.value.totals)
const counters = computed(() => [
  { label: 'Articles', value: t.value.articles, note: `in the online archive (${t.value.firstYear}–${t.value.lastYear})` },
  { label: 'Authors', value: t.value.authors, note: 'different people' },
  { label: 'Pages', value: t.value.pages, note: 'of systematics' },
  { label: 'Orders', value: t.value.orders, note: 'insects & other arthropods' },
  { label: 'Families', value: t.value.families, note: 'covered so far' },
  { label: 'New taxa papers', value: t.value.newTaxa, note: 'describing new taxa' }
])

// "insects, arachnids, millipedes and springtails" — from the classes present
const COMMON = { Insecta: 'insects', Arachnida: 'arachnids', Diplopoda: 'millipedes', Chilopoda: 'centipedes', Collembola: 'springtails', Crustacea: 'crustaceans' }
const groupsText = computed(() => {
  const g = [...new Set(stats.value.orders.map((o) => COMMON[o.cls] || o.cls))]
  return g.length > 1 ? `${g.slice(0, -1).join(', ')} and ${g.at(-1)}` : g[0]
})

const top = computed(() => stats.value.orders[0])
const topShare = computed(() => Math.round((top.value.articles / t.value.articles) * 100))
const newTaxaShare = computed(() => Math.round((t.value.newTaxa / t.value.articles) * 100))
const maxOrder = computed(() => Math.max(...stats.value.orders.map((o) => o.articles)))
const maxFamily = computed(() => Math.max(...stats.value.topFamilies.map((f) => f.articles)))
const maxYear = computed(() => Math.max(...stats.value.perYear.map((y) => y.articles)))

useHead({
  title: 'Insecta Mundi in numbers',
  meta: [{ name: 'description', content: 'Orders, families, authors and growth of Insecta Mundi, recalculated from every published article.' }]
})
</script>
