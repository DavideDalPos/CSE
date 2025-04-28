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
              v-for="({ date, label }) in monthYearOptions"
              :key="month"
              :value="date"
            >
              {{ label }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:items-stretch gap-8">
  <!-- LEFT COLUMN: Publications -->
  <div class="w-full">
    <ul class="w-full space-y-4">
      <template v-for="[year, yearGroup] in groupByYearAndMonth" :key="year">
        <li>
          <!-- Year header with toggle -->
          <div
            class="flex items-center justify-between px-4 py-3 bg-quaternary/20 border-l-4 border-quaternary/80 cursor-pointer"
            @click="toggleYear(year)"
          >
            <h2 class="text-lg text-gray-800 font-medium">{{ year }}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transform transition-transform duration-300"
              :class="{ 'rotate-180': openYears.has(year) }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </div>

          <!-- Conditionally rendered month/year groups -->
          <div v-show="openYears.has(year)">
            <template v-for="[monthYear, group] in yearGroup" :key="monthYear">
              <TablePublications class="my-2" :list="group" :date="monthYear" />
            </template>
          </div>
        </li>
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
import { computed, ref, watch } from 'vue'

const publications = await queryContent('insecta_mundi')
  .where({ date: { $ne: null } })
  .sort({ date: -1 })
  .find()

// State for search and filter
const searchQuery = ref('')
const selectedMonth = ref('')
const openYears = ref(new Set())

function toggleYear(year) {
  if (openYears.value.has(year)) {
    openYears.value.delete(year)
  } else {
    openYears.value.add(year)
  }
}

const groupByYearAndMonth = computed(() => {
  const sortedGrouped = groupByDate(filteredList.value, 4)

  sortedGrouped.forEach(group => {
    group[1] = groupByDate(group[1], 7)
  })

  return sortedGrouped
})

function groupByDate(list, sliceEnd) {
  const grouped = list.reduce((acc, item) => {
    const year = item.date?.slice(0, sliceEnd)

    if (!acc[year]) acc[year] = []
    acc[year].push(item)

    return acc
  }, {})

  const sortedGrouped = Object.entries(grouped).sort(([a], [b]) => b - a)

  return sortedGrouped
}

// Get list of month-year options available in the data
const monthYearOptions = computed(() => {
  // Extract 'YYYY-MM' from 'YYYY-MM-DD'
  const months = publications.map(
    (item) => item.date?.slice(0, 7)
  );

  // Get unique months and sort by the full 'YYYY-MM' format
  const sortedMonths = [...new Set(months)].sort((a, b) => b.localeCompare(a));

  // Now, format them as "Month YYYY"
  const formattedMonths = sortedMonths.map(month => {
    const date = new Date(`${month}-01`); // Append "01" to make it a valid date
    return {
      label: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }),
      date: month
    }
  });

  return formattedMonths;
});


// Placeholder to hold the full list (used in monthYearOptions)

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


watch(groupByYearAndMonth, newVal => {
  openYears.value = new Set()
  newVal.forEach(([year]) => {
    if (!openYears.value.has(year)) {
    openYears.value.add(year)
    }
  })
}, {
  deep: true
})
</script>
