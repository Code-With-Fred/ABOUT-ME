import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, PenTool, Coffee, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const passions = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "I believe in writing maintainable, scalable code that tells a story.",
    },
    {
      icon: PenTool,
      title: "Technical Writing",
      description: "Making complex concepts accessible through clear, engaging documentation.",
    },
    {
      icon: Coffee,
      title: "Problem Solving",
      description: "I love tackling challenging problems and finding elegant solutions.",
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Creating delightful experiences that users actually want to use.",
    },
  ]

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 lg:py-24 bg-muted/30"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <h2 
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              About <span className="text-primary">Eze Favour</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" aria-hidden="true" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Bio - SEO WELL OPTIMIZED */}
            <motion.article variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Full Stack Web Developer & Software Engineer in Port Harcourt, Nigeria
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I'm <strong>Eze Favour</strong>, a passionate <strong>full-stack developer</strong> and <strong>software engineer</strong> based in <strong>Port Harcourt, Nigeria</strong>. 
                With expertise in <strong>React</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>, and <strong>Web3 development</strong>, 
                I build scalable web applications and create technical content for startups and enterprises across <strong>Lagos</strong>, <strong>Abuja</strong>, and globally.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                As a <strong>software engineer</strong> with over 4 years of experience, my journey started with curiosity about how technology works. 
                This led me to not just build software, but also explain it through <strong>technical writing</strong>. 
                I specialize in <strong>blockchain development</strong> (especially Sui ecosystem), <strong>responsive web development</strong>, 
                <strong>frontend development</strong>, and <strong>full-stack solutions</strong>. I believe that great code should be accompanied by great documentation — 
                that's what sets me apart as a <strong>web developer and software engineer</strong>.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Whether you need a modern website, a web application, or blockchain integration, I deliver <strong>professional web development services</strong> tailored to your business needs. 
                I've helped businesses across <strong>Port Harcourt</strong>, <strong>Lagos</strong>, <strong>Abuja</strong>, and Africa establish their digital presence through scalable, user-friendly solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                When I'm not coding or writing, you'll find me exploring new Web3 technologies, contributing to open source projects, 
                or mentoring upcoming <strong>developers in Nigeria</strong> and Africa. I'm always excited about the next challenge in web development!
              </p>

            </motion.article>

            {/* Passions Grid */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 gap-3 sm:gap-6"
              role="list"
              aria-label="Areas of expertise"
            >
              {passions.map((passion) => (
                <motion.article
                  key={passion.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                  role="listitem"
                >
                  <Card className="p-4 sm:p-6 h-full transition-smooth hover:shadow-hover">
                    <passion.icon 
                      className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform" 
                      aria-hidden="true"
                    />
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{passion.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {passion.description}
                    </p>
                  </Card>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection