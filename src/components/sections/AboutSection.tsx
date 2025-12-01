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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Eze Favour</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio - SEO OPTIMIZED */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                Full Stack Web Designer & Developer in Port Harcourt, Nigeria
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm <strong>Eze Favour</strong>, a passionate <strong>full-stack developer</strong> and <strong>web designer</strong> based in <strong>Port Harcourt, Nigeria</strong>. 
                With expertise in <strong>React</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong>, and <strong>Web3 development</strong>, 
                I build scalable web applications and create technical content for startups and enterprises across Africa and globally.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                As a <strong>software engineer</strong> with over 4 years of experience, my journey started with curiosity about how technology works. 
                This led me to not just build software, but also explain it through <strong>technical writing</strong>. 
                I specialize in <strong>blockchain development</strong> (especially Sui ecosystem), <strong>responsive web design</strong>, 
                <strong>frontend development</strong>, and <strong>full-stack solutions</strong>. I believe that great code should be accompanied by great documentation — 
                that's what sets me apart as a <strong>web designer and developer</strong>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Whether you need a modern website, a web application, or blockchain integration, I deliver <strong>professional web design services</strong> tailored to your business needs. 
                I've helped businesses across Nigeria and Africa establish their digital presence through scalable, user-friendly solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding or writing, you'll find me exploring new Web3 technologies, contributing to open source projects, 
                or mentoring upcoming <strong>developers in Nigeria</strong> and Africa. I'm always excited about the next challenge in web development!
              </p>

              {/* Hidden SEO Keywords */}
              <div className="hidden text-xs text-muted-foreground">
                <p>Services: web design, web development, full-stack development, frontend development, backend development, React development, Node.js development, blockchain development, Web3, Sui, responsive website design, UI/UX design, technical writing, software engineering</p>
                <p>Location: Port Harcourt, Nigeria, Africa, Worldwide</p>
                <p>Skills: React, Node.js, TypeScript, JavaScript, HTML, CSS, Next.js, Tailwind CSS, MongoDB, Web3, Blockchain, Sui ecosystem</p>
              </div>
            </motion.div>

            {/* Passions Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6">
              {passions.map((passion) => (
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