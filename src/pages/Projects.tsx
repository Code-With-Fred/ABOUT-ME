import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Breadcrumbs from "@/components/Breadcrumb"
import ProjectsSection from "@/components/sections/ProjectsSection"
import CTABanner from "@/components/CTABanner"
import Footer from "@/components/Footer"

const Projects = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Portfolio & Projects | Eze Favour Chimereze - Web Developer Nigeria</title>
        <meta name="description" content="Explore my portfolio of web development projects including e-commerce websites, business applications, and custom web solutions. See real examples of my work as a web developer in Nigeria." />
        <meta name="keywords" content="web development portfolio Nigeria, website projects Port Harcourt, React projects Lagos, web developer work samples, Nigerian developer portfolio" />
        <link rel="canonical" href="https://favourchimereze.com/projects" />
        <meta property="og:title" content="Portfolio & Projects | Eze Favour Chimereze" />
        <meta property="og:description" content="Explore my portfolio of web development projects and see real examples of my work." />
        <meta property="og:url" content="https://favourchimereze.com/projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Web Development Portfolio | Eze Favour Chimereze" />
        <meta name="twitter:description" content="Real examples of websites and applications I've built for clients." />
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
        <ProjectsSection />
        <CTABanner 
          title="Want something similar?"
          description="I can build a custom solution tailored to your needs. Let's create something amazing together."
        />
      </main>
      
      <Footer />
    </div>
  )
}

export default Projects