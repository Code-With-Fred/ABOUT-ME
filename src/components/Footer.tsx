import { motion } from "framer-motion"
import { Heart, ArrowUp, Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Code-With-Fred",
      label: "Follow on GitHub"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/favour-chimereze-eze-37b1b235a",
      label: "Connect on LinkedIn"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/chimereze_eze",
      label: "Follow on Twitter"
    },
  ]

  return (
    <footer 
      className="py-12 sm:py-16 border-t border-border/50 bg-muted/20"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Scroll to Top Button */}
          <div className="text-center mb-8 sm:mb-12">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full shadow-soft hover:shadow-hover transition-smooth"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gradient mb-4">
                Code-With-Fred
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Professional <strong>web designer</strong> and <strong>full-stack developer</strong> creating 
                modern, responsive websites for businesses in Nigeria and worldwide.
              </p>
              {/* Social Links */}
              <div className="flex gap-3" role="list" aria-label="Social media links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                    aria-label={social.label}
                    role="listitem"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              aria-label="Quick links"
            >
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-2.5" role="list">
                {quickLinks.map((link) => (
                  <li key={link.href} role="listitem">
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Services</h3>
              <ul className="space-y-2.5 text-muted-foreground text-sm" role="list">
                <li role="listitem">Web Design</li>
                <li role="listitem">Full Stack Development</li>
                <li role="listitem">E-Commerce Solutions</li>
                <li role="listitem">SEO Optimization</li>
                <li role="listitem">Technical Writing</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.address
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="not-italic"
            >
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Contact</h3>
              <ul className="space-y-3 text-sm" role="list">
                <li className="flex items-start gap-3 text-muted-foreground" role="listitem">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Port Harcourt, Rivers State, Nigeria</strong>
                  </span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground" role="listitem">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="mailto:ezefavourchimereze@gmail.com" 
                    className="hover:text-foreground transition-colors break-all"
                  >
                    ezefavourchimereze@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground" role="listitem">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="tel:+2347041648121" 
                    className="hover:text-foreground transition-colors"
                  >
                    +234 704 164 8121
                  </a>
                </li>
              </ul>
            </motion.address>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" aria-hidden="true" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-muted-foreground text-center sm:text-left"
            >
              <span>© {currentYear} Built with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" aria-hidden="true" />
              <span>by <strong>Eze Favour</strong></span>
            </motion.p>

            {/* Tech Stack */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-xs sm:text-sm text-center"
            >
              React • TypeScript • Tailwind CSS • Framer Motion
            </motion.p>
          </div>

          {/* SEO Location Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-muted-foreground/60 mt-6"
          >
            Best Web Designer & Full Stack Developer in Port Harcourt, Nigeria
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer