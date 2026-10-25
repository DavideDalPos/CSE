<template>
  <section class="relative isolate overflow-hidden bg-ink text-white">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,#2f3d42_0%,#1f2a2e_55%,#151d20_100%)]" />
    <img
      src="/images/web/hero-plate.webp"
      alt=""
      class="absolute right-[-4rem] top-1/2 -translate-y-1/2 h-[120%] w-auto invert mix-blend-screen opacity-15 lg:opacity-30 pointer-events-none select-none"
      aria-hidden="true"
    />
    <div class="relative container mx-auto px-6 py-16 lg:py-24">
      <p class="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-quaternary">About us</p>
      <h1 class="mt-4 font-serif font-bold text-4xl sm:text-6xl leading-[1.05] max-w-3xl">
        The people behind the Center for Systematic Entomology
      </h1>
      <p class="mt-5 text-lg sm:text-xl leading-relaxed text-white/80 max-w-2xl">
        A volunteer society of entomologists who support research and publishing in insect systematics — run by elected
        officers and a board of directors, with editorial and grant teams.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          href="/PDF/CSE_Bylaws.pdf"
          target="_blank"
          rel="noopener"
          class="px-6 py-3 rounded-full bg-quaternary text-ink font-semibold hover:bg-white transition-colors"
          >Read our bylaws (PDF)</a
        >
        <NuxtLink
          to="/membership"
          class="px-6 py-3 rounded-full border-2 border-white/60 font-semibold hover:border-white hover:bg-white/10 transition-colors"
          >Become a member</NuxtLink
        >
      </div>
    </div>
  </section>

  <!-- How the CSE is run -->
  <section class="container mx-auto px-6 py-14">
    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">How we work</p>
    <h2 class="mt-2 font-serif text-3xl font-bold text-ink">How the CSE is run</h2>
    <ol class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="(s, i) in structure"
        :key="s.title"
        class="relative p-6 rounded-xl bg-paper border border-rule"
      >
        <span class="font-serif text-4xl font-bold text-quaternary/70">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3 class="mt-2 font-serif text-xl font-semibold text-ink">{{ s.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ s.text }}</p>
        <a
          v-if="s.anchor"
          :href="`#${s.anchor}`"
          class="mt-3 inline-block text-sm font-semibold text-senary hover:underline underline-offset-4"
          >Meet them ↓</a
        >
      </li>
    </ol>
  </section>
</template>

<script setup>
const structure = [
  {
    title: 'Officers',
    text: 'President, Vice President, Treasurer and Secretary are elected for one-year terms and may be re-elected. Together they form the Executive Committee.',
    anchor: 'board'
  },
  {
    title: 'Board of Directors',
    text: 'The officers and board members, elected for two-year terms, guide the mission and strategy of the CSE. The Board usually meets four times a year.',
    anchor: 'directors'
  },
  {
    title: 'Teams & committees',
    text: 'The editors of Insecta Mundi, and the Gifts, Grants and Endowments (GGE) Committee, which sets policy on donations, gifts and grants.',
    anchor: 'editorialstaff'
  },
  {
    title: 'Annual meeting',
    text: 'Members meet once a year at the business meeting held during the CSE Annual Conference.',
    anchor: null
  }
]
</script>
