<script setup>
import { computed, ref } from 'vue';
import FilterDropdown from './FilterDropdown.vue';
import FilterRadios from './FilterRadios.vue';
import SearchForm from './SearchForm.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const filters = ref({
  searchQuery: ''
});

const filteredList = computed(() =>
  props.items.filter((item) => {
    const searchQuery = filters.value.searchQuery.toLowerCase();
    return (
      item.year.toString().toLowerCase().includes(searchQuery) || 
      item.title.toLowerCase().includes(searchQuery)
    );
  })
);


</script>

<template>
    <div class="bg-base-foreground rounded-lg">
      <div class="flex items-center justify-between">
        <SearchForm v-model="filters.searchQuery" />
      <div class="flex items-center justify-end text-sm font-semibold">
        <FilterDropdown />
        <FilterRadios />
        </div>
      </div>
  
      <!-- Table Content -->
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-base-content uppercase bg-base-background">
          <tr>
            <th class="px-4 py-3">Year</th>
            <th class="px-4 py-3">Researcher</th>
            <th class="px-4 py-3">Title</th>
            <th class="px-4 py-3">PDF</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in filteredList"
            :key="item.year"
            class="border-b border-base-muted"
          >
            <td class="px-4 py-3 font-medium text-base-content wrap-content">{{ item.year }}</td>
            <td class="px-4 py-3 wrap-content">{{ item.researcher }}</td>
            <td class="px-4 py-3 wrap-content">{{ item.title }}</td>
            <td class="px-4 py-3 wrap-content">
  <a :href="item.pdf" target="_blank" rel="noopener noreferrer" class="text-red-600 hover:text-red-800">
    <img src="/images/PDF_file_icon.svg" alt="PDF" class="w-6 h-6">
  </a>
</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  

<style scoped>
/* Ensure text wraps inside table cells */
.wrap-content {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  max-width: 150px; /* Adjust as needed to prevent column stretching */
}

table {
  table-layout: fixed; /* Ensures columns don't stretch to fit content */
}

th, td {
  max-width: 150px; /* Limits the width of each column */
  overflow: hidden; /* Ensures overflow text wraps */
}
</style>

