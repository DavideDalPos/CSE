<template>
  <section class="border-t border-rule bg-paper">
    <div class="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 class="font-serif text-2xl font-bold text-ink">Read the latest research</h2>
        <p class="mt-1 text-ink-soft">New articles appear here on the day they are published.</p>
      </div>
      <div class="flex flex-wrap gap-3">
        <NuxtLink
          to="/insecta_mundi/current"
          class="px-6 py-3 rounded-full bg-ink text-white font-semibold hover:bg-senary transition-colors"
          >Latest issue</NuxtLink
        >
        <NuxtLink
          to="/insecta_mundi"
          class="px-6 py-3 rounded-full border-2 border-ink text-ink font-semibold hover:border-senary hover:text-senary transition-colors"
          >Browse the archive</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
