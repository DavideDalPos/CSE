// Adds the "citation_*" tags that Google Scholar (and Zotero, Mendeley…) read
// to index an article and find its PDF. Used on Insecta Mundi and FSCA pages.
import site from '~/data/site'

const strip = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

// Google Drive "view" links → direct download link (what Scholar can fetch)
export function directPdf(url) {
  const m = String(url || '').match(/drive\.google\.com\/file\/d\/([^/?#]+)/)
  return m ? `https://drive.google.com/uc?export=download&id=${m[1]}` : url || ''
}

export function useScholarMeta(publication, { journal, issn = [], year, volume, issue } = {}) {
  const route = useRoute()
  const p = publication
  if (!p) return

  const title = strip(p.title)
  const pages = String(p.pagination || '').split(/\s*[-–]\s*/)
  const doi = String(p.doi || '').replace(/^(doi:\s*|https?:\/\/(dx\.)?doi\.org\/)/i, '')
  const date = p.date ? p.date.replace(/-/g, '/') : year
  const abstract = strip(p.abstract).slice(0, 300)
  const pageUrl = `${site.url}${route.path.replace(/\/$/, '')}`
  const authorNames = (p.authors || []).map((a) => `${a.last_name}, ${a.first_name}`)

  const meta = [
    { name: 'citation_title', content: title },
    ...(p.authors || []).flatMap((a) => [
      { name: 'citation_author', content: `${a.last_name}, ${a.first_name}` },
      ...(a.affiliation ? [{ name: 'citation_author_institution', content: strip(a.affiliation) }] : []),
      ...(a.orcid ? [{ name: 'citation_author_orcid', content: a.orcid }] : [])
    ]),
    { name: 'citation_publication_date', content: date },
    { name: 'citation_journal_title', content: journal },
    ...issn.map((i) => ({ name: 'citation_issn', content: i })),
    volume && { name: 'citation_volume', content: String(volume) },
    issue && { name: 'citation_issue', content: String(issue) },
    pages[0] && { name: 'citation_firstpage', content: pages[0] },
    pages[1] && { name: 'citation_lastpage', content: pages[1] },
    doi && { name: 'citation_doi', content: doi },
    p.download || p.pdf ? { name: 'citation_pdf_url', content: directPdf(p.download || p.pdf) } : null,
    { name: 'citation_abstract_html_url', content: pageUrl },
    ...(p.keywords || []).map((k) => ({ name: 'citation_keywords', content: strip(k) })),
    { name: 'citation_language', content: 'en' },
    // Description + link previews
    { name: 'description', content: abstract || `${title}. ${journal}.` },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: abstract || `${authorNames.join('; ')} — ${journal}` },
    { property: 'og:url', content: pageUrl },
    p.image && { property: 'og:image', content: `${site.url}${p.image}` }
  ]
    .filter(Boolean)
    // repeated tags (several authors, ISSNs, keywords) need a unique key, or only the last one is kept
    .map((m, i) => (m.name?.startsWith('citation_') ? { ...m, key: `${m.name}-${i}` } : m))

  useHead({
    title,
    meta,
    link: [{ rel: 'canonical', href: pageUrl }]
  })
}
