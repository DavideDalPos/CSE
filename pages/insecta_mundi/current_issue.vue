<template>
  <section class="bg-foreground">
    <div class="container mx-auto px-8 my-10">
      <h1 class="text-4xl text-gray-700 font-bold">Current issue</h1>
      <div class="my-4">
        <ContentList :query="query">
          <template #default="{ list }">
            <ul>
              <li
                v-for="publication in list"
                :key="publication._path"
                class="py-4"
              >
                <NuxtLink :to="publication._path">
                  <h2
                    class="text-primary font-bold text-lg hover:text-secondary"
                    v-html="publication.title"
                  ></h2>
                  <div class="flex flex-row gap-1">
                    <VTag
                      v-for="category in publication.categories"
                      :key="category"
                      class="bg-quaternary text-foreground inline-block"
                    >
                      {{ category }}
                    </VTag>
                  </div>
                </NuxtLink>
                <p class="text-sm text-gray-700">
                  {{
                    publication.authors
                      ?.map(
                        ({ first_name, last_name }) =>
                          `${first_name} ${last_name}`
                      )
                      .join('; ')
                  }}
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

<script setup>
const latestPublication = await queryContent('insecta_mundi')
  .where({ date: { $ne: null } })
  .sort({ date: -1 })
  .limit(1)
  .only(['date'])
  .findOne()

const yearAndMonth = latestPublication.date.slice(
  0,
  latestPublication.date.lastIndexOf('-')
)

const query = {
  path: '/insecta_mundi',
  where: [
    {
      date: {
        $contains: yearAndMonth
      }
    }
  ]
}
</script>
