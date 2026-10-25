<template>
  <section class="container mx-auto px-6 py-10">
    <!-- Breadcrumb -->
    <nav
      class="text-sm text-ink-soft"
      aria-label="Breadcrumb"
    >
      <NuxtLink
        to="/insecta_mundi"
        class="hover:text-senary"
        ><i>Insecta Mundi</i></NuxtLink
      >
      <template v-if="year">
        <span class="mx-1.5 opacity-50">/</span>
        <NuxtLink
          :to="{ path: '/insecta_mundi', query: { year } }"
          class="hover:text-senary"
          >{{ year }}</NuxtLink
        >
      </template>
      <template v-if="publication.issue">
        <span class="mx-1.5 opacity-50">/</span>
        <span>No. {{ publication.issue }}</span>
      </template>
    </nav>

    <div class="mt-4 grid lg:grid-cols-12 gap-10">
      <!-- Main column -->
      <article class="lg:col-span-8 min-w-0">
        <h1
          class="font-serif font-bold text-3xl sm:text-4xl leading-tight text-ink"
          v-html="publication.title"
        />

        <div
          v-if="publication?.categories?.length"
          class="mt-4 flex flex-wrap gap-1.5"
        >
          <NuxtLink
            v-for="category in publication.categories"
            :key="category"
            :to="{ path: '/insecta_mundi', query: { search: category } }"
            class="text-xs px-2.5 py-1 rounded-full bg-secondary/60 text-ink hover:bg-secondary"
            :title="`More articles on ${category}`"
          >
            {{ category }}
          </NuxtLink>
        </div>

        <!-- Authors -->
        <ul
          v-if="publication.authors"
          class="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4"
        >
          <li
            v-for="({ first_name, last_name, suffix, affiliation, orcid }, i) in publication.authors"
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
            v-if="publication.doi"
            class="flex flex-wrap gap-2"
          >
            <dt class="font-semibold text-ink w-24">DOI</dt>
            <dd>
              <a
                :href="normalizedDoi(publication.doi)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-senary hover:underline break-all"
                >{{ publication.doi }}</a
              >
            </dd>
          </div>
          <div
            v-if="publication.zoobank"
            class="flex flex-wrap gap-2"
          >
            <dt class="font-semibold text-ink w-24">ZooBank</dt>
            <dd>
              <a
                :href="zoobankUrl(publication.zoobank)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-senary hover:underline break-all"
                >{{ publication.zoobank }}</a
              >
            </dd>
          </div>
          <div
            v-if="publication?.keywords?.length"
            class="flex flex-wrap gap-2"
          >
            <dt class="font-semibold text-ink w-24">Keywords</dt>
            <dd class="flex-1 text-ink-soft">
              <template
                v-for="(keyword, index) in publication.keywords"
                :key="index"
              >
                <span v-html="keyword" /><span v-if="index < publication.keywords.length - 1">, </span>
              </template>
            </dd>
          </div>
        </dl>

        <div
          v-if="publication.comment"
          class="mt-6 p-4 border-l-4 border-quaternary bg-paper rounded-r-lg"
        >
          <p class="font-semibold text-senary">Note</p>
          <p
            class="mt-1 text-ink"
            v-html="publication.comment"
          />
        </div>

        <div class="mt-8 prose prose-neutral max-w-none prose-headings:font-serif prose-a:text-senary">
          <template v-if="publication.abstract">
            <h2>Abstract</h2>
            <p v-html="publication.abstract" />
          </template>

          <template v-if="publication.resumen">
            <h2>Resumen</h2>
            <p v-html="publication.resumen" />
          </template>

          <template v-if="publication.references?.length">
            <h2>
              References <span class="text-base font-sans font-normal text-ink-soft">({{ publication.references.length }})</span>
            </h2>
            <ul class="!pl-0 list-none text-[0.95rem]">
              <li
                v-for="(reference, i) in shownReferences"
                :key="i"
                class="!pl-0"
              >
                <span class="font-semibold">{{ reference.authors }} {{ reference.year }}. </span>
                <span v-html="reference.title" />
                <span v-if="reference.pages">
                  <template v-if="/p/i.test(reference.pages)">. {{ reference.pages }}</template>
                  <template v-else>: {{ reference.pages }}. </template>
                </span>
                <a
                  v-if="reference.doi"
                  :href="normalizedDoi(reference.doi)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="break-all"
                  >{{ normalizedDoi(reference.doi) }}</a
                >
                <span v-if="reference.url">
                  Available at
                  <a
                    :href="normalizedUrl(reference.url)"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="break-all"
                    >{{ reference.url }}</a
                  >
                </span>
                <span v-if="reference.access"> {{ reference.access }}</span>
              </li>
            </ul>
            <button
              v-if="publication.references.length > REF_LIMIT"
              type="button"
              class="not-prose mt-2 text-sm font-semibold text-senary hover:underline"
              @click="allRefs = !allRefs"
            >
              {{ allRefs ? 'Show fewer references' : `Show all ${publication.references.length} references` }}
            </button>
          </template>
        </div>

        <button
          type="button"
          class="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-senary"
          @click="goBack"
        >
          <IconArrowLeft class="h-4" />
          Back
        </button>
      </article>

      <!-- Sidebar -->
      <aside class="lg:col-span-4">
        <div class="lg:sticky lg:top-20 space-y-4">
          <div class="rounded-xl border border-rule bg-paper p-5 space-y-3">
            <a
              v-if="publication.download"
              :href="publication.download"
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
            <p
              v-if="publication.originalissue"
              class="text-sm text-ink-soft text-center"
            >
              Related original publication
              <NuxtLink
                :to="publication.linkedoriginalurl"
                class="font-semibold text-senary hover:underline"
                >{{ publication.originalissue }}</NuxtLink
              >
            </p>

            <a
              v-if="publication.revised"
              :href="publication.revised"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-otenary text-white font-semibold hover:bg-senary transition-colors"
            >
              Revised manuscript
            </a>
            <p
              v-if="publication.linkedissueurl"
              class="text-sm text-ink-soft text-center"
            >
              See the related <b>erratum</b> in
              <NuxtLink
                :to="publication.linkedissueurl"
                class="font-semibold text-senary hover:underline"
                >{{ publication.linkedissue }}</NuxtLink
              >
            </p>

            <a
              v-for="(supp, index) in publication.supplementary || []"
              :key="index"
              :href="suppUrl(supp)"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center w-full px-4 py-2 rounded-full border border-rule bg-white text-sm font-medium text-ink hover:border-quaternary hover:text-senary"
              >{{ suppLabel(supp, index) }}</a
            >

            <dl class="grid grid-cols-2 gap-3 pt-2 text-sm">
              <div v-if="publication.issue">
                <dt class="text-xs uppercase tracking-wider text-ink-soft">Number</dt>
                <dd class="font-semibold text-ink">{{ publication.issue }}</dd>
              </div>
              <div v-if="publication.pagination">
                <dt class="text-xs uppercase tracking-wider text-ink-soft">Pages</dt>
                <dd class="font-semibold text-ink">{{ String(publication.pagination).replace(/(\d)-(\d)/g, '$1–$2') }}</dd>
              </div>
              <div v-if="publication.date">
                <dt class="text-xs uppercase tracking-wider text-ink-soft">Published</dt>
                <dd class="font-semibold text-ink">{{ publication.date }}</dd>
              </div>
              <div v-if="publication.reviseddate">
                <dt class="text-xs uppercase tracking-wider text-ink-soft">Unofficial revised version</dt>
                <dd class="font-semibold text-ink">{{ publication.reviseddate }}</dd>
              </div>
            </dl>
          </div>

          <div class="rounded-xl border border-rule bg-white p-5">
            <div class="flex items-center justify-between">
              <h2 class="font-serif text-lg font-semibold text-ink">How to cite</h2>
              <button
                type="button"
                class="text-xs font-semibold px-2.5 py-1 rounded-full border border-rule hover:border-quaternary hover:text-senary"
                @click="copyCitation"
              >
                {{ copied ? 'Copied ✓' : 'Copy' }}
              </button>
            </div>
            <div
              ref="citationRef"
              class="mt-3"
            >
              <PublicationCite
                class="text-sm text-ink"
                :publication="publication"
              />
            </div>
            <PublicationCitationDowload
              class="mt-3 text-sm"
              :publication="publication"
            />
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import PublicationCitationDowload from './PublicationCitationDowload.vue'

