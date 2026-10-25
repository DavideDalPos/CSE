<!--
  Site-wide search (articles, FSCA volumes and pages). Opened from the header,
  or with Ctrl/⌘+K or "/". The index is built at deploy time: server/routes/search-index.json.js
-->
<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-150"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[70] bg-ink/60 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 sm:pt-[10vh]"
        role="dialog"
        aria-modal="true"
        aria-label="Search the website"
        @click.self="close"
      >
        <div class="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
          <div class="flex items-center gap-3 px-4 border-b border-rule">
            <svg
              class="w-5 h-5 text-ink-soft shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
              />
              <path
                stroke-linecap="round"
                d="m20 20-3.5-3.5"
              />
            </svg>
            <input
              ref="inputEl"
              v-model="q"
              type="search"
              placeholder="Search articles, authors, taxa, pages…"
              class="flex-1 py-4 text-base text-ink bg-transparent focus:outline-none"
              aria-controls="search-results"
              @keydown.down.prevent="move(1)"
              @keydown.up.prevent="move(-1)"
              @keydown.enter.prevent="go(flat[active])"
              @keydown.esc="close"
            />
            <button
              type="button"
              class="text-xs font-semibold px-2 py-1 rounded border border-rule text-ink-soft hover:text-ink"
              @click="close"
            >
              Esc
            </button>
          </div>

          <div
            id="search-results"
            class="overflow-y-auto"
          >
            <p
              v-if="loading"
              class="p-6 text-center text-ink-soft"
            >
              Loading…
            </p>
            <div
              v-else-if="!q.trim()"
              class="p-5"
            >
              <p class="text-xs uppercase tracking-wider text-ink-soft">Try</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <button
                  v-for="s in suggestions"
                  :key="s"
                  type="button"
                  class="px-3 py-1.5 rounded-full bg-paper border border-rule text-sm text-ink hover:border-quaternary"
                  @click="q = s"
                >
                  {{ s }}
                </button>
              </div>
            </div>
            <p
              v-else-if="!flat.length"
              class="p-6 text-center text-ink-soft"
            >
              Nothing found for “{{ q }}”.
            </p>
            <template v-else>
              <div
                v-for="g in groups"
                :key="g.key"
                class="py-2"
              >
                <p class="px-5 py-1 text-[0.68rem] uppercase tracking-[0.14em] font-semibold text-senary">
                  {{ g.label }} <span class="text-ink-soft font-normal">· {{ g.total }}</span>
                </p>
                <NuxtLink
                  v-for="r in g.items"
                  :key="r.u"
                  :to="r.u"
                  class="block px-5 py-2.5"
                  :class="flat[active] === r ? 'bg-paper' : 'hover:bg-paper'"
                  @mouseenter="active = flat.indexOf(r)"
                  @click="close"
                >
                  <span class="block font-serif font-semibold text-ink leading-snug line-clamp-2">{{ r.t }}</span>
                  <span
                    v-if="r.a || r.m"
                    class="block text-xs text-ink-soft truncate"
                    >{{ [r.a, r.m].filter(Boolean).join(' — ') }}</span
                  >
                </NuxtLink>
              </div>
              <NuxtLink
                v-if="groups.find((g) => g.key === 'im')?.total > 12"
                :to="{ path: '/insecta_mundi', query: { search: q } }"
                class="block px-5 py-3 border-t border-rule text-sm font-semibold text-senary hover:bg-paper"
                @click="close"
              >
                See all Insecta Mundi results in the archive →
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const open = useState('site-search-open', () => false)
const q = ref('')
const index = ref(null)
const loading = ref(false)
const active = ref(0)
const inputEl = ref(null)
const route = useRoute()

const suggestions = ['Coleoptera', 'new species', 'Florida', 'Ichneumonidae', 'grants', 'conference']

const norm = (s) =>
  String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

async function load() {
  if (index.value || loading.value) return
  loading.value = true
  try {
    const items = await $fetch('/search-index.json')
    index.value = items.map((i) => ({ ...i, _t: norm(i.t), _a: norm(i.a), _all: norm([i.t, i.a, i.m, i.w].join(' ')) }))
  } finally {
    loading.value = false
  }
}

const results = computed(() => {
  const tokens = norm(q.value).split(/\s+/).filter(Boolean)
  if (!tokens.length || !index.value) return []
  const out = []
  for (const item of index.value) {
    if (!tokens.every((t) => item._all.includes(t))) continue
    let score = 0
    for (const t of tokens) {
      if (item._t.includes(t)) score += 3
      if (item._a.includes(t)) score += 2
    }
    if (item.k === 'page') score += 2
    out.push({ item, score })
  }
  return out.sort((a, b) => b.score - a.score)
})

const LABELS = { page: 'Pages', im: 'Insecta Mundi articles', fsca: 'FSCA monographs' }
const LIMITS = { page: 4, im: 12, fsca: 6 }
const groups = computed(() =>
  ['page', 'im', 'fsca']
    .map((k) => {
      const all = results.value.filter((r) => r.item.k === k).map((r) => r.item)
      return { key: k, label: LABELS[k], total: all.length, items: all.slice(0, LIMITS[k]) }
    })
    .filter((g) => g.total)
)
const flat = computed(() => groups.value.flatMap((g) => g.items))

watch(q, () => (active.value = 0))

function move(d) {
  if (!flat.value.length) return
  active.value = (active.value + d + flat.value.length) % flat.value.length
}

function go(r) {
  if (!r) return
  navigateTo(r.u)
  close()
}

function close() {
  open.value = false
}

watch(open, async (v) => {
  if (import.meta.client) document.documentElement.style.overflow = v ? 'hidden' : ''
  if (v) {
    load()
    await nextTick()
    inputEl.value?.focus()
  }
})
watch(() => route.fullPath, close)

function onKey(e) {
  const typing = /input|textarea|select/i.test(e.target?.tagName) || e.target?.isContentEditable
  if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
    e.preventDefault()
    open.value = true
  }
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>
