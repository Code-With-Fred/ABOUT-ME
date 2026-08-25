import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Breadcrumbs from "@/components/Breadcrumb"
import ServicesSection from "@/components/sections/ServicesSection"
import FAQSection from "@/components/sections/FAQSection"
import CTABanner from "@/components/CTABanner"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

const deepDives = [
  { title: "Website Development", href: "/services/web-development", description: "Custom, responsive websites built for performance and conversions." },
  { title: "E-Commerce Development", href: "/services/ecommerce-solutions", description: "Online stores with secure payments and inventory management." },
  { title: "SEO Optimization", href: "/services/seo-optimization", description: "On-page, technical, and local SEO to help your site get found." },
]

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Web Development Services | Eze Favour Chimereze | Port Harcourt, Lagos, Abuja</title>
          <meta name="description" content="Professional web development services including custom websites, e-commerce solutions, web applications, and technical writing. Serving clients in Port Harcourt, Lagos, Abuja, and worldwide." />
          <meta name="keywords" content="web development services Nigeria, custom website design Port Harcourt, e-commerce development Lagos, React development Abuja, full stack services Nigeria" />
          <link rel="canonical" href="https://codewithfred.name.ng/services" />
          <meta property="og:title" content="Web Development Services | Eze Favour Chimereze" />
          <meta property="og:description" content="Professional web development services including custom websites, e-commerce, and web applications." />
          <meta property="og:url" content="https://codewithfred.name.ng/services" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:secure_url" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Eze Favour | Web Developer" />
          <meta name="twitter:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta name="twitter:image:alt" content="Eze Favour | Web Developer" />
          <meta name="twitter:title" content="Web Development Services Nigeria" />
          <meta name="twitter:description" content="Custom websites, e-commerce, and web applications by Eze Favour Chimereze." />
        </Helmet>
        
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        
        <header role="banner">
          <Navigation />
        </header>
        
        <main id="main-content" role="main" className="pt-20">
          <Breadcrumbs />
          <ServicesSection headingLevel="h1" />

          <section className="py-12 sm:py-16 relative" aria-labelledby="deep-dives-heading">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <h2 id="deep-dives-heading" className="text-xl sm:text-2xl font-bold font-display mb-6 sm:mb-8">
                  Explore a service in depth
                </h2>
                <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                  {deepDives.map((d) => (
                    <Link
                      key={d.href}
                      to={d.href}
                      className="group p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
                    >
                      <p className="font-semibold font-display text-sm mb-1.5 flex items-center gap-1.5 group-hover:text-primary transition-colors">
                        {d.title}
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <FAQSection />
          <CTABanner 
            title="Need a custom solution?"
            description="Every project is unique. Let's discuss your specific requirements and find the perfect solution for your business."
          />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  )
}

export default Services