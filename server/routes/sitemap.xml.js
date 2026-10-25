// Sitemap for search engines — built automatically at every deploy. Address: /sitemap.xml
import { serverQueryContent } from '#content/server'
import site from '~/data/site'

const STATIC_PAGES = [
  '/',
  '/about',
  '/insecta_mundi',
  '/insecta_mundi/current',
  '/insecta_mundi/stats',
  '/insecta_mundi/journal',
  '/insecta_mundi/authorguidelines',
  '/insecta_mundi/editorinfo',
  '/insecta_mundi/ethic',
  '/other_publications/CSE',
  '/other_publications/FSCA',
  '/other_publications/Feischrift_Thomas',
  '/other_publications/Feischrift_Woodruff',
  '/arthropod_papers',
  '/occasional_papers',
  '/grants',
  '/meetings',
  '/membership',
  '/donations'
]

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event)
    .where({ _path: { $regex: '^/(insecta_mundi|arthropod_papers|occasional_papers)/' } })
    .only(['_path', 'date'])
    .find()

  const urls = [...STATIC_PAGES.map((p) => ({ loc: p })), ...docs.map((d) => ({ loc: d._path, lastmod: d.date }))]
    .map((u) => `  <url><loc>${site.url}${u.loc === '/' ? '/' : u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
