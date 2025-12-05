import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React/Next.js/Javascript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js/Express", level: 90 },

        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Python", level: 40 },
      ],
    },
    {
      title: "Writing",
      icon: "✍️",
      skills: [
        { name: "Technical Documentation", level: 95 },
        // { name: "API Documentation", level: 92 },
        { name: "Blog Writing", level: 90 },
        // { name: "Copy Editing", level: 85 },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Figma", level: 75 },
        { name: "Docker", level: 45 },
        // { name: "AWS", level: 80 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <h2 
              id="skills-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" aria-hidden="true" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
              A comprehensive overview of my technical skills and areas of
              expertise, spanning both development and technical communication.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <motion.article
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full transition-smooth hover:shadow-hover">
                  <CardContent className="p-3 sm:p-6">
                    {/* Category Header */}
                    <div className="text-center mb-4 sm:mb-6">
                      <div 
                        className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      >
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-sm sm:text-lg">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3 sm:space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
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
                            transition={{ duration: 1, delay: index * 0.2 }}
                          >
                            <Progress 
                              value={skill.level} 
                              className="h-1.5 sm:h-2" 
                              aria-label={`${skill.name} proficiency: ${skill.level}%`}
                            />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-10 sm:mt-16 text-center">
            <Card className="p-4 sm:p-8 bg-primary/5 border-primary/20">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Always Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Technology evolves rapidly, and so do I. I'm constantly
                exploring new frameworks, tools, and methodologies to stay at
                the forefront of development and technical communication.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
