<template>
  <section class="container mx-auto flex my-10 justify-between px-8">
    <article>
      <div class="text-4xl">
        <span class="font-bold">{{ data.title }}</span>
        <template v-if="data?.categories.length">
          <span> - </span>
          <Tag
            v-for="category in data?.categories"
            class="bg-green-600 text-white"
            :label="category"
          />
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

      <ContentRenderer :value="data">
        <div class="prose prose-base">
          <ContentRendererMarkdown :value="data" />
        </div>
        <template #empty>
          <h2>No publication found</h2>
        </template>
      </ContentRenderer>
      <NuxtLink
        class="uppercase items-center flex my-10"
        to="/publications"
      >
        <div class="i-heroicons-arrow-left inline-block mr-1.5"></div>
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
