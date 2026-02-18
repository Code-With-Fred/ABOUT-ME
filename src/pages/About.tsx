import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Breadcrumbs from "@/components/Breadcrumb"
import AboutSection from "@/components/sections/AboutSection"
import CTABanner from "@/components/CTABanner"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>About Eze Favour Chimereze | Software Engineer & Technical Writer Nigeria</title>
          <meta name="description" content="Learn about Eze Favour Chimereze, a passionate software engineer, web developer, and technical writer from Port Harcourt, Nigeria. Discover my journey, expertise, and what drives my work." />
          <meta name="keywords" content="about Eze Favour, software engineer Nigeria, web developer biography, technical writer Port Harcourt, full stack developer background" />
          <link rel="canonical" href="https://codewithfred.name.ng/about" />
          <meta property="og:title" content="About Eze Favour Chimereze | Software Engineer & Technical Writer" />
          <meta property="og:description" content="Learn about my journey as a software engineer, web developer, and technical writer from Nigeria." />
          <meta property="og:url" content="https://codewithfred.name.ng/about" />
          <meta property="og:type" content="profile" />
          <meta property="og:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:secure_url" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Eze Favour - Web Developer" />
          <meta name="twitter:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta name="twitter:image:alt" content="Eze Favour - Web Developer" />
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
          <Breadcrumbs />
          <AboutSection />
          <CTABanner 
            title="Like what you see?"
            description="I'd love to hear about your project. Let's discuss how I can help bring your ideas to life."
          />
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  )
}

export default About