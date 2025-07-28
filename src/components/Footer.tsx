import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Scroll to Top Button */}
          <div className="text-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full shadow-soft hover:shadow-hover transition-smooth"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span>© {currentYear} Built with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Eze Favour</span>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-sm"
            >
              React • TypeScript • Tailwind CSS • Framer Motion
            </motion.div>
          </div>

          {/* Subtle gradient line */}
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </footer>
  )
}

export default Footer