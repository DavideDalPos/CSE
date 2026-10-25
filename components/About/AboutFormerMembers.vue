<template>
  <section
    id="former"
    class="scroll-mt-32 bg-paper border-t border-rule"
  >
    <div class="container mx-auto px-6 py-14">
      <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Our history</p>
      <h2 class="mt-2 font-serif text-3xl font-bold text-ink">Former board members</h2>
      <p class="mt-2 text-ink-soft max-w-3xl">
        Thank you to everyone who has served on the Board of the Center for Systematic Entomology.
      </p>

      <ol class="mt-8 relative border-l-2 border-quaternary/40 ml-2 space-y-6">
        <li
          v-for="entry in shown"
          :key="entry.term"
          class="pl-6 relative"
        >
          <span class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-quaternary ring-4 ring-paper" />
          <p class="font-serif text-lg font-semibold text-ink">{{ entry.term }}</p>
          <p class="mt-1 text-sm text-ink-soft leading-relaxed">{{ entry.members.map((m) => m.name).join(' · ') }}</p>
        </li>
      </ol>

      <button
        v-if="formerBoardMembers.length > LIMIT"
        type="button"
        class="mt-8 px-5 py-2.5 rounded-full border-2 border-ink text-ink font-semibold hover:border-senary hover:text-senary"
        @click="all = !all"
      >
        {{ all ? 'Show fewer' : `Show all terms back to ${oldest}` }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { boardTerms } from '~/helpers/people'

// Terms that have ended move here automatically (data/people.js)
const formerBoardMembers = boardTerms().former

const LIMIT = 8
const all = ref(false)
const shown = computed(() => (all.value ? formerBoardMembers : formerBoardMembers.slice(0, LIMIT)))
const oldest = computed(() => formerBoardMembers[formerBoardMembers.length - 1]?.term?.slice(0, 4) || '')
</script>
