import { useEffect, useState } from 'react'

// Hash-based routing (#/blog, #/blog/my-post) so deep links work on GitHub Pages
// without any server-side rewrites.
export function useHashRoute() {
  const read = () => window.location.hash.replace(/^#\/?/, '')
  const [route, setRoute] = useState(read)

  useEffect(() => {
    const onChange = () => {
      setRoute(read())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route.split('/').filter(Boolean)
}
