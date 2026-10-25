<template>
  <div>
    <!-- Header -->
    <header class="relative isolate overflow-hidden bg-ink text-white">
      <img
        src="/images/donations1.webp"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div class="absolute inset-0 bg-[linear-gradient(100deg,#151d20_0%,rgba(31,42,46,0.92)_45%,rgba(31,42,46,0.45)_100%)]" />
      <div class="relative container mx-auto px-6 pt-12 pb-8 lg:pt-16">
        <p class="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-quaternary">
          Grants<span class="mx-2 opacity-60">·</span>The Peck Fund
        </p>
        <h1 class="mt-3 font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
          Travel grants to work in the FSCA collections
        </h1>
        <p class="mt-4 text-base sm:text-lg leading-relaxed text-white/80 max-w-2xl">
          The Stewart and Jarmila Peck Collection Enhancement Endowment supports research visits to the Florida State Collection of
          Arthropods that help improve the collection.
        </p>

        <dl class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
          <div
            v-for="f in facts"
            :key="f.label"
            class="rounded-xl border border-white/15 bg-white/5 px-4 py-3"
          >
            <dt class="text-[0.68rem] uppercase tracking-[0.14em] text-white/60">{{ f.label }}</dt>
            <dd class="mt-0.5 font-serif text-lg font-semibold">{{ f.value }}</dd>
          </div>
        </dl>

        <nav
          class="mt-8 -mx-1 flex gap-1 overflow-x-auto whitespace-nowrap text-sm"
          aria-label="On this page"
        >
          <a
            v-for="s in sections"
            :key="s.id"
            :href="`#${s.id}`"
            class="px-3.5 py-2 rounded-full text-white/75 hover:text-white hover:bg-white/10"
            >{{ s.label }}</a
          >
        </nav>
      </div>
    </header>

    <div class="container mx-auto px-6 py-12">
      <div class="grid lg:grid-cols-12 gap-10">
        <!-- Main column -->
        <div class="lg:col-span-8 min-w-0 space-y-16">
          <!-- About the fund -->
          <section
            id="peck"
            class="scroll-mt-24"
          >
            <figure class="sm:float-right sm:ml-8 mb-6 sm:w-80">
              <img
                src="/images/jarmila_and_stewart_peck.avif"
                alt="Jarmila and Stewart Peck"
                class="w-full rounded-xl shadow-lg"
              />
              <figcaption class="mt-2 text-xs text-ink-soft">
                Jarmila &amp; Stewart Peck. Photo © Pierre Poirier, Canadian Museum of Nature.
              </figcaption>
            </figure>

            <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Established 2021</p>
            <h2 class="mt-1 font-serif font-bold text-3xl text-ink">The Peck Fund</h2>
            <div class="im-text mt-4">
              <p>
                In 2021, <b class="text-ink">Stewart</b> and <b class="text-ink">Jarmila Peck</b> established the Stewart and Jarmila Peck Collection
                Enhancement Endowment (the <b class="text-ink">Peck Fund</b>) with the Center for Systematic Entomology. Its purpose is to support
                research travel to the
                <a
                  href="https://thefsca.org"
                  target="_blank"
                  rel="noopener"
                  class="text-senary hover:underline"
                  >Florida State Collection of Arthropods (FSCA)</a
                >
                to work with — and ultimately improve — the collection.
              </p>
              <p>
                Awards are limited. Proposals are reviewed twice a year, on <b class="text-ink">{{ deadlineDays[0] }}</b> and <b class="text-ink">{{ deadlineDays[1] }}</b>,
                by the
                <NuxtLink
                  to="/about#gge"
                  class="text-senary hover:underline"
                  >Gifts, Grants and Endowment (GGE) Committee</NuxtLink
                >
                and approved by the
                <NuxtLink
                  to="/about#board"
                  class="text-senary hover:underline"
                  >CSE Board of Directors</NuxtLink
                >. Applicants must be CSE members and should contact the relevant FSCA curator about potential work before applying.
              </p>
            </div>

            <div class="clear-both pt-6">
              <p class="text-sm font-semibold text-ink">Enhanced curation could include</p>
              <ul class="mt-3 flex flex-wrap gap-2">
                <li
                  v-for="c in curation"
                  :key="c"
                  class="px-3.5 py-1.5 rounded-full bg-secondary/50 text-sm text-ink"
                >
                  {{ c }}
                </li>
              </ul>
            </div>
          </section>

          <!-- How to apply -->
          <section
            id="grantguidelines"
            class="scroll-mt-24"
          >
            <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Guidelines</p>
            <h2 class="mt-1 font-serif font-bold text-3xl text-ink">How to apply</h2>

            <ol class="mt-6 grid md:grid-cols-3 gap-4">
              <li
                v-for="(s, i) in steps"
                :key="s.title"
                class="rounded-xl border border-rule bg-white p-5"
              >
                <span class="grid place-items-center w-8 h-8 rounded-full bg-quaternary text-white font-semibold text-sm">{{ i + 1 }}</span>
                <h3 class="mt-3 font-serif text-lg font-semibold text-ink">{{ s.title }}</h3>
                <ul class="mt-2 space-y-1.5 text-sm text-ink-soft leading-snug">
                  <li
                    v-for="item in s.items"
                    :key="item"
                    class="flex gap-2"
                  >
                    <span
                      class="text-quaternary"
                      aria-hidden="true"
                      >•</span
                    ><span v-html="item" />
                  </li>
                </ul>
              </li>
            </ol>

            <div class="mt-8 rounded-xl border border-rule bg-paper p-6">
              <h3 class="font-serif text-xl font-semibold text-ink">What the proposal should include</h3>
              <p class="mt-1 text-sm text-ink-soft">A short formal proposal of 1–2 pages, with these sections:</p>
              <ol class="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <li
                  v-for="(p, i) in proposal"
                  :key="p.title"
                  class="flex gap-3"
                >
                  <span class="w-7 shrink-0 font-serif font-semibold text-senary">{{ roman(i + 1) }}.</span>
                  <span class="text-ink"
                    >{{ p.title }}<span
                      v-if="p.note"
                      class="text-ink-soft"
                    >
                      — {{ p.note }}</span
                    ></span
                  >
                </li>
              </ol>
            </div>

            <p class="mt-6 p-4 border-l-4 border-quaternary bg-paper rounded-r-lg text-ink">
              <b>Please acknowledge</b> the CSE and the Peck Endowment in any publication that results from the grant.
            </p>
          </section>

          <!-- Reports -->
          <section
            id="reports"
            class="scroll-mt-24"
          >
            <div class="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">The Peck Fund at work</p>
                <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Reports from funded visits</h2>
                <p class="mt-2 text-sm text-ink-soft">
                  <b class="text-ink">{{ reports.length }}</b> projects since {{ reports.at(-1)?.year }}
                </p>
              </div>
              <label class="relative w-full sm:w-72">
                <span class="sr-only">Search reports</span>
                <svg
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                  />
                  <path
                    stroke-linecap="round"
                    d="m20 20-3.5-3.5"
                  />
                </svg>
                <input
                  v-model="search"
                  type="search"
                  placeholder="Search by taxon, name or title…"
                  class="w-full pl-9 pr-3 py-2 rounded-full border border-rule bg-white text-sm focus:outline-none focus:border-quaternary"
                />
              </label>
            </div>

            <ul class="mt-6 divide-y divide-rule border-y border-rule">
              <li
                v-for="r in filteredReports"
                :key="r.year + r.researcher"
                class="py-4 grid sm:grid-cols-[4.5rem_1fr_auto] gap-x-4 gap-y-1 items-start"
              >
                <span class="font-serif text-lg font-semibold text-senary">{{ r.year }}</span>
                <div class="min-w-0">
                  <p
                    class="font-serif font-semibold text-ink leading-snug"
                    v-html="r.title"
                  />
                  <p class="mt-0.5 text-sm text-ink-soft">
                    <span v-html="r.researcher.replace(/<br\s*\/?>/g, ' · ')" />
                  </p>
                  <p class="mt-1.5 flex flex-wrap gap-1.5">
                    <span
                      v-for="t in r.taxa"
                      :key="t"
                      class="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-ink"
                      >{{ t }}</span
                    >
                  </p>
                </div>
                <a
                  v-if="r.pdf"
                  :href="r.pdf"
                  target="_blank"
                  rel="noopener"
                  class="justify-self-start sm:justify-self-end inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-quaternary text-white text-xs font-semibold hover:bg-senary transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"
                    />
                  </svg>
                  Report
                </a>
              </li>
              <li
                v-if="!filteredReports.length"
                class="py-8 text-center text-ink-soft"
              >
                No reports match “{{ search }}”.
              </li>
            </ul>

            <div
              v-if="citations.length"
              class="mt-8 rounded-xl border border-rule bg-paper p-6"
            >
              <h3 class="font-serif text-xl font-semibold text-ink">Publications from the Peck Fund</h3>
              <ul class="mt-3 space-y-3 text-sm text-ink leading-relaxed">
                <li
                  v-for="c in citations"
                  :key="c.doi"
                >
                  <span v-html="c.text" />
                  <a
                    :href="c.doi"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ml-1 text-senary hover:underline break-all"
                    >{{ c.doi }}</a
                  >
                </li>
              </ul>
            </div>
          </section>

          <!-- Archive -->
          <section
            id="archive"
            class="scroll-mt-24"
          >
            <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Archive</p>
            <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Earlier CSE grants</h2>
            <p class="mt-2 text-ink-soft">Since 1991 the Center has awarded many other grants. Recipients include:</p>

            <dl class="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4">
              <div
                v-for="g in archive"
                :key="g.year"
                class="flex gap-4"
              >
                <dt class="w-12 shrink-0 font-serif font-semibold text-senary">{{ g.year }}</dt>
                <dd class="text-sm text-ink leading-relaxed">
                  <template
                    v-for="(n, i) in g.names"
                    :key="n"
                  >
                    <a
                      v-if="n.startsWith('Gary Steck')"
                      href="#guatemala"
                      class="text-senary hover:underline"
                      >{{ n }}</a
                    ><template v-else>{{ n }}</template
                    ><span v-if="i < g.names.length - 1">, </span>
                  </template>
                </dd>
              </div>
            </dl>
          </section>
        </div>

        <!-- Sidebar -->
        <aside class="lg:col-span-4">
          <div class="lg:sticky lg:top-20 space-y-4">
            <GrantDeadline />

            <div class="rounded-xl border border-rule bg-white p-5">
              <h2 class="font-serif text-lg font-semibold text-ink">Send your proposal</h2>
              <a
                :href="`mailto:${g.email}?subject=Peck%20Fund%20proposal`"
                class="mt-3 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-quaternary text-white font-semibold hover:bg-senary transition-colors"
                >Email the GGE Committee</a
              >
              <p class="mt-2 text-center text-sm text-ink-soft">{{ g.email }}</p>
              <div class="mt-4 pt-4 border-t border-rule text-sm text-ink-soft">
                <p class="text-xs uppercase tracking-wider">Or by mail</p>
                <address class="mt-1 not-italic leading-relaxed">
                  <template
                    v-for="(line, i) in g.address"
                    :key="i"
                    >{{ line }}<br
                  /></template>
                </address>
              </div>
            </div>

            <div class="rounded-xl border border-rule bg-paper p-5">
              <h2 class="font-serif text-lg font-semibold text-ink">GGE Committee</h2>
              <ul class="mt-3 space-y-3 text-sm">
                <li
                  v-for="m in committee"
                  :key="m.name"
                >
                  <p class="font-semibold text-ink">{{ m.name }}</p>
                  <p class="text-xs uppercase tracking-wider text-ink-soft">{{ m.role }}</p>
                </li>
              </ul>
              <a
                :href="g.curatorsUrl"
                target="_blank"
                rel="noopener"
                class="mt-4 inline-block text-sm font-semibold text-senary hover:underline"
                >Find an FSCA curator ↗</a
              >
            </div>

            <NuxtLink
              to="/membership"
              class="block rounded-xl border border-rule bg-white p-5 hover:border-quaternary group"
            >
              <p class="text-xs uppercase tracking-[0.16em] font-semibold text-senary">Not a member yet?</p>
              <p class="mt-1 font-serif text-lg font-semibold text-ink group-hover:text-senary">Join the CSE →</p>
              <p class="mt-1 text-sm text-ink-soft">Membership is required to apply.</p>
            </NuxtLink>
          </div>
        </aside>
      </div>

      <!-- Guatemala -->
      <section
        id="guatemala"
        class="scroll-mt-24 mt-20 pt-12 border-t border-rule"
      >
        <div class="max-w-3xl">
          <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">From the archive · 2009</p>
          <h2 class="mt-1 font-serif font-bold text-3xl sm:text-4xl text-ink">A trip to Guatemala</h2>
          <p class="mt-3 text-ink-soft leading-relaxed">
            As part of an ongoing survey of the Diptera of Guatemala, run with the Systematic Entomology Laboratory of the Universidad del Valle de
            Guatemala (UVG), Gary Steck and Bruce Sutton visited Guatemala from May 28 to June 11, 2009. The CSE provided partial funding for the
            trip.
          </p>
        </div>

        <GrantGuatemalaGallery class="mt-8">
          <a
            href="https://drive.google.com/file/d/1GJ3-z9Qhgpo4U25dgzsAJubAan7m_Bku/view?usp=sharing"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-senary transition-colors"
            >Read the report (PDF)</a
          >
          <a
            href="/images/guatemala.zip"
            download="guatemala_images.zip"
            class="inline-flex items-center px-5 py-2.5 rounded-full text-ink text-sm font-semibold hover:text-senary"
            >Download all photos (.zip, 6.7 MB)</a
          >
        </GrantGuatemalaGallery>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import GrantDeadline from '~/components/Grants/GrantDeadline.vue'
