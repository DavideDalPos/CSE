<template>
  <section>
    <div class="container mx-auto px-8 my-10">
      <h1 class="text-4xl text-gray-700 font-bold mb-10">Current Volume</h1>
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- LEFT COLUMN: Publications -->
        <div>
          <h2
            class="px-4 py-2 text-lg text-gray-800 font-medium bg-gray-100 border-l-4 border-primary/80"
          >
            <span class="text-sm text-gray-600">Published:</span>
            {{ formattedDate }}
          </h2>

          <div class="px-4">
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
                        class="text-gray-500 text-justify font-bold text-[17px] hover:text-primary/60 pr-20"
                        v-html="publication.title"
                      ></h2>
                      <div
                        class="flex justify-between items-center flex-wrap gap-y-1"
                      >
                        <div class="flex flex-row flex-wrap gap-1">
                          <VTag
                            v-for="category in publication.categories"
                            :key="category"
                            class="bg-tertiary/60 text-gray-600 inline-block border border-quaternary"
                          >
                            {{ category }}
                          </VTag>
                        </div>
                        <span
                          class="text-xs text-gray-500 whitespace-nowrap ml-2"
                        >
                          {{ publication.pagination }}
                        </span>
                      </div>
                    </NuxtLink>
                    <p
                      class="text-sm text-gray-700 mt-1 flex items-center flex-wrap gap-2"
                    >
                      {{
                        publication.authors
                          ?.map(
                            ({ first_name, last_name }) =>
                              `${first_name} ${last_name}`
                          )
                          .join('; ')
                      }}
                    </p>

                    <div
                      v-if="publication.doi"
                      class="flex flex-row text-sm justify-between mt-1"
                    >
                      <p>
                        <span class="text-gray-700">DOI: </span>
                        <span
                          class="text-primary hover:text-secondary hover:underline cursor-pointer"
                        >
                          {{ publication.doi }}
                        </span>
                      </p>
                    </div>

                    <div class="flex flex-wrap gap-1 mt-1">
                      <div
                        v-if="publication.download"
                        class="group border border-primary shadow px-2 py-1 text-xs rounded bg-secondary w-max text-yellow-700 hover:text-tertiary flex items-center space-x-1 hover:bg-primary transition duration-200 mt-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          class="w-4 h-4 text-yellow-700 group-hover:text-tertiary transition duration-200"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                          />
                        </svg>
                        <a :href="publication.download">PDF</a>
                      </div>

                      <div
                        v-for="(supp, index) in publication.supplementary"
                        :key="index"
                        class="group border border-primary shadow px-2 py-1 text-xs rounded bg-secondary w-max text-yellow-700 hover:text-tertiary flex items-center space-x-1 hover:bg-primary transition duration-200 mt-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          class="w-4 h-4 text-yellow-700 group-hover:text-tertiary transition duration-200"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                          />
                        </svg>
                        <a
                          :href="supp"
                          target="_blank"
                          rel="noopener"
                          >Suppl. Material {{ index + 1 }}</a
                        >
                      </div>
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

        <!-- RIGHT COLUMN: Contact box -->
        <InsectaMundiRightColumn />
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

// Convert the date to a Date object
const dateObj = new Date(latestPublication.date)

// Format the date as YYYY-MM-DD
const formattedDate = dateObj.toISOString().split('T')[0]

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
