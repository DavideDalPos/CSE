export function makeAuthorsLabel(authors) {
  return authors
    ?.map(({ first_name, last_name }) => `${first_name} ${last_name}`)
    .join('; ')
}