import GrantGuatemalaGallery from '~/components/Grants/GrantGuatemalaGallery.vue'
import g from '~/data/grants'
import { grantCommittee } from '~/helpers/people'

useHead({ title: 'Peck Fund travel grants' })

// "01-15" → "January 15"
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const deadlineDays = g.deadlines.map((d) => `${MONTHS[Number(d.slice(0, 2)) - 1]} ${Number(d.slice(3))}`)
const money = `$${g.maxAward.toLocaleString('en-US')}`

const facts = [
  { label: 'Award', value: `Up to ${money}` },
  { label: 'Deadlines', value: deadlineDays.map((d) => d.replace(/^(\w{3})\w*/, '$1')).join(' · ') },
  { label: 'Open to', value: 'CSE members' },
  { label: 'Proposal', value: '1–2 pages' }
]

const sections = [
  { id: 'peck', label: 'The Peck Fund' },
  { id: 'grantguidelines', label: 'How to apply' },
  { id: 'reports', label: 'Reports' },
  { id: 'archive', label: 'Earlier grants' },
  { id: 'guatemala', label: 'Guatemala 2009' }
]

const curation = ['Specimen sorting & identification', 'Designation of types', 'Taxonomy updates']

const steps = [
  {
    title: 'Check eligibility',
    items: [
      'Be a <a href="/membership" class="text-senary hover:underline">CSE member</a>',
      'Have expertise in insect systematics and taxonomy',
      `Contact an <a href="${g.curatorsUrl}" target="_blank" rel="noopener" class="text-senary hover:underline">FSCA curator</a> about the work`
    ]
  },
  {
    title: 'Apply',
    items: ['Prepare a formal proposal (1–2 pages)', `Send it to the GGE Committee by email or mail before ${deadlineDays.join(' or ')}`]
  },
  {
    title: 'Report back',
    items: [
      'After the visit, send the GGE Committee a report of the work, with some photographs',
      'Your report is formatted and posted on this page under <a href="#reports" class="text-senary hover:underline">Reports</a>'
    ]
  }
]

