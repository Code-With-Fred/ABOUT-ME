import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Breadcrumbs from "@/components/Breadcrumb"
import ServicesSection from "@/components/sections/ServicesSection"
import CTABanner from "@/components/CTABanner"
import Footer from "@/components/Footer"

const Services = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Web Development Services | Eze Favour Chimereze - Port Harcourt, Lagos, Abuja</title>
        <meta name="description" content="Professional web development services including custom websites, e-commerce solutions, web applications, and technical writing. Serving clients in Port Harcourt, Lagos, Abuja, and worldwide." />
        <meta name="keywords" content="web development services Nigeria, custom website design Port Harcourt, e-commerce development Lagos, React development Abuja, full stack services Nigeria" />
        <link rel="canonical" href="https://favourchimereze.com/services" />
        <meta property="og:title" content="Web Development Services | Eze Favour Chimereze" />
        <meta property="og:description" content="Professional web development services including custom websites, e-commerce, and web applications." />
        <meta property="og:url" content="https://favourchimereze.com/services" />
        <meta property="og:type" content="website" />
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
        <ServicesSection />
        <CTABanner 
          title="Need a custom solution?"
          description="Every project is unique. Let's discuss your specific requirements and find the perfect solution for your business."
        />
      </main>
      
      <Footer />
    </div>
  )
}

export default Services