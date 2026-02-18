import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/sections/HeroSection"
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
          <title>Eze Favour Chimereze | Best Web Developer in Port Harcourt, Lagos & Abuja Nigeria</title>
          <meta name="description" content="Hire Eze Favour Chimereze, a professional full-stack web developer and technical writer in Port Harcourt, Lagos, and Abuja Nigeria. Expert in React, Node.js, and modern web technologies." />
          <meta name="keywords" content="web developer Nigeria, best web developer Port Harcourt, full stack developer Lagos, web designer Abuja, React developer Nigeria, software engineer Port Harcourt" />
          <link rel="canonical" href="https://codewithfred.name.ng/" />
          <meta property="og:title" content="Eze Favour Chimereze | Best Web Developer in Nigeria" />
          <meta property="og:description" content="Professional full-stack web developer and technical writer based in Nigeria. Creating stunning, high-performance websites." />
          <meta property="og:url" content="https://codewithfred.name.ng/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content="Eze Favour Chimereze | Best Web Developer in Nigeria" />
          <meta name="twitter:description" content="Professional full-stack web developer and technical writer based in Nigeria." />
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
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  )
}

export default Home