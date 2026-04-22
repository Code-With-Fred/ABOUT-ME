import { motion } from "framer-motion"

const items = [
  "Full-Stack Engineering",
  "Production-Ready Builds",
  "Scalable Architecture",
  "SaaS & Marketplaces",
  "Modern UI/UX",
  "API-First Development",
  "Real-Time Systems",
  "Auth & Payments",
  "Admin Dashboards",
  "Performance Optimized",
  "Client-Focused Execution",
  "Startup MVP Delivery",
]

const TrustStrip = () => {
  return (
    <section className="py-6 sm:py-8 border-y border-border/30 overflow-hidden" aria-label="Capabilities">
      <div className="marquee">
        <div className="marquee-content">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-6 mx-3 sm:mx-6 whitespace-nowrap">
              <span className="text-[11px] sm:text-sm font-medium text-muted-foreground/70 uppercase tracking-widest">
                {item}
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/40" aria-hidden="true" />
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {[...items, ...items].map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3 sm:gap-6 mx-3 sm:mx-6 whitespace-nowrap">
              <span className="text-[11px] sm:text-sm font-medium text-muted-foreground/70 uppercase tracking-widest">
                {item}
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/40" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
