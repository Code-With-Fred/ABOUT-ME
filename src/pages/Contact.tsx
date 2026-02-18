import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Breadcrumbs from "@/components/Breadcrumb"
import ContactSection from "@/components/sections/ContactSection"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Contact Eze Favour Chimereze | Hire a Web Developer in Nigeria</title>
          <meta name="description" content="Get in touch with Eze Favour Chimereze for your web development project. Based in Port Harcourt, serving clients in Lagos, Abuja, and worldwide. Request a free consultation today." />
          <meta name="keywords" content="hire web developer Nigeria, contact web developer Port Harcourt, web development quote Lagos, freelance developer Abuja, get website built Nigeria" />
          <link rel="canonical" href="https://codewithfred.name.ng/contact" />
          <meta property="og:title" content="Contact Eze Favour Chimereze | Hire a Web Developer" />
          <meta property="og:description" content="Get in touch for your web development project. Request a free consultation today." />
          <meta property="og:url" content="https://codewithfred.name.ng/contact" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:secure_url" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Eze Favour - Web Developer" />
          <meta name="twitter:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta name="twitter:image:alt" content="Eze Favour - Web Developer" />
          <meta name="twitter:title" content="Hire a Web Developer in Nigeria" />
          <meta name="twitter:description" content="Contact Eze Favour Chimereze for professional web development services." />
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
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  )
}

export default Contact