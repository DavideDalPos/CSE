<template>
  <div class="container mx-auto py-4">
    <div v-for="post in data">
      <NuxtLink :to="post._path">
        <h1
          class="text-2xl font-bold"
          v-html="post.title"
        />
      </NuxtLink>
      <div class="flex gap-1">
        <Tag
          v-for="category in post.categories"
          :label="category"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData('category', () =>
  queryContent('publications')
    .where({ categories: { $contains: route.params.slug } })
    .find()
)
</script>
