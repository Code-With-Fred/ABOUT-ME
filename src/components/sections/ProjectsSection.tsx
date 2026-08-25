import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowUpRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Helmet } from "react-helmet-async"
import BrowserFrame from "@/components/BrowserFrame"

import imgConfidantsZone from "@/assets/project-confidantszone.jpg"
import imgKelviqTech from "@/assets/project-kelviqtech.jpg"
import imgCaptainBlack from "@/assets/project-captainblack.jpg"
import imgStorevia from "@/assets/project-storevia.jpg"
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
    summary: "A platform connecting people with verified therapists, counselors, and support specialists — with anonymous venting, professional matching, and secure sessions.",
    features: ["Anonymous Venting", "Verified Professional Matching", "Secure Video & Audio Sessions", "Paystack Payments"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    problem: "People seeking mental health support often face stigma, high costs, and no easy way to find a professional who fits their specific situation.",
    approach: "Built anonymous venting as a low-friction entry point, paired with a verified-professional search and matching system, encrypted sessions, and integrated payments.",
    demonstrates: "End-to-end product ownership: auth, real-time messaging, video/audio sessions, admin moderation tooling, and a full booking-and-payments flow.",
    image: imgConfidantsZone,
    liveUrl: null as string | null,
    frameLabel: "ConfidantsZone — live preview",
    status: "live" as "live" | "in-progress",
  },
  {
    title: "KelviqTech Enterprise",
    tag: "Security Technology · Nigeria",
    summary: "A marketing and product site for a Nigerian security technology company — CCTV, smart locks, video doorbells, and full security system installation.",
    features: ["Product Catalog", "Service Pages", "WhatsApp Lead Capture", "SEO-Optimized"],
    stack: ["Next.js", "TypeScript"],
    problem: "The business had no online presence, making it hard for customers to discover their products or request a quote.",
    approach: "Designed and built a fast, SEO-ready marketing site with a full product/service catalog and a direct WhatsApp path from every page to convert visitors into leads.",
    demonstrates: "Business-focused web design: clear positioning, conversion paths, and technical SEO for a local service business.",
    image: imgKelviqTech,
    liveUrl: "https://www.kelviqtechenterprise.com/" as string | null,
    frameLabel: "kelviqtechenterprise.com",
    status: "live" as "live" | "in-progress",
  },
  {
    title: "Captain Black Global Services",
    tag: "Luxury Catering · Lagos",
    summary: "A marketing site for a premium catering company serving weddings, corporate events, and private dining across Lagos and internationally.",
    features: ["Event & Wedding Catering Pages", "Photo & Video Gallery", "Quote Request Flow", "WhatsApp Lead Capture"],
    stack: ["Next.js", "TypeScript"],
    problem: "A high-end catering brand needed a web presence that matched the quality of the experience it sells — most competitors relied on Instagram alone.",
    approach: "Built an editorial, photography-led site with a clear quote-request path and gallery to let the work speak for itself.",
    demonstrates: "Brand-first design: typography, imagery, and pacing carrying the premium positioning, not just the functional requirements.",
    image: imgCaptainBlack,
    liveUrl: "https://www.captainblackglobalservice.com/" as string | null,
    frameLabel: "captainblackglobalservice.com",
    status: "live" as "live" | "in-progress",
  },
  {
    title: "Storvia",
    tag: "Campus Commerce Platform",
    summary: "A storefront platform letting campus sellers launch a branded store, list products, and receive orders in minutes — no coding required.",
    features: ["Instant Storefront Creation", "Product Listings", "Order Requests", "Campus Marketplace"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    problem: "Student and campus sellers had no low-friction way to get a branded storefront online without technical setup or fees.",
    approach: "Built a self-serve storefront builder with instant store creation, a shared marketplace for discovery, and a simple order-request flow.",
    demonstrates: "Multi-tenant product architecture: per-seller storefronts, a shared marketplace layer, and account/auth handling.",
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
}

const ProjectsSection = ({ headingLevel = "h2" }: ProjectsSectionProps) => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const Heading = motion[headingLevel]

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

          {/* Real projects */}
          <div className="space-y-6 sm:space-y-8">
            {realProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden"
              >
                <div className="p-4 sm:p-6 md:p-8 pb-0">
                  <BrowserFrame label={project.frameLabel}>
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.tag} screenshot`}
                      className="w-full h-full object-cover object-top aspect-[16/10] sm:aspect-[16/9]"
                      loading="lazy"
                      width={1600}
                      height={900}
                    />
                  </BrowserFrame>
                </div>

                <div className="p-5 sm:p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-2 sm:mb-3">
                    <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary">
                      {project.tag}
                    </p>
                    {project.status === "in-progress" && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-amber-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                        Backend maintenance in progress
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3 sm:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-muted-foreground mb-5 sm:mb-6 max-w-2xl leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-5 sm:mb-6">
                    {project.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-background/50 border border-border/30 min-w-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        <span className="text-xs sm:text-sm font-medium truncate">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {project.stack.map((t) => (
                      <span key={t} className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full border border-border/50 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl bg-background/50 border border-border/30">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5 sm:mb-2">Problem</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5 sm:mb-2">Approach</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{project.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary mb-1.5 sm:mb-2">Demonstrates</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{project.demonstrates}</p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-[1fr,1fr] max-w-xl">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto group glow-sm hover:glow-md transition-all">
                          Visit Live Site
                          <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button>
                      </a>
                    )}
                    <a href="/contact" className="w-full sm:w-auto">
                      <Button variant={project.liveUrl ? "outline" : "default"} size="lg" className="w-full sm:w-auto">
                        Discuss a similar build
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
