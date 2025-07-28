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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                Bridging Code & Communication
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a unique dual expertise in 
                software engineering and technical writing. With over 4 years of experience, 
                I've helped startups and enterprises build scalable applications while 
                creating documentation that actually gets read.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey started with curiosity about how things work under the hood. 
                This led me to not just build software, but also explain how it works to 
                others. I believe that great code should be accompanied by great 
                documentation, and that's what sets me apart.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding or writing, you'll find me exploring new technologies, 
                contributing to open source projects, or mentoring upcoming developers. 
                I'm always excited about the next challenge!
              </p>
            </motion.div>

            {/* Passions Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="p-6 h-full transition-smooth hover:shadow-hover">
                    <passion.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold mb-2">{passion.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {passion.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection