<template>
  <section
    ref="root"
    class="bg-paper border-b border-rule"
  >
    <div class="container mx-auto px-6 py-12 lg:py-14 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <img
        src="/images/web/cse-logo-520.webp"
        alt="Logo of the Center for Systematic Entomology"
        width="520"
        height="468"
        loading="lazy"
        decoding="async"
        class="w-44 sm:w-52 lg:w-60 shrink-0 intro-logo"
        :class="{ 'intro-in': seen }"
      />
      <div
        class="text-center md:text-left intro-text"
        :class="{ 'intro-in': seen }"
      >
        <p class="text-xs uppercase tracking-[0.2em] font-semibold text-senary">Welcome to the</p>
        <p class="mt-2 font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-ink">
          Center for Systematic Entomology
        </p>
        <p class="mt-3 text-lg text-ink-soft max-w-2xl">
          A non-profit society advancing <b class="text-ink font-semibold">arthropod systematics</b> since 1985 — publisher
          of <i class="font-serif text-ink">Insecta Mundi</i>, friend of the Florida State Collection of Arthropods.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// The logo and text glide in the first time the band scrolls into view
const root = ref(null)
const seen = ref(false)
let io = null

onMounted(() => {
  if (!('IntersectionObserver' in window)) return (seen.value = true)
  io = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        seen.value = true
        io.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  io.observe(root.value)
})
onBeforeUnmount(() => io?.disconnect())
</script>

<style scoped>
.intro-logo {
  opacity: 0;
  transform: scale(0.85) rotate(-8deg);
  transition:
    opacity 0.9s ease-out,
    transform 1.1s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.intro-text {
  opacity: 0;
  transform: translateX(24px);
  transition:
    opacity 0.9s ease-out 0.15s,
    transform 0.9s ease-out 0.15s;
}
.intro-in {
  opacity: 1;
  transform: none;
}
.intro-logo.intro-in:hover {
  transform: rotate(6deg) scale(1.03);
  transition: transform 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .intro-logo,
  .intro-text {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
