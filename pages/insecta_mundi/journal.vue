<template>
  <div>
    <InsectaMundiHeader
      kicker="About the journal"
      lede="A peer-reviewed, open-access journal for insect and arthropod systematics — free to read, with no page charges for CSE members."
    >
      <template #title>A journal of world insect systematics</template>
    </InsectaMundiHeader>

    <section class="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
      <div class="flex-1 min-w-0 im-text">
        <p class="lead">
          <i>Insecta Mundi</i> is primarily devoted to <b>insect systematics</b>, but articles can be published on any
          <b>non-marine arthropods</b>. For papers describing new taxa, it offers rapid publication, so the names can be
          used in other publications quickly.
        </p>

        <h2>What we publish</h2>
        <ul class="grid sm:grid-cols-2 gap-x-6 !pl-0 list-none">
          <li
            v-for="t in kinds"
            :key="t"
            class="flex items-center gap-2 !pl-0"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-quaternary" />{{ t }}
          </li>
        </ul>

        <h2>A short history</h2>
        <p>
          From 1985 to 2006, <i>Insecta Mundi</i> was produced with yearly volume numbers and printed quarterly. Since 2007
          (paper ISSN 0749-6737, CD-ROM ISSN 1942-1362, online ISSN 1942-1354), articles have been published individually
          and numbered sequentially as they are completed; there are no longer year-based volume or issue numbers. Our
          policies and procedures are set out in
          <a
            href="/PDF/0001ProceduresComplete.pdf"
            target="_blank"
            rel="noopener"
            >Insecta Mundi 0001 (2007)</a
          >.
        </p>
        <p>
          Changes to the
          <a
            href="https://www.iczn.org/the-code/the-code-online/"
            target="_blank"
            rel="noopener"
            >International Code of Zoological Nomenclature</a
          >
          in 2012 allowed our open-access electronic edition to establish each article's date of publication. In 2014 the
          number of submissions grew so much that we reorganized manuscript processing: we added volunteer editors and
          changed the submission requirements. Meet the current
          <a href="#editors">editorial team</a> below.
        </p>
      </div>

      <InsectaMundiSidebar />
    </section>

    <!-- At a glance -->
    <section class="bg-paper border-y border-rule">
      <div class="container mx-auto px-6 py-14">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">At a glance</p>
        <h2 class="mt-2 font-serif text-3xl font-bold text-ink">How <i>Insecta Mundi</i> works</h2>
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <article class="p-6 rounded-xl bg-white border border-rule">
            <h3 class="font-serif text-xl font-semibold text-ink">Author requirements</h3>
            <ul class="mt-3 space-y-2 text-ink-soft leading-relaxed list-disc pl-5">
              <li>Manuscripts must be reviewed by <b class="text-ink">two peer reviewers</b> before submission.</li>
              <li>
                Submissions include those reviews, the completed <b class="text-ink">Reviewer Reports</b> and a
                <b class="text-ink">Submission Contract</b> —
                <NuxtLink
                  to="/insecta_mundi/authorguidelines"
                  class="text-senary underline underline-offset-2"
                  >forms and instructions</NuxtLink
                >.
              </li>
              <li>
                At least one author must be a current member of the CSE —
                <NuxtLink
                  to="/membership"
                  class="text-senary underline underline-offset-2"
                  >membership is US$ 40</NuxtLink
                >.
              </li>
            </ul>
          </article>

          <article class="p-6 rounded-xl bg-white border border-rule">
            <h3 class="font-serif text-xl font-semibold text-ink">Publication model</h3>
            <div class="mt-3 space-y-3 text-ink-soft leading-relaxed">
              <p>
                No page charges, no web posting fees, and no extra charge for colour. Authors receive a PDF of their
                article; we do not sell reprints.
              </p>
              <p>
                Our aim is to publish articles for CSE members and make sure they are distributed, archived and readily
                available. <i>Insecta Mundi</i> is indexed in the Zoological Record, CAB Abstracts and others.
              </p>
            </div>
          </article>

          <article class="p-6 rounded-xl bg-white border border-rule">
            <h3 class="font-serif text-xl font-semibold text-ink">Archiving and access</h3>
            <div class="mt-3 space-y-3 text-ink-soft leading-relaxed">
              <p>
                New papers are posted here and emailed to members on the day of publication. Printed copies are deposited
                in several international libraries (listed inside each article) and mailed once a year.
              </p>
              <p>
                Free PDFs are also available from the
                <a
                  href="https://journals.flvc.org/mundi"
                  target="_blank"
                  rel="noopener"
                  class="text-senary underline underline-offset-2"
                  >Florida Virtual Campus</a
                >, Goethe University Library (Frankfurt) and
                <a
                  href="https://digitalcommons.unl.edu/insectamundi/"
                  target="_blank"
                  rel="noopener"
                  class="text-senary underline underline-offset-2"
                  >UNL Digital Commons</a
                >; the journal is archived by Portico.
              </p>
            </div>
          </article>

          <article class="p-6 rounded-xl bg-white border border-rule">
            <h3 class="font-serif text-xl font-semibold text-ink">Copyright and licence</h3>
            <div class="mt-3 space-y-3 text-ink-soft leading-relaxed">
              <p>
                Articles are published under the
                <a
                  href="https://creativecommons.org/licenses/by-nc/3.0/"
                  target="_blank"
                  rel="noopener"
                  class="text-senary underline underline-offset-2"
                  >Creative Commons Attribution-NonCommercial 3.0 licence</a
                >. Authors allow the CSE and the journal's host institutions to distribute their articles in all media
                and to archive them electronically and in print.
              </p>
              <div class="flex items-center gap-3">
                <img
                  src="/images/Sticker_2007.png"
                  alt=""
                  loading="lazy"
                  class="h-10 w-10"
                />
                <img
                  src="/images/by-nc.png"
                  alt="Creative Commons BY-NC licence"
                  loading="lazy"
                  class="h-10 w-auto"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <InsectaMundiIntro3 id="editors" />
    <InsectaMundiBottomButtons />
  </div>
</template>

<script setup>
import InsectaMundiHeader from '~/components/InsectaMundi/InsectaMundiHeader.vue'
import InsectaMundiSidebar from '~/components/InsectaMundi/InsectaMundiSidebar.vue'
import InsectaMundiIntro3 from '~/components/InsectaMundi/InsectaMundiIntro3.vue'
import InsectaMundiBottomButtons from '~/components/InsectaMundi/InsectaMundiBottomButtons.vue'

useHead({ title: 'About Insecta Mundi' })

const kinds = [
  'Descriptions of new taxa',
  'Revisions',
  'Taxonomic and nomenclatural notes',
  'Bibliographies',
  'Checklists',
  'Catalogues',
  'Life histories'
]
</script>