const props = defineProps({
  publication: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const citationRef = ref(null)
const copied = ref(false)

// Long reference lists are folded after the first REF_LIMIT entries
const REF_LIMIT = 15
const allRefs = ref(false)
const shownReferences = computed(() =>
  allRefs.value ? props.publication.references : (props.publication.references || []).slice(0, REF_LIMIT)
)

const year = computed(() => props.publication.date?.slice(0, 4))

const zoobankUrl = (lsid) => {
  const parts = lsid.split(':')
  const idPart = parts.slice(4).join(':')
  return `https://zoobank.org/References/${idPart}`
}

function normalizedUrl(url) {
  if (!url) return ''
  return url.startsWith('http://') || url.startsWith('https://') ? url : 'https://' + url
}

function normalizedDoi(doi) {
  if (!doi) return ''
  const clean = String(doi).replace(/^doi:\s*/i, '').trim()
  return clean.startsWith('http://') || clean.startsWith('https://') ? clean : `https://doi.org/${clean}`
}

function copyCitation() {
  if (!citationRef.value) return
  navigator.clipboard.writeText(citationRef.value.innerText.trim()).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  })
}

function goBack() {
  if (import.meta.client && window.history.length > 1) router.back()
  else router.push('/insecta_mundi')
}

function suppUrl(supp) {
  return typeof supp === 'string' ? supp : supp.url
}

function suppLabel(supp, index) {
  return typeof supp === 'string' ? `Supplementary material ${index + 1}` : supp.label
}
</script>
