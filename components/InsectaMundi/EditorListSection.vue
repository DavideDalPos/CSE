<template>
  <section>
    <h3 class="font-serif text-xl font-semibold text-ink">
      {{ title }} <span class="text-sm font-sans font-normal text-ink-soft">({{ list.length }})</span>
    </h3>
    <ul
      class="mt-3 grid gap-x-8"
      :class="columns ? 'sm:grid-cols-2 lg:grid-cols-3' : ''"
    >
      <li
        v-for="(e, i) in list"
        :key="i"
        class="py-2 border-b border-rule"
      >
        <span
          class="font-medium text-ink"
          :class="{ italic: e.star }"
          >{{ e.name }}</span
        >
        <span
          v-if="e.where"
          class="block text-sm text-ink-soft"
          >{{ e.where }}</span
        >
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed, unref } from 'vue'

const props = defineProps({
  title: String,
  items: [Array, Object],
  // spread long lists over several columns
  columns: { type: Boolean, default: false }
})

// "Name* (Institution)" → { name: 'Name*', where: 'Institution', star: true }
const list = computed(() =>
  (unref(props.items) || []).map((s) => {
    const m = String(s).match(/^(.*?)\s*\((.*)\)\s*$/)
    return { name: m ? m[1] : s, where: m ? m[2] : '', star: String(s).includes('*') }
  })
)
</script>
