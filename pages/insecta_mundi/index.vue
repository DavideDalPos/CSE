<template>
  <main>
    <section class="container mx-auto px-8">
      <ContentList path="/insecta_mundi">
        <template #default="{ list }">
          <div
            v-for="article in list"
            :key="article._path"
          >
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>
