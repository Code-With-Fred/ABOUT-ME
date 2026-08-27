import { lazy, ComponentType } from "react"

const RELOAD_FLAG = "chunk-reload-attempted"

/**
 * Wraps React.lazy() so a stale/missing chunk (a visitor had the site open
 * across a deploy, then clicked a nav link for a route whose JS file no
 * longer exists on the server) triggers one automatic full-page reload
 * instead of silently blanking the page.
 *
 * Guarded by sessionStorage so a genuinely broken import doesn't reload-loop
 * forever — it tries once, and clears the flag on the next successful import
 * so a *later* deploy in the same tab session can still self-heal too.
 */
export function lazyWithReload<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      const module = await factory()
      sessionStorage.removeItem(RELOAD_FLAG)
      return module
    } catch (err) {
      if (!sessionStorage.getItem(RELOAD_FLAG)) {
        sessionStorage.setItem(RELOAD_FLAG, "1")
        window.location.reload()
        // Hang here — the reload is already underway, so there's nothing
        // useful to render, and rejecting would just flash an error.
        return new Promise<{ default: T }>(() => {})
      }
      throw err
    }
  })
}
