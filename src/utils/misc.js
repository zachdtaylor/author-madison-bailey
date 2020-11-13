
function usePathname() {
  if (typeof window === 'undefined') {
    return ''
  }
  return window.location.pathname
}

function getFirstParagraph({ raw }) {
  const json = JSON.parse(raw)
  return json.content[0].content[0].value
}

export { usePathname, getFirstParagraph }