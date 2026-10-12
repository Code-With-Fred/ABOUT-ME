import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { CheckCircle2, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABanner from "@/components/CTABanner";
import ScrollToTop from "@/components/ScrollToTop";
import { getLocation, locations } from "@/data/locations";

const services = [
  { title: "Business websites", href: "/services/web-development", description: "Multi-page sites that explain what you do and turn visitors into enquiries." },
  { title: "Online stores", href: "/services/ecommerce-solutions", description: "Product catalogues and checkout with Nigerian payment methods." },
  { title: "SEO", href: "/services/seo-optimization", description: "On-page and local SEO so people searching for your service can find you." },
];

const LocationPage = ({ slug }: { slug: string }) => {
  const location = getLocation(slug);
  if (!location) return <Navigate to="/services" replace />;

  const url = `https://codewithfred.com.ng/${location.slug}`;
  const others = locations.filter((l) => l.slug !== location.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Web development in ${location.city}`,
    serviceType: "Web development",
    url,
    provider: { "@id": "https://codewithfred.com.ng/#person" },
    areaServed: { "@type": "City", name: location.city },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>{location.title}</title>
          <meta name="description" content={location.description} />
          <link rel="canonical" href={url} />
          <meta property="og:title" content={location.title} />
          <meta property="og:description" content={location.description} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
              <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary mb-4">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {location.city}, {location.state}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight mb-4 sm:mb-6">
                {location.h1}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">{location.intro}</p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{location.localAngle}</p>
            </div>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">
                What I build for {location.city} businesses
              </h2>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                {services.map((s) => (
                  <Link
                    key={s.title}
                    to={s.href}
                    className="p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors"
                  >
                    <h3 className="font-semibold font-display text-sm mb-1">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </Link>
                ))}
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                {location.industries.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12 sm:mb-16 p-5 sm:p-8 rounded-2xl border border-border/50 bg-card/30">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-4">Work I have shipped</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{location.proof}</p>
              <Link to="/projects" className="text-sm font-medium text-primary hover:underline">
                See the full portfolio →
              </Link>
            </section>

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">
                Questions {location.city} clients ask
              </h2>
              <div className="space-y-4">
                {location.faqs.map((f) => (
                  <div key={f.question} className="p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50">
                    <h3 className="font-semibold font-display text-sm sm:text-base mb-2">{f.question}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold font-display mb-4">Other areas I work in</h2>
              <div className="flex flex-wrap gap-3">
                {others.map((l) => (
                  <Link
                    key={l.slug}
                    to={`/${l.slug}`}
                    className="px-4 py-2 rounded-lg border border-border/50 bg-card/50 text-xs sm:text-sm font-medium hover:border-primary/30 transition-colors"
                  >
                    Web developer in {l.city}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <CTABanner
            title={`Need a website in ${location.city}?`}
            description="Tell me what your business does and what you want the site to achieve. You get a fixed quote and a timeline before any work starts."
            buttonText="Get a Quote"
          />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default LocationPage;
