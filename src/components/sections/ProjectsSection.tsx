import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, ArrowUpRight, ShoppingBag, Users, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Helmet } from "react-helmet-async"

import imgPulseCart from "@/assets/project-storvia.jpg"

const projectFeatures = [
  { icon: ShoppingBag, label: "Responsive Commerce Experience" },
  { icon: Users, label: "Seller & Customer Dashboards" },
  { icon: Shield, label: "Secure Payments + Subscriptions" },
  { icon: TrendingUp, label: "Growth-Ready Architecture" },
]

const project = {
  title: "PulseCart",
  tagline: "A premium commerce platform built for fast-growing marketplaces and subscription brands.",
  summary: "PulseCart combines product discovery, seller tools, subscription billing, and merchant analytics into one polished SaaS experience.",
  problem: "Existing commerce systems were fragmented and failed to support both recurring revenue and multi-vendor growth.",
  solution: "Built PulseCart with unified storefront management, seller dashboards, subscription workflows, and real-time performance insights.",
  stack: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS", "Stripe"],
  image: imgPulseCart,
}

const ProjectsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "PulseCart | Flagship Commerce Platform",
    "description": "PulseCart is a premium commerce platform built for marketplaces and subscription brands.",
    "url": "https://pulsecart.example.com/",
    "keywords": project.stack.join(", "),
  }

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 relative"
      aria-labelledby="projects-heading"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(projectsSchema)}</script>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            Featured Work
          </motion.p>
          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 sm:mb-6 max-w-3xl"
          >
            Products I've built.{" "}
            <span className="text-muted-foreground">Problems I've solved.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-2xl mb-10 sm:mb-16 text-base sm:text-lg"
          >
            Every project is approached as a product, with user experience, business logic, and scalability at the core.
          </motion.p>

          {/* PulseCart Flagship */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-12 sm:mb-20 relative group"
          >
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
              {/* PulseCart dashboard image */}
              <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/8] md:aspect-[16/7]">
                <img
                  src={project.image}
                  alt="PulseCart dashboard view showing marketplace analytics and commerce workflows"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex flex-wrap gap-2 max-w-[calc(100%-1.5rem)]">
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 backdrop-blur-sm text-[10px] sm:text-xs">
                    Flagship Product
                  </Badge>
                  <Badge variant="outline" className="text-muted-foreground backdrop-blur-sm text-[10px] sm:text-xs">
                    Marketplace / SaaS
                  </Badge>
                </div>
              </div>

              <div className="p-5 sm:p-8 md:p-12 -mt-6 sm:-mt-12 relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
                  PulseCart
                </h3>
                <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-5 sm:mb-6 max-w-2xl leading-relaxed">
                  {project.summary}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
                  {projectFeatures.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-background/50 border border-border/30 min-w-0">
                      <f.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium truncate">{f.label}</span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {project.stack.map((t) => (
                    <span key={t} className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full border border-border/50 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl bg-background/50 border border-border/30">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5 sm:mb-2">Problem</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Fragmented commerce systems left sellers disconnected and customers unable to complete repeat purchases.</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5 sm:mb-2">Solution</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Built a unified commerce product with seller onboarding, recurring payments, and analytics in one polished dashboard.</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5 sm:mb-2">Impact</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Delivered a scalable platform that reduced onboarding friction and accelerated monthly recurring revenue for merchants.</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-[1fr,1fr]">
                  <a href="https://pulsecart.example.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto group glow-sm hover:glow-md transition-all">
                      Explore PulseCart
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </a>
                  <a href="/contact" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Discuss a similar build
                    </Button>
                  </a>
                </div>
              </div>

              {/* Ambient glow */}
              <div className="absolute -bottom-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            </div>
          </motion.div>

          <div className="rounded-3xl border border-border/50 bg-card/50 p-8 sm:p-12 text-center">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              This page now highlights one flagship product, PulseCart, with a premium case study focus.
              It is designed to show the depth of a single high-value build instead of multiple smaller examples.
            </p>
            <Button asChild size="lg" className="mx-auto">
              <a href="/contact">Book a Project Review</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
