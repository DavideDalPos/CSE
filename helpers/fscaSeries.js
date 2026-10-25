// The two FSCA monograph series. Content lives in /content/<collection>/<year>/<slug>.md
export const FSCA_SERIES = {
  arthropod_papers: {
    collection: 'arthropod_papers',
    path: '/arthropod_papers',
    title: 'Arthropods of Florida and Neighboring Land Areas',
    short: 'Arthropods of Florida',
    issn: '0066-8036',
    blurb:
      'Illustrated monographs, faunal reviews and checklists of the insects, arachnids and other arthropods of Florida and the surrounding region.'
  },
  occasional_papers: {
    collection: 'occasional_papers',
    path: '/occasional_papers',
    title: 'Occasional Papers of the Florida State Collection of Arthropods',
    short: 'Occasional Papers',
    issn: '0885-5943',
    blurb:
      'Revisions, monographs, catalogues and bibliographies — major taxonomic works that are too long for a journal article.'
  }
}

// Fields needed for list cards (leaves out the long abstracts)
export const FSCA_LIST_FIELDS = ['_path', 'title', 'volume', 'year', 'authors', 'image', 'pdf', 'pdfhigh', 'doi', 'pagination']

export function sortVolumes(list) {
  return [...(list || [])].sort((a, b) => (Number(b.volume) || 0) - (Number(a.volume) || 0))
}

export function shortAuthors(authors) {
  if (!Array.isArray(authors) || !authors.length) return ''
  const fmt = (a) => {
    const initials = (a.first_name || '')
      .split(/\s+/)
      .filter(Boolean)
      .map((n) => (n.endsWith('.') && n.length <= 3 ? n : n[0] + '.'))
      .join(' ')
    return `${a.last_name}${initials ? ', ' + initials : ''}`
  }
  if (authors.length > 3) return `${fmt(authors[0])} et al.`
  return authors.map(fmt).join('; ')
}

export function doiShort(doi) {
  return String(doi || '')
    .replace(/^(doi:\s*|https?:\/\/(dx\.)?doi\.org\/)/i, '')
    .trim()
}

export function doiUrl(doi) {
  return `https://doi.org/${doiShort(doi)}`
}

export function formatPages(p) {
  return p ? String(p).replace(/(\d)-(\d)/g, '$1–$2') : ''
}
