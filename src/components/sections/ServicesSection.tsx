import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  Globe, 
  Code2, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  Palette,
  Rocket,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: Globe,
      title: "Custom Website Design",
      description: "Beautiful, responsive websites tailored to your brand identity and business goals. From landing pages to full corporate websites.",
      features: ["Responsive Design", "Brand Identity", "Modern UI/UX"]
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "End-to-end web application development using React, Node.js, TypeScript, and modern databases for scalable solutions.",
      features: ["React/Next.js", "Node.js/Express", "Database Design"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online store development with payment integration, inventory management, and seamless shopping experiences.",
      features: ["Payment Integration", "Cart System", "Order Management"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Websites that look and perform perfectly on all devices. Optimized for touch interactions and fast mobile loading.",
      features: ["Touch Optimized", "Fast Loading", "Cross-Device"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Technical SEO implementation to improve your search rankings and drive organic traffic to your website.",
      features: ["On-Page SEO", "Schema Markup", "Performance"]
    },
    {
      icon: Palette,
      title: "Landing Page Design",
      description: "High-converting landing pages that capture leads and drive sales. Optimized for performance and conversions.",
      features: ["Lead Generation", "A/B Testing", "Fast Loading"]
    },
    {
      icon: Rocket,
      title: "Website Redesign",
      description: "Transform your outdated website into a modern, high-performing digital presence that converts visitors into customers.",
      features: ["Modern Refresh", "Better UX", "Improved Speed"]
    },
 
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-heading"
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
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 
              id="services-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Web Design & Development <span className="text-primary">Services</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" aria-hidden="true" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Professional <strong>web design and development services</strong> in <strong>Port Harcourt, Nigeria</strong>. 
              From custom websites to e-commerce solutions, I deliver high-quality digital experiences.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full transition-smooth hover:shadow-hover">
                  <CardContent className="p-4 sm:p-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon 
                        className="h-6 w-6 text-primary" 
                        aria-hidden="true" 
                      />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-1.5 sm:gap-2" aria-label={`${service.title} features`}>
                      {service.features.map((feature) => (
                        <li 
                          key={feature}
                          className="text-[10px] sm:text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16 text-center">
            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20 max-w-3xl mx-auto">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                Every business is unique. Let's discuss your specific requirements and create 
                a tailored solution that fits your budget and goals.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth text-sm sm:text-base"
              >
                Get Free Consultation
              </Link>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
