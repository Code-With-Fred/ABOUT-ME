import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Clock, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const BlogSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("")

  const articles = [
    {
      title: "Building Scalable React Applications: A Complete Guide",
      excerpt: "Learn how to structure React applications for growth, implement proper state management, and optimize performance for large-scale projects.",
      date: "2024-01-15",
      readTime: "12 min",
      tags: ["React", "Architecture", "Performance"],
      category: "Development",
    },
    {
      title: "The Art of Technical Writing: Making Complex Simple",
      excerpt: "Discover the principles of effective technical communication, from understanding your audience to creating documentation that developers actually use.",
      date: "2024-01-10",
      readTime: "8 min",
      tags: ["Writing", "Documentation", "Communication"],
      category: "Writing",
    },
    {
      title: "Modern API Design: RESTful Best Practices",
      excerpt: "Comprehensive guide to designing APIs that are intuitive, scalable, and maintainable, with real-world examples and common pitfalls to avoid.",
      date: "2024-01-05",
      readTime: "15 min",
      tags: ["API", "Backend", "Best Practices"],
      category: "Development",
    },
    {
      title: "TypeScript for Better Developer Experience",
      excerpt: "How TypeScript transforms JavaScript development by catching errors early, improving code quality, and enhancing team collaboration.",
      date: "2023-12-28",
      readTime: "10 min",
      tags: ["TypeScript", "JavaScript", "DX"],
      category: "Development",
    },
    {
      title: "Documentation as Code: Version Control for Docs",
      excerpt: "Implement docs-as-code workflows to keep documentation in sync with your codebase, using Git workflows and automated publishing.",
      date: "2023-12-20",
      readTime: "7 min",
      tags: ["Documentation", "Git", "Automation"],
      category: "Writing",
    },
    {
      title: "Performance Optimization in Modern Web Apps",
      excerpt: "Practical strategies for optimizing web application performance, from code splitting to image optimization and caching strategies.",
      date: "2023-12-15",
      readTime: "14 min",
      tags: ["Performance", "Optimization", "Web"],
      category: "Development",
    },
  ]

  const allTags = [...new Set(articles.flatMap(article => article.tags))]

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag === "" || article.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section 
      id="blog" 
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="blog-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <h2 
              id="blog-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Blog & Documentation
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" aria-hidden="true" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
              Technical articles, tutorials, and documentation samples that showcase 
              my ability to communicate complex concepts clearly and effectively.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" 
                  aria-hidden="true"
                />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  aria-label="Search articles"
                />
              </div>
              <div 
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin"
                role="group"
                aria-label="Filter by tag"
              >
                <Button
                  variant={selectedTag === "" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag("")}
                  className="flex-shrink-0 text-xs sm:text-sm"
                >
                  All
                </Button>
                {allTags.slice(0, 6).map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className="flex-shrink-0 text-xs sm:text-sm"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            role="list"
            aria-label="Blog articles"
          >
            {filteredArticles.map((article) => (
              <motion.article
                key={article.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                role="listitem"
              >
                <Card className="h-full transition-smooth hover:shadow-hover">
                  <CardContent className="p-4 sm:p-6">
                    {/* Category Badge */}
                    <div className="mb-3 sm:mb-4">
                      <Badge 
                        variant={article.category === "Development" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {article.category}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString()}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1" role="list" aria-label="Article tags">
                      {article.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="text-[10px] sm:text-xs"
                          role="listitem"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          {/* No results message */}
          {filteredArticles.length === 0 && (
            <motion.div 
              variants={itemVariants} 
              className="text-center py-12"
              role="status"
              aria-live="polite"
            >
              <p className="text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}

          {/* View More */}
          <motion.div variants={itemVariants} className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" className="text-sm sm:text-base">
              View All Articles
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection