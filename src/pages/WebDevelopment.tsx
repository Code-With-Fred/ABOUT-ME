import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABanner from "@/components/CTABanner";
import ScrollToTop from "@/components/ScrollToTop";
import { CheckCircle2 } from "lucide-react";

const features = [
  { title: "Responsive Websites", description: "Websites that look perfect on desktop, tablet, and mobile devices." },
  { title: "Fast-Loading Sites", description: "Optimized for speed and Core Web Vitals to rank better in search." },
  { title: "SEO-Ready", description: "Built with SEO best practices to help you rank for your target keywords." },
  { title: "User-Focused Design", description: "Intuitive, beautiful interfaces that engage users and drive conversions." },
];

const reasons = [
  { title: "Full-Stack Expertise", description: "4+ years building production-ready web applications with React, Node.js, and TypeScript." },
  { title: "Performance-Focused", description: "Every site is optimized for speed, SEO, and conversions." },
  { title: "Modern Stack", description: "Current technologies and best practices, not outdated tooling." },
  { title: "Personal Attention", description: "You work directly with me on your project — no account managers, no handoffs." },
];

const WebDevelopment = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Website Development Services | Eze Favour | Port Harcourt, Nigeria</title>
          <meta
            name="description"
            content="Website development services from Eze Favour, a full-stack developer in Port Harcourt, Nigeria. Modern, responsive, and SEO-ready websites built with React, TypeScript, and Node.js."
          />
          <meta
            name="keywords"
            content="website development Port Harcourt, web development Lagos, website developer Abuja, website designer Nigeria, responsive website design, custom website development"
          />
          <link rel="canonical" href="https://codewithfred.name.ng/services/web-development" />
          <meta property="og:title" content="Website Development Services | Eze Favour" />
          <meta
            property="og:description"
            content="Custom, modern website development for businesses in Nigeria. React, TypeScript, Node.js expertise."
          />
          <meta property="og:url" content="https://codewithfred.name.ng/services/web-development" />
          <meta property="og:type" content="service" />
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

          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Service</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight mb-4 sm:mb-6">
                Website Development
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A powerful online presence starts with a site built for performance and conversions — not just something that looks good in a screenshot.
              </p>
            </div>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">What you get</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3 p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold font-display text-sm mb-1">{f.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">Technologies I use</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Supabase"].map((tech) => (
                  <span key={tech} className="px-3 sm:px-4 py-2 rounded-lg border border-border/50 bg-card/50 text-xs sm:text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-12 sm:mb-16 p-5 sm:p-8 rounded-2xl border border-border/50 bg-card/30">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">Why work with me</h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {reasons.map((r) => (
                  <div key={r.title}>
                    <p className="font-semibold font-display text-sm mb-1">{r.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <CTABanner
            title="Ready to build your website?"
            description="Let's discuss your project and create something that actually moves the needle for your business."
            buttonText="Get Started"
          />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default WebDevelopment;
