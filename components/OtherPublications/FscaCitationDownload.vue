<template>
  <div class="flex flex-wrap items-center gap-2">
    <span class="text-xs uppercase tracking-wider text-ink-soft mr-1">Download</span>
    <button
      v-for="t in types"
      :key="t"
      type="button"
      class="text-xs font-semibold px-2.5 py-1 rounded-full border border-rule hover:border-quaternary hover:text-senary"
      @click="download(t)"
    >
      .{{ t }}
    </button>
  </div>
</template>

<script setup>
import { doiShort } from '~/helpers/fscaSeries'

const props = defineProps({
  publication: { type: Object, required: true },
  plainText: { type: String, default: '' } // formatted citation for the .txt file
})

const types = ['txt', 'ris', 'bib']

function stripTags(s) {
  return String(s || '').replace(/<[^>]+>/g, '')
}

function build(type) {
  const p = props.publication
  const title = stripTags(p.title)
  const authors = p.authors || []
  const doi = p.doi ? doiShort(p.doi) : ''
  const [sp, ep] = String(p.pagination || '')
    .split(/\s*[-–]\s*/)
    .map((s) => s.trim())

  if (type === 'txt') return { content: props.plainText, mime: 'text/plain' }

  if (type === 'ris') {
    const lines = [
      'TY  - BOOK',
      ...authors.map((a) => `AU  - ${a.last_name}, ${a.first_name}`),
      `TI  - ${title}`,
      `T2  - ${p.journal}`,
      `VL  - ${p.volume || ''}`,
      `PY  - ${p.year}`,
      `SP  - ${sp || ''}`,
      ep ? `EP  - ${ep}` : '',
      `SN  - ${p.issn || ''}`,
      doi ? `DO  - ${doi}` : '',
      p.pdf ? `UR  - ${p.pdf}` : '',
      'ER  -'
    ]
    return { content: lines.filter(Boolean).join('\n'), mime: 'application/x-research-info-systems' }
  }

  const key = `${(authors[0]?.last_name || 'FSCA').replace(/\W+/g, '')}${p.year}`
  const fields = [
    `  author = {${authors.map((a) => `${a.last_name}, ${a.first_name}`).join(' and ')}}`,
    `  title = {${title}}`,
    `  series = {${p.journal}}`,
    `  volume = {${p.volume || ''}}`,
    `  year = {${p.year}}`,
    p.pagination ? `  pages = {${String(p.pagination).replace(/[-–]/, '--')}}` : '',
    doi ? `  doi = {${doi}}` : ''
  ].filter(Boolean)
  return { content: `@book{${key},\n${fields.join(',\n')}\n}`, mime: 'application/x-bibtex' }
}

function download(type) {
  const { content, mime } = build(type)
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `FSCA_vol${props.publication.volume || ''}_${props.publication.year || ''}.${type}`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
</script>
