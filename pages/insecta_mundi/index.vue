<template>
  <section>
    <div class="container mx-auto px-8 my-10">
      <h1 class="text-4xl text-gray-700 font-bold">Publications</h1>
      <div class="flex-1">
        <!-- 🔍 BANNER SEARCH + FILTER -->
        <div
          class="bg-gray-100 border border-gray-300 p-3 rounded shadow mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between mt-8"
        >
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search by title, author, or category..."
            class="px-2 w-full lg:w-1/4 p-1 border border-gray-300 rounded text-sm bg-white"
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
              {{ month }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- LEFT COLUMN: Publications -->
        <div>
          <ul>
            <!-- Group by Year -->
            <template
              v-for="[year, yearGroup] in groupByYear"
              :key="year"
            >
              <h2
                class="px-4 py-2 text-lg text-gray-800 font-medium bg-gray-100 border-l-4 border-primary/80"
              >
                {{ year }}
              </h2>

              <!-- Group by Month-Year for each year -->
              <template
                v-for="[monthYear, group] in Object.entries(
                  groupByMonthYear(yearGroup)
                ).reverse()"
                :key="monthYear"
              >
                <TablePublications
                  class="my-2"
                  :list="group"
                  :date="monthYear"
                />
              </template>
            </template>
          </ul>

          <template v-if="!publications.length">
            <p>No articles found.</p>
          </template>
        </div>

        <!-- RIGHT COLUMN: Contact + Author Guidelines -->
        <InsectaMundiRightColumn />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const publications = await queryContent('insecta_mundi')
  .where({ date: { $ne: null } })
  .sort({ date: -1 })
  .find()

// State for search and filter
const searchQuery = ref('')
const selectedMonth = ref('')

// Group publications by their month/year
const groupByMonthYear = (list) => {
  return list.reduce((acc, item) => {
    const monthYear = item.date?.slice(0, 7) // assumes 'YYYY-MM-DD'
    if (!acc[monthYear]) acc[monthYear] = []
    acc[monthYear].push(item)
    return acc
  }, {})
}

// Group publications by year
const groupByYear = computed(() => {
  // Step 1: Group by year
  const grouped = filteredList.value.reduce((acc, item) => {
    const year = item.date?.slice(0, 4) // assumes 'YYYY-MM-DD'
    if (!acc[year]) acc[year] = []
    acc[year].push(item)
    return acc
  }, {})

  const sortedGrouped = Object.entries(grouped).sort(([a], [b]) => b - a)

  return sortedGrouped
})

// Get list of month-year options available in the data
const monthYearOptions = computed(() => {
  const months = publications.map(
    (item) => item.date?.slice(0, 7) // Extract 'YYYY-MM' from 'YYYY-MM-DD'
  )

  return [...new Set(months)].sort() // Sort in ascending order (default sort)
})

// Placeholder to hold the full list (used in monthYearOptions)
const allItems = ref([])
const filteredList = computed(() => {
  // Keep track of full list for filtering month-year dropdown
  const inputValue = searchQuery.value.toLowerCase()

  return publications.filter((item) => {
    const matchesQuery =
      searchQuery.value === '' ||
      item.title?.toLowerCase().includes(inputValue) ||
      item.categories?.some((cat) => cat.toLowerCase().includes(inputValue)) ||
      item.authors?.some(({ first_name, last_name }) =>
        `${first_name} ${last_name}`.toLowerCase().includes(inputValue)
      )

    const matchesMonth =
      selectedMonth.value === '' || item.date?.startsWith(selectedMonth.value)

    return matchesQuery && matchesMonth
  })
})
</script>
