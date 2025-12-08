import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const testimonials = [
    {
      name: "Adaeze Nwosu",
      role: "CEO, Nwosu Logistics",
      location: "Lagos, Nigeria",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Fred built our company website from scratch and the results were amazing! The site is fast, mobile-friendly, and has already helped us get more customers. Highly recommend him as the best web developer in Nigeria.",
    },
    {
      name: "Chukwuemeka Okonkwo",
      role: "Founder, TechHub PH",
      location: "Port Harcourt, Nigeria",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Working with Fred was a fantastic experience. He understood our vision and delivered a modern, SEO-optimized website that ranks well on Google. If you need a professional web designer in Port Harcourt, Fred is your guy!",
    },
    {
      name: "Blessing Eze",
      role: "Owner, Bless Fashion Store",
      location: "Abuja, Nigeria",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Our e-commerce website is now generating sales 24/7. Fred created a beautiful online store with easy payment integration. Best web developer I've worked with in Abuja. Very professional and reliable.",
    },
    {
      name: "Daniel Obi",
      role: "Director, Obi & Sons Properties",
      location: "Port Harcourt, Nigeria",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      text: "Fred redesigned our real estate website and the transformation was incredible. We now get more inquiries through the website than any other channel. Top-notch web design services in Port Harcourt!",
    },
    {
      name: "Ngozi Amadi",
      role: "Executive Director, Hope Foundation NGO",
      location: "Lagos, Nigeria",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
      text: "Fred understood our mission and created a website that truly represents our NGO. Donations increased by 40% after the new site launched. Excellent full-stack developer with great communication skills.",
    },
    {
      name: "Emmanuel Chibuike",
      role: "Startup Founder",
      location: "Port Harcourt, Nigeria",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      text: "From concept to deployment, Fred delivered beyond expectations. His expertise in React and Node.js helped us launch our SaaS product on time. Best software engineer in Port Harcourt, hands down!",
    },
  ]

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
      id="testimonials" 
      className="py-16 sm:py-20 lg:py-24 bg-muted/30"
      aria-labelledby="testimonials-heading"
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
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 
              id="testimonials-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" aria-hidden="true" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              What clients across <strong>Port Harcourt</strong>, <strong>Lagos</strong>, and <strong>Abuja</strong> say about my 
              <strong> web design and development services</strong> in Nigeria.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full transition-smooth hover:shadow-hover">
                  <CardContent className="p-4 sm:p-6">
                    {/* Quote Icon */}
                    <Quote 
                      className="h-6 w-6 sm:h-8 sm:w-8 text-primary/30 mb-3 sm:mb-4" 
                      aria-hidden="true" 
                    />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-3 sm:mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name}, ${testimonial.role}`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-primary">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16 text-center">
            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">50+</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">40+</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">4+</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">100%</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
