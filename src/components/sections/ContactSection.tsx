import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, ArrowRight, Mail, MapPin, Github, Linkedin, Twitter, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("https://ajqmjvrfjiuauorcfhtw.supabase.co/functions/v1/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Failed to send message")
      }
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon!" })
      setFormData({ name: "", email: "", message: "" })
    } catch (err: any) {
      toast({ title: "Error", description: err.message || "Something went wrong.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socials = [
    { icon: Github, url: "https://github.com/Code-With-Fred", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/eze-favour-chimereze-807954398/", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/codewithfreddev", label: "Twitter" },
  ]

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-32 relative surface-1"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Let's Build</p>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-4 sm:mb-6 max-w-3xl mx-auto leading-tight"
            >
              Ready to build your next{" "}
              <span className="text-gradient">digital product?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Whether it's a SaaS platform, marketplace, or custom web app — let's talk about bringing your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-6 sm:gap-8 lg:gap-12">
            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              <a
                href="https://wa.me/2347041648121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50 hover:border-accent/30 hover:bg-card transition-all duration-300 group"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold font-display text-sm">WhatsApp</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Quick response — usually within hours</p>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>

              <a
                href="mailto:ezefavourchimereze@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 group"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold font-display text-sm">Email</p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">ezefavourchimereze@gmail.com</p>
                </div>
                <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50">
                <div className="p-2.5 sm:p-3 rounded-lg bg-secondary text-muted-foreground flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="font-semibold font-display text-sm">Location</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Port Harcourt, Nigeria · Serving globally</p>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 sm:p-3 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-4 sm:p-6 md:p-8 rounded-xl border border-border/50 bg-card/50"
            >
              <h3 className="text-base sm:text-lg font-bold font-display mb-4 sm:mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" aria-label="Contact form">
                <div>
                  <Label htmlFor="name" className="text-xs sm:text-sm">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="mt-1.5 bg-background/50 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className="mt-1.5 bg-background/50 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-xs sm:text-sm">Tell me about your project</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What are you building? What's your timeline?"
                    rows={4}
                    required
                    className="mt-1.5 resize-none bg-background/50 text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group glow-sm hover:glow-md transition-all"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
