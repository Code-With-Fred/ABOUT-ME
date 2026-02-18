import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Breadcrumbs from "@/components/Breadcrumb"
import SkillsSection from "@/components/sections/SkillsSection"
import CTABanner from "@/components/CTABanner"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"

const Skills = () => {
  const skillsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Technical Skills of Eze Favour Chimereze",
    "description": "Comprehensive list of web development and technical skills",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Frontend Development",
        "description": "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Backend Development",
        "description": "Node.js, Express.js, REST APIs, GraphQL, PostgreSQL, MongoDB, Supabase"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "DevOps & Tools",
        "description": "Git, GitHub, Docker, CI/CD, Vercel, Netlify, AWS, Linux"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Design & UI/UX",
        "description": "Figma, Responsive Design, Accessibility, Wireframing, Prototyping"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Technical Writing",
        "description": "Documentation, API Docs, Blog Writing, Tutorials, SEO Content"
      }
    ]
  }

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Eze Favour Chimereze",
    "jobTitle": "Full Stack Web Developer",
    "description": "Professional full-stack developer specializing in React, Node.js, and modern web technologies",
    "url": "https://codewithfred.name.ng",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Port Harcourt",
      "addressRegion": "Rivers State",
      "addressCountry": "Nigeria"
    },
    "knowsAbout": [
      "React.js", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express.js",
      "PostgreSQL", "MongoDB", "Tailwind CSS", "REST APIs", "GraphQL", "Git",
      "Docker", "Figma", "Technical Writing", "SEO", "Web Development", "E-commerce"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Experience",
        "name": "Full Stack Web Development"
      }
    ]
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Technical Skills | Eze Favour Chimereze - React, Node.js, Full Stack Developer Nigeria</title>
          <meta name="description" content="Discover the technical skills of Eze Favour Chimereze: React.js, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and 50+ web technologies. Expert full-stack developer in Port Harcourt, Lagos, and Abuja, Nigeria." />
          <meta name="keywords" content="React developer Nigeria, Node.js expert Port Harcourt, TypeScript developer Lagos, full stack developer Abuja, JavaScript developer Nigeria, Next.js developer, PostgreSQL expert, MongoDB developer, Tailwind CSS, web development skills Nigeria, frontend developer Port Harcourt, backend developer Lagos" />
          <link rel="canonical" href="https://codewithfred.name.ng/skills" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Technical Skills | Eze Favour Chimereze - Full Stack Developer" />
          <meta property="og:description" content="50+ technical skills including React, Node.js, TypeScript, and modern web technologies. Serving clients in Port Harcourt, Lagos, Abuja, and worldwide." />
          <meta property="og:url" content="https://codewithfred.name.ng/skills" />
          <meta property="og:type" content="profile" />
          <meta property="og:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:secure_url" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Eze Favour - Web Developer" />
          <meta name="twitter:image" content="https://codewithfred.name.ng/my-profile.jpg" />
          <meta name="twitter:image:alt" content="Eze Favour - Web Developer" />
          <meta property="og:locale" content="en_NG" />
          <meta property="og:site_name" content="Eze Favour Chimereze - Web Developer" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Technical Skills | Full Stack Developer Nigeria" />
          <meta name="twitter:description" content="React, Node.js, TypeScript, and 50+ web technologies. Expert developer in Nigeria." />
          
          {/* Additional SEO */}
          <meta name="author" content="Eze Favour Chimereze" />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <meta name="geo.region" content="NG-RV" />
          <meta name="geo.placename" content="Port Harcourt" />
          <meta name="geo.position" content="4.8156;7.0498" />
          <meta name="ICBM" content="4.8156, 7.0498" />
          
          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(skillsJsonLd)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(personJsonLd)}
          </script>
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
          <SkillsSection />
          <CTABanner 
            variant="minimal"
            title="Have a project that needs these skills?"
          />
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  )
}

export default Skills
