<template>
  <section class="container mx-auto flex my-10 justify-between px-8">
    <article>
      <div class="text-4xl">
        <span class="font-bold">{{ data.title }}</span>
        <template v-if="data?.categories?.length">
          <span> - </span>
          <VTag
            v-for="category in data?.categories"
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
              <ul v-if="data.authors">
                <li
                  v-for="{ name, affiliation } in data.authors"
                  class="py-2"
                >
                  <p class="font-bold">{{ name }}</p>
                  <p>{{ affiliation }}</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="prose max-w- max-w-5xl">
            <template v-if="data.abstract">
              <h3 class="text-2xl">Abstract</h3>
              <p>{{ data.abstract }}</p>
            </template>

            <template v-if="data.resumen">
              <h3 class="text-2xl">Resumen</h3>
              <p>{{ data.resumen }}</p>
            </template>

            <template v-if="data.references">
              <h3 class="text-2xl">References</h3>
              <ul>
                <li
                  v-for="reference in data.references"
                  :key="reference"
                >
                  {{ reference }}
                </li>
              </ul>
            </template>
          </div>
        </div>

        <div class="flex flex-col gap-4 max-w-96">
          <div class="border px-6 py-4 rounded">
            <h3 class="text-2xl mb-2">How to cite</h3>
            <PublicationCite :publication="data" />
          </div>
          <div
            v-if="data.download"
            class="border px-6 py-4 rounded"
          >
            <a :href="data.download">Download</a>
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
const route = useRoute()
const { data } = await useAsyncData('publication', () =>
  queryContent('publications', route.params.slug).findOne()
)
</script>
