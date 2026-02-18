import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import ScrollToTop from "@/components/ScrollToTop";

const WebDevelopment = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Website Development Services | Port Harcourt, Lagos, Abuja | Eze Favour</title>
          <meta
            name="description"
            content="Professional website development services in Port Harcourt, Lagos, and Abuja. Modern, responsive, and SEO-optimized websites built with React, TypeScript, and Node.js."
          />
          <meta
            name="keywords"
            content="website development Port Harcourt, web development Lagos, website developer Abuja, website designer Nigeria, responsive website design, custom website development, professional website design"
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

        <header role="banner">
          <Navigation />
        </header>

        <main id="main-content" role="main" className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">Website Development Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create a powerful online presence with custom, modern websites built for performance and conversions.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What We Build</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Responsive Websites</h3>
                    <p className="text-muted-foreground">
                      Websites that look perfect on desktop, tablet, and mobile devices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Fast-Loading Sites</h3>
                    <p className="text-muted-foreground">
                      Optimized for speed and core web vitals to rank better in search.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">SEO-Ready</h3>
                    <p className="text-muted-foreground">
                      Built with SEO best practices to help you rank for your target keywords.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">User-Focused Design</h3>
                    <p className="text-muted-foreground">
                      Intuitive, beautiful interfaces that engage users and drive conversions.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Technologies We Use</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Firebase"].map((tech) => (
                  <div key={tech} className="p-4 bg-secondary rounded-lg text-center font-medium">
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <div className="space-y-3">
                <p>
                  <strong>Years of Experience:</strong> 50+ projects delivered to satisfied clients across Nigeria and
                  internationally.
                </p>
                <p>
                  <strong>Performance-Focused:</strong> Every site we build is optimized for speed, SEO, and conversions.
                </p>
                <p>
                  <strong>Modern Stack:</strong> We use the latest technologies and best practices in web development.
                </p>
                <p>
                  <strong>Personal Attention:</strong> You work directly with the developer on your project.
                </p>
              </div>
            </section>

            <div className="bg-primary/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Website?</h3>
              <p className="text-lg mb-6">
                Let's discuss your project and create something amazing together.
              </p>
              <Button size="lg" asChild>
                <a href="https://wa.me/2347041648121?text=Hi%20Fred%2C%20I%20need%20a%20website.%20Let%27s%20discuss.">
                  Get Started on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default WebDevelopment;
