<template>
  <aside class="w-full lg:w-80 shrink-0 space-y-5 lg:sticky lg:top-20 self-start">
    <!-- Downloadable resources (forms, guidelines) -->
    <div
      v-if="resources.length"
      class="rounded-xl border border-rule bg-white p-5"
    >
      <h2 class="font-serif text-lg font-semibold text-ink">{{ resourcesTitle }}</h2>
      <ul class="mt-3 space-y-1.5">
        <li
          v-for="r in resources"
          :key="r.link"
        >
          <a
            :href="r.link"
            target="_blank"
            rel="noopener"
            class="group flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-paper"
          >
            <span
              class="mt-0.5 shrink-0 text-[0.62rem] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
              :class="r.link.endsWith('.pdf') ? 'bg-otenary/15 text-otenary' : 'bg-primary/20 text-setenary'"
              >{{ r.link.split('.').pop() }}</span
            >
            <span class="text-sm text-ink group-hover:text-senary leading-snug">{{ r.text }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Contact -->
    <div class="rounded-xl border border-rule bg-paper p-5">
      <h2 class="font-serif text-lg font-semibold text-ink">Contact the editors</h2>
      <ul class="mt-3 space-y-3 text-sm">
        <li
          v-for="c in contacts"
          :key="c.name"
        >
          <p class="font-semibold text-ink">{{ c.name }}</p>
          <p class="text-xs uppercase tracking-wider text-ink-soft">{{ c.role }}</p>
          <a
            :href="`mailto:${c.email}`"
            class="text-senary hover:underline break-all"
            >{{ c.email }}</a
          >
        </li>
      </ul>
      <address class="mt-4 pt-4 border-t border-rule not-italic text-sm text-ink-soft leading-relaxed">
        Center for Systematic Entomology<br />
        P.O. Box 141874<br />
        Gainesville, FL 32614-1874, USA
      </address>
    </div>

    <!-- Quick links -->
    <nav
      class="rounded-xl border border-rule bg-white p-2"
      aria-label="Journal pages"
    >
      <NuxtLink
        v-for="l in quick"
        :key="l.to"
        :to="l.to"
        class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-ink hover:bg-paper hover:text-senary"
      >
        {{ l.label }} <span aria-hidden="true">→</span>
      </NuxtLink>
      <a
        href="/feed.xml"
        class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-ink hover:bg-paper hover:text-senary"
        title="Add this address to a feed reader to be notified of new articles"
      >
        Follow new articles (RSS) <span class="text-quaternary" aria-hidden="true">◉</span>
      </a>
    </nav>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { insectaMundiTeam } from '~/helpers/people'

const props = defineProps({
  // [{ text, link }] — forms and guideline files shown at the top
  resources: { type: Array, default: () => [] },
  resourcesTitle: { type: String, default: 'Resources' }
})

const route = useRoute()

// Editors — from data/people.js
const contacts = insectaMundiTeam

const quick = computed(() =>
  [
    { label: 'Instructions for authors', to: '/insecta_mundi/authorguidelines' },
    { label: 'Editor guidelines', to: '/insecta_mundi/editorinfo' },
    { label: 'Ethics statement', to: '/insecta_mundi/ethic' },
    { label: 'Become a member', to: '/membership' }
  ].filter((l) => !route.path.startsWith(l.to))
)
</script>
