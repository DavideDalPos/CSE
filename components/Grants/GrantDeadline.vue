<template>
  <div class="rounded-xl bg-ink text-white p-5">
    <p class="text-xs uppercase tracking-[0.16em] font-semibold text-quaternary">Next deadline</p>
    <p class="mt-1 font-serif text-2xl font-semibold">
      {{ deadlineLabel || 'Twice a year' }}
    </p>
    <p class="text-sm text-white/65">11:59 PM, Eastern Time</p>

    <div
      class="mt-4 grid grid-cols-4 gap-2 text-center"
      aria-live="off"
    >
      <div
        v-for="u in units"
        :key="u.label"
        class="rounded-lg bg-white/8 py-2"
      >
        <span class="block font-serif text-2xl tabular-nums">{{ u.value }}</span>
        <span class="block text-[0.65rem] uppercase tracking-wider text-white/60">{{ u.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import g from '~/data/grants'
import { easternDate } from '~/composables/useConference'

// Proposal deadlines come from data/grants.js (11:59 PM Eastern Time)
function nextDeadline(now = new Date()) {
  const y = now.getUTCFullYear()
  const candidates = [y, y + 1]
    .flatMap((year) => g.deadlines.map((d) => easternDate(`${year}-${d}`, '23:59')))
    .sort((a, b) => a - b)
  return candidates.find((d) => d > now)
}

const deadline = ref(null)
const now = ref(null)
let timer

onMounted(() => {
  now.value = new Date()
  deadline.value = nextDeadline(now.value)
  timer = setInterval(() => {
    now.value = new Date()
    if (now.value >= deadline.value) deadline.value = nextDeadline(now.value)
  }, 1000)
})
onBeforeUnmount(() => clearInterval(timer))

const deadlineLabel = computed(() =>
  deadline.value
    ? deadline.value.toLocaleDateString('en-US', { timeZone: 'America/New_York', month: 'long', day: 'numeric', year: 'numeric' })
    : ''
)

const units = computed(() => {
  const diff = deadline.value && now.value ? Math.max(0, deadline.value - now.value) : 0
  const pad = (n) => (deadline.value ? String(n).padStart(2, '0') : '--')
  return [
    { label: 'Days', value: pad(Math.floor(diff / 864e5)) },
    { label: 'Hours', value: pad(Math.floor(diff / 36e5) % 24) },
    { label: 'Min', value: pad(Math.floor(diff / 6e4) % 60) },
    { label: 'Sec', value: pad(Math.floor(diff / 1e3) % 60) }
  ]
})
</script>
