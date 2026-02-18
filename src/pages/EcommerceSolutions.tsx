import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import ScrollToTop from "@/components/ScrollToTop";

const EcommerceSolutions = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>E-Commerce Solutions | Port Harcourt, Lagos, Abuja | Eze Favour</title>
          <meta
            name="description"
            content="Custom e-commerce solutions in Port Harcourt, Lagos, and Abuja. Build online stores with payment integration, inventory management, and SEO optimization."
          />
          <meta
            name="keywords"
            content="e-commerce development Port Harcourt, online store Lagos, e-commerce solutions Abuja, e-commerce website Nigeria, online shop design, payment gateway integration, inventory management system"
          />
          <link rel="canonical" href="https://codewithfred.name.ng/services/ecommerce-solutions" />
          <meta property="og:title" content="E-Commerce Solutions | Eze Favour" />
          <meta
            property="og:description"
            content="Scalable e-commerce platforms with secure payments, inventory management, and conversion optimization."
          />
          <meta property="og:url" content="https://codewithfred.name.ng/services/ecommerce-solutions" />
          <meta property="og:type" content="service" />
        </Helmet>

        <header role="banner">
          <Navigation />
        </header>

        <main id="main-content" role="main" className="pt-20">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6">E-Commerce Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Launch or upgrade your online store with secure, scalable e-commerce platforms.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What's Included</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Secure Payment Processing</h3>
                    <p className="text-muted-foreground">
                      Integration with Paystack, Flutterwave, Stripe, and PayPal for seamless transactions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Inventory Management</h3>
                    <p className="text-muted-foreground">
                      Real-time stock tracking and automated inventory updates.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Mobile-Optimized Design</h3>
                    <p className="text-muted-foreground">
                      Responsive design that works perfectly on all devices for better conversions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Order Management System</h3>
                    <p className="text-muted-foreground">
                      Manage orders, shipping, and customer communications from one dashboard.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <div>
                    <h3 className="font-bold">Analytics & Reporting</h3>
                    <p className="text-muted-foreground">
                      Track sales, revenue, and customer behavior with detailed analytics.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Payment Methods Supported</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Paystack", "Flutterwave", "Stripe", "PayPal", "Bank Transfer", "Cash on Delivery"].map((method) => (
                  <div key={method} className="p-4 bg-secondary rounded-lg text-center font-medium">
                    {method}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Our E-Commerce Solutions?</h2>
              <ul className="space-y-3">
                <li>
                  <strong>Scalability:</strong> Built to grow with your business without technical limitations.
                </li>
                <li>
                  <strong>Security:</strong> PCI-DSS compliant and secure payment processing.
                </li>
                <li>
                  <strong>SEO-Ready:</strong> Optimized for search engines to drive organic traffic to your store.
                </li>
                <li>
                  <strong>User Experience:</strong> Fast, intuitive checkout process to maximize conversions.
                </li>
                <li>
                  <strong>Support:</strong> Ongoing maintenance, updates, and technical support included.
                </li>
              </ul>
            </section>

            <div className="bg-primary/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Start Selling Online Today</h3>
              <p className="text-lg mb-6">
                Let's build an e-commerce platform that turns visitors into customers.
              </p>
              <Button size="lg" asChild>
                <a href="https://wa.me/2347041648121?text=Hi%20Fred%2C%20I%20need%20an%20e-commerce%20solution.%20Let%27s%20discuss.">
                  Schedule a Consultation
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

export default EcommerceSolutions;
