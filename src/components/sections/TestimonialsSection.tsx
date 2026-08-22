import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote, Info } from "lucide-react"

const testimonials = [
  { role: "E-commerce Founder", location: "Example", text: "Built our store from scratch and the results were amazing. The site is fast, mobile-friendly, and easy for our team to manage." },
  { role: "Startup Founder", location: "Example", text: "Understood our vision and delivered a modern, SEO-optimized website that ranks well on Google." },
  { role: "Small Business Owner", location: "Example", text: "Our online store now generates sales 24/7, with a clean checkout and easy payment integration." },
  { role: "SaaS Founder", location: "Example", text: "From concept to deployment, delivered beyond expectations, with React and Node.js used to launch on time." },
]

const highlights = [
  { value: "4+", label: "Years Building" },
  { value: "React / Node", label: "Core Stack" },
  { value: "Full-Stack", label: "Product Scope" },
  { value: "Remote-Ready", label: "Availability" },
]

const TestimonialsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 md:py-32 relative"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            Working Together
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 sm:mb-6 max-w-3xl"
          >
            What working with me{" "}
            <span className="text-muted-foreground">looks like.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="flex items-start gap-2.5 mb-10 sm:mb-16 rounded-xl border border-border/50 bg-card/40 px-4 py-3 max-w-2xl"
          >
            <Info className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              The quotes below are illustrative examples of the kind of feedback I aim to earn &mdash; not from named clients yet. Real testimonials will replace these as projects launch.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16 p-4 sm:p-6 md:p-8 rounded-xl border border-border/50 bg-card/50"
          >
            {highlights.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-primary">{m.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{m.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.role}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-4 sm:p-6 md:p-8 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 transition-all duration-300"
              >
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/20 mb-3 sm:mb-4" aria-hidden="true" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold font-display text-xs sm:text-sm">{t.role}</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">{t.location} testimonial</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
