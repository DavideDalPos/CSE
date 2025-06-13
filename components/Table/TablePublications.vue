<template>
  <table>
    <thead class="text-left">
      <tr
        class="px-4 text-gray-800 mt-4 bg-gray-100 border-l-4 border-primary/80 text-sm rounded-sm"
      >
        <th class="px-4 py-2 font-normal w-full"> {{ formatMonthYear(date) }} </th>
        <th class="px-2 py-2 font-normal">Pages</th>
        <th class="px-2 py-2 font-normal text-center">Publication</th>
        <th class="px-2 py-2 font-normal text-center">Date</th>
      </tr>
    </thead>
<tbody>
  <template v-for="(item, index) in filteredAndSortedList" :key="item._path">
    <tr>
      <td class="py-2 px-4">
        <TablePublicationRow :publication="item" />
      </td>
      <td class="px-2 text-center">
        <span class="text-xs text-gray-500 whitespace-nowrap" v-text="item.pagination" />
      </td>
      <td class="px-2 text-center">
        <span class="text-xs text-gray-500 whitespace-nowrap" v-text="item.issue" />
      </td>
      <td class="px-2 text-center">
        <span class="text-xs text-gray-500 whitespace-nowrap" v-text="item.date" />
      </td>
    </tr>

    <!-- Only render separator if not the last item -->
    <tr v-if="index !== list.length - 1">
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

// ⬅️ Define props first!
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

// ⬅️ Now use props.list safely
const filteredAndSortedList = computed(() => {
  return [...props.list]
    .filter(item => item.date?.slice(0, 7) === props.date?.slice(0, 7))
    .sort((a, b) => {
      const issueA = parseInt(a.issue)
      const issueB = parseInt(b.issue)
      return issueB - issueA
    })
})

function formatMonthYear(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}

function formatFullDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

