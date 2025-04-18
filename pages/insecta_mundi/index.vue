<template>
  <section>
    <div class="container mx-auto px-8 my-10">
      <h1 class="text-4xl font-black">Publications</h1>
      <div class="my-4">
        <ContentList path="/insecta_mundi">
          <template #default="{ list }">
            <ul>
              <li
                v-for="publication in list"
                :key="publication._path"
                class="py-4"
              >
                <NuxtLink :to="publication._path">
                  <h2
                    class="font-bold"
                    v-html="publication.title"
                  ></h2>
                  <VTag
                    v-for="category in publication.categories"
                    :key="category"
                    class="bg-primary text-white inline-block mr-0.5"
                  >
                    {{ category }}
                  </VTag>
                </NuxtLink>
                <p class="text-gray-600">
                  {{ publication.authors?.map(({ first_name, last_name }) => `${first_name} ${last_name}`).join('; ') }}
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
