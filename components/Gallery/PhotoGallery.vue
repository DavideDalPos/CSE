<template>
  <div>
    <ul
      class="grid gap-3"
      :class="gridClass"
    >
      <li
        v-for="(p, i) in shown"
        :key="p.img"
      >
        <button
          type="button"
          class="group block w-full text-left"
          @click="open(i)"
        >
          <span
            class="block overflow-hidden rounded-lg bg-paper"
            :class="aspect"
          >
            <img
              :src="p.img"
              :alt="plain(p.caption)"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </span>
          <span
            v-if="p.caption"
            class="mt-1.5 block text-xs text-ink-soft leading-snug line-clamp-2"
            v-html="p.caption"
          />
        </button>
      </li>
    </ul>

    <div class="mt-6 flex flex-wrap items-center gap-3">
      <button
        v-if="photos.length > initial"
        type="button"
        class="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-ink text-ink text-sm font-semibold hover:bg-ink hover:text-white transition-colors"
        @click="all = !all"
      >
        {{ all ? 'Show fewer photos' : `Show all ${photos.length} photos` }}
      </button>
      <slot />
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="current !== null"
        class="fixed inset-0 z-[60] bg-black/90 flex flex-col items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        @click.self="close"
      >
        <img
          :src="photos[current].full || photos[current].img"
          :alt="plain(photos[current].caption)"
          class="max-h-[78vh] max-w-full object-contain rounded"
        />
        <p class="mt-3 text-sm text-white/85 text-center">
          <span v-html="photos[current].caption || ''" />
          <span class="ml-2 text-white/50">{{ current + 1 }} / {{ photos.length }}</span>
        </p>
        <button
          type="button"
          class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white text-2xl hover:bg-white/20"
          aria-label="Close"
          @click="close"
        >
          ×
        </button>
        <button
          type="button"
          class="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white text-2xl hover:bg-white/20"
          aria-label="Previous photo"
          @click="step(-1)"
        >
          ‹
        </button>
        <button
          type="button"
          class="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white text-2xl hover:bg-white/20"
          aria-label="Next photo"
          @click="step(1)"
        >
          ›
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
const props = defineProps({
  // [{ img, caption?, full? }] — `full` is an optional larger image for the viewer
  photos: { type: Array, required: true },
  initial: { type: Number, default: 12 },
  gridClass: { type: String, default: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6' },
  aspect: { type: String, default: 'aspect-square' }
})
const photos = props.photos
const initial = props.initial
const all = ref(false)
const shown = computed(() => (all.value ? photos : photos.slice(0, initial)))

const current = ref(null)
const open = (i) => (current.value = i)
const close = () => (current.value = null)
const step = (d) => (current.value = (current.value + d + photos.length) % photos.length)

function onKey(e) {
  if (current.value === null) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') step(1)
  if (e.key === 'ArrowLeft') step(-1)
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

const plain = (s) => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
</script>
