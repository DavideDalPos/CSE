<template>
  <div>
    <InsectaMundiHeader
      kicker="Policies"
      title="Ethics statement"
      lede="What we expect from authors, reviewers and editors, and how the journal handles ethical concerns."
    />

    <section class="container mx-auto px-6 py-12 flex flex-col lg:flex-row-reverse gap-12">
      <!-- Table of contents -->
      <nav
        class="w-full lg:w-72 shrink-0 lg:sticky lg:top-20 self-start rounded-xl border border-rule bg-paper p-5"
        aria-label="On this page"
      >
        <p class="text-xs uppercase tracking-[0.16em] font-semibold text-senary">On this page</p>
        <template
          v-for="g in groups"
          :key="g.title"
        >
          <p class="mt-4 text-sm font-semibold text-ink">{{ g.title }}</p>
          <ul class="mt-1 space-y-0.5">
            <li
              v-for="s in g.sections"
              :key="s.id"
            >
              <a
                :href="`#${s.id}`"
                class="block px-2 py-1 -mx-2 rounded text-sm text-ink-soft hover:bg-white hover:text-senary"
                >{{ s.title }}</a
              >
            </li>
          </ul>
        </template>
      </nav>

      <div class="flex-1 min-w-0 im-text">
        <p class="lead">
          <i>Insecta Mundi</i> (IM) is an academic journal published by the Center for Systematic Entomology (CSE). The
          integrity of its articles matters at every step of manuscript processing, so everyone involved — authors, peer
          reviewers, review editors, layout editors and the editorial board — is expected to follow our policies on
          publication ethics and malpractice. Many are adapted from those of the
          <a
            href="https://europeanjournaloftaxonomy.eu/index.php/ejt/ethics"
            target="_blank"
            rel="noopener"
            >European Journal of Taxonomy</a
          >.
        </p>

        <template
          v-for="g in groups"
          :key="g.title"
        >
          <p class="!mt-12 text-xs uppercase tracking-[0.18em] font-semibold text-senary">{{ g.title }}</p>
          <section
            v-for="s in g.sections"
            :id="s.id"
            :key="s.id"
            class="scroll-mt-28"
          >
            <h2 class="!mt-6">{{ s.title }}</h2>
            <div
              class="mt-3 space-y-4"
              v-html="s.html"
            />
          </section>
        </template>
      </div>
    </section>

    <InsectaMundiBottomButtons />
  </div>
</template>

<script setup>
import InsectaMundiHeader from '~/components/InsectaMundi/InsectaMundiHeader.vue'
import InsectaMundiBottomButtons from '~/components/InsectaMundi/InsectaMundiBottomButtons.vue'

useHead({ title: 'Ethics statement · Insecta Mundi' })

const ICZN = '<a href="https://www.iczn.org/the-code/the-code-online/" target="_blank" rel="noopener">International Code of Zoological Nomenclature</a>'

