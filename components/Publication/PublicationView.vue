<template>
  <section class="bg-foreground container mx-auto flex my-10 justify-between px-8">
    <article>
      <div class="text-4xl">
        <span
          class="font-bold"
          v-html="publication.title"
        />
        <template v-if="publication?.categories?.length">
          <span> - </span>
          <VTag
            v-for="category in publication?.categories"
            class="bg-primary text-white inline-block mr-0.5"
          >
            {{ category }}
          </VTag>
        </template>
      </div>
      <div class="flex flex-row justify-between">
        <div>
          <div class="flex flex-row justify-between my-4 gap-4">
            <div>
              <ul v-if="publication.authors">
                <li
                  v-for="{ first_name, last_name, affiliation, orcid } in publication.authors"
                  class="py-2"
                >
                  <p class="font-bold text-lg">{{ first_name }} {{ last_name }}</p>
                  <p class="text-sm text-gray-600">{{ affiliation }}</p>
                  <a
                    v-if="orcid"
                    :href="orcid"
                    class="text-xs text-quinary hover:underline hover:text-quaternary inline-flex items-center gap-1"
                    target="_blank"
                                    >
                    <img src="/images/orcid.svg" alt="ORCID icon" class="w-4 h-4">
                    {{ orcid }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div v-if="publication.doi" class="flex flex-row justify-between my-4 gap-4">
            <p>
              <span class="text-gray-700 font-bold">DOI: </span>
              <span class="text-quinary hover:text-quaternary hover:underline cursor-pointer">
                {{ publication.doi }}
              </span>
            </p>
          </div>
          
          <template v-if="publication?.keywords?.length">
            <div class="mb-10">
              <span class="text-gray-700 font-bold">Keywords: </span>
                <span class="text-gray-500">
                  <template v-for="(keyword, index) in publication.keywords">
                    {{ keyword }}<span v-if="index < publication.keywords.length - 1">, </span>
                  </template>
                </span>
            </div>
          </template>

          <div class="prose max-w- max-w-5xl">

            <template v-if="publication.abstract">
              <h3 class="text-2xl">Abstract</h3>
              <p v-html="publication.abstract" class="text-justify" />
            </template>

            <template v-if="publication.resumen">
              <h3 class="text-2xl">Resumen</h3>
              <p v-html="publication.resumen" class="text-justify" />
            </template>

            <template v-if="publication.references">
              <h3 class="text-2xl">References</h3>
              <ul>
                <li
                  v-for="reference in publication.references"
                  :key="reference"
                >
                  <span class="font-bold"
                    >{{ reference.authors }} {{ reference.year }}. </span
                  >
                  <span v-html="reference.title" /><span v-if="reference.pages"
                    >: {{ reference.pages }}. </span
                  >
                  <span v-if="reference.doi" class="text-quinary hover:text-quaternary hover:underline cursor-pointer">{{ reference.doi }}</span>
                </li>
              </ul>
            </template>
          </div>
        </div>

        <div class="flex flex-col gap-4 max-w-96 mt-6">
          <div class="border px-6 py-4 rounded bg-gray-100">
            <h3 class="text-2xl mb-2 border-b border-black">How to cite</h3>
            <PublicationCite :publication="publication" />
          </div>
          <div
            v-if="publication.download"
            class="border px-6 py-4 rounded"
          >
            <a :href="publication.download">Download</a>
          </div>
        </div>
      </div>

      <NuxtLink
        class="uppercase items-center flex my-10 gap-1.5"
        to="/insecta_mundi"
      >
        <IconArrowLeft class="h-4 inline-block" />
        <span>Back</span>
      </NuxtLink>
    </article>
  </section>
</template>

<script setup>
defineProps({
  publication: {
    type: Object,
    required: true
  }
})
</script>
