import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABanner from "@/components/CTABanner";
import ScrollToTop from "@/components/ScrollToTop";
import { CheckCircle2 } from "lucide-react";

const features = [
  { title: "On-Page SEO", description: "Title tags, meta descriptions, headings, content, and internal linking done right." },
  { title: "Technical SEO", description: "Fix crawl errors, improve site speed, optimize mobile experience, and implement structured data." },
  { title: "Local SEO", description: "Google Business Profile setup, local citations, and location-based visibility improvements." },
  { title: "Content Strategy", description: "Keyword research and content planning aligned with what your customers actually search for." },
];

const process = [
  { step: "01", title: "Audit", description: "I analyze your current SEO performance and identify the highest-impact opportunities." },
  { step: "02", title: "Strategy", description: "A targeted plan based on your goals, audience, and competitive landscape." },
  { step: "03", title: "Implementation", description: "On-page and technical improvements, shipped and verified." },
  { step: "04", title: "Monitoring", description: "Track rankings and traffic, and adjust the approach as real data comes in." },
];

const SEOOptimization = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>SEO Optimization Services | Eze Favour | Port Harcourt, Nigeria</title>
          <meta
            name="description"
            content="SEO optimization services from Eze Favour, a full-stack developer in Port Harcourt, Nigeria. On-page, technical, and local SEO to help your site get found."
          />
          <meta
            name="keywords"
            content="SEO services Port Harcourt, search engine optimization Lagos, SEO Abuja, local SEO Nigeria, on-page SEO, technical SEO"
          />
          <link rel="canonical" href="https://codewithfred.name.ng/services/seo-optimization" />
          <meta property="og:title" content="SEO Optimization Services | Eze Favour" />
          <meta
            property="og:description"
            content="On-page, technical, and local SEO to improve your search visibility."
          />
          <meta property="og:url" content="https://codewithfred.name.ng/services/seo-optimization" />
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
                SEO Optimization
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Rank higher in Google and turn organic search into a real acquisition channel, not an afterthought.
              </p>
            </div>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">What's included</h2>
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

            <section className="mb-12 sm:mb-16 p-5 sm:p-8 rounded-2xl border border-border/50 bg-card/30">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">How it works</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {process.map((p) => (
                  <div key={p.step}>
                    <span className="text-xs font-mono text-primary font-bold">{p.step}</span>
                    <p className="font-semibold font-display text-sm mt-1 mb-1">{p.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <CTABanner
            title="Boost your search rankings"
            description="Let's build an SEO strategy that gets your site found by the people already searching for what you offer."
            buttonText="Get a Free SEO Review"
          />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default SEOOptimization;
