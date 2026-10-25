<template>
  <div>
    <InsectaMundiHeader
      kicker="For authors"
      title="Instructions for authors"
      lede="Open access, built for taxonomists by taxonomists — and free to publish for CSE members. A well-prepared manuscript is the fastest way to publication."
    />

    <section class="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
      <div class="flex-1 min-w-0">
        <div class="im-text">
          <p class="lead">
            <i>Insecta Mundi</i> is a collaborative, open-access platform. We do not charge authors publication fees, so
            the journal relies on contributors who prepare their work with the same care we put into publishing it.
          </p>
          <p>
            High-quality submissions — scientifically and technically — move through review and editing much faster;
            incomplete or poorly formatted ones may be delayed or returned. Please read our formatting standards,
            especially for <b>word processing, figures, citations and layout</b>. If you are new to the journal, the
            resources on this page walk you through each step, from document formatting to image preparation.
          </p>
          <p>
            Before submitting, have your manuscript reviewed by colleagues and check it against the
            <a href="#checklist">submission checklist</a>. Submissions that do not meet these basic requirements are
            returned without review.
          </p>
        </div>

        <!-- Requirements -->
        <h2 class="mt-12 font-serif text-3xl font-bold text-ink">Publication requirements</h2>
        <ol class="mt-6 space-y-5">
          <li class="flex gap-5 p-6 rounded-xl border border-rule bg-white">
            <span class="font-serif text-3xl font-bold text-quaternary/80 leading-none">01</span>
            <div>
              <h3 class="font-serif text-xl font-semibold text-ink">Two outside reviews</h3>
              <p class="mt-2 text-ink-soft leading-relaxed">
                Obtain critical reviews from <b class="text-ink">two outside reviewers</b> and submit their comments and
                Reviewer Report Forms with the manuscript. Manuscripts without them are returned.
              </p>
            </div>
          </li>
          <li class="flex gap-5 p-6 rounded-xl border border-rule bg-white">
            <span class="font-serif text-3xl font-bold text-quaternary/80 leading-none">02</span>
            <div>
              <h3 class="font-serif text-xl font-semibold text-ink">A clean manuscript file</h3>
              <p class="mt-2 text-ink-soft leading-relaxed">
                Manuscript files carry hidden formatting that can break the software used to produce the final paper.
                Please clean your file following the
                <a
                  href="/PDF/insectamundi/InsectaMundi_FullGuidelines_2025.pdf"
                  target="_blank"
                  rel="noopener"
                  class="text-senary underline underline-offset-2"
                  >Manuscript Preparation Rules &amp; Guidelines</a
                >
                and the
                <a
                  href="/PDF/insectamundi/InsectaMundi_CommonProblemsChecklist_2014.pdf"
                  target="_blank"
                  rel="noopener"
                  class="text-senary underline underline-offset-2"
                  >Common Problems Checklist</a
                >.
              </p>
            </div>
          </li>
          <li class="flex gap-5 p-6 rounded-xl border border-rule bg-white">
            <span class="font-serif text-3xl font-bold text-quaternary/80 leading-none">03</span>
            <div>
              <h3 class="font-serif text-xl font-semibold text-ink">A signed Submission Contract</h3>
              <p class="mt-2 text-ink-soft leading-relaxed">
                The
                <a
                  href="/PDF/insectamundi/InsectaMundi_SubmissionContract_2014.doc"
                  class="text-senary underline underline-offset-2"
                  >Submission Contract</a
                >
                confirms that you followed the preparation guidelines. Authors are fully responsible for the content,
                organization and technical accuracy of their manuscript.
              </p>
            </div>
          </li>
          <li class="flex gap-5 p-6 rounded-xl border-2 border-quaternary bg-paper">
            <span class="font-serif text-3xl font-bold text-quaternary leading-none">04</span>
            <div class="min-w-0">
              <h3 class="font-serif text-xl font-semibold text-ink">
                Literature Cited format
                <span class="ml-2 align-middle text-xs font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-quaternary text-white"
                  >Updated September 2025</span
                >
              </h3>
              <ul class="mt-3 space-y-1.5 text-ink-soft list-disc pl-5">
                <li>
                  Give the <b class="text-ink">DOI</b> of any article, chapter or other reference that has one, at the end of
                  the reference (after the page range).
                </li>
                <li>No periods between initials.</li>
                <li>No comma between surname and initials.</li>
                <li>Omit the word <i>“and”</i> in author and editor lists.</li>
                <li>List editor names in book chapters surname-first.</li>
              </ul>
              <p class="mt-4 text-xs uppercase tracking-wider font-semibold text-ink-soft">Examples</p>
              <div class="mt-2 p-4 rounded-lg bg-white border border-rule text-sm text-ink space-y-3 overflow-x-auto">
                <p
                  v-for="(r, i) in examples"
                  :key="i"
                  class="pl-6 -indent-6"
                >
                  <b>{{ r.authors }}</b> {{ r.text }}
                  <a
                    v-if="r.url"
                    :href="r.url"
                    target="_blank"
                    rel="noopener"
                    class="text-senary break-all"
                    >{{ r.url }}</a
                  >{{ r.after || '' }}
                </p>
              </div>
            </div>
          </li>
        </ol>

        <InsectaMundiChecklist />
      </div>

      <InsectaMundiSidebar
        :resources="resources"
        resources-title="Forms & guidelines"
      />
    </section>

    <InsectaMundiBottomButtons />
  </div>
