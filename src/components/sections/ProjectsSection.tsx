import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowUpRight, Info, ShoppingBag, Users, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Helmet } from "react-helmet-async"

import imgFlagship from "@/assets/project-storvia.jpg"
import imgEcommerce from "@/assets/project-ecommerce.jpg"
import imgHealthcare from "@/assets/project-healtrackcare.jpg"
import imgNgo from "@/assets/project-ngo.jpg"
import imgRealEstate from "@/assets/project-realestate.jpg"
import imgTradePro from "@/assets/project-tradepro.jpg"

const projectFeatures = [
  { icon: ShoppingBag, label: "Responsive Commerce Experience" },
  { icon: Users, label: "Seller & Customer Dashboards" },
  { icon: Shield, label: "Secure Payments + Subscriptions" },
  { icon: TrendingUp, label: "Growth-Ready Architecture" },
]

const flagship = {
  title: "PulseCart",
  summary: "PulseCart combines product discovery, seller tools, subscription billing, and merchant analytics into one polished SaaS experience.",
  stack: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS", "Stripe"],
  image: imgFlagship,
}

const concepts = [
  {
    title: "Multi-Vendor Marketplace",
    description: "A commerce concept with seller onboarding, per-vendor storefronts, and commission-based checkout.",
    stack: ["React", "Node.js", "Stripe Connect"],
    image: imgEcommerce,
  },
  {
    title: "Patient Care Dashboard",
    description: "A healthcare admin concept for scheduling, patient records, and care-team coordination.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    image: imgHealthcare,
  },
  {
    title: "Nonprofit Donation Platform",
    description: "A donor-facing concept with recurring giving, campaign pages, and impact reporting.",
    stack: ["React", "Supabase", "Tailwind CSS"],
    image: imgNgo,
  },
  {
    title: "Real Estate Listings Platform",
    description: "A property marketplace concept with saved searches, agent profiles, and map-based browsing.",
    stack: ["React", "Node.js", "PostGIS"],
    image: imgRealEstate,
  },
  {
    title: "Trading & Portfolio Tracker",
    description: "A fintech dashboard concept for tracking positions, watchlists, and real-time price data.",
    stack: ["React", "TypeScript", "WebSockets"],
    image: imgTradePro,
  },
]

const ProjectsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "PulseCart | Example Concept Case Study",
    "description": "PulseCart is an example commerce platform concept demonstrating product engineering capability.",
    "keywords": flagship.stack.join(", "),
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
            Products I build.{" "}
            <span className="text-muted-foreground">Problems I solve.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-2xl mb-4 text-base sm:text-lg"
          >
            Every project is approached as a product, with user experience, business logic, and scalability at the core.
          </motion.p>

          {/* Honesty note: these are concept builds, not client deliveries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="flex items-start gap-2.5 mb-10 sm:mb-16 rounded-xl border border-border/50 bg-card/40 px-4 py-3 max-w-2xl"
          >
            <Info className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              The builds below are example concepts I designed and built to demonstrate how I approach real product problems &mdash; they are not client deliveries. Real case studies will replace these as projects launch.
            </p>
          </motion.div>

          {/* Flagship concept */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-12 sm:mb-20 relative group"
          >
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
              <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/8] md:aspect-[16/7]">
                <img
                  src={flagship.image}
                  alt="PulseCart dashboard concept showing marketplace analytics and commerce workflows"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex flex-wrap gap-2 max-w-[calc(100%-1.5rem)]">
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 backdrop-blur-sm text-[10px] sm:text-xs">
                    Example Concept
                  </Badge>
                  <Badge variant="outline" className="text-muted-foreground backdrop-blur-sm text-[10px] sm:text-xs">
                    Marketplace / SaaS
                  </Badge>
                </div>
              </div>

              <div className="p-5 sm:p-8 md:p-12 -mt-6 sm:-mt-12 relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
                  {flagship.title}
                </h3>
                <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-5 sm:mb-6 max-w-2xl leading-relaxed">
                  {flagship.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
                  {projectFeatures.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-background/50 border border-border/30 min-w-0">
                      <f.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium truncate">{f.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {flagship.stack.map((t) => (
                    <span key={t} className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full border border-border/50 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl bg-background/50 border border-border/30">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5 sm:mb-2">Problem</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Fragmented commerce systems leave sellers disconnected and customers unable to complete repeat purchases.</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5 sm:mb-2">Approach</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Unified storefront management, seller dashboards, subscription workflows, and real-time performance insights.</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5 sm:mb-2">Demonstrates</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Full-stack ownership: data modeling, payments, dashboards, and a production-grade UI in one build.</p>
                  </div>
                </div>

                <a href="/contact" className="inline-block w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto group glow-sm hover:glow-md transition-all">
                    Discuss a similar build
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </a>
              </div>

              <div className="absolute -bottom-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            </div>
          </motion.div>

          {/* More concepts grid */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold font-display mb-6 sm:mb-8"
          >
            More concept builds
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {concepts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.6 }}
                className="rounded-xl border border-border/50 bg-card/50 overflow-hidden group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.title} concept preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={500}
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <Badge variant="outline" className="bg-background/70 backdrop-blur-sm text-[10px]">
                      Example Concept
                    </Badge>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h4 className="font-semibold mb-1.5">{c.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">{c.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.stack.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-border/50 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl border border-border/50 bg-card/50 p-8 sm:p-12 text-center">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Have a real project in mind? Let's talk about what you're building.
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
