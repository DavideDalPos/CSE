<template>
  <table>
    <thead class="text-left">
      <tr
        class="px-4 text-gray-800 mt-4 bg-gray-100 border-l-4 border-primary/80 text-sm"
      >
        <th class="px-4 py-2 font-normal w-full"> {{ formatMonthYear(date) }}</th>
        <th class="px-2 py-2 font-normal">Pages</th>
        <th class="px-2 py-2 font-normal">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in list"
        :key="item._path"
      >
        <td class="py-2 px-4">
          <TablePublicationRow :publication="item" />
        </td>
        <td class="px-2">
          <span
            class="text-xs text-gray-500 whitespace-nowrap"
            v-text="item.pagination"
          />
        </td>
        <td class="px-2">
          <span
            class="text-xs text-gray-500 whitespace-nowrap"
            v-text="item.date"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
function formatMonthYear(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr + 'T00:00:00') // Forces local timezone
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}


defineProps({
  list: {
    type: Array,
    required: true
  },

  date: {
    type: String,
    default: ''
  }
})
</script>
