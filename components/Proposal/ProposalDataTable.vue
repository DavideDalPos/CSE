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
            <a :href="item.pdf" target="_blank" rel="noopener noreferrer" class="text-red-600 hover:text-red-800">
              <img src="/images/PDF_file_icon.svg" alt="PDF" class="w-6 h-6" />
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
  max-width: 650px; /* Adjust as needed to prevent column stretching */
}

table {
  table-layout: auto; /* Ensures columns don't stretch to fit content */
}

th, td {
  overflow: hidden; /* Ensures overflow text wraps */
}
</style>