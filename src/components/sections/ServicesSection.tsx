import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  Globe, Layers, BarChart3, ShoppingBag, 
  CalendarCheck, Shield, Rocket, MonitorSmartphone 
} from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "SaaS Platforms",
    description: "Multi-tenant SaaS products with user management, billing, dashboards, and scalable architecture.",
  },
  {
    icon: ShoppingBag,
    title: "Marketplaces",
    description: "Multi-vendor e-commerce platforms with seller management, commission systems, and payment integration.",
  },
  {
    icon: BarChart3,
    title: "Admin Dashboards",
    description: "Data-rich management panels with analytics, RBAC, reporting, and real-time monitoring.",
  },
  {
    icon: Globe,
    title: "Business Websites",
    description: "High-converting, SEO-optimized websites that establish credibility and drive leads.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    description: "Appointment scheduling platforms with calendars, notifications, and payment processing.",
  },
  {
    icon: Rocket,
    title: "Startup MVPs",
    description: "Rapid prototyping and MVP development to validate your idea and get to market fast.",
  },
  {
    icon: MonitorSmartphone,
    title: "Custom Web Apps",
    description: "Tailored web applications with complex business logic, integrations, and real-time features.",
  },
  {
    icon: Shield,
    title: "Auth & Payment Systems",
    description: "Secure authentication flows, role-based access control, and payment gateway integration.",
  },
]

const ServicesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="services"
      className="py-24 sm:py-32 relative surface-1"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            What I Build
          </motion.p>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 max-w-3xl"
          >
            Real products for{" "}
            <span className="text-muted-foreground">real businesses.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-2xl mb-16 text-lg"
          >
            I help founders, startups, and businesses turn ideas into scalable digital products. Here's what I can build for you.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="group p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-card transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold font-display mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
