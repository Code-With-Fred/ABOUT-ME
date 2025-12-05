import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import img1 from "@/assest/Screenshot (55).png"

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "TradePro",
      description: "A professional trading platform frontend built with React and TypeScript. TradePro is a responsive, modern trading website featuring real-time market data, user-friendly interface, and seamless trading experience. Built with best practices in web design and performance optimization.",
      longDescription: "TradePro is a full-featured trading platform frontend developed using React, TypeScript, Tailwind CSS, and Framer Motion. This responsive trading website showcases advanced web design techniques and provides users with an intuitive interface for trading. Perfect example of professional web development for fintech applications.",
      image: img1,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Design"],
      demoUrl: "https://trade-pro-wine.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/TradePro",
      type: "development",
      keywords: "trading platform, React frontend, web design, fintech, responsive website",
    },
    {
      title: "Real Estate Website",
      description: "A comprehensive real estate website for buying and selling properties in Nigeria. Built with React, TypeScript, MongoDB, and Tailwind CSS. Features property listings, search functionality, filtering, and seamless user experience for real estate transactions.",
      longDescription: "Professional real estate website built with React and TypeScript, featuring MongoDB backend integration. This responsive property listing platform showcases modern web development practices with advanced filtering, search capabilities, and user-friendly interface for real estate businesses in Nigeria and Africa.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Framer Motion", "Web Design"],
      demoUrl: "https://wisper-prime-nigeria.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/wisper-prime-nigeria.git",
      type: "development",
      keywords: "real estate website, property listing, Nigeria, responsive design, web development",
    },
    {
      title: "NGO Website - Thrive Africa Health Initiative",
      description: "A nonprofit organization website built to reach individuals in need of healthcare support. This responsive NGO website features donation systems, volunteer sign-ups, and mission-driven content. Built with React, TypeScript, MongoDB, and optimized for accessibility and user engagement.",
      longDescription: "Professional NGO website for Thrive Africa Health Initiative, developed with React, TypeScript, and MongoDB. This responsive website showcases healthcare initiatives and social impact programs. Features include donation processing, volunteer management, and content management system optimized for nonprofit organizations.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Framer Motion", "Web Design"],
      demoUrl: "https://thrive-africa-health-initiative.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/health.git",
      type: "development",
      keywords: "NGO website, nonprofit, health initiative, responsive design, Africa, web development",
    },
    {
      title: "Clothing Brand E-Commerce",
      description: "A complete e-commerce website for a clothing brand in Nigeria. Features product catalog, shopping cart, payment on delivery, and order management. Built with React, TypeScript, and integrated with payment APIs. Responsive design optimized for mobile shopping.",
      longDescription: "Full-featured e-commerce website for clothing retail, built with React and TypeScript. This responsive e-commerce platform includes product management, shopping cart functionality, payment integration, and order tracking. Optimized for fast performance and mobile shopping experience in Nigeria.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "API Integration", "Tailwind CSS", "E-Commerce", "Web Design"],
      demoUrl: "https://clothing-brand-website-gamma.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/Clothing-brand-website.git",
      type: "development",
      keywords: "e-commerce website, clothing brand, shopping cart, payment integration, responsive design",
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
          {/* Section Header - SEO OPTIMIZED */}
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
              From <strong>e-commerce websites</strong> to <strong>real estate platforms</strong>, each project demonstrates professional web design and full-stack development expertise.
            </p>
          </motion.div>

          {/* Hidden SEO Keywords */}
          <div className="hidden text-xs text-muted-foreground">
            <p>Web Development Projects: React developer, TypeScript, Full Stack Development, Responsive Web Design, Web Designer in Nigeria</p>
            <p>Project Categories: E-commerce websites, Real estate website, NGO website, Trading platform, Web applications</p>
            <p>Technologies: React, Node.js, MongoDB, TypeScript, Tailwind CSS, API Integration, Payment Systems</p>
            <p>Services: Website development, Full-stack development, Frontend development, Web design, E-commerce solutions</p>
          </div>

          {/* Projects Grid */}
          <div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      {project.type === "development" ? (
                        <Github className="h-10 sm:h-12 w-10 sm:w-12 text-primary/50" aria-hidden="true" />
                      ) : (
                        <FileText className="h-10 sm:h-12 w-10 sm:w-12 text-primary/50" aria-hidden="true" />
                      )}
                    </div>
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                      <Badge variant={project.type === "development" ? "default" : "secondary"} className="text-xs">
                        {project.type === "development" ? "Development" : "Writing"}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    {/* Title with Keywords */}
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* SEO Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
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
                        <Button size="sm" variant="outline" className="w-full text-xs sm:text-sm">
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" aria-hidden="true" />
                          Live
                        </Button>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="flex-1"
                      >
                        <Button size="sm" variant="ghost" className="w-full text-xs sm:text-sm">
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
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection