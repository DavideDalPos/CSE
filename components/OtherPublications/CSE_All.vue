<template>
  <div>
    <PublicationsHeader
      kicker="Center for Systematic Entomology"
      title="Publications of the Center"
      lede="Alongside Insecta Mundi, the Center has published Festschrifts honouring colleagues, a Memoirs series and, from 1988 to 2003, a members’ newsletter. Everything here is free to download."
      :covers="['/images/otherpubs/FestSchrift/Woodruff.jpg', '/images/otherpubs/FestSchrift/ThomasMC.jpg', '/images/otherpubs/CSE_Memoirs/Memoirs_1.png']"
    >
      <nav
        class="mt-6 flex flex-wrap gap-2 text-sm"
        aria-label="On this page"
      >
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
          class="px-3 py-1.5 rounded-full border border-white/25 text-white/85 hover:bg-white/10 hover:text-white"
          >{{ s.label }}</a
        >
      </nav>
    </PublicationsHeader>

    <div class="container mx-auto px-6 py-12 space-y-20">
      <!-- Insecta Mundi -->
      <section
        id="insecta-mundi"
        class="scroll-mt-24"
      >
        <div class="grid md:grid-cols-12 gap-8 items-center rounded-2xl bg-paper border border-rule p-6 sm:p-10 overflow-hidden">
          <div class="md:col-span-8">
            <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Our journal</p>
            <h2 class="mt-1 font-serif font-bold text-3xl sm:text-4xl text-ink"><i>Insecta Mundi</i></h2>
            <p class="mt-3 text-ink-soft leading-relaxed max-w-2xl">
              Our flagship peer-reviewed journal, devoted to the systematics of the world’s non-marine arthropods. Read the newest articles or search
              the full archive by author, taxon or keyword.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <NuxtLink
                to="/insecta_mundi/current"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-senary transition-colors"
                >Latest issue <span aria-hidden="true">→</span></NuxtLink
              >
              <NuxtLink
                to="/insecta_mundi"
                class="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-ink text-ink text-sm font-semibold hover:bg-ink hover:text-white transition-colors"
                >Browse the archive</NuxtLink
              >
              <NuxtLink
                to="/insecta_mundi/authorguidelines"
                class="inline-flex items-center px-5 py-2.5 rounded-full text-ink text-sm font-semibold hover:text-senary"
                >Instructions for authors</NuxtLink
              >
            </div>
          </div>
          <div class="hidden md:block md:col-span-4">
            <img
              src="/images/web/hero-im-cover.webp"
              alt="Insecta Mundi cover"
              loading="lazy"
              class="mx-auto max-h-64 w-auto rotate-3 rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </section>

      <!-- Festschrifts -->
      <section
        id="festschrifts"
        class="scroll-mt-24"
      >
        <SectionHeading
          kicker="Special issues of Insecta Mundi"
          title="Festschrifts"
          text="Collections of papers written by colleagues and students to honour entomologists who shaped the Center and the Florida State Collection of Arthropods."
        />
        <div class="mt-8 grid md:grid-cols-2 gap-6">
          <article
            v-for="f in festschrifts"
            :key="f.title"
            class="group flex gap-5 rounded-xl border border-rule bg-white p-5 hover:shadow-lg transition-shadow"
          >
            <NuxtLink
              :to="f.link"
              class="shrink-0"
              :aria-label="f.title"
            >
              <img
                :src="f.image"
                alt=""
                loading="lazy"
                class="w-28 sm:w-36 h-auto rounded-md border border-rule shadow-md transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.03]"
              />
            </NuxtLink>
            <div class="min-w-0 flex flex-col">
              <p class="text-xs uppercase tracking-wider text-ink-soft">{{ f.year }}</p>
              <h3 class="mt-1 font-serif text-xl font-semibold text-ink">
                <NuxtLink
                  :to="f.link"
                  class="hover:text-senary"
                  >In honour of {{ f.honoree }}</NuxtLink
                >
              </h3>
              <p class="mt-1 text-sm text-ink-soft">
                <i>Insecta Mundi</i> nos. {{ f.issues }}
              </p>
              <div class="mt-auto pt-4 flex flex-wrap gap-2">
                <NuxtLink
                  :to="f.link"
                  class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ink text-white text-xs font-semibold hover:bg-senary transition-colors"
                  >See the articles <span aria-hidden="true">→</span></NuxtLink
                >
                <a
                  v-if="f.pdf"
                  :href="f.pdf"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center px-3.5 py-1.5 rounded-full border border-rule text-ink text-xs font-medium hover:border-quaternary hover:text-senary"
                  >Full volume (PDF)</a
                >
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Memoirs -->
      <section
        id="memoirs"
        class="scroll-mt-24"
      >
        <SectionHeading
          kicker="Monograph series"
          title="Memoirs"
        />
        <div class="mt-8 grid lg:grid-cols-12 gap-8">
          <ul class="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            <li
              v-for="m in memoirs"
              :key="m.volume"
              class="group flex gap-4 rounded-xl border border-rule bg-white p-4"
            >
              <a
                :href="m.pdf"
                target="_blank"
                rel="noopener"
                class="shrink-0"
                :aria-label="`${m.volume} (PDF)`"
              >
                <img
                  :src="m.image"
                  alt=""
                  loading="lazy"
                  class="w-24 h-auto rounded-md border border-rule shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </a>
              <div class="min-w-0 flex flex-col">
                <span class="self-start px-2 py-0.5 rounded-full bg-ink text-white text-[0.7rem] font-semibold">{{ m.volume }}</span>
                <h3 class="mt-2 font-serif font-semibold leading-snug text-ink">{{ m.title }}</h3>
                <p class="mt-1 text-sm text-ink-soft">{{ m.author }} · {{ m.year }}</p>
                <a
                  :href="m.pdf"
                  target="_blank"
                  rel="noopener"
                  class="mt-auto pt-3 self-start inline-flex items-center gap-1.5 text-xs font-semibold text-senary hover:underline"
                  >Download PDF →</a
                >
              </div>
            </li>
          </ul>
          <aside class="lg:col-span-4 rounded-xl border border-rule bg-paper p-5 self-start">
            <h3 class="font-serif text-lg font-semibold text-ink">Printed copies</h3>
            <p class="mt-2 text-sm text-ink-soft leading-relaxed">
              Hard copies of the Memoirs are still available. Write to us and we’ll ship them to you.
            </p>
            <a
              href="mailto:csentomology@gmail.com?subject=CSE%20Memoirs%20hard%20copies"
              class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-quaternary text-white text-sm font-semibold hover:bg-senary transition-colors"
              >csentomology@gmail.com</a
            >
          </aside>
        </div>
      </section>

      <!-- Newsletter -->
      <section
        id="newsletter"
        class="scroll-mt-24"
      >
        <SectionHeading
          kicker="From the archive"
          title="CSE Newsletter"
          :text="`${newsletters.length} issues sent to members between ${newsletters.at(-1)?.year} and ${newsletters[0]?.year}.`"
        />
        <ul class="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          <li
            v-for="n in newsletters"
            :key="n.title"
          >
            <a
              :href="n.pdf"
              target="_blank"
              rel="noopener"
              class="group flex flex-col h-full rounded-xl border border-rule bg-white px-4 py-3 hover:border-quaternary hover:shadow-md transition"
            >
              <span class="font-serif text-2xl font-bold text-ink group-hover:text-senary">{{ n.year }}</span>
              <span class="text-sm text-ink-soft">{{ n.month }}</span>
              <span class="mt-2 text-[0.7rem] font-semibold uppercase tracking-wider text-senary">PDF ↗</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'
import PublicationsHeader from './PublicationsHeader.vue'
import festschriftData from './CSE_Festchrift.js'
import memoirsData from './CSE_MemoirsData.js'
import newsletterData from './CSE_NewsLetterData.js'

const sections = [
  { id: 'insecta-mundi', label: 'Insecta Mundi' },
  { id: 'festschrifts', label: 'Festschrifts' },
  { id: 'memoirs', label: 'Memoirs' },
  { id: 'newsletter', label: 'Newsletter' }
]

const festschrifts = festschriftData
const memoirs = memoirsData

// "November 2003" → { month: 'November', year: '2003' }
const newsletters = newsletterData.map((n) => {
  const m = n.title.match(/^(.*?)\s*(\d{4})$/)
  return { ...n, month: m ? m[1] : '', year: m ? m[2] : n.title }
})

// Small shared heading for the sections on this page
const SectionHeading = (props) =>
  h('div', { class: 'max-w-2xl' }, [
    h('p', { class: 'text-xs uppercase tracking-[0.18em] font-semibold text-senary' }, props.kicker),
    h('h2', { class: 'mt-1 font-serif font-bold text-3xl sm:text-4xl text-ink' }, props.title),
    props.text ? h('p', { class: 'mt-3 text-ink-soft leading-relaxed' }, props.text) : null
  ])
SectionHeading.props = ['kicker', 'title', 'text']

useHead({ title: 'CSE publications' })
</script>
