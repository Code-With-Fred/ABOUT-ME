import { Helmet } from "react-helmet-async"
import { Link, Navigate, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"
import Navigation from "@/components/Navigation"
import Breadcrumbs from "@/components/Breadcrumb"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import ScrollToTop from "@/components/ScrollToTop"
import CTABanner from "@/components/CTABanner"
import { Button } from "@/components/ui/button"
import { blogPosts, getBlogPost, type ContentBlock } from "@/data/blogPosts"

const Block = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "heading":
      return <h2 className="text-xl sm:text-2xl font-bold font-display mt-10 sm:mt-12 mb-4">{block.text}</h2>
    case "list":
      return (
        <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case "quote":
      return (
        <blockquote className="my-6 sm:my-8 pl-4 sm:pl-6 border-l-2 border-primary/40 text-sm sm:text-base text-foreground italic leading-relaxed">
          {block.text}
        </blockquote>
      )
    default:
      return <p className="mb-5 text-sm sm:text-base text-muted-foreground leading-relaxed">{block.text}</p>
  }
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "author": { "@id": "https://codewithfred.com.ng/#person" },
    "publisher": { "@id": "https://codewithfred.com.ng/#organization" },
    "mainEntityOfPage": `https://codewithfred.com.ng/blog/${post.slug}`,
    "image": "https://codewithfred.com.ng/my-profile.jpg",
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Helmet>
          <title>{post.title} | Code-With-Fred Blog</title>
          <meta name="description" content={post.description} />
          <link rel="canonical" href={`https://codewithfred.com.ng/blog/${post.slug}`} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description} />
          <meta property="og:url" content={`https://codewithfred.com.ng/blog/${post.slug}`} />
          <meta property="og:type" content="article" />
          <meta property="article:published_time" content={post.publishDate} />
          <meta property="og:image" content="https://codewithfred.com.ng/my-profile.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.description} />
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
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

          <article className="py-12 sm:py-16 relative">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-2xl mx-auto">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  All posts
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">{post.tag}</p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-tight mb-4">
                    {post.title}
                  </h1>
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-10 sm:mb-12 pb-8 border-b border-border/50">
                    <time dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readingTime}
                    </span>
                    <span>By Eze Favour</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {post.content.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </motion.div>

                <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/40 text-center">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Have a project in mind? Let's talk about what you're building.
                  </p>
                  <Button asChild size="lg" className="group">
                    <Link to="/contact">
                      Start a Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>

          {otherPosts.length > 0 && (
            <section className="py-12 sm:py-16 border-t border-border/30" aria-labelledby="more-posts-heading">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-2xl mx-auto">
                  <h2 id="more-posts-heading" className="text-lg sm:text-xl font-bold font-display mb-6">
                    More from the blog
                  </h2>
                  <div className="space-y-3">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/blog/${p.slug}`}
                        className="group flex items-center justify-between gap-4 p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
                      >
                        <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">{p.title}</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          <CTABanner
            title="Ready to build your next digital product?"
            description="Whether it's a SaaS platform, marketplace, or custom web app, let's talk about bringing your vision to life."
            buttonText="Start a Project"
          />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  )
}

export default BlogPost
