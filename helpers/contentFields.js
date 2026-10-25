// Fields needed to LIST Insecta Mundi articles (archive, current issue,
// festschrifts, home page). Asking only for these keeps the pages light:
// the full articles (abstracts, reference lists, body) are only loaded on the
// article page itself.
export const IM_LIST_FIELDS = [
  '_path',
  'title',
  'date',
  'issue',
  'pagination',
  'doi',
  'download',
  'supplementary',
  'categories',
  'authors'
]
