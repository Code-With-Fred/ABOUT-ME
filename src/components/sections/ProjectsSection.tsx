import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Import project images
import imgTradePro from "@/assets/project-tradepro.jpg"
import imgRealEstate from "@/assets/project-realestate.jpg"
import imgNGO from "@/assets/project-ngo.jpg"
import imgEcommerce from "@/assets/project-ecommerce.jpg"

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "TradePro",
      description: "A professional trading platform frontend built with React and TypeScript. TradePro is a responsive, modern trading website featuring real-time market data, user-friendly interface, and seamless trading experience.",
      image: imgTradePro,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Design"],
      demoUrl: "https://trade-pro-wine.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/TradePro",
      type: "development",
    },
    {
      title: "Real Estate Website",
      description: "A comprehensive real estate website for buying and selling properties in Nigeria. Features property listings, search functionality, filtering, and seamless user experience for real estate transactions.",
      image: imgRealEstate,
      technologies: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://wisper-prime-nigeria.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/wisper-prime-nigeria.git",
      type: "development",
    },
    {
      title: "NGO Website - Thrive Africa",
      description: "A nonprofit organization website built to reach individuals in need of healthcare support. Features donation systems, volunteer sign-ups, and mission-driven content optimized for accessibility.",
      image: imgNGO,
      technologies: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Web Design"],
      demoUrl: "https://thrive-africa-health-initiative.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/health.git",
      type: "development",
    },
    {
      title: "Clothing E-Commerce",
      description: "A complete e-commerce website for a clothing brand in Nigeria. Features product catalog, shopping cart, payment on delivery, and order management with responsive design optimized for mobile shopping.",
      image: imgEcommerce,
      technologies: ["React", "TypeScript", "API Integration", "Tailwind CSS", "E-Commerce"],
      demoUrl: "https://clothing-brand-website-gamma.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/Clothing-brand-website.git",
      type: "development",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <h2 
              id="projects-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Featured <span className="text-primary">Web Development</span> Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" aria-hidden="true" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
              Showcase of my <strong>web development</strong> projects built with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>modern web technologies</strong>. 
              Each project demonstrates professional web design and full-stack development expertise.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div 
            className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
            role="list"
            aria-label="Project portfolio"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
                role="listitem"
              >
                <Card className="overflow-hidden h-full transition-smooth hover:shadow-hover">
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-muted aspect-video">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Web Development Project by Eze Favour`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                      <Badge variant="default" className="text-xs bg-primary/90 backdrop-blur-sm">
                        Development
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    {/* Title */}
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[10px] sm:text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-[10px] sm:text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="flex-1"
                      >
                        <Button size="sm" variant="default" className="w-full text-xs sm:text-sm">
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" aria-hidden="true" />
                          Live Demo
                        </Button>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="flex-1"
                      >
                        <Button size="sm" variant="outline" className="w-full text-xs sm:text-sm">
                          <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" aria-hidden="true" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* View More CTA */}
          <motion.div variants={itemVariants} className="text-center mt-10 sm:mt-12">
            <a 
              href="https://github.com/Code-With-Fred" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="outline" size="lg" className="group">
                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                View More on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection