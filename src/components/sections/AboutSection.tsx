import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Layers, Zap, Target, TrendingUp } from "lucide-react"

const strengths = [
  {
    icon: Layers,
    title: "End-to-End Product Building",
    description: "From database architecture to pixel-perfect UI — I own the entire stack and deliver complete, production-ready products.",
  },
  {
    icon: Zap,
    title: "Performance & Scalability",
    description: "Every system I build is optimized for speed and designed to handle growth — from 10 users to 10,000.",
  },
  {
    icon: Target,
    title: "Business-Driven Development",
    description: "I don't just write code. I build solutions that drive revenue, reduce friction, and create real business value.",
  },
  {
    icon: TrendingUp,
    title: "Modern Tech, Real Results",
    description: "React, Node.js, TypeScript, Supabase — I use the best modern tools to deliver products that compete with the best.",
  },
]

const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            About
          </motion.p>

          {/* Big positioning statement */}
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight mb-8 max-w-4xl"
          >
            I don't just build websites.{" "}
            <span className="text-muted-foreground">
              I engineer digital products that power businesses, automate workflows, and generate revenue.
            </span>
          </motion.h2>

          {/* Two-column narrative */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed"
            >
              I'm <strong className="text-foreground">Eze Favour</strong>, a full-stack product engineer based in 
              <strong className="text-foreground"> Port Harcourt, Nigeria</strong>. With 4+ years building for the web, 
              I specialize in creating SaaS platforms, multi-vendor marketplaces, booking systems, admin dashboards, 
              and complex web applications that businesses actually depend on.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              My approach is product-first — I think about user experience, business logic, monetization, 
              and scalability before writing a single line of code. Whether you're a startup founder in 
              <strong className="text-foreground"> Lagos</strong>, a business owner in <strong className="text-foreground">Abuja</strong>, 
              or a company anywhere in the world, I bring the same level of strategic, premium execution to every project.
            </motion.p>
          </div>

          {/* Strength cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 hover:bg-card transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display text-base mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
