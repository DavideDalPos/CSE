<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-rule">
    <div class="container mx-auto h-16 flex items-center justify-between gap-4 px-4 sm:px-6">
      <NuxtLink
        to="/"
        class="group flex items-center gap-3 min-w-0"
        aria-label="Center for Systematic Entomology — home"
      >
        <img
          src="/images/web/cse-logo-96.webp"
          alt=""
          width="54"
          height="48"
          class="h-9 sm:h-11 w-auto shrink-0 transition-transform duration-200 group-hover:scale-105"
        />
        <span class="leading-tight min-w-0">
          <span class="block font-serif font-semibold text-[0.9rem] sm:text-[1.05rem] text-ink">Center for Systematic Entomology</span>
          <span class="hidden sm:block text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">Gainesville, Florida · since 1985</span>
        </span>
      </NuxtLink>

      <nav
        class="hidden lg:flex items-center gap-1 text-[0.92rem] font-medium text-ink"
        aria-label="Main"
      >
        <template
          v-for="item in menu"
          :key="item.label"
        >
          <div
            v-if="item.submenu"
            class="relative group"
          >
            <button
              type="button"
              class="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-paper hover:text-senary focus-visible:bg-paper"
              :class="{ 'text-senary': isActive(item) }"
              aria-haspopup="true"
            >
              {{ item.label }}
              <svg
                class="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity duration-150 absolute left-0 top-full pt-2"
            >
              <ul class="min-w-56 py-2 bg-white rounded-lg shadow-lg ring-1 ring-black/5">
                <li
                  v-for="sub in item.submenu"
                  :key="sub.label"
                >
                  <NuxtLink
                    :to="sub.link"
                    class="block px-4 py-2 text-sm text-ink hover:bg-paper hover:text-senary"
                  >
                    {{ sub.label }}
                    <span
                      v-if="sub.note"
                      class="block text-xs text-ink-soft font-normal"
                      >{{ sub.note }}</span
                    >
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <NuxtLink
            v-else
            :to="item.link"
            class="px-3 py-2 rounded-md hover:bg-paper hover:text-senary"
            active-class="text-senary"
          >
            {{ item.label }}
          </NuxtLink>
        </template>

        <button
          type="button"
          class="ml-1 flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full border border-rule text-ink-soft hover:border-quaternary hover:text-ink"
          aria-label="Search the website"
          title="Search (Ctrl+K)"
          @click="searchOpen = true"
        >
          <svg
            class="w-4 h-4"
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
          <kbd class="text-[0.65rem] font-sans px-1.5 py-0.5 rounded bg-paper border border-rule">/</kbd>
        </button>

        <NuxtLink
          to="/membership"
          class="ml-2 px-4 py-2 rounded-full bg-quaternary text-white font-semibold hover:bg-senary transition-colors"
        >
          Join the CSE
        </NuxtLink>
      </nav>

      <MobileNavbar :menu="mobileMenu" />
    </div>
  </header>
</template>

<script setup>
import conference from '~/data/conference'

const route = useRoute()
const searchOpen = useState('site-search-open', () => false)

const menu = [
  { label: 'About', link: '/about' },
  {
    label: 'Insecta Mundi',
    base: '/insecta_mundi',
    submenu: [
      { label: 'Latest issue', link: '/insecta_mundi/current' },
      { label: 'All articles', link: '/insecta_mundi', note: 'Search the archive' },
      { label: 'In numbers', link: '/insecta_mundi/stats', note: 'Orders, families & authors' },
      { label: 'About the journal', link: '/insecta_mundi/journal' },
      { label: 'Instructions for authors', link: '/insecta_mundi/authorguidelines' },
      { label: 'Editor guidelines', link: '/insecta_mundi/editorinfo' },
      { label: 'Ethics statement', link: '/insecta_mundi/ethic' },
      { label: 'Festschrifts', link: '/other_publications/CSE#festschrifts' }
    ]
  },
  {
    label: 'Publications',
    base: '/other_publications',
    bases: ['/arthropod_papers', '/occasional_papers'],
    submenu: [
      { label: 'CSE publications', link: '/other_publications/CSE' },
      { label: 'FSCA publications', link: '/other_publications/FSCA' }
    ]
  },
  {
    label: 'Grants',
    base: '/grants',
    submenu: [
      { label: 'Peck travel grant', link: '/grants' },
      { label: 'Guidelines', link: '/grants#grantguidelines' },
      { label: 'Previous reports', link: '/grants#reports' },
      { label: 'Other grants archive', link: '/grants#archive' },
      { label: 'Trip to Guatemala', link: '/grants#guatemala' }
    ]
  },
  {
    label: 'Conference',
    base: '/meetings',
    bases: ['/conference'],
    submenu: [
      { label: `${conference.year} conference`, link: '/meetings', note: conference.date ? 'Dates, program & call for talks' : 'Details coming soon' },
      { label: 'Past conferences', link: '/meetings#meetingarchive' },
      { label: 'Poster archive', link: '/meetings#posterarchive' },
      { label: 'Photos', link: '/meetings#photos' }
    ]
  }
]

// Mobile menu: same entries, plus Home and Membership
const mobileMenu = [
  { label: 'Home', link: '/' },
  ...menu,
  { label: 'Membership & donations', link: '/membership' }
]

function isActive(item) {
  return [item.base, ...(item.bases || [])].some((b) => b && route.path.startsWith(b))
}
</script>
