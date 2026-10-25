<template>
  <section class="container mx-auto px-6 py-14 grid lg:grid-cols-12 gap-10">
    <div class="lg:col-span-7">
      <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">About the CSE</p>
      <h2 class="mt-2 font-serif text-3xl font-bold text-ink">{{ years }} years of arthropod systematics</h2>
      <div class="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
        <p>
          The <b class="text-ink">Center for Systematic Entomology</b> is a non-profit organization dedicated to advancing
          systematics in its broadest sense. It has long supported the
          <a
            href="https://thefsca.org"
            target="_blank"
            rel="noopener"
            class="text-senary font-medium underline underline-offset-4 decoration-quaternary/60 hover:decoration-senary"
            >Florida State Collection of Arthropods (FSCA)</a
          >
          and awarded numerous grants to specialists working there. CSE membership is also a way for FSCA Research
          Associates to contribute to the field.
        </p>
        <p>
          Our publications include <i class="text-ink">Insecta Mundi</i>, a journal devoted to arthropod systematics, the
          <b class="text-ink">CSE Memoirs</b> series and, until 2003, the <b class="text-ink">CSE Newsletter</b>.
        </p>
      </div>
      <NuxtLink
        to="/about"
        class="mt-6 inline-block font-semibold text-senary hover:underline underline-offset-4"
        >Our history and board →</NuxtLink
      >
    </div>
    <dl class="lg:col-span-5 grid grid-cols-2 gap-px bg-rule rounded-xl overflow-hidden border border-rule self-start">
      <div
        v-for="s in stats"
        :key="s.label"
        class="bg-white p-6"
      >
        <dt class="text-xs uppercase tracking-[0.14em] text-ink-soft font-semibold">{{ s.label }}</dt>
        <dd class="mt-2 font-serif text-4xl font-bold text-ink tabular-nums">{{ s.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
import membership from '~/data/membership'
import { computed } from 'vue'

const years = new Date().getFullYear() - 1985

const { data } = await useAsyncData('home-stats', () =>
  queryContent('insecta_mundi').where({ date: { $ne: null } }).only(['categories']).find()
)

const stats = computed(() => {
  const rows = data.value || []
  const orders = new Set(rows.flatMap((r) => r.categories || []).filter((c) => /ptera$/i.test(c)))
  return [
    { label: 'Years', value: years },
    { label: 'Articles online', value: rows.length },
    { label: 'Membership', value: `$${membership.fee}` },
    { label: 'Insect orders', value: orders.size || '—' }
  ]
})
</script>
