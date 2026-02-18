import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import ScrollToTop from "@/components/ScrollToTop";

const SEOOptimization = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>SEO Optimization Services | Port Harcourt, Lagos, Abuja | Eze Favour</title>
          <meta
            name="description"
            content="SEO optimization services in Port Harcourt, Lagos, and Abuja. Improve your website's search rankings with proven on-page and technical SEO strategies."
          />
          <meta
            name="keywords"
            content="SEO services Port Harcourt, search engine optimization Lagos, SEO company Abuja, local SEO Nigeria, on-page SEO, technical SEO, SEO optimization services"
          />
          <link rel="canonical" href="https://codewithfred.name.ng/services/seo-optimization" />
          <meta property="og:title" content="SEO Optimization Services | Eze Favour" />
          <meta
            property="og:description"
            content="Improve your search rankings with expert on-page, technical, and local SEO optimization."
          />
          <meta property="og:url" content="https://codewithfred.name.ng/services/seo-optimization" />
          <meta property="og:type" content="service" />
        </Helmet>

        <header role="banner">
          <Navigation />
        </header>

        <main id="main-content" role="main" className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">SEO Optimization Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Rank higher in Google and get more organic traffic to your website with expert SEO strategies.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our SEO Services Include</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">On-Page SEO</h3>
                    <p className="text-muted-foreground">
                      Optimize title tags, meta descriptions, headings, content, and internal linking.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Technical SEO</h3>
                    <p className="text-muted-foreground">
                      Fix crawl errors, improve site speed, optimize mobile experience, and implement structured data.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Local SEO</h3>
                    <p className="text-muted-foreground">
                      Google Business Profile optimization, local citations, and location-based ranking improvements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Content Optimization</h3>
                    <p className="text-muted-foreground">
                      Keyword research, content gap analysis, and high-ranking content creation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Analytics & Reporting</h3>
                    <p className="text-muted-foreground">
                      Track rankings, organic traffic, and conversions with comprehensive monthly reports.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Why SEO Matters</h2>
              <div className="space-y-3">
                <p>
                  <strong>Organic traffic is cost-effective:</strong> Unlike paid ads, organic traffic doesn't require
                  ongoing payments.
                </p>
                <p>
                  <strong>Build credibility:</strong> Ranking high in Google builds trust with potential customers.
                </p>
                <p>
                  <strong>Long-term results:</strong> Once you rank, you'll get consistent traffic for months and years.
                </p>
                <p>
                  <strong>Target local customers:</strong> Local SEO helps you reach customers in your area searching
                  for your services.
                </p>
              </div>
            </section>

            <section className="mb-12 bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our SEO Process</h2>
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong>Audit:</strong> We analyze your current SEO performance and identify opportunities.
                </li>
                <li>
                  <strong>Strategy:</strong> We develop a targeted SEO strategy based on your goals and audience.
                </li>
                <li>
                  <strong>Implementation:</strong> We execute on-page and technical SEO improvements.
                </li>
                <li>
                  <strong>Monitoring:</strong> We track progress and adjust the strategy as needed.
                </li>
                <li>
                  <strong>Reporting:</strong> You receive monthly reports showing rankings, traffic, and ROI.
                </li>
              </ol>
            </section>

            <div className="bg-primary/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Boost Your Search Rankings</h3>
              <p className="text-lg mb-6">
                Let's create an SEO strategy that gets your website found by more customers.
              </p>
              <Button size="lg" asChild>
                <a href="https://wa.me/2347041648121?text=Hi%20Fred%2C%20I%20need%20SEO%20optimization.%20Let%27s%20discuss.">
                  Get a Free SEO Audit
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

export default SEOOptimization;
