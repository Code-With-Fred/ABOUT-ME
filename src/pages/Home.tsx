import { Helmet } from "react-helmet-async"
import PageTransition from "@/components/PageTransition"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import TrustStrip from "@/components/sections/TrustStrip"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import CTABanner from "@/components/CTABanner"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import StructuredData from "@/components/StructuredData"

// Home is a short, focused landing page on purpose — full depth on About, Skills,
// Services, and Testimonials lives on their own pages (linked from the nav and
// from the CTAs below), not duplicated here.
const Home = () => {
  return (
    <PageTransition>
      <StructuredData />
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Web Developer in Port Harcourt, Nigeria | Eze Favour - Code-With-Fred</title>
          <meta name="description" content="Eze Favour (Code-With-Fred) builds fast, mobile-friendly websites, e-commerce stores and web apps for businesses in Port Harcourt, Lagos, Abuja and across Nigeria." />
          <meta name="keywords" content="web developer Port Harcourt, website designer Nigeria, e-commerce website Nigeria, web developer Lagos, web developer Abuja, Eze Favour, Code-With-Fred" />
          <link rel="canonical" href="https://codewithfred.com.ng/" />
          <meta property="og:title" content="Web Developer in Port Harcourt, Nigeria | Eze Favour - Code-With-Fred" />
          <meta property="og:description" content="Fast, mobile-friendly websites, e-commerce stores and web apps for businesses across Nigeria." />
          <meta property="og:url" content="https://codewithfred.com.ng/" />
          <meta property="og:image" content="https://codewithfred.com.ng/my-profile.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Eze Favour - Web Developer in Port Harcourt, Nigeria" />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="Web Developer in Port Harcourt, Nigeria | Eze Favour" />
          <meta name="twitter:description" content="Fast, mobile-friendly websites, e-commerce stores and web apps for businesses across Nigeria." />
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
          <ProjectsSection variant="compact" />
          <ProcessSection />
          <CTABanner
            title="Ready to build your next digital product?"
            description="Whether it's a SaaS platform, marketplace, or custom web app, let's talk about bringing your vision to life."
            buttonText="Start a Project"
          />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  )
}

export default Home
