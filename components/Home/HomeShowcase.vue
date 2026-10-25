<template>
  <section
    class="relative isolate overflow-hidden bg-ink text-white h-[78vh] min-h-[560px] max-h-[780px]"
    aria-roledescription="carousel"
    aria-label="Center for Systematic Entomology highlights"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <h1 class="sr-only">Center for Systematic Entomology</h1>

    <!-- Slides (stacked, cross-fading) -->
    <article
      v-for="(s, i) in slides"
      :key="s.key"
      class="absolute inset-0 transition-opacity duration-1000 ease-out"
      :class="i === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
      :aria-hidden="i !== current"
      aria-roledescription="slide"
      :aria-label="`${i + 1} of ${slides.length}: ${s.title}`"
    >
      <!-- Photo slides: full-bleed image that slowly zooms (Ken Burns) -->
      <template v-if="s.photo">
        <img
          :src="s.photo"
          :alt="s.alt"
          :loading="i === 0 ? 'eager' : 'lazy'"
          :fetchpriority="i === 0 ? 'high' : 'auto'"
          decoding="async"
          class="absolute inset-0 w-full h-full object-cover kb"
          :class="{ 'kb-run': i === current }"
          :style="{ objectPosition: s.position || 'center' }"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/10" />
      </template>

      <!-- Illustration slides: dark stage with the artwork floating on the right -->
      <template v-else>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,#2f3d42_0%,#1f2a2e_55%,#151d20_100%)]" />
        <div class="absolute inset-y-0 right-0 w-full lg:w-[55%] flex items-center justify-center lg:justify-end lg:pr-[8%] pb-20 pt-6 opacity-15 lg:opacity-100">
          <img
            :src="s.art"
            :alt="s.alt"
            loading="lazy"
            decoding="async"
            class="max-h-[72%] w-auto kb"
            :class="[{ 'kb-run': i === current }, s.artClass]"
          />
        </div>
      </template>

      <!-- Text -->
      <div class="relative h-full container mx-auto px-6 flex items-center">
        <div
          class="max-w-2xl slide-text"
          :class="{ 'slide-text-in': i === current }"
        >
          <p class="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-quaternary">{{ s.kicker }}</p>
          <h2 class="mt-4 font-serif font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.02]">
            <i v-if="s.italic">{{ s.title }}</i
            ><template v-else>{{ s.title }}</template>
          </h2>
          <p class="mt-5 text-base sm:text-xl leading-relaxed text-white/80 max-w-xl">{{ s.text }}</p>
          <p
            v-if="s.key === 'im' && latestLabel"
            class="mt-4 inline-flex items-center gap-2 text-sm text-white/85 bg-white/10 rounded-full px-3 py-1"
          >
            <span class="w-2 h-2 rounded-full bg-quaternary animate-pulse" />
            Latest issue: {{ latestLabel }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink
              v-for="(l, j) in s.links"
              :key="l.to"
              :to="l.to"
              :tabindex="i === current ? 0 : -1"
              class="px-6 py-3 rounded-full font-semibold transition-colors"
              :class="j === 0 ? 'bg-quaternary text-ink hover:bg-white' : 'border-2 border-white/60 text-white hover:border-white hover:bg-white/10'"
              >{{ l.label }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </article>

    <!-- Arrows -->
    <button
      type="button"
      class="hidden sm:flex absolute z-20 left-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur"
      aria-label="Previous slide"
      @click="go(current - 1)"
    >
      <svg
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.7 5.3a1 1 0 010 1.4L9.4 10l3.3 3.3a1 1 0 01-1.4 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.4 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <button
      type="button"
      class="hidden sm:flex absolute z-20 right-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 backdrop-blur"
      aria-label="Next slide"
      @click="go(current + 1)"
    >
      <svg
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.3 14.7a1 1 0 010-1.4L10.6 10 7.3 6.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Chapter bar: one tab per slide, with a progress line on the current one -->
    <div class="absolute z-20 inset-x-0 bottom-0">
      <div class="container mx-auto px-6 pb-6">
        <div
          class="grid grid-cols-4 gap-3 sm:gap-6"
          role="tablist"
          aria-label="Choose a slide"
        >
          <button
            v-for="(s, i) in slides"
            :key="s.key"
            type="button"
            role="tab"
            :aria-selected="i === current"
            class="group text-left"
            @click="go(i)"
          >
            <span class="block h-[3px] rounded-full bg-white/25 overflow-hidden">
              <span
                class="block h-full bg-quaternary origin-left"
                :class="i === current ? (running ? 'bar-run' : 'bar-full') : i < current ? 'bar-full opacity-60' : 'bar-empty'"
                :style="i === current ? { animationDuration: `${DURATION}ms`, animationPlayState: paused ? 'paused' : 'running' } : null"
              />
            </span>
            <span
              class="hidden sm:block mt-2 text-sm font-semibold transition-colors"
              :class="i === current ? 'text-white' : 'text-white/55 group-hover:text-white/85'"
              >{{ s.tab }}</span
            >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useConference } from '~/composables/useConference'
import membership from '~/data/membership'
import grants from '~/data/grants'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

// How long each slide stays (ms); the progress bar uses the same value
const DURATION = 7500

const { phase, dayLabel } = useConference()

const slides = [
  {
    key: 'im',
    tab: 'Insecta Mundi',
    kicker: 'A journal of world insect systematics',
    title: 'Insecta Mundi',
    italic: true,
    text: 'Peer-reviewed and free to read: new species, revisions, faunal surveys and catalogues of insects and other arthropods, published rapidly since 1985.',
    art: '/images/web/hero-im-cover.webp',
    artClass: 'rotate-[4deg] shadow-2xl rounded-sm',
    alt: 'Cover of an Insecta Mundi issue',
    links: [
      { label: 'Browse the articles', to: '/insecta_mundi' },
      { label: 'Publish with us', to: '/insecta_mundi/authorguidelines' }
    ]
  },
  {
    key: 'grant',
    tab: 'Travel grants',
    kicker: 'The Peck Fund',
    title: 'Travel grants to work in the FSCA collections',
    text: `The Stewart and Jarmila Peck Collection Enhancement Endowment funds research visits to the Florida State Collection of Arthropods that help improve the collection — up to $${grants.maxAward.toLocaleString('en-US')} per award.`,
    photo: '/images/web/hero-collection.webp',
    alt: 'Aisle of museum cabinets in an insect collection',
    links: [
      { label: 'Apply for a grant', to: '/grants' },
      { label: 'Past reports', to: '/grants#reports' }
    ]
  },
  {
    key: 'conf',
    tab: 'Annual conference',
    // Shows the date of the next meeting while it is upcoming (data/conference.js)
    get kicker() {
      return phase.value === 'upcoming' || phase.value === 'live' ? `Next meeting · ${dayLabel.value}` : 'Hybrid · free · open to everyone'
    },
    title: 'The CSE annual conference',
    text: 'Every year we meet in Gainesville and online to share research on insect systematics, behaviour, ecology and evolution.',
    photo: '/images/web/hero-conference.webp',
    position: 'center 40%',
    alt: 'Audience at the CSE annual conference',
    links: [
      { label: 'Join the next meeting', to: '/meetings' },
      { label: 'Poster archive', to: '/meetings#posterarchive' }
    ]
  },
  {
    key: 'member',
    tab: 'Membership',
    kicker: 'Center for Systematic Entomology · since 1985',
    title: 'Be part of the CSE',
    text: `For $${membership.fee} a year, members publish in Insecta Mundi without page charges and support the Florida State Collection of Arthropods and its systematics projects.`,
    art: '/images/web/hero-plate.webp',
    artClass: 'invert opacity-90 mix-blend-screen',
    alt: 'Scientific illustrations of six beetles',
    links: [
      { label: 'Become a member', to: '/membership' },
      { label: 'Donate', to: '/donations' }
    ]
  }
]

const current = ref(0)
const paused = ref(false)
const reduced = ref(false)
const running = computed(() => !reduced.value)
let timer = null

function go(i) {
  current.value = (i + slides.length) % slides.length
  restart()
}

function restart() {
  clearTimeout(timer)
  if (reduced.value) return
  timer = setTimeout(tick, DURATION)
}

// Pausing (hover / keyboard focus) freezes both the timer and the progress bar
let remaining = DURATION
let startedAt = 0
function tick() {
  current.value = (current.value + 1) % slides.length
  remaining = DURATION
  startedAt = Date.now()
  timer = setTimeout(tick, DURATION)
}
watch(paused, (p) => {
  if (reduced.value) return
  if (p) {
    clearTimeout(timer)
    remaining = Math.max(0, remaining - (Date.now() - startedAt))
  } else {
    startedAt = Date.now()
    timer = setTimeout(tick, remaining)
  }
})
watch(current, () => {
  remaining = DURATION
  startedAt = Date.now()
})

// Swipe on phones
let touchX = null
function onTouchStart(e) {
  touchX = e.touches[0].clientX
}
function onTouchEnd(e) {
  if (touchX === null) return
  const dx = e.changedTouches[0].clientX - touchX
  if (Math.abs(dx) > 50) go(current.value + (dx < 0 ? 1 : -1))
  touchX = null
}

function onKey(e) {
  if (e.key === 'ArrowRight') go(current.value + 1)
  if (e.key === 'ArrowLeft') go(current.value - 1)
}

// "Latest issue" badge on the Insecta Mundi slide
const { data: latest } = await useAsyncData('showcase-latest', () =>
  queryContent('insecta_mundi').where({ date: { $ne: null } }).sort({ date: -1 }).limit(1).only(['date']).findOne()
)
const latestLabel = computed(() =>
  latest.value?.date
    ? new Date(`${latest.value.date}T00:00:00`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : ''
)

onMounted(() => {
  reduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  startedAt = Date.now()
  restart()
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  clearTimeout(timer)
  window.removeEventListener('keydown', onKey)
})
</script>

<style scoped>
/* Slow zoom on the visible slide */
.kb {
  transform: scale(1);
  transition: transform 9s ease-out;
  will-change: transform;
}
.kb-run {
  transform: scale(1.08);
}

/* Text rises in when its slide appears */
.slide-text > * {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out;
}
.slide-text-in > * {
  opacity: 1;
  transform: none;
}
.slide-text-in > *:nth-child(2) {
  transition-delay: 0.12s;
}
.slide-text-in > *:nth-child(3) {
  transition-delay: 0.24s;
}
.slide-text-in > *:nth-child(n + 4) {
  transition-delay: 0.36s;
}

/* Progress line under the current tab */
.bar-run {
  animation-name: bar;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  transform: scaleX(0);
}
.bar-full {
  transform: scaleX(1);
}
.bar-empty {
  transform: scaleX(0);
}
@keyframes bar {
  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .kb,
  .slide-text > * {
    transition: none;
  }
  .kb-run {
    transform: none;
  }
}
</style>
