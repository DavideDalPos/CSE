<template>
  <div>
    <InsectaMundiHeader
      kicker="For editors"
      title="Editor guidelines"
      lede="How manuscripts move through Insecta Mundi, and what our volunteer Review Editors do."
    />

    <section class="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
      <div class="flex-1 min-w-0 im-text">
        <p class="lead">
          In 2014 several core members of our small editorial team had to step away, and the remaining editors faced an
          overwhelming manuscript load. The Editorial Board overhauled the workflow and began expanding the team of
          volunteers — described in the
          <a
            href="/PDF/insectamundi/InsectaMundi_FlowChart_2014.pdf"
            target="_blank"
            rel="noopener"
            >2014 Manuscript Processing Flow</a
          >
          and the
          <a
            href="/PDF/insectamundi/InsectaMundi_ReorganizationDetails_2014.pdf"
            target="_blank"
            rel="noopener"
            >2014 Reorganization Proposal</a
          >.
        </p>

        <h2>The two biggest changes</h2>
        <div class="not-prose grid sm:grid-cols-2 gap-4 !mt-5">
          <div class="p-5 rounded-xl border border-rule bg-paper">
            <p class="font-serif text-lg font-semibold text-ink">Author participation</p>
            <p class="mt-1 text-[0.95rem] leading-relaxed">
              Authors now play a larger role in preparing their submissions — see the
              <NuxtLink to="/insecta_mundi/authorguidelines">Instructions for authors</NuxtLink>.
            </p>
          </div>
          <div class="p-5 rounded-xl border border-rule bg-paper">
            <p class="font-serif text-lg font-semibold text-ink">Review Editors</p>
            <p class="mt-1 text-[0.95rem] leading-relaxed">
              More
              <NuxtLink to="/insecta_mundi/journal#revieweditors">Review Editors</NuxtLink>
              (formerly Subject Editors), with broader responsibilities for quality and consistency.
            </p>
          </div>
        </div>

        <h2>What Review Editors do</h2>
        <p>
          Review Editors work closely with authors — evaluating the scientific quality of each submission, and making sure
          it meets our standards for formatting and electronic compatibility. These behind-the-scenes steps are essential
          for a smooth layout, and most editors learn them through hands-on experience.
        </p>
        <p>
          Authors and editors should read the
          <a
            href="/PDF/insectamundi/InsectaMundi_FullGuidelines_2025.pdf"
            target="_blank"
            rel="noopener"
            >Manuscript Preparation Rules &amp; Guidelines</a
          >
          and the
          <a
            href="/PDF/insectamundi/InsectaMundi_EditorGuidelines_2014.pdf"
            target="_blank"
            rel="noopener"
            >Editor Guidelines</a
          >. If you are a Review Editor with questions about the process, please get in touch.
        </p>
      </div>

      <InsectaMundiSidebar
        :resources="resources"
        resources-title="Editor resources"
      />
    </section>

    <section class="bg-paper border-y border-rule">
      <div class="container mx-auto px-6 py-14">
        <p class="text-xs uppercase tracking-[0.18em] font-semibold text-senary">Workflow</p>
        <h2 class="mt-2 font-serif text-3xl font-bold text-ink">From submission to publication</h2>
        <p class="mt-2 text-ink-soft max-w-2xl">The path a manuscript takes through review, editing and layout.</p>
        <a
          href="/images/Workflow_InsectaMundi.png"
          target="_blank"
          rel="noopener"
          class="mt-8 block max-w-4xl mx-auto"
          title="Open full size"
        >
          <img
            loading="lazy"
            decoding="async"
            src="/images/Workflow_InsectaMundi.png"
            alt="Insecta Mundi manuscript workflow diagram"
            class="w-full rounded-xl border border-rule bg-white shadow-sm"
          />
        </a>
      </div>
    </section>

    <InsectaMundiBottomButtons />
  </div>
</template>

<script setup>
import InsectaMundiHeader from '~/components/InsectaMundi/InsectaMundiHeader.vue'
import InsectaMundiSidebar from '~/components/InsectaMundi/InsectaMundiSidebar.vue'
import InsectaMundiBottomButtons from '~/components/InsectaMundi/InsectaMundiBottomButtons.vue'

useHead({ title: 'Editor guidelines · Insecta Mundi' })

const resources = [
  { text: '2014 Manuscript Processing Flow', link: '/PDF/insectamundi/InsectaMundi_FlowChart_2014.pdf' },
  { text: '2014 Reorganization Proposal', link: '/PDF/insectamundi/InsectaMundi_ReorganizationDetails_2014.pdf' },
  { text: 'Editor Guidelines', link: '/PDF/insectamundi/InsectaMundi_EditorGuidelines_2014.pdf' },
  { text: 'Manuscript Preparation Rules & Guidelines (2025)', link: '/PDF/insectamundi/InsectaMundi_FullGuidelines_2025.pdf' }
]
</script>
