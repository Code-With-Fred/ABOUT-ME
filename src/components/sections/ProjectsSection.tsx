import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, ArrowUpRight, ShoppingBag, Users, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Helmet } from "react-helmet-async"

import imgTradePro from "@/assets/project-tradepro.jpg"
import imgRealEstate from "@/assets/project-realestate.jpg"
import imgNGO from "@/assets/project-ngo.jpg"
import imgEcommerce from "@/assets/project-ecommerce.jpg"
import imgHealTrackCare from "@/assets/project-healtrackcare.jpg"

const storviaFeatures = [
  { icon: ShoppingBag, label: "Multi-Vendor Marketplace" },
  { icon: Users, label: "Admin, Seller & Buyer Roles" },
  { icon: Shield, label: "Commission-Based Monetization" },
  { icon: TrendingUp, label: "Scalable Commerce Engine" },
]

const projects = [
  {
    title: "ConfidantsZone",
    tagline: "Professional therapy platform connecting people with mental health experts",
    problem: "People struggle to find and book sessions with trusted therapists online.",
    solution: "Built a full-service therapist directory and booking platform with a clean, calming UX.",
    stack: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    image: imgEcommerce,
    demoUrl: "https://www.confidantszone.com/",
    category: "Health Platform",
  },
  {
    title: "HealTrackCare",
    tagline: "Modern healthcare management with appointment booking and patient tracking",
    problem: "Healthcare providers needed a streamlined way to manage patient appointments.",
    solution: "Created a professional healthcare web app with scheduling, provider profiles, and patient flows.",
    stack: ["React", "TypeScript", "MongoDB", "Tailwind CSS"],
    image: imgHealTrackCare,
    demoUrl: "https://www.healtrackcare.com/",
    category: "Healthcare",
  },
  {
    title: "TradePro",
    tagline: "Professional trading platform with real-time market data and modern UI",
    problem: "Traders needed a clean, fast interface for tracking and executing trades.",
    solution: "Built a responsive trading dashboard with live data feeds and intuitive navigation.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: imgTradePro,
    demoUrl: "https://trade-pro-wine.vercel.app/",
    category: "FinTech",
  },
  {
    title: "Wisper Real Estate",
    tagline: "Full-featured property marketplace for Nigeria's real estate market",
    problem: "Property listings in Nigeria lacked a modern, trustworthy digital platform.",
    solution: "Developed a sleek real estate platform with search, filtering, and property detail pages.",
    stack: ["React", "TypeScript", "MongoDB", "Tailwind CSS"],
    image: imgRealEstate,
    demoUrl: "https://wisper-prime-nigeria.vercel.app/",
    category: "PropTech",
  },
  {
    title: "Thrive Africa NGO",
    tagline: "Nonprofit platform driving healthcare access across underserved communities",
    problem: "An NGO needed a digital presence to reach donors and volunteers at scale.",
    solution: "Built a mission-driven website with donation systems, volunteer signups, and impact storytelling.",
    stack: ["React", "TypeScript", "MongoDB", "Tailwind CSS"],
    image: imgNGO,
    demoUrl: "https://thrive-africa-health-initiative.vercel.app/",
    category: "Non-Profit",
  },
]

const ProjectsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Projects - Code-With-Fred",
    "description": "Digital products and platforms built by Eze Favour (Code-With-Fred)",
    "itemListElement": projects.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": p.demoUrl,
      "item": {
        "@type": "CreativeWork",
        "name": p.title,
        "description": p.tagline,
        "url": p.demoUrl,
        "keywords": p.stack.join(", ")
      }
    }))
  }

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative"
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
          className="max-w-6xl mx-auto"
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 max-w-3xl"
          >
            Products I've built.{" "}
            <span className="text-muted-foreground">Problems I've solved.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-2xl mb-16 text-lg"
          >
            Every project is approached as a product — with user experience, business logic, and scalability at the core.
          </motion.p>

          {/* STORVIA — Flagship */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-20 relative group"
          >
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden">
              <div className="p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    🚀 Flagship Product
                  </Badge>
                  <Badge variant="outline" className="text-muted-foreground">
                    Marketplace / SaaS
                  </Badge>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
                  Storvia
                </h3>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  A scalable multi-vendor marketplace platform where businesses create stores, sellers manage products, and admins earn commissions built for real digital commerce.
                </p>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {storviaFeatures.map((f) => (
                    <div key={f.label} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                      <f.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{f.label}</span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Stripe", "Admin Dashboard"].map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-full border border-border/50 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Storytelling */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8 p-6 rounded-xl bg-background/50 border border-border/30">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Problem</p>
                    <p className="text-sm text-muted-foreground">Small businesses in Nigeria lack access to affordable, feature-rich marketplace platforms.</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Solution</p>
                    <p className="text-sm text-muted-foreground">A fully-managed multi-vendor marketplace with role-based access, product management, and automated commissions.</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Impact</p>
                    <p className="text-sm text-muted-foreground">Enables vendors to launch stores in minutes with built-in payments, inventory, and order management.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="https://www.storevia.name.ng/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="group glow-sm hover:glow-md transition-all">
                      Explore Storvia
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </a>
                  <Button variant="outline" size="lg">
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Ambient glow */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Other projects */}
          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group"
              >
                <div className="grid md:grid-cols-[1fr,1.2fr] gap-0 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-card/80 transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.tagline}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 md:to-card/80" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="text-xs backdrop-blur-sm bg-background/70">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Problem/Solution mini */}
                    <div className="space-y-2 mb-4">
                      <p className="text-sm">
                        <span className="text-primary font-medium">Problem:</span>{" "}
                        <span className="text-muted-foreground">{project.problem}</span>
                      </p>
                      <p className="text-sm">
                        <span className="text-accent font-medium">Solution:</span>{" "}
                        <span className="text-muted-foreground">{project.solution}</span>
                      </p>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[11px] font-medium rounded border border-border/50 text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      View Live Product
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
