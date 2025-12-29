import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import AboutSection from "@/components/sections/AboutSection"
import Footer from "@/components/Footer"

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>About Eze Favour Chimereze | Software Engineer & Technical Writer Nigeria</title>
        <meta name="description" content="Learn about Eze Favour Chimereze, a passionate software engineer, web developer, and technical writer from Port Harcourt, Nigeria. Discover my journey, expertise, and what drives my work." />
        <meta name="keywords" content="about Eze Favour, software engineer Nigeria, web developer biography, technical writer Port Harcourt, full stack developer background" />
        <link rel="canonical" href="https://favourchimereze.com/about" />
        <meta property="og:title" content="About Eze Favour Chimereze | Software Engineer & Technical Writer" />
        <meta property="og:description" content="Learn about my journey as a software engineer, web developer, and technical writer from Nigeria." />
        <meta property="og:url" content="https://favourchimereze.com/about" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:title" content="About Eze Favour Chimereze | Software Engineer Nigeria" />
        <meta name="twitter:description" content="Discover my journey as a passionate software engineer and technical writer." />
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
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default About