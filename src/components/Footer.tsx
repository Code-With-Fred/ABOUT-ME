import { Link } from "react-router-dom"
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ]

  const socials = [
    { icon: Github, url: "https://github.com/Code-With-Fred", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/eze-favour-chimereze-807954398/", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/chimereze_eze", label: "Twitter" },
  ]

  return (
    <footer className="border-t border-border/30 py-16" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[2fr,1fr,1fr] gap-12 mb-12">
            {/* Brand */}
            <div>
              <span className="text-xl font-bold font-display tracking-tight block mb-4">
                code<span className="text-primary">with</span>fred
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
                Full-stack product engineer building modern SaaS platforms, marketplaces, and business-ready web systems from Port Harcourt, Nigeria.
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <nav aria-label="Footer navigation">
              <h3 className="text-sm font-semibold font-display mb-4">Navigation</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold font-display mb-4">Contact</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:ezefavourchimereze@gmail.com" className="hover:text-foreground transition-colors">
                    ezefavourchimereze@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+2347041648121" className="hover:text-foreground transition-colors">
                    +234 704 164 8121
                  </a>
                </li>
                <li>Port Harcourt, Nigeria</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/30 mb-8" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Eze Favour. Engineered with precision.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Back to top"
            >
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* SEO text */}
          <p className="text-center text-[11px] text-muted-foreground/40 mt-8">
            Full-Stack Product Engineer & Web Developer in Port Harcourt, Lagos, Abuja, Nigeria — SaaS, Marketplaces, Web Applications
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
