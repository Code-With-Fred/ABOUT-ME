import Navigation from "@/components/Navigation"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/Footer"

const Contact = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default Contact
