<template>
  <section class="container mx-auto flex my-10 justify-between px-8">
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
            class="bg-green-600 text-white inline-block"
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
                  v-for="{ name, affiliation } in publication.authors"
                  class="py-2"
                >
                  <p class="font-bold">{{ name }}</p>
                  <p>{{ affiliation }}</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="prose max-w- max-w-5xl">
            <template v-if="publication.abstract">
              <h3 class="text-2xl">Abstract</h3>
              <p v-html="publication.abstract" />
            </template>

            <template v-if="publication.resumen">
              <h3 class="text-2xl">Resumen</h3>
              <p>{{ publication.resumen }}</p>
            </template>

            <template v-if="publication.references">
              <h3 class="text-2xl">References</h3>
              <ul>
                <li
                  v-for="reference in publication.references"
                  :key="reference"
                >
                  <span class="font-bold">{{ reference.authors }} {{ reference.year }}</span> <span v-html="reference.title" /><span v-if="reference.pages">: {{ reference.pages }}</span> <span v-if="reference.doi">DOI: {{ reference.doi }}</span>
                </li>
              </ul>
            </template>
          </div>
        </div>

        <div class="flex flex-col gap-4 max-w-96 mt-6">
          <div class="border px-6 py-4 rounded">
            <h3 class="text-2xl mb-2">How to cite</h3>
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
        to="/publications"
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
