<template>
  <header class="relative isolate overflow-hidden bg-ink text-white">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,#2f3d42_0%,#1f2a2e_55%,#151d20_100%)]" />
    <img
      src="/images/web/hero-im-cover.webp"
      alt=""
      aria-hidden="true"
      class="hidden md:block absolute right-[6%] top-8 h-[150%] w-auto rotate-[5deg] opacity-25 lg:opacity-40 shadow-2xl pointer-events-none select-none"
    />
    <div class="relative container mx-auto px-6 pt-12 pb-6 lg:pt-16">
      <p class="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-quaternary">
        <i class="normal-case tracking-normal font-serif text-sm sm:text-base">Insecta Mundi</i>
        <span class="mx-2 opacity-60">·</span>{{ kicker }}
      </p>
      <h1 class="mt-3 font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
        <slot name="title">{{ title }}</slot>
      </h1>
      <p
        v-if="lede"
        class="mt-4 text-base sm:text-lg leading-relaxed text-white/80 max-w-2xl"
      >
        {{ lede }}
      </p>

      <!-- Journal sections -->
      <nav
        class="mt-8 -mx-1 flex gap-1 overflow-x-auto whitespace-nowrap text-sm"
        aria-label="Insecta Mundi"
      >
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="px-3.5 py-2 rounded-full transition-colors"
          :class="isActive(l) ? 'bg-white text-ink font-semibold' : 'text-white/75 hover:text-white hover:bg-white/10'"
          >{{ l.label }}</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  lede: { type: String, default: '' }
})

const route = useRoute()

const links = [
  { label: 'Latest issue', to: '/insecta_mundi/current' },
  { label: 'All articles', to: '/insecta_mundi', exact: true },
  { label: 'In numbers', to: '/insecta_mundi/stats' },
  { label: 'About the journal', to: '/insecta_mundi/journal' },
  { label: 'Instructions for authors', to: '/insecta_mundi/authorguidelines' },
  { label: 'Editor guidelines', to: '/insecta_mundi/editorinfo' },
  { label: 'Ethics statement', to: '/insecta_mundi/ethic' },
  { label: 'Festschrifts', to: '/other_publications/CSE#festschrifts' }
]

function isActive(l) {
  const p = route.path.replace(/\/$/, '')
  return l.exact ? p === l.to : p === l.to
}
</script>
