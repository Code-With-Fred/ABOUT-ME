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
      description: "For now a frontend project on a trading platform where users can trade with ease.",
      image: img1,
      technologies: ["React", "Typescript", "Tailwind", "Framer"],
      demoUrl: "https://trade-pro-wine.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/TradePro",
      type: "development",
    },
    {
      title: "Real Estate Website",
      description: "This is a real estate website where users can buy and sale there houses",
      image: "/api/placeholder/600/400",
      technologies: ["Typescript", "MongoDB", "tailwind", "framer", "React"],
      demoUrl: "https://wisper-prime-nigeria.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/wisper-prime-nigeria.git",
      type: "development",
    },
    {
      title: "N.G.O Website",
      description: "A comprehensive design system and component library with full TypeScript support, Storybook documentation, and automated testing.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "Rollup"],
      demoUrl: "https://thrive-africa-health-initiative.vercel.app/",
      githubUrl: "https://github.com/Code-With-Fred/health.git",
      type: "development",
    },
    {
      title: "API Documentation Guide",
      description: "Complete guide to building and documenting REST APIs, covering best practices, OpenAPI specifications, and developer experience.",
      image: "/api/placeholder/600/400",
      technologies: ["OpenAPI", "Postman", "Swagger", "Markdown"],
      demoUrl: "#",
      githubUrl: "#",
      type: "writing",
    },
    {
      title: "Machine Learning Blog Series",
      description: "10-part series explaining machine learning concepts for web developers, with practical examples and code implementations.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "TensorFlow", "Jupyter", "Medium"],
      demoUrl: "#",
      githubUrl: "#",
      type: "writing",
    },
    {
      title: "Developer Onboarding Docs",
      description: "Comprehensive onboarding documentation for a fast-growing startup, reducing new developer setup time from days to hours.",
      image: "/api/placeholder/600/400",
      technologies: ["GitBook", "Docker", "CI/CD", "Documentation"],
      demoUrl: "#",
      githubUrl: "#",
      type: "writing",
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development projects and technical writing work, 
              highlighting both code and communication skills.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden h-full transition-smooth hover:shadow-hover">
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-muted aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      {project.type === "development" ? (
                        <Github className="h-12 w-12 text-primary/50" />
                      ) : (
                        <FileText className="h-12 w-12 text-primary/50" />
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.type === "development" ? "default" : "secondary"}>
                        {project.type === "development" ? "Development" : "Writing"}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    {/* <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div> */}
                    {/* Actions */}
<div className="flex gap-2">
  <a
    href={project.demoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button size="sm" variant="outline" className="w-full">
      <ExternalLink className="h-4 w-4 mr-2" />
      View
    </Button>
  </a>
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button size="sm" variant="ghost" className="w-full">
      <Github className="h-4 w-4 mr-2" />
      Code
    </Button>
  </a>
</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection