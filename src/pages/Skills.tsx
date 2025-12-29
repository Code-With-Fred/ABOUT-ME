import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import SkillsSection from "@/components/sections/SkillsSection"
import Footer from "@/components/Footer"

const Skills = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Technical Skills | Eze Favour Chimereze - Full Stack Developer Nigeria</title>
        <meta name="description" content="Explore my technical skills in React, Node.js, TypeScript, Python, and modern web technologies. Full stack development expertise from a top developer in Port Harcourt, Lagos, and Abuja Nigeria." />
        <meta name="keywords" content="React developer Nigeria, Node.js expert Port Harcourt, TypeScript developer Lagos, Python developer Abuja, full stack skills, web development technologies" />
        <link rel="canonical" href="https://favourchimereze.com/skills" />
        <meta property="og:title" content="Technical Skills | Eze Favour Chimereze" />
        <meta property="og:description" content="Full stack development expertise in React, Node.js, TypeScript, and modern web technologies." />
        <meta property="og:url" content="https://favourchimereze.com/skills" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Technical Skills | Full Stack Developer Nigeria" />
        <meta name="twitter:description" content="React, Node.js, TypeScript, and modern web development technologies." />
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
        <SkillsSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default Skills