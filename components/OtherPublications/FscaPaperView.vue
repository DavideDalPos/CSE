<template>
  <section class="container mx-auto px-6 py-10">
    <!-- Breadcrumb -->
    <nav
      class="text-sm text-ink-soft"
      aria-label="Breadcrumb"
    >
      <NuxtLink
        to="/other_publications/FSCA"
        class="hover:text-senary"
        >FSCA publications</NuxtLink
      >
      <span class="mx-1.5 opacity-50">/</span>
      <NuxtLink
        :to="info.path"
        class="hover:text-senary"
        >{{ info.short }}</NuxtLink
      >
      <span class="mx-1.5 opacity-50">/</span>
      <span>Volume {{ paper.volume }}</span>
    </nav>

    <div class="mt-4 grid lg:grid-cols-12 gap-10">
      <!-- Main column -->
      <article class="lg:col-span-8 min-w-0">
        <p class="text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-senary">
          <i class="normal-case tracking-normal font-serif text-sm sm:text-base">{{ paper.journal || info.title }}</i>
        </p>
        <h1
          class="mt-2 font-serif font-bold text-3xl sm:text-4xl leading-tight text-ink"
          v-html="paper.title"
        />

        <div class="mt-4 flex flex-wrap gap-2 text-xs">
          <span class="px-2.5 py-1 rounded-full bg-ink text-white font-semibold">Volume {{ paper.volume }}</span>
          <span class="px-2.5 py-1 rounded-full bg-secondary/60 text-ink">{{ paper.year }}</span>
          <span
            v-if="paper.yearrevised"
            class="px-2.5 py-1 rounded-full bg-quaternary/20 text-senary font-medium"
            >Revised {{ paper.yearrevised }}</span
          >
          <span
            v-if="paper.pagination"
            class="px-2.5 py-1 rounded-full border border-rule text-ink-soft"
            >pp. {{ formatPages(paper.pagination) }}</span
          >
        </div>

        <a
          v-if="paper.pdf"
          :href="paper.pdf"
          target="_blank"
          rel="noopener"
          class="lg:hidden mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-senary transition-colors"
          >Full-text PDF <span aria-hidden="true">↓</span></a
        >

        <!-- Authors -->
        <ul
          v-if="paper.authors?.length"
          class="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4"
        >
          <li
            v-for="({ first_name, last_name, suffix, affiliation, orcid }, i) in paper.authors"
            :key="i"
          >
            <p class="font-semibold text-ink">
              {{ first_name }} {{ last_name }}<span v-if="suffix">, {{ suffix }}</span>
            </p>
            <p
              v-if="affiliation"
              class="text-sm text-ink-soft leading-snug"
            >
              {{ affiliation }}
            </p>
            <a
              v-if="orcid"
              :href="orcid"
              class="mt-1 text-xs text-ink-soft hover:text-senary inline-flex items-center gap-1"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/images/orcid.svg"
                alt="ORCID"
                class="w-3.5 h-3.5"
                loading="lazy"
              />
              {{ orcid.replace(/^https?:\/\/orcid.org\//, '') }}
            </a>
          </li>
        </ul>

        <!-- Identifiers -->
        <dl class="mt-6 grid gap-2 text-sm">
          <div
            v-if="paper.doi"
            class="flex flex-wrap items-center gap-2"
          >
            <dt class="font-semibold text-ink w-24">DOI</dt>
            <dd class="flex items-center gap-2 min-w-0">
              <a
                :href="doiUrl(paper.doi)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-senary hover:underline break-all"
                >{{ doiUrl(paper.doi) }}</a
              >
              <button
                type="button"
                class="shrink-0 text-[0.7rem] font-semibold px-2 py-0.5 rounded-full border border-rule hover:border-quaternary hover:text-senary"
                @click="copy(doiUrl(paper.doi), 'doi')"
              >
                {{ copied === 'doi' ? 'Copied ✓' : 'Copy' }}
              </button>
            </dd>
          </div>
          <div
            v-if="paper.zoobank"
            class="flex flex-wrap items-center gap-2"
          >
            <dt class="font-semibold text-ink w-24">ZooBank</dt>
            <dd class="flex items-center gap-2 min-w-0">
              <a
                :href="zoobankUrl(paper.zoobank)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-senary hover:underline break-all"
                >{{ paper.zoobank }}</a
              >
              <button
                type="button"
                class="shrink-0 text-[0.7rem] font-semibold px-2 py-0.5 rounded-full border border-rule hover:border-quaternary hover:text-senary"
                @click="copy(paper.zoobank, 'zb')"
              >
                {{ copied === 'zb' ? 'Copied ✓' : 'Copy' }}
              </button>
            </dd>
          </div>
          <div class="flex flex-wrap gap-2">
            <dt class="font-semibold text-ink w-24">ISSN</dt>
            <dd class="text-ink-soft">{{ info.issn }}</dd>
          </div>
        </dl>

        <!-- Abstract -->
        <div
          v-if="paper.abstract"
          class="mt-8"
        >
          <h2 class="font-serif text-2xl font-semibold text-ink">Abstract</h2>
          <div class="relative mt-3">
            <div
              class="im-text text-[1.02rem] sm:text-justify hyphens-auto overflow-hidden"
              :class="foldAbstract && !fullAbstract ? 'max-h-72' : ''"
              v-html="paper.abstract"
            />
            <div
              v-if="foldAbstract && !fullAbstract"
              class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"
            />
          </div>
          <button
            v-if="foldAbstract"
            type="button"
            class="mt-3 text-sm font-semibold text-senary hover:underline"
            @click="fullAbstract = !fullAbstract"
          >
            {{ fullAbstract ? 'Show less' : 'Read the full abstract' }}
          </button>
        </div>

        <!-- Neighbouring volumes -->
        <nav
          v-if="prev || next"
          class="mt-12 pt-6 border-t border-rule grid sm:grid-cols-2 gap-4"
          aria-label="Other volumes"
        >
          <NuxtLink
            v-if="prev"
            :to="prev._path"
            class="group rounded-xl border border-rule p-4 hover:border-quaternary"
          >
            <span class="text-xs uppercase tracking-wider text-ink-soft">← Volume {{ prev.volume }}</span>
            <span
              class="mt-1 block font-serif font-semibold text-ink group-hover:text-senary line-clamp-2"
              v-html="prev.title"
            />
          </NuxtLink>
          <span v-else />
          <NuxtLink
            v-if="next"
            :to="next._path"
            class="group rounded-xl border border-rule p-4 hover:border-quaternary sm:text-right"
          >
            <span class="text-xs uppercase tracking-wider text-ink-soft">Volume {{ next.volume }} →</span>
            <span
              class="mt-1 block font-serif font-semibold text-ink group-hover:text-senary line-clamp-2"
              v-html="next.title"
            />
          </NuxtLink>
        </nav>

        <button
          type="button"
          class="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-senary"
          @click="goBack"
        >
          <IconArrowLeft class="h-4" />
          Back
        </button>
      </article>

      <!-- Sidebar -->
      <aside class="lg:col-span-4">
        <div class="lg:sticky lg:top-20 space-y-4">
          <div class="rounded-xl border border-rule bg-paper p-5 space-y-4">
            <component
              :is="paper.pdf ? 'a' : 'div'"
              v-if="paper.image"
              :href="paper.pdf || undefined"
              :target="paper.pdf ? '_blank' : undefined"
              rel="noopener"
              class="block mx-auto max-w-[260px] lg:max-w-none"
              :title="paper.pdf ? 'Open the PDF' : undefined"
            >
              <img
                :src="paper.image"
                :alt="`Cover of volume ${paper.volume}`"
                class="w-full h-auto rounded-md border border-rule shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </component>

            <a
              v-if="paper.pdf"
              :href="paper.pdf"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-ink text-white font-semibold hover:bg-senary transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"
                />
              </svg>
              Full-text PDF
            </a>
            <a
              v-if="paper.pdfhigh"
              :href="paper.pdfhigh"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center w-full px-4 py-2 rounded-full border border-rule bg-white text-sm font-medium text-ink hover:border-quaternary hover:text-senary"
              >High-resolution PDF</a
            >

            <dl class="grid grid-cols-2 gap-3 pt-1 text-sm">
              <div>
                <dt class="text-xs uppercase tracking-wider text-ink-soft">Volume</dt>
                <dd class="font-semibold text-ink">{{ paper.volume }}</dd>
              </div>
              <div v-if="paper.pagination">
                <dt class="text-xs uppercase tracking-wider text-ink-soft">Pages</dt>
                <dd class="font-semibold text-ink">{{ formatPages(paper.pagination) }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wider text-ink-soft">Published</dt>
                <dd class="font-semibold text-ink">{{ paper.year }}</dd>
              </div>
              <div v-if="paper.yearrevised">
                <dt class="text-xs uppercase tracking-wider text-ink-soft">Revised</dt>
                <dd class="font-semibold text-ink">{{ paper.yearrevised }}</dd>
              </div>
            </dl>
          </div>

          <div class="rounded-xl border border-rule bg-white p-5">
            <div class="flex items-center justify-between">
              <h2 class="font-serif text-lg font-semibold text-ink">How to cite</h2>
              <button
                type="button"
                class="text-xs font-semibold px-2.5 py-1 rounded-full border border-rule hover:border-quaternary hover:text-senary"
                @click="copy(citationText, 'cite')"
              >
                {{ copied === 'cite' ? 'Copied ✓' : 'Copy' }}
              </button>
            </div>
            <p
              class="mt-3 text-sm text-ink leading-relaxed break-words"
              v-html="citationHtml"
            />
            <FscaCitationDownload
              class="mt-4"
              :publication="{ ...paper, issn: info.issn }"
              :plain-text="citationText"
            />
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import IconArrowLeft from '@/components/Icon/IconArrowLeft.vue'
import FscaCitationDownload from './FscaCitationDownload.vue'
import { FSCA_SERIES, sortVolumes, doiUrl, formatPages } from '~/helpers/fscaSeries'

const props = defineProps({
  publication: { type: Object, required: true },
  series: { type: String, required: true } // 'arthropod_papers' | 'occasional_papers'
})

const paper = computed(() => props.publication)
const info = FSCA_SERIES[props.series]
const router = useRouter()

// Neighbouring volumes in the same series
const { data: siblings } = await useAsyncData(`fsca-siblings-${props.series}`, () =>
  queryContent(info.collection).only(['_path', 'title', 'volume']).find()
)
const ordered = computed(() => sortVolumes(siblings.value).reverse()) // oldest → newest
const position = computed(() => ordered.value.findIndex((v) => v._path === paper.value._path))
const prev = computed(() => (position.value > 0 ? ordered.value[position.value - 1] : null))
const next = computed(() =>
  position.value >= 0 && position.value < ordered.value.length - 1 ? ordered.value[position.value + 1] : null
)

// Long abstracts are folded
const foldAbstract = computed(() => (paper.value.abstract || '').length > 1400)
const fullAbstract = ref(false)

// Citation: Last FM, Last FM. Year. Title. Series, Volume N: pages. DOI
const authorList = computed(() =>
  (paper.value.authors || [])
    .map((a) => {
      const last = (a.last_name || '').replace(/\./g, '')
      const initials = (a.first_name || '')
        .split(/\s+/)
        .filter(Boolean)
        .map((n) =>
          n
            .split('-')
            .map((s) => s.charAt(0))
            .join('-')
        )
        .join('')
      return [last, initials, a.suffix].filter(Boolean).join(' ')
    })
    .join(', ')
)

const citationHtml = computed(() => {
  const p = paper.value
  const pages = p.pagination ? `: ${formatPages(p.pagination)}` : ''
  const doi = p.doi
    ? ` <a href="${doiUrl(p.doi)}" target="_blank" rel="noopener" class="text-senary hover:underline break-all">${doiUrl(p.doi)}</a>`
    : ''
  return `<b>${authorList.value}.</b> ${p.year}. ${p.title}. <i>${p.journal || info.title}</i>, Volume ${p.volume}${pages}.${doi}`
})

const citationText = computed(() => citationHtml.value.replace(/<[^>]+>/g, ''))

const copied = ref('')
function copy(text, what) {
  if (!text || !import.meta.client) return
  navigator.clipboard.writeText(text).then(() => {
    copied.value = what
    setTimeout(() => (copied.value = ''), 1500)
  })
}

function zoobankUrl(lsid) {
  const id = String(lsid).split(':').slice(4).join(':')
  return `https://zoobank.org/References/${id}`
}

function goBack() {
  if (import.meta.client && window.history.length > 1) router.back()
  else router.push(info.path)
}
</script>