const groups = [
  {
    title: 'Authors',
    sections: [
      {
        id: 'content',
        title: 'Content',
        html: `<p>IM manuscripts must be original and meet a high scientific and technical standard. All images must either be original or used with the express permission of their owner. The corresponding author must attest that they followed our <a href="/insecta_mundi/authorguidelines">preparation guidelines</a> by including a signed submission contract with the manuscript.</p>`
      },
      {
        id: 'material',
        title: 'Material studied',
        html: `<p>When new material has been collected for a study, the authors must make sure that all necessary permits were obtained before collecting. Reviewers and editors are not required to verify permits independently, but if they have reason to believe that material was obtained illegally, they must notify the chief editor.</p>
        <p>Authors must deposit all type material in an institutional collection and state clearly in the manuscript where it is deposited.</p>`
      },
      {
        id: 'copyright',
        title: 'Copyright',
        html: `<p>IM is a free, open-access journal licensed under a Creative Commons Attribution-NonCommercial 3.0 Unported License. By submitting and publishing in IM, authors grant the CSE and the journal's host institutions permission to make the article available online and electronically, and to archive it electronically and in print. Information and images taken from IM articles must be referenced and cited appropriately. Articles may be reproduced for personal, educational, archival or other non-commercial purposes; permission should be sought from the authors for multiple non-commercial reproductions, and written permission is required for any commercial reproduction.</p>`
      },
      {
        id: 'authorship',
        title: 'Authorship',
        html: `<p>To avoid copyright issues, authors must agree to the following:</p>
        <ul>
          <li><b>Unique submission:</b> a manuscript submitted to IM cannot be submitted to another journal unless the chief editor has explicitly rejected it.</li>
          <li><b>Content agreement:</b> all co-authors are aware of and agree with the contents of the submission.</li>
          <li><b>Copyright agreement:</b> all co-authors agree with the copyright policy of the journal.</li>
          <li><b>Non-original images:</b> authors must tell the editors about any non-original images in their first submission, and take all steps needed to avoid a breach of copyright.</li>
        </ul>`
      },
      {
        id: 'peer-review',
        title: 'Peer review',
        html: `<p>Authors must obtain critical reviews from two outside reviewers and submit their comments and Reviewer Report forms (signed by the reviewers) with the manuscript. Peer reviewers are not anonymous, and their contributions must be acknowledged in the Acknowledgments. Authors are responsible for choosing reviewers with sufficient expertise in the subject; if an editor finds the reviews unsatisfactory, they can ask the authors for additional reviewers or solicit reviews themselves.</p>`
      },
      {
        id: 'plagiarism',
        title: 'Plagiarism',
        html: `<p>Authors are expected to publish original and relevant results and data. Essential elements of ethical publication are data integrity; sound presentation of methods, sources and techniques; reproducible results; and acknowledgement of contributors to data collection and research, of funding agencies, and of institutions where the work was carried out.</p>
        <p>Authors must cite appropriate and relevant literature. Plagiarism is unacceptable, and any suspicion of it will be investigated by the editors.</p>
        <p>Self-plagiarism (text recycling) should be avoided as much as possible; when text from earlier work must be reused, this must be reported transparently and the earlier work fully cited.</p>
        <p>Whenever possible, data and results from the same framework (<i>e.g.</i>, a single research project) should not be split into smaller publishable units, but published together as one original publication.</p>`
      },
      {
        id: 'misconduct',
        title: 'Research misconduct',
        html: `<p>Inventing data or maliciously manipulating data (including figures) is unacceptable. If there is conclusive evidence of this, the manuscript will be rejected immediately.</p>
        <p>Illustrations presenting data should not be manipulated except for clarity (<i>e.g.</i>, adjusting contrast or colours). Authors must mention such adjustments in the Materials and Methods or in the figure captions if they could lead to misinterpretation of the data.</p>`
      },
      {
        id: 'conflicts',
        title: 'Conflicts of interest',
        html: `<p>A conflict of interest exists when authors are influenced in their choices or actions by a personal or financial interest. Any suspected conflict of interest should be reported to the IM editors or to the CSE officers.</p>`
      },
      {
        id: 'nomenclature',
        title: 'Compliance with nomenclatural codes',
        html: `<p>To comply with the ${ICZN}, our papers are registered in ZooBank before publication, and the LSID (Life Science Identifier) assigned to each is printed on its inside cover. A PDF of each article is available on this website, and printed copies are deposited in several international libraries, as listed on the inside cover of each article; these are printed and mailed once a year.</p>`
      },
      {
        id: 'privacy',
        title: 'Privacy statement',
        html: `<p>Names, affiliations and e-mail addresses that appear in IM articles and on the CSE website are used only for the stated purposes of the journal and are not made available for any other purpose or to any other party.</p>`
      }
    ]
  },
  {
    title: 'Ethical issues: how the editors act',
    sections: [
      {
        id: 'reporting',
        title: 'Reporting a concern',
        html: `<p>Anyone who suspects an ethical issue — CSE member or not — is encouraged to contact the chief editor at <a href="mailto:insectamundi@gmail.com">insectamundi@gmail.com</a>. Every suspicion of an ethical issue, misconduct or conflict of interest is investigated by the journal.</p>`
      },
      {
        id: 'investigation',
        title: 'Investigation',
        html: `<p>The chief editor conducts the investigation. Members of the IM editorial team, review editors, authors and CSE board members are encouraged to share feedback and suggestions to improve how ethical issues are handled.</p>
        <p>The chief editor contacts both parties in any conflict and studies their responses. No action is taken without sufficient evidence of misconduct. If another journal is involved, its editors are contacted so that both teams can investigate and, if possible, reach a common decision.</p>`
      }
    ]
  }
]
</script>
