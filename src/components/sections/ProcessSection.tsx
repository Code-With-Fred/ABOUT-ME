import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Search, Lightbulb, Palette, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "I start by deeply understanding your business, goals, users, and competitive landscape. No assumptions — just real insights.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Product Strategy",
    description: "Together, we define the product scope, features, data models, and user flows that align with your business objectives.",
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Direction",
    description: "I design interfaces that feel premium, intuitive, and conversion-focused — with clear information hierarchy and purposeful interactions.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Development",
    description: "Clean, modular, production-ready code using React, Node.js, TypeScript, and modern tooling. Built to scale from day one.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Launch & Optimize",
    description: "Rigorous testing, performance tuning, and deployment. Post-launch, I monitor and iterate to maximize product impact.",
  },
]

const ProcessSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="process"
      className="py-24 sm:py-32 relative"
      aria-labelledby="process-heading"
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
            Process
          </motion.p>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-16 max-w-3xl"
          >
            How I turn ideas{" "}
            <span className="text-muted-foreground">into production-ready products.</span>
          </motion.h2>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group relative"
              >
                <div className="flex gap-6 sm:gap-8 py-8 border-b border-border/30 hover:border-primary/20 transition-colors">
                  {/* Number + line */}
                  <div className="flex flex-col items-center gap-2 pt-1">
                    <span className="text-xs font-mono text-primary font-bold">{step.number}</span>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-border/30" aria-hidden="true" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <step.icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-display group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">
                      {step.description}
                    </p>
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

export default ProcessSection
