<!--
  The conference page. Content comes from:
    data/conference.js          → this year's conference (edit every year)
    data/conferenceArchive.js   → past conferences
    data/conferencePosters.js   → poster archive
  What is shown (coming soon / countdown / live / finished) is decided
  automatically in composables/useConference.js.
-->
<template>
  <div>
    <!-- ================= Header ================= -->
    <header class="relative isolate overflow-hidden bg-ink text-white">
      <img
        src="/images/web/hero-conference.webp"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover opacity-35"
        style="object-position: center 40%"
      />
      <div class="absolute inset-0 bg-[linear-gradient(100deg,#151d20_0%,rgba(31,42,46,0.93)_45%,rgba(31,42,46,0.55)_100%)]" />

      <div class="relative container mx-auto px-6 pt-12 pb-8 lg:pt-16">
        <div
          v-if="previewing"
          class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quaternary text-ink text-xs font-semibold"
        >
          Preview mode — showing the page as it will look on {{ $route.query.now }} ET
        </div>

        <div class="grid lg:grid-cols-12 gap-8 items-end">
          <div class="lg:col-span-7">
            <p class="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-quaternary">
              CSE Annual Conference<span class="mx-2 opacity-60">·</span>{{ conf.year }}
              <span
                v-if="phase === 'live'"
                class="ml-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-600 text-white normal-case tracking-normal text-xs"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />Live now
              </span>
            </p>
            <h1 class="mt-3 font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              <template v-if="phase === 'planning'">The {{ conf.year }} conference is being planned</template>
              <template v-else-if="phase === 'upcoming'">Join us in Gainesville{{ conf.online ? ' or online' : '' }}</template>
              <template v-else-if="phase === 'live'">The conference is happening now</template>
              <template v-else>Thank you for joining us in {{ conf.year }}</template>
            </h1>

            <p
              v-if="phase !== 'planning'"
              class="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-white/85"
            >
              <span class="font-semibold text-white">{{ dayLabel }}</span>
              <span>{{ timeLabel }}</span>
              <span>{{ conf.venue }}, Gainesville, FL</span>
            </p>
            <p class="mt-4 text-base sm:text-lg leading-relaxed text-white/75 max-w-2xl">
              <template v-if="phase === 'planning'">
                Date, venue and the call for talks and posters will be announced here soon. Questions? Write to
                <a
                  :href="`mailto:${conf.contact}`"
                  class="text-quaternary hover:underline"
                  >{{ conf.contact }}</a
                >.
              </template>
              <template v-else-if="phase === 'finished'">
                Programs, recordings and posters from past meetings are in the archive below. Details of the next conference will be posted here
                soon.
              </template>
              <template v-else>
                A day of talks and posters on the systematics of insects and other arthropods — free and open to everyone.
              </template>
            </p>

            <div class="mt-7 flex flex-wrap gap-3">
              <a
                v-if="phase === 'live' && conf.zoom"
                :href="conf.zoom"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-quaternary text-white text-sm font-semibold hover:bg-senary transition-colors"
                >Join on Zoom ↗</a
              >
              <a
                v-if="phase === 'upcoming' && conf.registration"
                :href="conf.registration"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-quaternary text-white text-sm font-semibold hover:bg-senary transition-colors"
                >Register ↗</a
              >
              <a
                v-if="phase === 'upcoming' && submissions === 'open'"
                href="#submit"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                :class="conf.registration ? 'border-2 border-white/70 text-white hover:bg-white hover:text-ink' : 'bg-quaternary text-white hover:bg-senary'"
                >Submit a talk or poster</a
              >
              <a
                v-if="hasProgram && phase !== 'planning'"
                href="#program"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/70 text-white text-sm font-semibold hover:bg-white hover:text-ink transition-colors"
                >See the program</a
              >
              <a
                v-if="phase === 'planning' || phase === 'finished'"
                href="#meetingarchive"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/70 text-white text-sm font-semibold hover:bg-white hover:text-ink transition-colors"
                >Browse past conferences</a
              >
            </div>
          </div>

          <!-- Countdown -->
          <div
            v-if="phase === 'upcoming'"
            class="lg:col-span-5"
          >
            <div class="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 sm:p-6">
              <p class="text-xs uppercase tracking-[0.16em] text-white/60">Starts in</p>
              <div class="mt-3 grid grid-cols-4 gap-2 text-center">
                <div
                  v-for="u in countdown"
                  :key="u.label"
                  class="rounded-xl bg-white/8 py-3"
                >
                  <span class="block font-serif text-3xl sm:text-4xl font-semibold tabular-nums">{{ String(u.value).padStart(2, '0') }}</span>
                  <span class="block text-[0.65rem] uppercase tracking-wider text-white/60">{{ u.label }}</span>
                </div>
              </div>
              <a
                :href="calendarUrl"
                target="_blank"
                rel="noopener"
                class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-quaternary hover:underline"
                >+ Add to Google Calendar</a
              >
            </div>
          </div>
        </div>

        <nav
          class="mt-10 -mx-1 flex gap-1 overflow-x-auto whitespace-nowrap text-sm"
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

    <div class="container mx-auto px-6 py-12 space-y-20">
      <!-- ================= This year's conference ================= -->
      <section
        v-if="phase === 'upcoming' || phase === 'live'"
        id="details"
        class="scroll-mt-24"
      >
        <div class="grid lg:grid-cols-12 gap-10">
          <div class="lg:col-span-7">
            <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">About the meeting</p>
            <h2 class="mt-1 font-serif font-bold text-3xl text-ink">CSE Annual Conference {{ conf.year }}</h2>
            <div class="im-text mt-4">
              <p>
                The Center for Systematic Entomology invites researchers, students and enthusiasts to its annual conference — a day dedicated to the
                study of arthropod systematics and to connecting the people who discover, document and understand arthropod diversity.
              </p>
              <p v-if="conf.highlight">{{ conf.highlight }}</p>
            </div>
          </div>

          <dl class="lg:col-span-5 grid sm:grid-cols-2 gap-3 self-start">
            <div class="rounded-xl border border-rule bg-paper p-4">
              <dt class="text-xs uppercase tracking-wider text-ink-soft">When</dt>
              <dd class="mt-1 font-semibold text-ink">{{ dayLabel }}</dd>
              <dd class="text-sm text-ink-soft">{{ timeLabel }}</dd>
            </div>
            <div class="rounded-xl border border-rule bg-paper p-4">
              <dt class="text-xs uppercase tracking-wider text-ink-soft">Where</dt>
              <dd class="mt-1 font-semibold text-ink">{{ conf.venue }}</dd>
              <dd class="text-sm text-ink-soft">{{ conf.address }}</dd>
              <dd v-if="conf.mapUrl">
                <a
                  :href="conf.mapUrl"
                  target="_blank"
                  rel="noopener"
                  class="text-sm font-semibold text-senary hover:underline"
                  >Map ↗</a
                >
              </dd>
            </div>
            <div class="rounded-xl border border-rule bg-paper p-4">
              <dt class="text-xs uppercase tracking-wider text-ink-soft">How to attend</dt>
              <dd class="mt-1 font-semibold text-ink">In person{{ conf.online ? ' or on Zoom' : '' }}</dd>
              <dd
                v-if="conf.online"
                class="text-sm text-ink-soft"
              >
                Zoom link sent on request
              </dd>
            </div>
            <div class="rounded-xl border border-rule bg-paper p-4">
              <dt class="text-xs uppercase tracking-wider text-ink-soft">Cost</dt>
              <dd class="mt-1 font-semibold text-ink">{{ conf.fee }}</dd>
              <dd class="text-sm text-ink-soft">{{ conf.lunch }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- ================= Call for talks & posters ================= -->
      <section
        v-if="phase === 'upcoming' && submissions !== 'none'"
        id="submit"
        class="scroll-mt-24"
      >
        <div
          v-if="submissions === 'open'"
          class="rounded-2xl bg-paper border border-rule p-6 sm:p-10 grid lg:grid-cols-12 gap-8"
        >
          <div class="lg:col-span-7">
            <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Call for talks &amp; posters</p>
            <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Present your work</h2>
            <p class="mt-3 text-ink-soft leading-relaxed">
              We welcome {{ conf.submissions.talkLength }}-minute talks (questions included) and posters on topics such as:
            </p>
            <ul class="mt-3 space-y-1.5">
              <li
                v-for="t in conf.submissions.topics"
                :key="t"
                class="flex gap-2 text-ink"
              >
                <span
                  class="text-quaternary"
                  aria-hidden="true"
                  >•</span
                >{{ t }}
              </li>
            </ul>
          </div>
          <div class="lg:col-span-5 rounded-xl bg-white border border-rule p-5 self-start">
            <p class="text-xs uppercase tracking-wider text-ink-soft">Deadline</p>
            <p class="font-serif text-2xl font-semibold text-ink">{{ deadlineLabel }}</p>
            <div class="mt-4 space-y-2">
              <a
                v-if="conf.submissions.form"
                :href="conf.submissions.form"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-center w-full px-4 py-2.5 rounded-full bg-ink text-white font-semibold hover:bg-senary transition-colors"
                >Submit with the online form ↗</a
              >
              <a
                v-if="conf.submissions.template"
                :href="conf.submissions.template"
                download
                class="flex items-center justify-center w-full px-4 py-2 rounded-full border border-rule text-sm font-medium text-ink hover:border-quaternary hover:text-senary"
                >Or download the Word form</a
              >
            </div>
            <p class="mt-3 text-xs text-ink-soft text-center">
              and email it to
              <a
                :href="`mailto:${conf.contact}`"
                class="text-senary hover:underline"
                >{{ conf.contact }}</a
              >
            </p>
          </div>
        </div>

        <p
          v-else
          class="p-4 border-l-4 border-quaternary bg-paper rounded-r-lg text-ink"
        >
          <template v-if="submissions === 'soon'">
            The call for talks and posters opens on <b>{{ opensLabel }}</b>.
          </template>
          <template v-else>
            Submissions for talks and posters closed on <b>{{ deadlineLabel }}</b>. Thank you to everyone who submitted!
          </template>
        </p>
      </section>

      <!-- ================= Program ================= -->
      <section
        v-if="phase === 'upcoming' || phase === 'live'"
        id="program"
        class="scroll-mt-24"
      >
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Schedule</p>
            <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Program</h2>
          </div>
          <a
            v-if="conf.program"
            :href="conf.program"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-senary transition-colors"
            >Download the program (PDF)</a
          >
        </div>

        <ol
          v-if="conf.schedule?.length"
          class="mt-6 border-l-2 border-rule ml-2"
        >
          <li
            v-for="(item, i) in conf.schedule"
            :key="i"
            class="relative pl-6 pb-5"
          >
            <span
              class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full border-2 border-white"
              :class="item.break ? 'bg-rule' : 'bg-quaternary'"
            />
            <p class="text-sm font-semibold text-senary tabular-nums">{{ item.time }}</p>
            <p
              class="font-serif text-ink"
              :class="item.break ? 'italic text-ink-soft' : 'font-semibold'"
              v-html="item.title"
            />
            <p
              v-if="item.who"
              class="text-sm text-ink-soft"
            >
              {{ item.who }}
            </p>
          </li>
        </ol>
        <div
          v-else-if="!conf.program"
          class="mt-6 rounded-xl border border-dashed border-rule p-8 text-center"
        >
          <p class="font-serif text-xl font-semibold text-ink">Program coming soon</p>
          <p class="mt-1 text-ink-soft">
            Talks, posters and the schedule of the day will be posted here once the call for submissions closes.
          </p>
        </div>
      </section>

      <!-- ================= Archive ================= -->
      <section
        id="meetingarchive"
        class="scroll-mt-24"
      >
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Archive</p>
        <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Past conferences</h2>
        <ul class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <li
            v-for="m in archive"
            :key="m.year"
            class="rounded-xl border border-rule bg-white p-5 flex flex-col"
          >
            <div class="flex items-baseline justify-between gap-3">
              <p class="font-serif text-3xl font-bold text-ink">{{ m.year }}</p>
              <p class="text-sm text-ink-soft">{{ m.date }}</p>
            </div>
            <p
              v-if="m.organizer"
              class="mt-1 text-sm text-ink-soft"
            >
              Organized by <span class="text-ink font-medium">{{ m.organizer }}</span>
            </p>
            <div class="mt-auto pt-4 flex flex-wrap gap-2">
              <a
                v-for="l in archiveLinks(m)"
                :key="l.label"
                :href="l.href"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-colors"
                :class="l.primary ? 'bg-quaternary text-white hover:bg-senary' : 'border border-rule text-ink hover:border-quaternary hover:text-senary'"
                >{{ l.label }}</a
              >
              <span
                v-if="!archiveLinks(m).length"
                class="text-xs text-ink-soft"
                >Materials coming soon</span
              >
            </div>
          </li>
        </ul>
      </section>

      <!-- ================= Posters ================= -->
      <section
        id="posterarchive"
        class="scroll-mt-24"
      >
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Archive</p>
        <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Posters</h2>
        <div
          v-for="g in posterYears"
          :key="g.year"
          class="mt-8"
        >
          <h3 class="font-serif text-xl font-semibold text-senary">{{ g.year }}</h3>
          <ul class="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <li
              v-for="p in g.posters"
              :key="p.title"
              class="group rounded-xl border border-rule bg-white overflow-hidden flex flex-col"
            >
              <button
                v-if="p.image"
                type="button"
                class="block aspect-[3/2] overflow-hidden bg-paper"
                :aria-label="`View poster: ${p.title}`"
                @click="posterView = p"
              >
                <img
                  :src="p.image"
                  alt=""
                  loading="lazy"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <div class="p-4 flex flex-col flex-1">
                <p class="font-serif font-semibold leading-snug text-ink">{{ p.title }}</p>
                <p class="mt-1 text-sm text-ink-soft">{{ p.authors }}</p>
                <span
                  v-if="p.award"
                  class="mt-2 self-start text-xs px-2 py-0.5 rounded-full bg-quaternary/20 text-senary font-semibold"
                  >{{ p.award }}</span
                >
                <a
                  v-if="p.pdf"
                  :href="p.pdf"
                  target="_blank"
                  rel="noopener"
                  class="mt-auto pt-3 self-start text-xs font-semibold text-senary hover:underline"
                  >Poster PDF ↗</a
                >
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- ================= Photos ================= -->
      <section
        id="photos"
        class="scroll-mt-24"
      >
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Gallery</p>
        <h2 class="mt-1 font-serif font-bold text-3xl text-ink">Moments from past meetings</h2>
        <PhotoGallery
          class="mt-6"
          :photos="photos"
          :initial="8"
          grid-class="grid-cols-2 lg:grid-cols-4"
          aspect="aspect-[4/3]"
        />
      </section>
    </div>

    <!-- Poster viewer -->
    <Teleport to="body">
      <div
        v-if="posterView"
        class="fixed inset-0 z-[60] bg-black/90 flex flex-col items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        @click.self="posterView = null"
      >
        <img
          :src="posterView.fullImage || posterView.image"
          :alt="posterView.title"
          class="max-h-[82vh] max-w-full object-contain rounded"
        />
        <p class="mt-3 text-sm text-white/85 text-center max-w-2xl">{{ posterView.title }} — {{ posterView.authors }}</p>
        <button
          type="button"
          class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white text-2xl hover:bg-white/20"
          aria-label="Close"
          @click="posterView = null"
        >
          ×
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import PhotoGallery from '~/components/Gallery/PhotoGallery.vue'
import { useConference } from '~/composables/useConference'
import pastConferences from '~/data/conferenceArchive'
import posters from '~/data/conferencePosters'

const { conf, phase, previewing, startAt, endAt, submissions, countdown, dayLabel, timeLabel, deadlineLabel, opensLabel } = useConference({
  tick: true
})

const hasProgram = computed(() => !!conf.program || !!conf.schedule?.length)

const sections = computed(() =>
  [
    (phase.value === 'upcoming' || phase.value === 'live') && { id: 'details', label: 'Details' },
    phase.value === 'upcoming' && submissions.value !== 'none' && { id: 'submit', label: 'Talks & posters' },
    (phase.value === 'upcoming' || phase.value === 'live') && { id: 'program', label: 'Program' },
    { id: 'meetingarchive', label: 'Past conferences' },
    { id: 'posterarchive', label: 'Posters' },
    { id: 'photos', label: 'Photos' }
  ].filter(Boolean)
)

// Google Calendar link for "Add to calendar"
const calendarUrl = computed(() => {
  if (!startAt.value) return '#'
  const fmt = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: `CSE Annual Conference ${conf.year}`,
    dates: `${fmt(startAt.value)}/${fmt(endAt.value)}`,
    location: `${conf.venue}, ${conf.address}`,
    details: `Center for Systematic Entomology annual conference. Questions: ${conf.contact}`
  })
  return `https://calendar.google.com/calendar/render?${p}`
})

