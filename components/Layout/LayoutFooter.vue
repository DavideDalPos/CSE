<template>
  <footer class="bg-ink text-white/85">
    <div class="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-sm">
      <div class="lg:col-span-2 max-w-md">
        <p class="font-serif text-xl font-semibold text-white">Center for Systematic Entomology</p>
        <p class="mt-3 leading-relaxed text-white/70">
          A non-profit society advancing the systematics of insects and other arthropods since 1985 — publisher of
          <i>Insecta Mundi</i>, sponsor of travel grants and host of an annual conference.
        </p>
        <div class="mt-5 flex items-center gap-4">
          <a
            v-for="s in social"
            :key="s.label"
            :href="s.href"
            target="_blank"
            rel="noopener"
            class="text-white/70 hover:text-quaternary"
            :title="s.label"
            :aria-label="s.label"
          >
            <component
              :is="s.icon"
              class="w-5 h-5"
            />
          </a>
          <a
            href="/feed.xml"
            class="text-white/70 hover:text-quaternary"
            title="New Insecta Mundi articles (RSS feed)"
            aria-label="RSS feed of new Insecta Mundi articles"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M6.2 19.8a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM4 4.4V7.3a12.7 12.7 0 0 1 12.7 12.7h2.9A15.6 15.6 0 0 0 4 4.4Zm0 5.7V13a7 7 0 0 1 7 7h2.9A9.9 9.9 0 0 0 4 10.1Z" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <p class="text-xs uppercase tracking-[0.16em] text-quaternary font-semibold">Explore</p>
        <ul class="mt-3 space-y-2">
          <li
            v-for="l in links"
            :key="l.to"
          >
            <NuxtLink
              :to="l.to"
              class="hover:text-quaternary"
              >{{ l.label }}</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xs uppercase tracking-[0.16em] text-quaternary font-semibold">Contact</p>
        <address class="mt-3 not-italic leading-relaxed text-white/70">
          Center for Systematic Entomology, Inc.<br />
          PO Box 141874<br />
          Gainesville, FL 32614-1874, USA
        </address>
        <a
          href="mailto:insectamundi@gmail.com"
          class="mt-2 inline-block hover:text-quaternary"
          >insectamundi@gmail.com</a
        >
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container mx-auto px-6 py-4 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/50">
        <span
          >© 1988–{{ currentYear }} Center for Systematic Entomology, Inc.<template v-if="visits">
            · {{ visits }} visits</template
          ></span
        >
        <span>Website by {{ webTeam.map((p) => p.name).join(' & ') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import site from '~/data/site'
import { webTeam } from '~/helpers/people'
import IconFacebook from '../Icon/IconFacebook.vue'
import IconX from '../Icon/IconX.vue'
import IconYouTube from '../Icon/IconYouTube.vue'
import IconGitHub from '../Icon/IconGitHub.vue'

const currentYear = new Date().getFullYear()

// Total visits from GoatCounter (only when switched on in data/site.js)
const visits = ref('')
onMounted(async () => {
  if (!site.goatcounter || !site.showVisits) return
  try {
    const r = await $fetch(`https://${site.goatcounter}.goatcounter.com/counter/TOTAL.json`)
    visits.value = r?.count || ''
  } catch {
    /* counter not public yet */
  }
})

const links = [
  { label: 'Insecta Mundi — latest issue', to: '/insecta_mundi/current' },
  { label: 'Insecta Mundi — all articles', to: '/insecta_mundi' },
  { label: 'Instructions for authors', to: '/insecta_mundi/authorguidelines' },
  { label: 'Travel grants', to: '/grants' },
  { label: 'Annual conference', to: '/meetings' },
  { label: 'Membership & donations', to: '/membership' }
]

const social = [
  { label: 'Facebook', href: 'https://www.facebook.com/CSE.InsectaMundi', icon: IconFacebook },
  { label: 'X', href: 'https://x.com/CSE_at_FSCA', icon: IconX },
  { label: 'YouTube', href: 'https://www.youtube.com/@CenterforSystematicEntomology', icon: IconYouTube },
  { label: 'Report an issue on GitHub', href: 'https://github.com/DavideDalPos/CSE/issues', icon: IconGitHub }
]
</script>
