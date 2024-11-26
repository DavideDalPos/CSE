<template>
  <div class="container mx-auto px-8">
    <ContentList path="/publications">
      <template #default="{ list }">
        <div
          v-for="publication in list"
          :key="publication._path"
        >
          <NuxtLink :to="publication._path">
            <h2 class="text-2xl font-bold">{{ publication.title }}</h2>
          </NuxtLink>
          <p>{{ publication.authors?.map(({ name }) => name).join('; ') }}</p>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>
