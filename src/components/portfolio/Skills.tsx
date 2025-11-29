import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Backend (Core Expertise)",
      skills: ["Node.js", "Express.js", "MongoDB"],
      highlight: true,
    },
    {
      title: "Languages",
      skills: ["JavaScript", "Java", "Python", "SQL", "HTML", "CSS"],
    },
    {
      title: "Technologies & Frameworks",
      skills: ["Redis", "Memcached", "Jest", "React.js", "Docker", "jQuery"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "VS Code", "Jira", "Postman", "CodeTantra"],
    },
  ];

  return (
    <section id="skills" className="py-20 gradient-hero" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className={`gradient-card p-8 rounded-lg shadow-card ${
                  category.highlight ? "border-2 border-primary shadow-glow" : ""
                }`}
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {category.title}
                  {category.highlight && (
                    <span className="ml-3 text-sm text-primary">★ Primary Focus</span>
                  )}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className={`text-base px-4 py-2 ${
                          category.highlight
                            ? "bg-primary/20 text-primary border border-primary"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
