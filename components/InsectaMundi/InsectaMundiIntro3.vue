<template>
  <section class="container mx-auto px-6 py-14 scroll-mt-32">
    <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">The people</p>
    <h2 class="mt-2 font-serif text-3xl font-bold text-ink">Editorial team</h2>

    <div class="mt-8 grid gap-6 md:grid-cols-3">
      <div class="p-5 rounded-xl bg-ink text-white">
        <p class="text-xs uppercase tracking-[0.14em] text-quaternary font-semibold">Chief Editor</p>
        <p class="mt-1 font-serif text-xl font-semibold">{{ split(chiefEditor).name }}</p>
        <p class="text-sm text-white/70">{{ split(chiefEditor).where }}</p>
      </div>
      <div class="p-5 rounded-xl bg-paper border border-rule">
        <p class="text-xs uppercase tracking-[0.14em] text-senary font-semibold">Layout Editors</p>
        <p class="mt-1 text-ink">{{ layoutEditors }}</p>
      </div>
      <div class="p-5 rounded-xl bg-paper border border-rule">
        <p class="text-xs uppercase tracking-[0.14em] text-senary font-semibold">Post production</p>
        <p class="mt-1 text-ink">{{ postProduction }}</p>
      </div>
    </div>

    <div class="mt-10 grid gap-10 lg:grid-cols-2">
      <EditorListSection
        title="Editorial Board"
        :items="sortedEditorialBoard"
      />
      <div class="space-y-10">
        <EditorListSection
          title="Digital registration editors"
          :items="digitalRegistration"
        />
        <EditorListSection
          title="Founding editors"
          :items="sortedFoundingEditors"
        />
      </div>
    </div>

    <EditorListSection
      id="revieweditors"
      class="mt-10 scroll-mt-32"
      title="Review Editors"
      :items="sortedReviewEditors"
      columns
    />

    <p class="mt-8 text-sm text-ink-soft italic">
      All editors are active members of the Center for Systematic Entomology, unless marked with an asterisk (*).
    </p>
  </section>
</template>

<script setup>
import {
  chiefEditor,
  digitalRegistration,
  layoutEditors,
  postProduction,
  sortedEditorialBoard,
  sortedFoundingEditors,
  sortedReviewEditors
} from './InsectaMundiIntro3Data'

import EditorListSection from './EditorListSection.vue'

// "Name (Institution)" → { name, where }
function split(s) {
  const v = String(s?.value ?? s ?? '')
  const m = v.match(/^(.*?)\s*\((.*)\)\s*$/)
  return m ? { name: m[1], where: m[2] } : { name: v, where: '' }
}
</script>
