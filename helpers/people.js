// Turns data/people.js into the lists the pages need. Nothing to edit here.
import data from '~/data/people'

// 'paul-skelley' → { name, imageUrl, profileUrl }; a plain name stays a plain name
export function person(idOrName, extra = {}) {
  const p = data.people[idOrName]
  if (!p) return { name: String(idOrName), imageUrl: '', profileUrl: '', ...extra }
  return { name: p.name, imageUrl: p.photo || '', profileUrl: p.link || '', ...extra }
}

const lastYear = (term) => Number(String(term).match(/(\d{4})\s*$/)?.[1] || 0)

// Terms still running this year (or later) are current; the rest are history
export function boardTerms(year = new Date().getFullYear()) {
  const terms = data.boardTerms.map((t) => ({ term: t.term, members: t.members.map((m) => person(m)) }))
  return {
    current: terms.filter((t) => lastYear(t.term) >= year),
    former: terms.filter((t) => lastYear(t.term) < year)
  }
}

export const officers = {
  year: data.officers.year,
  list: data.officers.roles.map((r) => person(r.who, { role: r.role }))
}
export const insectaMundiTeam = data.insectaMundi.map((r) => person(r.who, { role: r.role, email: r.email }))
export const grantCommittee = data.grantCommittee.map((r) => person(r.who, { role: r.role }))
export const webTeam = data.webTeam.map((r) => person(r.who, { role: r.role }))
