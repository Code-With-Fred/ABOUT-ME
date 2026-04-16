import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const handleDownloadResume = () => {
    window.open("/fred-resume.pdf", "_blank")
  }

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 sm:pt-0"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent/8 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-start mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">Available for new projects</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-display leading-[0.95] tracking-tight mb-5 sm:mb-6 text-center md:text-left"
          >
            <span className="block">I build digital</span>
            <span className="block">products that</span>
            <span className="block text-gradient">scale & convert.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 sm:mb-10 leading-relaxed text-center md:text-left mx-auto md:mx-0"
          >
            Full-stack product engineer crafting modern{" "}
            <strong className="text-foreground">SaaS platforms</strong>,{" "}
            <strong className="text-foreground">marketplaces</strong>, and{" "}
            <strong className="text-foreground">business-ready web systems</strong>{" "}
            that look premium and solve real problems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <Link to="/projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 glow-sm hover:glow-md transition-all duration-300"
                aria-label="View my projects"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label="Work with me"
              >
                <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                Work With Me
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="lg"
              onClick={handleDownloadResume}
              className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 text-muted-foreground hover:text-foreground transition-all duration-300"
              aria-label="Download my resume"
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Resume
            </Button>
          </motion.div>

          {/* Floating tech indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 sm:mt-16 md:mt-24 flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start"
          >
            {["React", "TypeScript", "Node.js", "Next.js", "Supabase", "Tailwind CSS"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium rounded-md border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
