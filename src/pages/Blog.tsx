import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import Navigation from "@/components/Navigation"
import Breadcrumbs from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import ScrollToTop from "@/components/ScrollToTop"
import { blogPosts } from "@/data/blogPosts"

const Blog = () => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://codewithfred.com.ng/blog#blog",
    "name": "Code-With-Fred Blog",
    "url": "https://codewithfred.com.ng/blog",
    "blogPost": blogPosts.map((p) => ({
      "@type": "BlogPosting",
      "headline": p.title,
      "url": `https://codewithfred.com.ng/blog/${p.slug}`,
      "datePublished": p.publishDate,
    })),
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>Blog | Web Development Insights | Eze Favour - Code-With-Fred</title>
          <meta
            name="description"
            content="Practical guides on website costs, redesigns, and real project case studies from a full-stack developer in Port Harcourt, Nigeria."
          />
          <link rel="canonical" href="https://codewithfred.com.ng/blog" />
          <meta property="og:title" content="Blog | Eze Favour - Code-With-Fred" />
          <meta property="og:description" content="Practical guides and real case studies on web development, pricing, and design." />
          <meta property="og:url" content="https://codewithfred.com.ng/blog" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://codewithfred.com.ng/my-profile.jpg" />
          <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
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

          <section className="py-16 sm:py-24 relative" aria-labelledby="blog-heading">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium uppercase tracking-widest text-primary mb-4"
                >
                  Blog
                </motion.p>
                <motion.h1
                  id="blog-heading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight mb-4 sm:mb-6 max-w-3xl"
                >
                  Practical guides, not filler.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-muted-foreground max-w-2xl mb-10 sm:mb-16 text-base sm:text-lg"
                >
                  Straight answers on pricing, redesigns, and real project breakdowns — written from doing the work, not to pad a word count.
                </motion.p>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {blogPosts
                    .slice()
                    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1))
                    .map((post, i) => (
                      <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.6 }}
                      >
                        <Link
                          to={`/blog/${post.slug}`}
                          className="group flex flex-col h-full p-5 sm:p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
                        >
                          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">{post.tag}</p>
                          <h2 className="text-lg sm:text-xl font-bold font-display mb-2.5 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                              {post.readingTime}
                            </span>
                            <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                              Read
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  )
}

export default Blog
