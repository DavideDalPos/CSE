<template>
  <section>
    <div class="container mx-auto px-8 my-10">
      <div class="flex-1">
        <h1 class="text-4xl text-gray-700 font-bold">Publications</h1>
      <!-- 🔍 BANNER SEARCH + FILTER -->
      <div class="bg-quinary/20 border border-quinary/60 p-2 rounded shadow mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between mt-8">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by title, author, or category..."
          class="w-full lg:w-1/2 p-1 border border-gray-300 rounded text-sm bg-white"
        />
        <select
          v-model="selectedMonth"
          class="w-full lg:w-1/4 p-1 border border-gray-300 bg-white rounded text-sm"
        >
          <option value="">All Dates</option>
          <option
            v-for="month in monthYearOptions"
            :key="month"
            :value="month"
          >
            {{ formatMonthYear(month) }}
          </option>
        </select>
      </div>
</div>
      <div class="flex flex-col lg:flex-row gap-8 -mt-15">
        <!-- LEFT COLUMN: Publications -->
          <div class="my-6">
            <ContentList path="/insecta_mundi">
              <template #default="{ list }">
                <ul>
                  <template
                    v-for="([monthYear, group]) in Object.entries(groupByMonthYear(filteredList(list))).reverse()"
                    :key="monthYear"
                  >
                    <h2 class="text-[23px] text-gray-800 bg-gray-200 font-bold border-b border-gray-300 px-3 mt-8">
                      {{ formatMonthYear(monthYear) }}
                    </h2>
                    <li
                      v-for="publication in group"
                      :key="publication._path"
                      class="py-3 px-4"
                    >
                      <NuxtLink
                        :to="publication._path"
                        class="flex justify-between items-center"
                      >
                        <div class="flex-1">
                          <h2
                            class="font-bold text-gray-500 text-[17px] text-justify hover:text-primary/60 pr-20"
                            v-html="publication.title"
                          ></h2>
                          <div class="flex flex-row flex-wrap gap-1">
                            <VTag
                              v-for="category in publication.categories"
                              :key="category"
                              class="bg-tertiary/60 text-gray-600 inline-block border border-quaternary"
                            >
                              {{ category }}
                            </VTag>
                          </div>
                        </div>
                        <div class="ml-4 flex items-center">
                          <span class="text-xs text-gray-500 whitespace-nowrap pr-1">
                            {{ publication.pagination }}
                          </span>
                        </div>
                      </NuxtLink>
                      <p class="text-gray-600 text-sm mt-1">
                        {{
                          publication.authors
                            ?.map(({ first_name, last_name }) => `${first_name} ${last_name}`)
                            .join("; ")
                        }}
                      </p>
                      <div v-if="publication.doi" class="flex flex-row text-sm justify-between mt-1">
                        <p>
                          <span class="text-gray-700">DOI: </span>
                          <span class="text-primary hover:text-tertiary hover:underline cursor-pointer">
                            {{ publication.doi }}
                          </span>
                        </p>
                      </div>
                      <div class="flex flex-wrap gap-1 mt-1">
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
                        <div
                          v-for="(supp, index) in publication.supplementary"
                          :key="index"
                          class="group border border-primary shadow px-2 py-1 text-xs rounded bg-secondary w-max text-yellow-700 
                          hover:text-tertiary flex items-center space-x-1 hover:bg-primary transition duration-200 mt-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            class="w-4 h-4 text-yellow-700 group-hover:text-tertiary transition duration-200">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"/>
                          </svg>
                          <a :href="supp" target="_blank" rel="noopener">Suppl. Material {{ index + 1 }}</a>
                        </div>
                      </div>
                    </li>
                  </template>
                </ul>
              </template>
              <template #not-found>
                <p>No articles found.</p>
              </template>
            </ContentList>
          </div>

        <!-- RIGHT COLUMN: Contact + Author Guidelines -->
        <div class="w-full lg:w-[300px] shrink-0 bg-gray-500 p-4 mt-14">
          <div class="bg-secondary/90 border-gray-200 p-4 border border-primary rounded shadow-md h-max">
            <h2 class="text-lg font-semibold text-gray-700 mb-2 border-b">Contact</h2>
            <p class="text-sm text-gray-600 font-medium mt-3">David Plotnik</p>
            <p class="text-sm text-gray-600 italic">Chief Editor</p>
            <p class="text-sm text-gray-600 mt-2">
              <p class="text-sm text-gray-600 font-medium">Paul E. Skelley</p>
              <p class="text-sm text-gray-600 italic">Assistant Editor</p>
            </p>
            <p class="text-sm text-gray-600 mt-2">
              Email:
              <a href="mailto:insectamundi@gmail.com" class="text-yellow-700 hover:underline">
                insectamundi@gmail.com
              </a>
            </p>
            <p class="text-sm text-gray-600 mt-2">
              Center for Systematic Entomology<br />
              P.O. Box 141874<br />
              Gainesville, FL 32614-1874 USA
            </p>
          </div>
          <a href="/insecta_mundi/authorguidelines" class="block w-full">
            <div class="bg-tertiary/90 p-2 border border-quaternary rounded shadow-md mt-3 h-max hover:bg-primary transition">
              <h2 class="text-base text-gray-700 hover:text-yellow-700">Author Guidelines</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

// State for search and filter
const searchQuery = ref('')
const selectedMonth = ref('')

// Format a YYYY-MM string into "Month YYYY"
const formatMonthYear = (monthStr) => {
  const [year, month] = monthStr.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleString('default', { month: 'long', year: 'numeric' })
}

// Group publications by their month/year
const groupByMonthYear = (list) => {
  return list.reduce((acc, item) => {
    const monthYear = item.date?.slice(0, 7) // assumes 'YYYY-MM-DD'
    if (!acc[monthYear]) acc[monthYear] = []
    acc[monthYear].push(item)
    return acc
  }, {})
}

// Get list of month-year options available in the data
const monthYearOptions = computed(() => {
  const months = new Set()
  allItems.value.forEach((item) => {
    const monthYear = item.date?.slice(0, 7)
    if (monthYear) months.add(monthYear)
  })
  return Array.from(months).sort().reverse()
})

// Placeholder to hold the full list (used in monthYearOptions)
const allItems = ref([])

// Filtered list based on search query and selected month
const filteredList = (list) => {
  // Keep track of full list for filtering month-year dropdown
  if (allItems.value.length === 0) allItems.value = list

  return list.filter((item) => {
    const matchesQuery =
      searchQuery.value === '' ||
      item.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.categories?.some((cat) =>
        cat.toLowerCase().includes(searchQuery.value.toLowerCase())
      ) ||
      item.authors?.some(({ first_name, last_name }) =>
        `${first_name} ${last_name}`
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
      )

    const matchesMonth =
      selectedMonth.value === '' ||
      item.date?.startsWith(selectedMonth.value)

    return matchesQuery && matchesMonth
  })
}
</script>