</template>

<script setup>
import InsectaMundiHeader from '~/components/InsectaMundi/InsectaMundiHeader.vue'
import InsectaMundiSidebar from '~/components/InsectaMundi/InsectaMundiSidebar.vue'
import InsectaMundiChecklist from '~/components/InsectaMundi/InsectaMundiChecklist.vue'
import InsectaMundiBottomButtons from '~/components/InsectaMundi/InsectaMundiBottomButtons.vue'

useHead({ title: 'Instructions for authors · Insecta Mundi' })

const resources = [
  { text: 'Manuscript Preparation Rules & Guidelines (updated 2025)', link: '/PDF/insectamundi/InsectaMundi_FullGuidelines_2025.pdf' },
  { text: 'Common Problems Checklist (Lista de Problemas Frecuentes)', link: '/PDF/insectamundi/InsectaMundi_CommonProblemsChecklist_2014.pdf' },
  { text: 'Reviewer Report Form', link: '/PDF/insectamundi/InsectaMundi_ReviewerReportForm_2022.doc' },
  { text: 'Informe Crítico del Revisor', link: '/PDF/insectamundi/InsectaMundi_ReviewerReportForm_2021_Spanish.doc' },
  { text: 'Submission Contract', link: '/PDF/insectamundi/InsectaMundi_SubmissionContract_2014.doc' },
  { text: 'Carta de Compromiso', link: '/PDF/insectamundi/InsectaMundi_SubmissionContract_2014_Spanish.doc' }
]

const examples = [
  {
    authors: 'Arnett RH Jr, Samuelson GA, Nishida GN. 1993.',
    text: 'The insect and spider collections of the world (second edition). Flora and fauna handbook no. 11. Sandhill Crane Press; Gainesville, FL. 310 p.'
  },
  {
    authors: 'Gordon RD, Skelley PE. 2007.',
    text: 'A monograph of the Aphodiini inhabiting the United States and Canada (Coleoptera: Scarabaeidae: Aphodiinae). Memoirs of the American Entomological Institute 79: 1–580.'
  },
  {
    authors: 'Dal Pos D, Carpenter JM, Uliana M. 2023.',
    text: 'The Giordani Soika collection of Eumeninae at the Natural History Museum of Venice Giancarlo Ligabue: catalogue of species and type specimens (Insecta, Hymenoptera, Vespidae). Zootaxa 5137: 1–111.',
    url: 'https://doi.org/10.11646/zootaxa.5137.1.1'
  },
  {
    authors: 'Skelley PE, Gordon RD. 2002.',
    text: 'Family 37. Scarabaeidae. V. Subfamily Aphodiinae. p. 42–48. In: Arnett RH Jr, Thomas MC, Skelley PE, Frank JH (eds.). American beetles, Vol. 2. CRC Press; Boca Raton, FL. 861 p.'
  },
  {
    authors: 'Perkins P. 2006.',
    text: 'MCZ Type Database @ Harvard University. Available at',
    url: 'http://mcz-28168.oeb.harvard.edu/mcz/',
    after: ' (Last accessed February 2007.)'
  }
]
</script>
