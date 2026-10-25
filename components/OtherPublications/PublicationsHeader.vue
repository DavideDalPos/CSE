<template>
  <header class="relative isolate overflow-hidden bg-ink text-white">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,#2f3d42_0%,#1f2a2e_55%,#151d20_100%)]" />

    <!-- Fanned covers as background artwork -->
    <div
      v-if="covers.length"
      class="hidden lg:block absolute right-[2%] top-12 h-[100%] w-[26rem] pointer-events-none select-none"
      aria-hidden="true"
    >
      <img
        v-for="(c, i) in covers.slice(0, 3)"
        :key="c"
        :src="c"
        alt=""
        class="absolute top-0 h-full w-auto max-w-none shadow-2xl rounded-sm brightness-[.42] saturate-50"
        :style="{ right: `${i * 6}rem`, transform: `rotate(${6 - i * 5}deg)`, zIndex: 3 - i }"
      />
    </div>

    <div class="relative container mx-auto px-6 pt-12 pb-6 lg:pt-16">
      <p class="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-quaternary">
        Publications<span
          v-if="kicker"
          class="mx-2 opacity-60"
          >·</span
        >{{ kicker }}
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
      <slot />

      <nav
        class="mt-8 -mx-1 flex gap-1 overflow-x-auto whitespace-nowrap text-sm"
        aria-label="Publications"
      >
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="px-3.5 py-2 rounded-full transition-colors"
          :class="isActive(l) ? 'bg-white text-ink font-semibold' : 'text-white/75 hover:text-white hover:bg-white/10'"
          ><component
            :is="l.italic ? 'i' : 'span'"
            >{{ l.label }}</component
          ></NuxtLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  lede: { type: String, default: '' },
  // Up to three cover images fanned out behind the title
  covers: { type: Array, default: () => [] }
})

const route = useRoute()

const links = [
  { label: 'CSE publications', to: '/other_publications/CSE' },
  { label: 'FSCA publications', to: '/other_publications/FSCA' },
  { label: 'Arthropods of Florida', to: '/arthropod_papers', base: '/arthropod_papers' },
  { label: 'Occasional Papers', to: '/occasional_papers', base: '/occasional_papers' },
  { label: 'Insecta Mundi', to: '/insecta_mundi', italic: true }
]

function isActive(l) {
  const p = route.path.replace(/\/$/, '')
  return l.base ? p.startsWith(l.base) : p === l.to
}
</script>
