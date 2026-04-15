import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import TrustStrip from "@/components/sections/TrustStrip"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import ServicesSection from "@/components/sections/ServicesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import StructuredData from "@/components/StructuredData"

const Home = () => {
  return (
    <PageTransition>
      <StructuredData />
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Eze Favour | Full-Stack Product Engineer — SaaS, Marketplaces & Web Apps</title>
          <meta name="description" content="I build scalable digital products — SaaS platforms, marketplaces, and business-ready web applications. Full-stack product engineer based in Nigeria." />
          <meta name="keywords" content="product engineer Nigeria, full stack developer, SaaS developer, marketplace developer, web developer Port Harcourt, React developer Nigeria, Node.js developer" />
          <link rel="canonical" href="https://codewithfred.name.ng/" />
          <meta property="og:title" content="Eze Favour | Full-Stack Product Engineer" />
          <meta property="og:description" content="I build scalable digital products — SaaS platforms, marketplaces, and business-ready web applications." />
          <meta property="og:url" content="https://codewithfred.name.ng/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="Eze Favour | Full-Stack Product Engineer" />
          <meta name="twitter:description" content="Building premium digital products that scale." />
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

        <main id="main-content" role="main">
          <HeroSection />
          <TrustStrip />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ProcessSection />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  )
}

export default Home
