<template>
  <section>
    <div class="container mx-auto px-8">
      <h1 class="text-4xl font-black">Publications</h1>
      <div class="my-4">
        <ContentList path="/publications">
          <template #default="{ list }">
            <ul>
              <li
                v-for="publication in list"
                :key="publication._path"
                class="py-4"
              >
                <NuxtLink :to="publication._path">
                  <h2
                    class="text-xl font-medium"
                    v-html="publication.title"
                  ></h2>
                  <VTag
                    v-for="category in publication.categories"
                    :key="category"
                    class="bg-green-600 text-white inline-block"
                  >
                    {{ category }}
                  </VTag>
                </NuxtLink>
                <p>
                  {{ publication.authors?.map(({ name }) => name).join('; ') }}
                </p>
              </li>
            </ul>
          </template>
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentList>
      </div>
    </div>
  </section>
</template>
