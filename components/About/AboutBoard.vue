<template>
  <!-- Section shortcuts -->
  <nav
    class="sticky top-16 z-20 bg-white/95 backdrop-blur border-y border-rule"
    aria-label="On this page"
  >
    <div class="container mx-auto px-6 py-2 flex gap-2 overflow-x-auto text-sm whitespace-nowrap">
      <a
        v-for="s in sections"
        :key="s.id"
        :href="`#${s.id}`"
        class="px-3 py-1.5 rounded-full text-ink hover:bg-paper hover:text-senary"
        >{{ s.label }}</a
      >
    </div>
  </nav>

  <div class="container mx-auto px-6 py-12 space-y-16">
    <!-- Officers -->
    <section
      id="board"
      class="scroll-mt-32"
    >
      <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Executive Committee · {{ officerYear }}</p>
      <h2 class="mt-2 font-serif text-3xl font-bold text-ink">Officers</h2>
      <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <AboutPerson
          v-for="p in officers"
          :key="p.name"
          :person="p"
          large
        />
      </div>
    </section>

    <!-- Board -->
    <section
      id="directors"
      class="scroll-mt-32"
    >
      <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Elected for two-year terms</p>
      <h2 class="mt-2 font-serif text-3xl font-bold text-ink">Board members</h2>
      <div class="mt-6 space-y-8">
        <div
          v-for="[period, members] in groupedMembers"
          :key="period"
        >
          <h3 class="inline-flex items-center gap-2 text-sm font-semibold text-ink">
            <span class="px-2.5 py-0.5 rounded-full bg-secondary/70">Term {{ period }}</span>
          </h3>
          <div class="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AboutPerson
              v-for="p in members"
              :key="p.name"
              :person="p"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Insecta Mundi -->
    <section
      id="editorialstaff"
      class="scroll-mt-32"
    >
      <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Our journal</p>
      <h2 class="mt-2 font-serif text-3xl font-bold text-ink"><i>Insecta Mundi</i> editorial team</h2>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AboutPerson
          v-for="p in insectamundiTeam"
          :key="p.name"
          :person="p"
        />
      </div>
      <p class="mt-4 text-sm text-ink-soft">
        Write to the editors at
        <a
          href="mailto:insectamundi@gmail.com"
          class="text-senary underline underline-offset-2"
          >insectamundi@gmail.com</a
        >
        ·
        <NuxtLink
          to="/insecta_mundi/authorguidelines"
          class="text-senary underline underline-offset-2"
          >Instructions for authors</NuxtLink
        >
      </p>
    </section>

    <!-- GGE -->
    <section
      id="gge"
      class="scroll-mt-32"
    >
      <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Appointed by the Board</p>
      <h2 class="mt-2 font-serif text-3xl font-bold text-ink">Gifts, Grants &amp; Endowments Committee</h2>
      <p class="mt-2 text-ink-soft max-w-3xl">
        Develops and recommends policy on donations, tangible gifts and the administration of grants, including the
        <NuxtLink
          to="/grants"
          class="text-senary underline underline-offset-2"
          >Peck travel grants</NuxtLink
        >.
      </p>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AboutPerson
          v-for="p in grantCommittee"
          :key="p.name"
          :person="p"
        />
      </div>
    </section>

    <!-- Website -->
    <section
      id="web"
      class="scroll-mt-32"
    >
      <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">This website</p>
      <h2 class="mt-2 font-serif text-3xl font-bold text-ink">Web support team</h2>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AboutPerson
          v-for="p in webmaster"
          :key="p.name"
          :person="p"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AboutPerson from './AboutPerson.vue'
import { boardTerms, officers as officerData, insectaMundiTeam as insectamundiTeam, grantCommittee, webTeam as webmaster } from '~/helpers/people'

// Everything comes from data/people.js
const officers = officerData.list
const officerYear = officerData.year

// Current board terms (newest first), names alphabetical
const groupedMembers = computed(() =>
  boardTerms().current.map((t) => [t.term, t.members.slice().sort((a, b) => a.name.localeCompare(b.name))])
)

const sections = [
  { id: 'board', label: 'Officers' },
  { id: 'directors', label: 'Board members' },
  { id: 'editorialstaff', label: 'Insecta Mundi editors' },
  { id: 'gge', label: 'GGE Committee' },
  { id: 'web', label: 'Web team' },
  { id: 'former', label: 'Former board members' }
]
</script>
