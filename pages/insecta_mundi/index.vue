<template>
  <section>
    <div class="container mx-auto px-8 my-10">
      <h1 class="text-4xl text-gray-700 font-bold">Publications</h1>
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
                    class="font-bold text-primary text-lg hover:text-secondary"
                    v-html="publication.title"
                  ></h2>
                  <VTag
                    v-for="category in publication.categories"
                    :key="category"
                    class="bg-tertiary text-gray-600 inline-block border border-quaternary inline-block mr-0.5"
                  >
                    {{ category }}
                  </VTag>
                </NuxtLink>
                <p class="text-gray-600 text-sm">
                  {{ publication.authors?.map(({ first_name, last_name }) => `${first_name} ${last_name}`).join('; ') }}
                </p>
                <div v-if="publication.doi" class="flex flex-row text-sm justify-between mt-1">
            <p>
              <span class="text-gray-700">DOI: </span>
              <span class="text-primary hover:text-tertiary hover:underline cursor-pointer">
                {{ publication.doi }}
              </span>
            </p>
          </div>
          <div
            v-if="publication.download"
            class="group border border-primary shadow px-2 py-1 text-xs rounded bg-secondary w-max text-yellow-700 hover:text-tertiary flex items-center space-x-1 hover:bg-primary transition duration-200 mt-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              class="w-4 h-4 text-yellow-700 group-hover:text-tertiary transition duration-200">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
            </svg>
            <a :href="publication.download">PDF</a>
          </div>
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
