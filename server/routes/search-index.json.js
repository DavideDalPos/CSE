// Search index for the site-wide search box, built at every deploy.
// Address: /search-index.json — downloaded only when someone opens the search.
import { serverQueryContent } from '#content/server'

const strip = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const names = (authors) => (authors || []).map((a) => `${a.first_name || ''} ${a.last_name || ''}`.trim()).join(', ')

// Website pages that can be found by search, with extra words people may type
const PAGES = [
  { t: 'About the CSE', u: '/about', w: 'board directors officers editorial staff history former members committee' },
  { t: 'Insecta Mundi — latest issue', u: '/insecta_mundi/current', w: 'new articles recent journal' },
  { t: 'Insecta Mundi — all articles', u: '/insecta_mundi', w: 'archive search journal' },
  { t: 'Insecta Mundi in numbers', u: '/insecta_mundi/stats', w: 'statistics stats orders families authors numbers growth' },
  { t: 'About Insecta Mundi', u: '/insecta_mundi/journal', w: 'journal scope open access issn indexing' },
  { t: 'Instructions for authors', u: '/insecta_mundi/authorguidelines', w: 'submit manuscript submission format template author guidelines page charges' },
  { t: 'Editor guidelines', u: '/insecta_mundi/editorinfo', w: 'editors subject editors review' },
  { t: 'Ethics statement', u: '/insecta_mundi/ethic', w: 'ethics plagiarism misconduct policy' },
  { t: 'CSE publications — Festschrifts, Memoirs, Newsletter', u: '/other_publications/CSE', w: 'festschrift memoirs newsletter books' },
  { t: 'FSCA publications', u: '/other_publications/FSCA', w: 'monographs arthropods of florida occasional papers' },
  { t: 'Peck Fund travel grants', u: '/grants', w: 'grant funding travel peck award apply proposal deadline reports' },
  { t: 'CSE Annual Conference', u: '/meetings', w: 'meeting conference talks posters program schedule archive gainesville zoom' },
  { t: 'Membership & donations', u: '/membership', w: 'join member renew fee paypal donate donation lifetime members' }
]

export default defineEventHandler(async (event) => {
  const im = await serverQueryContent(event, 'insecta_mundi')
    .only(['_path', 'title', 'date', 'issue', 'authors', 'categories', 'keywords'])
    .sort({ date: -1 })
    .find()
  const fsca = await serverQueryContent(event)
    .where({ _path: { $regex: '^/(arthropod_papers|occasional_papers)/' } })
    .only(['_path', 'title', 'year', 'volume', 'authors', 'journal'])
    .find()

  const items = [
    ...PAGES.map((p) => ({ k: 'page', ...p })),
    ...im.map((a) => ({
      k: 'im',
      t: strip(a.title),
      a: names(a.authors),
      m: `Insecta Mundi ${a.issue || ''} · ${String(a.date || '').slice(0, 4)}`,
      w: [...(a.categories || []), ...(a.keywords || [])].map(strip).join(' '),
      u: a._path
    })),
    ...fsca.map((v) => ({
      k: 'fsca',
      t: strip(v.title),
      a: names(v.authors),
      m: `${v._path.startsWith('/arthropod') ? 'Arthropods of Florida' : 'Occasional Papers'} vol. ${v.volume} · ${v.year}`,
      u: v._path
    }))
  ]

  setHeader(event, 'content-type', 'application/json; charset=utf-8')
  return items
})
