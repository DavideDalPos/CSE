<template>
  <div>
    <PublicationsHeader
      kicker="Florida State Collection of Arthropods"
      title="FSCA monograph series"
      lede="Two long-running series of illustrated monographs, faunal reviews, revisions and checklists published with the Florida State Collection of Arthropods. Every volume is free to download."
      :covers="['/images/otherpubs/FSCA_Occasional/OPFSCA_2021_013.jpg', '/images/otherpubs/FSCA_Arthropods/AFNLA_1989_013.jpg', '/images/otherpubs/FSCA_Occasional/OPFSCA_2019_012.jpg']"
    >
      <div class="mt-6 grid sm:grid-cols-2 gap-3 max-w-2xl">
        <a
          v-for="s in series"
          :key="s.collection"
          :href="`#${s.collection}`"
          class="group rounded-xl border border-white/20 bg-white/5 px-4 py-3 hover:bg-white/10"
        >
          <span class="block text-[0.7rem] uppercase tracking-[0.16em] text-quaternary font-semibold">ISSN {{ s.issn }}</span>
          <span class="mt-0.5 block font-serif font-semibold text-white">{{ s.short }}</span>
          <span class="text-xs text-white/60 group-hover:text-white/80">Jump to the series ↓</span>
        </a>
      </div>
    </PublicationsHeader>

    <div class="container mx-auto px-6 py-12 space-y-20">
      <FscaSeries
        v-for="s in series"
        :key="s.collection"
        :series="s.collection"
        :anchor="s.collection"
        :limit="10"
      />

      <!-- Related -->
      <section class="grid md:grid-cols-2 gap-6">
        <NuxtLink
          to="/insecta_mundi"
          class="group rounded-xl border border-rule bg-paper p-6 hover:border-quaternary"
        >
          <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Our journal</p>
          <p class="mt-1 font-serif text-2xl font-semibold text-ink group-hover:text-senary"><i>Insecta Mundi</i> →</p>
          <p class="mt-2 text-sm text-ink-soft">Peer-reviewed articles on the systematics of the world’s non-marine arthropods.</p>
        </NuxtLink>
        <NuxtLink
          to="/other_publications/CSE"
          class="group rounded-xl border border-rule bg-paper p-6 hover:border-quaternary"
        >
          <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">More from the Center</p>
          <p class="mt-1 font-serif text-2xl font-semibold text-ink group-hover:text-senary">CSE publications →</p>
          <p class="mt-2 text-sm text-ink-soft">Festschrifts, the Memoirs series and the archive of the members’ newsletter.</p>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup>
import PublicationsHeader from './PublicationsHeader.vue'
import FscaSeries from './FscaSeries.vue'
import { FSCA_SERIES } from '~/helpers/fscaSeries'

const series = [FSCA_SERIES.arthropod_papers, FSCA_SERIES.occasional_papers]

useHead({ title: 'FSCA publications' })
</script>
