<template>
  <section class="container mx-auto flex my-10 justify-between px-8">
    <article>
      <div class="space-y-1">
        <!-- Title -->
        <h2
          class="font-serif font-semibold text-[30px] leading-tight text-otenary transition-colors"
          v-html="publication.title"
        ></h2>

        <!-- Categories -->
        <div
          v-if="publication?.categories?.length"
          class="flex flex-wrap gap-1 mt-3"
        >
          <VTag
            v-for="category in publication.categories"
            :key="category"
            class="bg-primary/90 text-white text-[11px] py-0.5 px-2 rounded"
          >
            {{ category }}
          </VTag>
        </div>
      </div>

      <div class="flex flex-row justify-between gap-8">
        <div class="w-[calc(100%-26rem)] max-w-[65rem]">
          <div class="flex flex-row justify-between my-4 gap-4 text-gray-800">
            <div>
              <ul v-if="publication.authors">
                <li
                  v-for="{
                    first_name,
                    last_name,
                    affiliation,
                    orcid
                  } in publication.authors"
                  class="py-2"
                >
                  <p class="font-bold text-[20px]">
                    {{ first_name }} {{ last_name }}
                  </p>
                  <p class="text-[15px] text-gray-500 prose leading-tight">
                    {{ affiliation }}
                  </p>
                  <a
                    v-if="orcid"
                    :href="orcid"
                    class="text-sm text-quinary hover:underline hover:text-quaternary inline-flex items-center gap-1"
                    target="_blank"
                  >
                    <img
                      src="/images/orcid.svg"
                      alt="ORCID icon"
                      class="w-4 h-4"
                    />
                    {{ orcid }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="publication.doi"
            class="flex flex-row justify-between my-4 gap-4"
          >
            <p>
              <span class="text-gray-700 font-bold">DOI: </span>
              <a
                :href="publication.doi"
                target="_blank"
                rel="noopener noreferrer"
                class="text-novenary hover:text-quaternary hover:underline cursor-pointer"
              >
                {{ publication.doi }}
              </a>
            </p>
          </div>

          <div
            v-if="publication.zoobank"
            class="flex flex-row justify-between my-4 gap-4"
          >
            <p>
              <span class="text-gray-700 font-bold">Zoobank: </span>
              <a
                :href="zoobankUrl(publication.zoobank)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-novenary hover:text-quaternary hover:underline cursor-pointer"
              >
                {{ publication.zoobank }}
              </a>
            </p>
          </div>

          <template v-if="publication?.keywords?.length">
            <div class="mb-10">
              <span class="text-gray-700 font-bold">Keywords: </span>
              <span class="text-gray-500">
                <template
                  v-for="(keyword, index) in publication.keywords"
                  :key="index"
                >
                  <span v-html="keyword"></span
                  ><span v-if="index < publication.keywords.length - 1"
                    >,
                  </span>
                </template>
              </span>
            </div>
          </template>

          <div class="prose w-full max-w-[65rem]">
            <template v-if="publication.abstract">
              <h3 class="text-2xl">Abstract</h3>
              <p
                v-html="publication.abstract"
                class="text-justify"
              />
            </template>

            <template v-if="publication.resumen">
              <h3 class="text-2xl">Resumen</h3>
              <p
                v-html="publication.resumen"
                class="text-justify"
              />
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
                    >{{ reference.authors }} {{ reference.year }}.
                  </span>
<span v-html="reference.title" />
<span v-if="reference.pages">
  <template v-if="/p/i.test(reference.pages)">. {{ reference.pages }}</template>
  <template v-else>: {{ reference.pages }}. </template>
</span>
<span v-if="reference.doi">&nbsp;
  <a
    :href="'https://doi.org/' + reference.doi"
    target="_blank"
    rel="noopener noreferrer"
    class="text-novenary hover:text-quaternary hover:underline cursor-pointer"
  >
    {{ reference.doi }}
  </a>
</span>
                  <span v-if="reference.url">
                    Available at
                    <a
                      :href="normalizedUrl(reference.url)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-novenary hover:text-quaternary hover:underline cursor-pointer"
                    >
                      {{ reference.url }}
                    </a> </span
                  >&nbsp;
                  <span v-if="reference.access">{{ reference.access }}</span>
                </li>
              </ul>
            </template>
          </div>
        </div>

        <!-- RIGHT COLUMN with gray background -->
        <div
          class="flex flex-col gap-3 max-w-96 mt-6 bg-primary/30 rounded-lg p-4"
        >
          <div
            v-if="publication.download"
            class="download-section border-b border-gray-400 pb-5 mb-2"
          >
            <div
              class="group text-foreground bg-gray-700 px-4 py-2 text-[16px] rounded-sm flex items-center hover:text-white justify-center space-x-2 hover:bg-gray-500 hover:shadow-lg transition-all duration-200 shadow-sm w-max mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="w-5 h-5 group-hover:text-white transition font-semibold duration-200 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 13l2 2 2-2m-2 2v6"
                />
              </svg>
              <a
                :href="publication.download"
                class="text-base"
                target="_blank"
              >
                Full-text PDF
              </a>
            </div>
<p
  v-if="publication.originalissue"
  class="text-sm text-gray-600 text-center mt-4 max-w-md mx-auto"
>
  See related original publication
  <NuxtLink
    :to="publication.linkedoriginalurl"
    class="ml-1 inline-block text-xs px-0.5 py-0.5 rounded-sm bg-gray-700 text-white hover:bg-gray-500 transition-all shadow-sm"
  >
    {{ publication.originalissue }}
  </NuxtLink>
</p>

          </div>


          <div
            v-if="publication.revised"
            class="download-section border-b border-gray-400 pb-5 mb-2"
          >
            <div
              class="group text-foreground bg-rose-900 px-4 py-2 text-[16px] rounded-sm flex items-center hover:text-white justify-center space-x-2 hover:bg-gray-500 hover:shadow-lg transition-all duration-200 shadow-sm w-max mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="w-5 h-5 group-hover:text-white transition font-semibold duration-200 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 13l2 2 2-2m-2 2v6"
                />
              </svg>
              <a
                :href="publication.revised"
                class="text-base"
                target="_blank"
              >
                Revised Manuscript
              </a>
            </div>
<p class="text-sm text-gray-600 text-center mt-4 max-w-md mx-auto">
  See related <b>erratum</b> in publication
  <NuxtLink
    :to="publication.linkedissueurl"
    class="ml-1 inline-block text-xs px-0.5 py-0.5 rounded-sm bg-rose-900 text-white hover:bg-gray-500 transition-all shadow-sm"
  >
    {{ publication.linkedissue }}
  </NuxtLink>
</p>

          </div>







          <div
            v-if="publication.supplementary?.length > 0"
            class="supplementary-section pb-2 mb-2 border-b border-gray-400"
          >
            <div
              v-for="(supp, index) in publication.supplementary"
              :key="index"
              class="group bg-primary px-4 py-2 rounded-sm flex text-white items-center justify-center space-x-2 hover:shadow-lg hover:text-senary/80 hover:bg-primary/50 transition-all duration-200 w-max mx-auto mb-3 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="w-5 h-5 group-hover:text-senary/80 transition font-semibold duration-200 text-white"
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
                rel="noopener"
                >Suppl. Material {{ index + 1 }}</a
              >
            </div>
          </div>
          <div
            v-if="publication.date"
            class="border border-otenary/80 bg-white px-4 rounded shadow max-w-[300px]"
          >
            <p
              class="text-white bg-otenary px-4 w-[calc(100%+2rem)] -mx-4 border-otenary py-1 mb-1"
            >
              Publication
            </p>
            <div class="mb-1">
              <span class="text-[15px] text-gray-900">{{
                publication.issue
              }}</span>
            </div>
          </div>
          <div
            v-if="publication.date"
            class="border border-quaternary/80 bg-white px-4 rounded shadow max-w-[300px]"
          >
            <p
              class="text-white bg-quaternary px-4 w-[calc(100%+2rem)] -mx-4 border-quaternary py-1 mb-1"
            >
              Published
            </p>
            <div class="mb-1">
              <span class="text-[15px] text-black/80">{{
                publication.date
              }}</span>
            </div>
          </div>
                    <div
            v-if="publication.reviseddate"
            class="border border-quaternary/80 bg-white px-4 rounded shadow max-w-[300px]"
          >
            <p
              class="text-white bg-quaternary px-4 w-[calc(100%+2rem)] -mx-4 border-quaternary py-1 mb-1"
            >
              Unofficial Revised Version
            </p>
            <div class="mb-1">
              <span class="text-[15px] text-black/80">{{
                publication.reviseddate
              }}</span>
            </div>
          </div>
          <div
            class="border px-4 rounded border-primary/80 bg-white shadow max-w-[300px]"
          >
            <h3
              class="text-lg text-white bg-primary px-4 w-[calc(100%+2rem)] -mx-4 border-primary py-1 mb-2"
            >
              How to cite
            </h3>
            <div class="mb-2">
              <PublicationCite
                class="text-sm text-black/80 mt-2"
                :publication="publication"
              />
            </div>
          </div>
            <div>
              <PublicationCitationDowload
                class="text-sm text-black/80"
                :publication="publication"
              />
            </div>
        </div>
      </div>

      <button
        type="button"
        class="uppercase items-center flex my-10 gap-1.5 cursor-pointer"
        @click="goBack"
      >
        <IconArrowLeft class="h-4 inline-block" />
        <span>Back</span>
      </button>
    </article>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PublicationCitationDowload from './PublicationCitationDowload.vue'

defineProps({
  publication: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const zoobankUrl = (lsid) => {
  const parts = lsid.split(':')
  const idPart = parts.slice(4).join(':')
  return `https://zoobank.org/References/${idPart}`
}

function normalizedUrl(url) {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  return 'https://' + url
}

function goBack() {
  if (import.meta.client) {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/insecta_mundi')
    }
  }
}
</script>
