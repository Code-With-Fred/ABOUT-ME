import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { ArrowUpRight, ArrowRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Helmet } from "react-helmet-async"
import BrowserFrame from "@/components/BrowserFrame"

import imgConfidantsZone from "@/assets/project-confidantszone.jpg"
import imgKelviqTech from "@/assets/project-kelviqtech.jpg"
import imgCaptainBlack from "@/assets/project-captainblack.jpg"
import imgStorevia from "@/assets/project-storevia.jpg"
import imgChaDecor from "@/assets/project-chadecor.jpg"
import imgDcMedtech from "@/assets/project-dcmedtech.jpg"
import imgEcommerce from "@/assets/project-ecommerce.jpg"
import imgHealthcare from "@/assets/project-healtrackcare.jpg"
import imgNgo from "@/assets/project-ngo.jpg"
import imgRealEstate from "@/assets/project-realestate.jpg"
import imgTradePro from "@/assets/project-tradepro.jpg"

// Real, shipped projects. Keep every claim here verifiable — no invented metrics.
const realProjects = [
  {
    title: "ConfidantsZone",
    tag: "Mental Wellness Platform",
    summary: "Connects people with verified therapists and support specialists — anonymous venting, professional matching, secure sessions.",
    stack: ["React", "TypeScript", "Supabase"],
    image: imgConfidantsZone,
    liveUrl: null as string | null,
    frameLabel: "ConfidantsZone — live preview",
    status: "live" as "live" | "in-progress",
  },
  {
    title: "KelviqTech Enterprise",
    tag: "Security Technology · Nigeria",
    summary: "Marketing and product site for a security technology company — CCTV, smart locks, video doorbells, full installation.",
    stack: ["Next.js", "TypeScript"],
    image: imgKelviqTech,
    liveUrl: "https://www.kelviqtechenterprise.com/" as string | null,
    frameLabel: "kelviqtechenterprise.com",
    status: "live" as "live" | "in-progress",
  },
  {
    title: "Captain Black Global Services",
    tag: "Luxury Catering · Lagos",
    summary: "Marketing site for a premium catering company serving weddings, corporate events, and private dining.",
    stack: ["Next.js", "TypeScript"],
    image: imgCaptainBlack,
    liveUrl: "https://www.captainblackglobalservice.com/" as string | null,
    frameLabel: "captainblackglobalservice.com",
    status: "live" as "live" | "in-progress",
  },
  {
    title: "ChaDecor",
    tag: "Event Decoration & Planning",
    summary: "Marketing site for an event decoration and planning company handling weddings, birthdays, and corporate events.",
    stack: ["Next.js", "TypeScript"],
    image: imgChaDecor,
    liveUrl: "https://cha-decor.vercel.app/" as string | null,
    frameLabel: "cha-decor.vercel.app",
    status: "live" as "live" | "in-progress",
  },
  {
    title: "DC Medtech/Graphix",
    tag: "Creative Design Studio",
    summary: "Portfolio for a graphic designer and video editor — branding, social media graphics, and motion content.",
    stack: ["React", "TypeScript"],
    image: imgDcMedtech,
    liveUrl: "https://dcmedtech-graphix.vercel.app/" as string | null,
    frameLabel: "dcmedtech-graphix.vercel.app",
    status: "live" as "live" | "in-progress",
  },
  {
    title: "Storvia",
    tag: "Campus Commerce Platform",
    summary: "Lets campus sellers launch a branded storefront, list products, and receive orders in minutes — no coding required.",
    stack: ["React", "TypeScript", "Supabase"],
    image: imgStorevia,
    liveUrl: null as string | null,
    frameLabel: "storevia.name.ng",
    status: "in-progress" as "live" | "in-progress",
  },
]

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

interface ProjectsSectionProps {
  headingLevel?: "h1" | "h2"
  /** "compact" (Home): top 3 real projects + a link to the full page, no concept grid. "full" (Projects page): everything. */
  variant?: "full" | "compact"
}

const ProjectsSection = ({ headingLevel = "h2", variant = "full" }: ProjectsSectionProps) => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const Heading = motion[headingLevel]
  const isCompact = variant === "compact"
  const shownProjects = isCompact ? realProjects.slice(0, 3) : realProjects

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects by Eze Favour",
    "itemListElement": realProjects.map((p, i) => ({
      "@type": "CreativeWork",
      "position": i + 1,
      "name": p.title,
      "description": p.summary,
      ...(p.liveUrl ? { "url": p.liveUrl } : {}),
      "keywords": p.stack.join(", "),
    })),
  }

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 relative"
      aria-labelledby="projects-heading"
    >
      {!isCompact && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(projectsSchema)}</script>
        </Helmet>
      )}

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
          <Heading
            id="projects-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 sm:mb-6 max-w-3xl"
          >
            Products I build.{" "}
            <span className="text-muted-foreground">Problems I solve.</span>
          </Heading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-2xl mb-10 sm:mb-16 text-base sm:text-lg"
          >
            Every project is approached as a product, with user experience, business logic, and scalability at the core.
          </motion.p>

          {/* Real projects — grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {shownProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.07, duration: 0.6 }}
                className="rounded-xl border border-border/50 bg-card/30 overflow-hidden flex flex-col"
              >
                <div className="p-3 sm:p-4 pb-0">
                  <BrowserFrame label={project.frameLabel}>
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.tag} screenshot`}
                      className="w-full h-full object-cover object-top aspect-[16/10]"
                      loading="lazy"
                      width={800}
                      height={500}
                    />
                  </BrowserFrame>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
                    <p className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-primary">
                      {project.tag}
                    </p>
                    {project.status === "in-progress" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                        In progress
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-border/50 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="w-full group">
                        Visit Live Site
                        <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Link to="/contact">
                      <Button size="sm" variant="outline" className="w-full">
                        Discuss a similar build
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {isCompact ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8 sm:mt-10 text-center"
            >
              <Button asChild size="lg" variant="outline" className="group">
                <Link to="/projects">
                  View All Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ) : (
            <>
              {/* More concepts grid */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl font-bold font-display mt-12 sm:mt-16 mb-4"
              >
                More concept builds
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.22 }}
                className="flex items-start gap-2.5 mb-6 sm:mb-8 rounded-xl border border-border/50 bg-card/40 px-4 py-3 max-w-2xl"
              >
                <Info className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  The builds below are example concepts I designed and built to demonstrate range beyond the real projects above &mdash; not client deliveries.
                </p>
              </motion.div>
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
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-medium border border-border/50 bg-background/70 backdrop-blur-sm text-muted-foreground">
                        Example Concept
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
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
