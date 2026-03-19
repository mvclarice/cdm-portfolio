// Function used to scroll the page to the provided id.
export function scrollToId(id: string) {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return element
}
