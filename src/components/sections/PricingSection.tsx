import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, Star, Zap, Crown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const packages = [
    {
      name: "Starter",
      icon: Zap,
      price: "₦150,000",
      priceUSD: "$100",
      description: "Perfect for small businesses and personal websites",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media links",
        "1 month free support",
        "Delivery in 1-2 weeks",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      icon: Star,
      price: "₦350,000",
      priceUSD: "$230",
      description: "Ideal for growing businesses needing advanced features",
      features: [
        "Up to 10 pages",
        "Custom UI/UX design",
        "Advanced SEO optimization",
        "Blog/CMS integration",
        "Email newsletter setup",
        "Analytics dashboard",
        "3 months free support",
        "Delivery in 2-3 weeks",
      ],
      popular: true,
      color: "from-primary to-purple-600",
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "₦600,000+",
      priceUSD: "$400+",
      description: "Complete solution for large-scale business needs",
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Custom web application",
        "API integrations",
        "Admin dashboard",
        "Performance optimization",
        "6 months free support",
        "Priority development",
      ],
      popular: false,
      color: "from-amber-500 to-orange-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="pricing" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Pricing</span> Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for quality web development services. Choose a package that fits your needs or contact me for a custom quote.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <motion.div key={index} variants={cardVariants} className="relative">
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    pkg.popular ? "border-2 border-primary shadow-lg" : "border border-border"
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.color}`} />
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foreground">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Approx. {pkg.priceUSD} USD
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className={`mt-0.5 p-1 rounded-full bg-gradient-to-br ${pkg.color}`}>
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact" className="block">
                      <Button
                        className={`w-full ${
                          pkg.popular
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                            : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need something custom? Every project is unique, and I'm happy to create a tailored solution.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Request Custom Quote
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
