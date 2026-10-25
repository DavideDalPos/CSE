<template>
  <section
    id="checklist"
    class="scroll-mt-32 mt-14"
  >
    <h2 class="font-serif text-3xl font-bold text-ink">Submission checklist</h2>
    <p class="mt-2 text-ink-soft">Every submitted manuscript must include:</p>
    <ol class="mt-6 relative border-l-2 border-quaternary/50 ml-3 space-y-5">
      <li
        v-for="(item, i) in checklistItems"
        :key="item.title"
        class="relative pl-8"
      >
        <span
          class="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-quaternary text-white text-sm font-bold flex items-center justify-center ring-4 ring-white"
          >{{ i + 1 }}</span
        >
        <h3 class="font-semibold text-ink">
          <a
            v-if="item.link"
            :href="item.link"
            class="text-senary underline underline-offset-2"
            >{{ item.title }}</a
          >
          <template v-else>{{ item.title }}</template>
        </h3>
        <p class="text-sm text-ink-soft">{{ item.text }}</p>
      </li>
    </ol>
  </section>
</template>

<script setup>
const checklistItems = [
  { title: 'Manuscript', text: 'The manuscript and any appendices or other files.' },
  { title: 'Images', text: 'Images arranged into plates, each plate as a separate TIF, JPG or PDF file.' },
  { title: 'Reviews', text: 'Copies of the two critical reviews, showing the reviewers’ comments.' },
  {
    title: 'Reviewer Report Forms',
    text: 'One completed form for each reviewer, in addition to the manuscript with comments.',
    link: '/PDF/insectamundi/InsectaMundi_ReviewerReportForm_2022.doc'
  },
  {
    title: 'Submission Contract',
    text: 'The signed contract attesting that the manuscript is ready to go.',
    link: '/PDF/insectamundi/InsectaMundi_SubmissionContract_2014.doc'
  }
]
</script>
