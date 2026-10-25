// Insecta Mundi statistics, recalculated from /content/insecta_mundi at every deploy.
// Address: /im-stats.json — used by /insecta_mundi/stats
//
// Taxa come from each article's `categories`. Orders are recognised from the list
// below; families are names ending in -idae, each assigned to the order it most often
// appears with. Suborders etc. listed in GROUP_TO_ORDER also count for their order.
import { serverQueryContent } from '#content/server'

const ORDERS = {
  Insecta: ['Coleoptera', 'Hymenoptera', 'Hemiptera', 'Lepidoptera', 'Diptera', 'Orthoptera', 'Neuroptera', 'Phasmatodea', 'Thysanoptera', 'Odonata', 'Blattodea', 'Mantodea', 'Trichoptera', 'Plecoptera', 'Ephemeroptera', 'Psocodea', 'Dermaptera', 'Megaloptera', 'Raphidioptera', 'Mecoptera', 'Siphonaptera', 'Strepsiptera', 'Embioptera', 'Zoraptera', 'Grylloblattodea', 'Mantophasmatodea', 'Archaeognatha', 'Zygentoma'],
  Collembola: ['Collembola'],
  Arachnida: ['Araneae', 'Scorpiones', 'Opiliones', 'Pseudoscorpiones', 'Acari', 'Solifugae', 'Amblypygi', 'Thelyphonida', 'Schizomida', 'Ricinulei'],
  Diplopoda: ['Polydesmida', 'Chordeumatida', 'Spirobolida', 'Julida', 'Spirostreptida', 'Callipodida', 'Platydesmida'],
  Chilopoda: ['Scolopendromorpha', 'Lithobiomorpha', 'Geophilomorpha', 'Scutigeromorpha'],
  Crustacea: ['Isopoda', 'Amphipoda', 'Decapoda']
}
const CLASS_OF = Object.fromEntries(Object.entries(ORDERS).flatMap(([cls, list]) => list.map((o) => [o, cls])))

// Suborders, superfamilies and informal groups that point to one order
const GROUP_TO_ORDER = {
  Heteroptera: 'Hemiptera',
  Auchenorrhyncha: 'Hemiptera',
  Sternorrhyncha: 'Hemiptera',
  Coccomorpha: 'Hemiptera',
  Caelifera: 'Orthoptera',
  Ensifera: 'Orthoptera',
  Anthophila: 'Hymenoptera',
  Platygastroidea: 'Hymenoptera',
  Mygalomorphae: 'Araneae',
  Tenebrionoideae: 'Coleoptera'
}
// Families never tagged together with their order
const FAMILY_TO_ORDER = { Hesperiidae: 'Lepidoptera', Aradidae: 'Hemiptera' }
// Spelling slips in article tags can be corrected here if needed, e.g. { Pompiliade: 'Pompilidae' }
const FIX = {}

const isFamily = (n) => /idae$/.test(n)
const strip = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const NEW_TAXA = /\bnew (species|genus|genera|subspecies|subgenus|subgenera|tribe|subfamily|family)\b|\bsp(p)?\.\s?n(ov)?\.|\bgen\.\s?n(ov)?\.|\bn\.\s?sp\./i

