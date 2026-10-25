<!-- Shown for missing pages (404) and unexpected errors -->
<template>
  <NuxtLayout>
    <section class="relative isolate overflow-hidden bg-ink text-white">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,#2f3d42_0%,#1f2a2e_55%,#151d20_100%)]" />
      <img
        src="/images/web/hero-plate.webp"
        alt=""
        aria-hidden="true"
        class="hidden md:block absolute right-0 top-0 h-full w-auto opacity-15 invert mix-blend-screen pointer-events-none select-none"
      />
      <div class="relative container mx-auto px-6 py-20 lg:py-28 max-w-3xl">
        <p class="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-quaternary">
          {{ is404 ? 'Error 404 · page not found' : `Error ${error?.statusCode || ''}` }}
        </p>
        <h1 class="mt-3 font-serif font-bold text-4xl sm:text-6xl leading-[1.05]">
          {{ is404 ? 'This specimen seems to have escaped the drawer' : 'Something went wrong' }}
        </h1>
        <p class="mt-5 text-lg text-white/80 leading-relaxed">
          <template v-if="is404">
            The page you are looking for has moved or no longer exists. Try searching the website, or start from one of the links below.
          </template>
          <template v-else>Please try again in a moment. If the problem persists, let us know.</template>
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-quaternary text-white text-sm font-semibold hover:bg-senary transition-colors"
            @click="openSearch"
          >
            Search the website
          </button>
          <button
            type="button"
            class="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-white/70 text-white text-sm font-semibold hover:bg-white hover:text-ink transition-colors"
            @click="home"
          >
            Go to the home page
          </button>
        </div>

        <ul class="mt-10 grid sm:grid-cols-2 gap-2 text-sm">
          <li
            v-for="l in links"
            :key="l.to"
          >
            <button
              type="button"
              class="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-left"
              @click="clearError({ redirect: l.to })"
            >
              {{ l.label }} <span aria-hidden="true">→</span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ error: { type: Object, default: null } })
const is404 = computed(() => !props.error || props.error.statusCode === 404)

const links = [
  { label: 'Insecta Mundi — latest issue', to: '/insecta_mundi/current' },
  { label: 'Insecta Mundi — all articles', to: '/insecta_mundi' },
  { label: 'FSCA publications', to: '/other_publications/FSCA' },
  { label: 'Annual conference', to: '/meetings' }
]

const searchOpen = useState('site-search-open', () => false)
function openSearch() {
  searchOpen.value = true
}
function home() {
  clearError({ redirect: '/' })
}

useHead({ title: is404.value ? 'Page not found' : 'Error' })
</script>
