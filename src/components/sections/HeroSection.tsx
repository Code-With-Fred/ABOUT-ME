import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import BrowserFrame from "@/components/BrowserFrame"
import imgConfidantsZone from "@/assets/project-confidantszone.jpg"
import imgKelviqTech from "@/assets/project-kelviqtech.jpg"

const proofPoints = ["4+ Years Building", "Full-Stack Delivery", "Remote-Ready · Nigeria"]

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Open the user's uploaded resume PDF in `public/`.
    window.open("/my%20resume.pdf", "_blank")
  }

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
      aria-labelledby="hero-heading"
    >
      {/* Layered background: base + spotlight glow + fine grid + edge fades */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-100 bg-background" />
        <div className="absolute inset-0 spotlight-bg" />
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-12 lg:gap-8 xl:gap-16 items-center">
          {/* Left: copy */}
          <div className="w-full">
            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start mb-5 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-3 py-1.5 text-[11px] sm:text-xs font-medium text-muted-foreground">
                <span className="status-dot" aria-hidden="true" />
                Available for new projects
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight sm:leading-[1.02] tracking-tight mb-5 sm:mb-6 text-center lg:text-left break-words"
            >
              <span className="block">I build web products</span>
              <span className="block">that win customers</span>
              <span className="block text-gradient">and grow revenue.</span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed text-center lg:text-left mx-auto lg:mx-0"
            >
              I partner with founders and product teams to design and ship elegant, reliable web applications focused on clarity, performance, and measurable growth.
            </motion.p>

            {/* CTAs: one primary, one secondary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start w-full max-w-md sm:max-w-none mx-auto lg:mx-0"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto h-12 sm:h-12 text-sm sm:text-base px-6 sm:px-8 glow-sm hover:glow-md transition-all duration-300"
                  aria-label="Start a project — go to contact form"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full sm:w-auto h-12 sm:h-12 text-sm sm:text-base px-6 sm:px-8 border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  aria-label="View my projects"
                >
                  See My Work
                </Button>
              </Link>
              <button
                onClick={handleDownloadResume}
                className="group inline-flex items-center justify-center gap-2 h-12 sm:h-12 text-sm sm:text-base px-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mx-auto lg:mx-0"
                aria-label="Download my resume"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Resume
              </button>
            </motion.div>

            {/* Proof strip — honest, verifiable claims only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start text-xs sm:text-sm text-muted-foreground"
            >
              {proofPoints.map((point, i) => (
                <span key={point} className="flex items-center gap-2">
                  {i > 0 && <span className="hidden sm:inline h-1 w-1 rounded-full bg-border" aria-hidden="true" />}
                  {point}
                </span>
              ))}
            </motion.div>

            {/* Floating tech indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-3 justify-center lg:justify-start"
            >
              {["React", "TypeScript", "Node.js", "Next.js", "Supabase", "Tailwind CSS"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.06 }}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-md border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: real-work proof — two live projects, not abstract shapes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 hidden sm:block"
            aria-hidden="true"
          >
            <div className="relative aspect-[4/5] sm:aspect-[9/10]">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-[78%] shadow-2xl"
              >
                <BrowserFrame label="kelviqtechenterprise.com">
                  <img
                    src={imgKelviqTech}
                    alt="KelviqTech Enterprise — live project screenshot"
                    className="w-full h-auto aspect-[16/10] object-cover object-top"
                    width={800}
                    height={500}
                  />
                </BrowserFrame>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 right-0 w-[68%] shadow-2xl"
              >
                <BrowserFrame label="ConfidantsZone — live preview">
                  <img
                    src={imgConfidantsZone}
                    alt="ConfidantsZone — live project screenshot"
                    className="w-full h-auto aspect-[16/10] object-cover object-top"
                    width={800}
                    height={500}
                  />
                </BrowserFrame>
              </motion.div>

              {/* Ambient glow behind the composition */}
              <div className="absolute inset-0 -z-10 bg-primary/10 rounded-full blur-[100px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
