import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Persistent mobile-only conversion bar. Appears after the visitor scrolls
 * past the hero (so it never competes with the hero's own CTAs) and hides
 * on the contact page itself, where it would be redundant.
 */
const StickyMobileCTA = () => {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (location.pathname === "/contact") return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/90 backdrop-blur-xl border-t border-border/50"
        >
          <Link to="/contact" className="block">
            <Button size="lg" className="w-full h-12 group glow-sm">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyMobileCTA
