// RSS feed of the newest Insecta Mundi articles — built automatically from
// /content/insecta_mundi at every deploy. Address: /feed.xml
import { serverQueryContent } from '#content/server'
import site from '~/data/site'

const esc = (s) =>
  String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
const strip = (s) => String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

export default defineEventHandler(async (event) => {
  const articles = await serverQueryContent(event, 'insecta_mundi')
    .only(['_path', 'title', 'date', 'issue', 'authors', 'abstract', 'doi', 'download', 'categories'])
    .sort({ date: -1, issue: -1 })
    .limit(50)
    .find()

  const items = articles
    .map((a) => {
      const link = `${site.url}${a._path}`
      const authors = (a.authors || []).map((x) => `${x.first_name} ${x.last_name}`).join(', ')
      const summary = [authors, a.issue && `Insecta Mundi ${a.issue}`, strip(a.abstract).slice(0, 600)].filter(Boolean).join(' — ')
      return `    <item>
      <title>${esc(strip(a.title))}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="true">${esc(link)}</guid>
      <pubDate>${new Date(`${a.date}T12:00:00Z`).toUTCString()}</pubDate>
      <dc:creator>${esc(authors)}</dc:creator>
${(a.categories || []).map((c) => `      <category>${esc(c)}</category>`).join('\n')}
      <description>${esc(summary)}</description>
    </item>`
    })
    .join('\n')

  setHeader(event, 'content-type', 'application/rss+xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Insecta Mundi — new articles</title>
    <link>${site.url}/insecta_mundi</link>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>The newest articles published in Insecta Mundi, the journal of the Center for Systematic Entomology.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`
})
