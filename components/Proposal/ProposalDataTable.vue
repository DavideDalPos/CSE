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
  taxon: ''
});

const filteredList = computed(() =>
  props.items.filter((item) =>
    item.taxon.toLowerCase().includes(filters.value.taxon.toLowerCase())
  )
);
</script>

<template>
    <div class="bg-base-foreground rounded-lg font-serif">
    <div class="flex items-center justify-between">
      <SearchForm v-model="filters.taxon" />
      <div class="flex items-center justify-end text-sm font-semibold">
        <FilterDropdown />
        <FilterRadios />
      </div>
    </div>

    <!-- Table Content -->
    <table class="w-full text-sm text-left text-gray-700">
      <thead class="text-xs text-base-content uppercase bg-base-background">
        <tr>
          <th class="px-4 py-3">Year</th>
          <th class="px-4 py-3">Researcher</th>
          <th class="px-4 py-3">Title</th>
          <th class="px-4 py-3">Taxon</th>
          <th class="px-4 py-3">PDF</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item.taxon" class="border-b border-base-muted">
          <td class="px-4 py-3 font-medium text-base-content wrap-content">{{ item.year }}</td>
          <td class="px-4 py-3 wrap-content" v-html="item.researcher"></td>
          <td class="px-4 py-3 wrap-content" v-html="item.title"></td>
          <td class="px-4 py-3 wrap-content" v-html="item.taxon"></td>
          <td class="px-4 py-3 wrap-content">
      <div
        v-if="item.pdf"
        class="group shadow px-2 py-1 text-xs rounded bg-novenary w-max text-white flex items-center space-x-1 hover:text-primary hover:bg-tertiary transition duration-200 mt-1 shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="w-4 h-4 text-white group-hover:text-primary transition duration-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
          />
        </svg>
        <a target="_blank" :href="item.pdf">PDF</a>
      </div>
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
  max-width: 650px; /* Adjust as needed to prevent column stretching */
}

table {
  table-layout: auto; /* Ensures columns don't stretch to fit content */
}

th, td {
  overflow: hidden; /* Ensures overflow text wraps */
}
</style>