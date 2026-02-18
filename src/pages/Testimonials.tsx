import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Breadcrumbs from "@/components/Breadcrumb"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"

const Testimonials = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Client Testimonials & Reviews | Eze Favour Chimereze - Web Developer</title>
          <meta name="description" content="Read testimonials and reviews from satisfied clients. See why businesses in Port Harcourt, Lagos, Abuja, and worldwide trust Eze Favour Chimereze for their web development needs." />
          <meta name="keywords" content="web developer reviews Nigeria, client testimonials Port Harcourt, web development feedback, trusted developer Lagos, best web developer reviews Abuja" />
          <link rel="canonical" href="https://codewithfred.name.ng/testimonials" />
          <meta property="og:title" content="Client Testimonials | Eze Favour Chimereze" />
          <meta property="og:description" content="Read reviews from satisfied clients who trusted me with their web development projects." />
          <meta property="og:url" content="https://codewithfred.name.ng/testimonials" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:secure_url" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Eze Favour - Web Developer" />
          <meta name="twitter:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta name="twitter:image:alt" content="Eze Favour - Web Developer" />
          <meta name="twitter:title" content="Client Reviews | Web Developer Nigeria" />
          <meta name="twitter:description" content="Testimonials from clients in Port Harcourt, Lagos, Abuja, and worldwide." />
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
          <TestimonialsSection />
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  )
}

export default Testimonials