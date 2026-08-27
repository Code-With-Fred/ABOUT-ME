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
          <title>Eze Favour | Product Engineer | Web Apps & SaaS</title>
          <meta name="description" content="I design and build web applications that convert users and grow revenue. Product engineering for startups and SMBs, React, TypeScript, Node.js, Supabase." />
          <meta name="keywords" content="Eze Favour, product engineer, web developer, React developer, TypeScript, Supabase, SaaS developer" />
          <link rel="canonical" href="https://codewithfred.name.ng/" />
          <meta property="og:title" content="Eze Favour | Product Engineer" />
          <meta property="og:description" content="Designing and building web apps that convert users and drive growth." />
          <meta property="og:url" content="https://codewithfred.name.ng/" />
          <meta property="og:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Eze Favour | Product Engineer" />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="Eze Favour | Product Engineer" />
          <meta name="twitter:description" content="Designing and building web apps that convert users and drive growth." />
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
