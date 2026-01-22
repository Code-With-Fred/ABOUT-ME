import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
        { name: "HTML5 & CSS3", level: 98 },
        { name: "Redux/Zustand", level: 88 },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 78 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Supabase", level: 88 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 70 },
        { name: "CI/CD Pipelines", level: 75 },
        { name: "Vercel", level: 90 },
        { name: "Netlify", level: 88 },
        { name: "Linux/Ubuntu", level: 75 },
        { name: "AWS Basics", level: 65 },
        { name: "Nginx", level: 70 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: "✨",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Principles", level: 85 },
        { name: "Wireframing", level: 82 },
        { name: "Prototyping", level: 78 },
        { name: "Design Systems", level: 85 },
        { name: "Accessibility (a11y)", level: 88 },
        { name: "Adobe XD", level: 70 },
      ],
    },
    {
      title: "Technical Writing",
      icon: "✍️",
      skills: [
        { name: "Technical Documentation", level: 95 },
        { name: "API Documentation", level: 92 },
        { name: "Blog Writing", level: 90 },
        { name: "User Guides", level: 88 },
        { name: "README Files", level: 95 },
        { name: "Tutorial Writing", level: 90 },
        { name: "SEO Content", level: 85 },
        { name: "Copy Editing", level: 82 },
      ],
    },
    {
      title: "Other Technologies",
      icon: "🚀",
      skills: [
        { name: "Python", level: 65 },
        { name: "WordPress", level: 80 },
        { name: "Shopify", level: 75 },
        { name: "SEO Optimization", level: 88 },
        { name: "Performance Tuning", level: 85 },
        { name: "Testing (Jest/Vitest)", level: 80 },
        { name: "PWA Development", level: 82 },
        { name: "WebSockets", level: 75 },
      ],
    },
  ];

  const additionalSkills = [
    "Agile/Scrum", "Problem Solving", "Team Collaboration", "Code Review",
    "Debugging", "API Integration", "Database Design", "Authentication",
    "Payment Integration", "E-commerce", "CMS Development", "Mobile-First Design",
    "Cross-Browser Compatibility", "Web Security", "Caching Strategies", "State Management"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="skills" 
      className="py-16 sm:py-20 lg:py-24 bg-muted/30"
      aria-labelledby="skills-heading"
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
          <motion.header variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <h2 
              id="skills-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Technical Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" aria-hidden="true" />
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base px-2">
              As a full-stack web developer based in Port Harcourt, Nigeria, I bring comprehensive 
              expertise in modern web technologies, from frontend frameworks like React and Next.js 
              to backend systems with Node.js and databases. My skills span development, design, 
              DevOps, and technical writing.
            </p>
          </motion.header>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.article
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full transition-smooth hover:shadow-hover">
                  <CardContent className="p-4 sm:p-6">
                    {/* Category Header */}
                    <header className="text-center mb-4 sm:mb-6">
                      <div 
                        className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      >
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-base sm:text-lg">
                        {category.title}
                      </h3>
                    </header>

                    {/* Skills List */}
                    <ul className="space-y-3 sm:space-y-4" role="list">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skill.name}>
                          <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                            <span className="text-xs sm:text-sm font-medium truncate mr-2">
                              {skill.name}
                            </span>
                            <span className="text-[10px] sm:text-xs text-muted-foreground flex-shrink-0">
                              {skill.level}%
                            </span>
                          </div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: "100%" } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          >
                            <Progress 
                              value={skill.level} 
                              className="h-1.5 sm:h-2" 
                              aria-label={`${skill.name} proficiency: ${skill.level}%`}
                            />
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Additional Skills Badges */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs sm:text-sm py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Always Learning Card */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16 text-center">
            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base mb-4">
                The tech industry evolves rapidly, and I'm committed to staying at the cutting edge. 
                I regularly explore new frameworks, tools, and methodologies to deliver the best 
                solutions for my clients in Port Harcourt, Lagos, Abuja, and beyond.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Currently exploring:</strong> AI/ML integration, Web3 technologies, and advanced performance optimization techniques.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
