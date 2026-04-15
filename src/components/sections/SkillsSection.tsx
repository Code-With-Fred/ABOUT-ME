import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const categories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tools: ["React", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "Redux/Zustand"],
    description: "Pixel-perfect interfaces with modern React patterns, component architecture, and fluid animations.",
  },
  {
    id: "backend",
    title: "Backend Systems",
    tools: ["Node.js", "Express.js", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
    description: "Scalable server architectures, database design, authentication systems, and API development.",
  },
  {
    id: "product",
    title: "Product Architecture",
    tools: ["System Design", "Database Modeling", "Auth & RBAC", "Payment Integration", "Real-Time Systems", "Multi-Tenancy", "Caching", "API Gateway"],
    description: "Full product thinking — from data models and user flows to monetization and scalability patterns.",
  },
  {
    id: "uiux",
    title: "UI/UX Execution",
    tools: ["Figma", "Responsive Design", "Design Systems", "Accessibility", "Wireframing", "Prototyping", "Motion Design", "User Research"],
    description: "Design-forward development with pixel precision, interaction design, and accessibility-first principles.",
  },
  {
    id: "devops",
    title: "Performance & DevOps",
    tools: ["Git/GitHub", "Vercel", "Docker", "CI/CD", "Performance Tuning", "SEO", "Testing (Jest/Vitest)", "Linux"],
    description: "Deployment pipelines, performance optimization, monitoring, and production-grade infrastructure.",
  },
]

const SkillsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeCategory, setActiveCategory] = useState("frontend")
  const active = categories.find((c) => c.id === activeCategory)!

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative surface-1"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            id="skills-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-16 max-w-3xl"
          >
            Tools & technologies{" "}
            <span className="text-muted-foreground">I use to build serious products.</span>
          </motion.h2>

          <div className="grid md:grid-cols-[280px,1fr] gap-8">
            {/* Category tabs */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50 border border-transparent"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Active category content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-xl border border-border/50 bg-card/50"
              >
                <h3 className="text-2xl font-bold font-display mb-3">{active.title}</h3>
                <p className="text-muted-foreground mb-8 max-w-lg">{active.description}</p>

                <div className="flex flex-wrap gap-3">
                  {active.tools.map((tool, i) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-4 py-2.5 rounded-lg border border-border/50 bg-background/50 text-sm font-medium hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
