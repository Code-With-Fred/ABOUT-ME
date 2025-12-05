import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

 // ...existing code...
const handleDownloadResume = () => {
  window.open("/fred-resume.pdf", "_blank");
};
// ...existing code...

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-16 sm:pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gradient"
          >
            Eze Favour
          </motion.h1>

          {/* Typing Animation */}
          <div 
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 h-12 sm:h-16 md:h-20"
            aria-live="polite"
            aria-label="Professional roles"
          >
            <TypeAnimation
              sequence={[
                "Web Designer",
                2000,
                "Full-Stack Developer",
                2000,
                "Technical Writer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Professional <strong>web designer</strong> and <strong>full-stack developer</strong> based in{" "}
            <strong>Port Harcourt, Nigeria</strong>. I craft beautiful, performant web applications 
            and write technical content that helps businesses grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group transition-smooth shadow-soft hover:shadow-hover w-full sm:w-auto"
              aria-label="View my projects"
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              className="group transition-smooth shadow-soft hover:shadow-hover w-full sm:w-auto"
              aria-label="Download my resume"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="cursor-pointer"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection