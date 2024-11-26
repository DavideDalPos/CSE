<template>
  <section class="container mx-auto flex my-10 justify-between px-8">
    <article>
      <div class="text-4xl">
        <span class="font-bold">{{ data.title }}</span>
        <template v-if="data?.categories.length">
          <span> - </span>
          <VTag
            v-for="category in data?.categories"
            class="bg-green-600 text-white inline-block"
          >
            {{ category }}
          </VTag>
        </template>
      </div>
      <ul
        v-if="data.authors"
        class="my-4"
      >
        <li
          v-for="{ name, affiliation } in data.authors"
          class="py-2"
        >
          <p class="font-bold">{{ name }}</p>
          <p>{{ affiliation }}</p>
        </li>
      </ul>

      <div class="prose">
        <template v-if="data.abstract">
          <h3 class="text-2xl">Abstract</h3>
          <p>{{ data.abstract }}</p>
        </template>

        <template v-if="data.resumen">
          <h3 class="text-2xl">Resumen</h3>
          <p>{{ data.resumen }}</p>
        </template>
      </div>

      <NuxtLink
        class="uppercase items-center flex my-10 gap-1.5"
        to="/publications"
      >
        <IconArrowLeft class="h-4 inline-block" />
        <span>Back</span>
      </NuxtLink>
    </article>
    <BlogCategories />
  </section>
</template>

<script setup>
const route = useRoute()
const { data } = await useAsyncData('publication', () =>
  queryContent('publications', route.params.slug).findOne()
)
</script>
