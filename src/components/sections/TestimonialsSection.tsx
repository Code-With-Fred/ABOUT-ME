import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote } from "lucide-react"

const testimonials = [
  { name: "Adaeze Nwosu", role: "CEO, Nwosu Logistics", location: "Lagos", text: "Fred built our company website from scratch and the results were amazing. The site is fast, mobile-friendly, and has already helped us get more customers." },
  { name: "Chukwuemeka Okonkwo", role: "Founder, TechHub PH", location: "Port Harcourt", text: "Working with Fred was a fantastic experience. He understood our vision and delivered a modern, SEO-optimized website that ranks well on Google." },
  { name: "Blessing Eze", role: "Owner, Bless Fashion Store", location: "Abuja", text: "Our e-commerce website is now generating sales 24/7. Fred created a beautiful online store with easy payment integration. Very professional." },
  { name: "Emmanuel Chibuike", role: "Startup Founder", location: "Port Harcourt", text: "From concept to deployment, Fred delivered beyond expectations. His expertise in React and Node.js helped us launch our SaaS product on time." },
]

const metrics = [
  { value: "50+", label: "Projects Shipped" },
  { value: "40+", label: "Happy Clients" },
  { value: "4+", label: "Years Experience" },
  { value: "100%", label: "Delivery Rate" },
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
          className="max-w-6xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
          >
            Client Proof
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-10 sm:mb-16 max-w-3xl"
          >
            Trusted by founders{" "}
            <span className="text-muted-foreground">and businesses across Nigeria.</span>
          </motion.h2>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16 p-4 sm:p-6 md:p-8 rounded-xl border border-border/50 bg-card/50"
          >
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-primary">{m.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{m.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
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
                  <p className="font-semibold font-display text-xs sm:text-sm">{t.name}</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">{t.role} · {t.location}</p>
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
