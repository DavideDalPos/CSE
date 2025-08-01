export function makeAuthorsLabel(authors) {
  return authors
    ?.map(({ first_name, last_name, suffix }) => `${first_name} ${last_name}${suffix ? `, ${suffix}` : ''}`)
    .join('; ')
}