// Once this year's conference is over it joins the archive automatically
const archive = computed(() => {
  const list = [...pastConferences]
  if (phase.value === 'finished' && !list.some((m) => m.year === conf.year)) {
    list.unshift({
      year: conf.year,
      date: dayLabel.value.replace(/^\w+, /, ''),
      organizer: conf.organizer,
      program: conf.program
    })
  }
  return list.sort((a, b) => b.year - a.year)
})

function archiveLinks(m) {
  return [
    m.program && { label: 'Program', href: m.program, primary: true },
    m.extendedProgram && { label: 'Program with abstracts', href: m.extendedProgram },
    m.video && { label: 'Watch the recording', href: m.video },
    m.photos && { label: 'Photos', href: m.photos }
  ].filter(Boolean)
}

const posterYears = computed(() => {
  const groups = {}
  for (const p of posters) (groups[p.year] ||= []).push(p)
  return Object.entries(groups)
    .map(([year, list]) => ({ year, posters: list.sort((a, b) => a.title.localeCompare(b.title)) }))
    .sort((a, b) => b.year - a.year)
})
const posterView = ref(null)

const photos = [
  { img: '/images/meetings/people.jpg', caption: 'CSE conference 2026 — group photo' },
  { img: '/images/meetings/people2.jpg', caption: 'Attendees, 2026' },
  { img: '/images/meetings/people3.jpg', caption: 'Conference session' },
  { img: '/images/meetings/people4.jpg', caption: 'Networking' },
  { img: '/images/meetings/poster.jpg', caption: 'Poster session' },
  { img: '/images/meetings/presentation.jpg', caption: 'Presentation session' },
  { img: '/images/meetings/presentation1.jpg', caption: 'Presentation session' }
]

useHead({ title: computed(() => `CSE Annual Conference ${conf.year}`) })
</script>
