import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
      aria-label="Primary navigation"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-10 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="codewithfred — home"
          >
            <span className="text-lg sm:text-xl font-bold font-display tracking-tight">
              code<span className="text-primary">with</span>fred
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="ml-3">
              <Button size="sm" className="glow-sm text-sm">
                Let's Talk
              </Button>
            </Link>
          </div>

          {/* Mobile menu — accessible Sheet */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative z-10 h-11 w-11"
                  aria-label="Open navigation menu"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                id="mobile-navigation"
                className="w-[85vw] max-w-sm bg-background/95 backdrop-blur-xl border-l border-border/50 p-0 flex flex-col"
              >
                <VisuallyHidden>
                  <SheetTitle>Navigation menu</SheetTitle>
                  <SheetDescription>
                    Site navigation links and primary call to action.
                  </SheetDescription>
                </VisuallyHidden>

                {/* Header */}
                <div className="flex items-center justify-between px-6 h-16 border-b border-border/50">
                  <span className="text-lg font-bold font-display tracking-tight">
                    code<span className="text-primary">with</span>fred
                  </span>
                </div>

                {/* Nav links */}
                <nav
                  className="flex-1 overflow-y-auto px-4 py-6 space-y-1"
                  aria-label="Mobile primary"
                >
                  {navItems.map((item, index) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        to={item.href}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={`flex items-center px-4 py-3.5 rounded-lg text-base font-medium transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background animate-fade-in ${
                          isActive(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                        style={{ animationDelay: `${index * 40}ms` }}
                      >
                        <span className="text-xs font-mono text-muted-foreground/50 mr-3 w-6">
                          0{index + 1}
                        </span>
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Footer CTA */}
                <div className="p-6 border-t border-border/50 space-y-3">
                  <SheetClose asChild>
                    <Link to="/contact" className="block">
                      <Button className="w-full h-12 glow-sm text-base">
                        Let's Talk
                      </Button>
                    </Link>
                  </SheetClose>
                  <p className="text-xs text-muted-foreground text-center">
                    Available for new projects
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
