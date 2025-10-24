<template>
  <table>
    <thead class="text-left">
      <tr
        class="px-4 text-gray-800 mt-4 bg-gray-100 border-l-4 border-primary/80 text-sm"
      >
        <th class="px-4 py-2 font-normal w-full">
          Published: {{ sortedList[0]?.date }}
        </th>
        <th class="px-2 py-2 font-normal">Pages</th>
        <th class="px-2 py-2 font-normal text-center">Publication</th>
        <th class="px-2 py-2 font-normal">Date</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, index) in sortedList" :key="item._path">
        <tr>
          <td class="py-2 px-4">
            <TablePublicationRow :publication="item" />
          </td>

          <!-- Pagination column with automatic en dash replacement -->
          <td class="px-2">
            <span
              class="text-xs text-gray-500 whitespace-nowrap"
              v-text="formatPagination(item.pagination)"
            />
          </td>

          <td class="px-2 text-center">
            <span
              class="text-xs text-gray-500 whitespace-nowrap"
              v-text="item.issue"
            />
          </td>

          <td class="px-2">
            <span
              class="text-xs text-gray-500 whitespace-nowrap"
              v-text="item.date"
            />
          </td>
        </tr>

        <tr v-if="index !== sortedList.length - 1">
          <td colspan="4" class="px-4 py-1">
            <div class="h-px bg-gray-200 mx-auto"></div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  list: {
    type: Array,
    required: true
  },
  date: {
    type: String,
    default: ''
  }
})

// Sort by issue (descending)
const sortedList = computed(() => {
  return [...props.list].sort((a, b) => {
    // Convert issues to numbers if they are strings
    return Number(b.issue) - Number(a.issue)
  })
})

// Replace hyphens between numbers with en dashes in pagination
function formatPagination(pagination) {
  return pagination ? pagination.replace(/(\d)-(\d)/g, '$1–$2') : ''
}
</script>
