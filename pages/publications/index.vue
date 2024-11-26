<template>
  <ContentList path="/publications">
    <template #default="{ list }">
      <div
        v-for="publication in list"
        :key="publication._path"
      >
        <h2>{{ publication.title }}</h2>
        <p>{{ publication.description }}</p>
      </div>
    </template>
    <template #not-found>
      <p>No articles found.</p>
    </template>
  </ContentList>
</template>
