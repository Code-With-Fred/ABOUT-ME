import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CTABanner from "@/components/CTABanner";
import ScrollToTop from "@/components/ScrollToTop";
import { CheckCircle2 } from "lucide-react";

const features = [
  { title: "Secure Payment Processing", description: "Integration with Paystack, Flutterwave, Stripe, or PayPal for seamless transactions." },
  { title: "Inventory Management", description: "Real-time stock tracking and automated inventory updates." },
  { title: "Mobile-Optimized Design", description: "Responsive design that works perfectly on every device for better conversions." },
  { title: "Order Management", description: "Manage orders, shipping, and customer communication from one dashboard." },
  { title: "Analytics & Reporting", description: "Track sales, revenue, and customer behavior with clear reporting." },
];

const reasons = [
  { title: "Scalability", description: "Built to grow with your business without technical limitations." },
  { title: "Secure by Design", description: "Payments routed through established, encrypted payment providers — your platform never stores raw card data." },
  { title: "SEO-Ready", description: "Optimized for search engines to help drive organic traffic to your store." },
  { title: "Conversion-Focused", description: "Fast, intuitive checkout designed to reduce drop-off." },
];

const EcommerceSolutions = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>E-Commerce Development | Eze Favour | Port Harcourt, Nigeria</title>
          <meta
            name="description"
            content="Custom e-commerce development from Eze Favour, a full-stack developer in Port Harcourt, Nigeria. Online stores with payment integration, inventory management, and SEO built in."
          />
          <meta
            name="keywords"
            content="e-commerce development Port Harcourt, online store Lagos, e-commerce solutions Abuja, e-commerce website Nigeria, online shop design, payment gateway integration"
          />
          <link rel="canonical" href="https://codewithfred.name.ng/services/ecommerce-solutions" />
          <meta property="og:title" content="E-Commerce Development | Eze Favour" />
          <meta
            property="og:description"
            content="Scalable e-commerce platforms with secure payments, inventory management, and conversion-focused design."
          />
          <meta property="og:url" content="https://codewithfred.name.ng/services/ecommerce-solutions" />
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
                E-Commerce Development
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Launch or upgrade your online store with a secure, scalable platform built around your actual sales process.
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

            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">Payment methods supported</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Paystack", "Flutterwave", "Stripe", "PayPal", "Bank Transfer"].map((method) => (
                  <span key={method} className="px-3 sm:px-4 py-2 rounded-lg border border-border/50 bg-card/50 text-xs sm:text-sm font-medium">
                    {method}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-12 sm:mb-16 p-5 sm:p-8 rounded-2xl border border-border/50 bg-card/30">
              <h2 className="text-xl sm:text-2xl font-bold font-display mb-6">Why this approach</h2>
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
            title="Start selling online"
            description="Let's build an e-commerce platform that turns visitors into customers."
            buttonText="Schedule a Consultation"
          />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default EcommerceSolutions;
