
function usePathname() {
  if (typeof window === 'undefined') {
    return ''
  }
  return window.location.pathname
}

export { usePathname }