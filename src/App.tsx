import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/hooks/use-theme";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { lazyWithReload } from "@/lib/lazyWithReload";

// Home loads eagerly (it's the most common entry point); every other route
// is code-split so a first visit doesn't pay for pages it didn't ask for.
// lazyWithReload (not React.lazy directly) so a visitor who had the site open
// across a deploy gets one automatic reload instead of a blank page when their
// browser requests a JS chunk that no longer exists on the server.
import Home from "./pages/Home";
const About = lazyWithReload(() => import("./pages/About"));
const Services = lazyWithReload(() => import("./pages/Services"));
const Projects = lazyWithReload(() => import("./pages/Projects"));
const Skills = lazyWithReload(() => import("./pages/Skills"));
const Testimonials = lazyWithReload(() => import("./pages/Testimonials"));
const Contact = lazyWithReload(() => import("./pages/Contact"));
const NotFound = lazyWithReload(() => import("./pages/NotFound"));
const WebDevelopment = lazyWithReload(() => import("./pages/WebDevelopment"));
const SEOOptimization = lazyWithReload(() => import("./pages/SEOOptimization"));
const EcommerceSolutions = lazyWithReload(() => import("./pages/EcommerceSolutions"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/seo-optimization" element={<SEOOptimization />} />
          <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
          <StickyMobileCTA />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