function pageCount(p) {
  const m = String(p || '').match(/(\d+)\s*[-–]\s*(\d+)/)
  return m ? Number(m[2]) - Number(m[1]) + 1 : 0
}

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event, 'insecta_mundi')
    .only(['_path', 'title', 'date', 'issue', 'authors', 'categories', 'pagination'])
    .find()

  const arts = docs.map((d) => {
    const cats = (d.categories || []).map((c) => FIX[String(c).trim()] || String(c).trim())
    const orders = new Set(cats.filter((c) => CLASS_OF[c]))
    cats.forEach((c) => GROUP_TO_ORDER[c] && orders.add(GROUP_TO_ORDER[c]))
    return {
      path: d._path,
      title: strip(d.title),
      issue: d.issue,
      year: String(d.date || '').slice(0, 4),
      authors: d.authors || [],
      pages: pageCount(d.pagination),
      families: [...new Set(cats.filter(isFamily))],
      orders
    }
  })

  // Assign every family to the order it is most often tagged with
  const tally = {}
  for (const a of arts)
    for (const f of a.families) for (const o of a.orders) ((tally[f] ||= {})[o] = (tally[f][o] || 0) + 1)
  const familyOrder = {}
  for (const a of arts)
    for (const f of a.families) {
      const t = tally[f]
      familyOrder[f] = t ? Object.entries(t).sort((x, y) => y[1] - x[1])[0][0] : FAMILY_TO_ORDER[f] || null
    }
  // Articles with a family but no order tag get the order through the family
  for (const a of arts) for (const f of a.families) if (familyOrder[f]) a.orders.add(familyOrder[f])

  // ---- Orders → families ----
  const orders = {}
  for (const a of arts) {
    for (const o of a.orders) (orders[o] ||= { name: o, cls: CLASS_OF[o], articles: 0, families: {} }).articles++
    for (const f of a.families) {
      const o = familyOrder[f]
      if (!o) continue
      ;(orders[o] ||= { name: o, cls: CLASS_OF[o], articles: 0, families: {} }).families[f] = (orders[o].families[f] || 0) + 1
    }
  }
  const orderList = Object.values(orders)
    .map((o) => ({
      ...o,
      families: Object.entries(o.families)
        .map(([name, articles]) => ({ name, articles }))
        .sort((a, b) => b.articles - a.articles || a.name.localeCompare(b.name))
    }))
    .sort((a, b) => b.articles - a.articles || a.name.localeCompare(b.name))

  // ---- Years ----
  const years = {}
  for (const a of arts) if (a.year) years[a.year] = (years[a.year] || 0) + 1
  const ys = Object.keys(years).map(Number)
  // Years not yet added to the online archive are flagged, not shown as zero
  const perYear = []
  for (let y = Math.min(...ys); y <= Math.max(...ys); y++) perYear.push({ year: y, articles: years[y] || 0, missing: !years[y] })

  // ---- Authors ----
  const authorKey = (x) => `${String(x.last_name || '').replace(/\s+/g, ' ').trim().toLowerCase()}|${String(x.first_name || '').trim().charAt(0).toLowerCase()}`
  const authors = {}
  for (const a of arts)
    for (const x of a.authors) {
      const k = authorKey(x)
      ;(authors[k] ||= { name: `${x.first_name || ''} ${x.last_name || ''}`.replace(/\s+/g, ' ').trim(), articles: 0 }).articles++
    }
  const topAuthors = Object.values(authors)
    .sort((a, b) => b.articles - a.articles || a.name.localeCompare(b.name))
    .slice(0, 8)

  const byPages = [...arts].sort((a, b) => b.pages - a.pages)
  const byAuthors = [...arts].sort((a, b) => b.authors.length - a.authors.length)
  const pick = (a) => ({ title: a.title, path: a.path, issue: a.issue, year: a.year })
  const allFamilies = orderList.flatMap((o) => o.families.map((f) => ({ ...f, order: o.name })))

  setHeader(event, 'content-type', 'application/json; charset=utf-8')
  return {
    totals: {
      articles: arts.length,
      authors: Object.keys(authors).length,
      pages: arts.reduce((s, a) => s + a.pages, 0),
      orders: orderList.length,
      families: allFamilies.length,
      newTaxa: arts.filter((a) => NEW_TAXA.test(a.title)).length,
      firstYear: perYear[0]?.year,
      missingYears: perYear.filter((y) => y.missing).map((y) => y.year),
      lastYear: perYear.at(-1)?.year,
      soloShare: Math.round((arts.filter((a) => a.authors.length === 1).length / arts.length) * 100),
      meanAuthors: Math.round((arts.reduce((s, a) => s + a.authors.length, 0) / arts.length) * 10) / 10
    },
    orders: orderList,
    topFamilies: allFamilies.sort((a, b) => b.articles - a.articles || a.name.localeCompare(b.name)).slice(0, 10),
    perYear,
    topAuthors,
    records: {
      longest: { ...pick(byPages[0]), pages: byPages[0].pages },
      mostAuthors: { ...pick(byAuthors[0]), authors: byAuthors[0].authors.length }
    }
  }
})