const proposal = [
  { title: 'Title' },
  { title: 'Author(s)' },
  { title: 'Affiliation & contact information', note: 'include your major professor if you are a student' },
  { title: 'FSCA contact / collaborator' },
  { title: 'Proposed dates of travel', note: 'can change' },
  { title: 'Project background & justification' },
  { title: 'Contribution to improving the FSCA' },
  { title: 'Itemized budget & justification', note: `up to ${money}` },
  { title: 'References' }
]

function roman(n) {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n] || n
}

// GGE Committee — from data/people.js
const committee = grantCommittee

// Reports: taxa are stored as "A (B) <br> C (D)"
const reports = g.reports.map((r) => ({
  ...r,
  researcher: r.researcher.trim(),
  taxa: r.taxon.split(/<br\s*\/?>/).map((t) => t.trim())
}))

const search = ref('')
const filteredReports = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return reports
  return reports.filter((r) => [r.year, r.researcher, r.title, r.taxon].join(' ').replace(/<[^>]+>/g, ' ').toLowerCase().includes(q))
})

const citations = g.publications

// Earlier grants, grouped by year
const archive = Object.entries(
  g.earlierGrants.reduce((acc, line) => {
    const [year, name] = line.split(' - ')
    ;(acc[year] ||= []).push(name)
    return acc
  }, {})
)
  .map(([year, names]) => ({ year, names }))
  .sort((a, b) => b.year - a.year)
</script>
