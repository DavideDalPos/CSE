<template>
  <component
    :is="person.profileUrl ? 'a' : 'div'"
    :href="person.profileUrl || undefined"
    :target="person.profileUrl ? '_blank' : undefined"
    :rel="person.profileUrl ? 'noopener' : undefined"
    class="group flex items-center gap-4 p-4 rounded-xl bg-white border border-rule transition"
    :class="person.profileUrl ? 'hover:border-quaternary hover:shadow-md' : ''"
  >
    <img
      v-if="person.imageUrl"
      :src="person.imageUrl"
      :alt="`Photo of ${name}`"
      loading="lazy"
      decoding="async"
      class="rounded-full object-cover shrink-0 ring-2 ring-white shadow"
      :class="large ? 'w-20 h-20' : 'w-14 h-14'"
    />
    <span
      v-else
      class="rounded-full shrink-0 flex items-center justify-center font-serif font-semibold text-white bg-gradient-to-br from-primary to-setenary"
      :class="large ? 'w-20 h-20 text-2xl' : 'w-14 h-14 text-lg'"
      aria-hidden="true"
      >{{ initials }}</span
    >
    <span class="min-w-0">
      <span
        v-if="person.role"
        class="block text-[0.7rem] uppercase tracking-[0.14em] font-semibold text-senary"
        >{{ person.role }}</span
      >
      <span
        class="block font-serif font-semibold text-ink leading-snug"
        :class="[large ? 'text-xl' : 'text-[1.05rem]', person.profileUrl ? 'group-hover:text-senary' : '']"
      >
        {{ name }}
        <span
          v-if="person.profileUrl"
          class="text-xs font-sans opacity-0 group-hover:opacity-60 transition-opacity"
          aria-hidden="true"
          >↗</span
        >
      </span>
      <span
        v-if="note"
        class="block text-xs text-ink-soft mt-0.5"
        >{{ note }}</span
      >
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  person: { type: Object, required: true },
  // extra line under the name (e.g. "since 2015")
  note: { type: String, default: '' },
  large: { type: Boolean, default: false }
})

const name = computed(() => props.person.name.trim())
const initials = computed(() =>
  name.value
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
)
</script>
