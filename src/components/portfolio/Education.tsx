import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Code } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Code,
      title: "LeetCode",
      description: "Solved 300+ problems, showcasing a strong grasp of data structures and algorithms",
      color: "text-orange-400",
    },
    {
      icon: Award,
      title: "CodeChef",
      description: "Achieved a 3-star rating, demonstrating coding skills and problem-solving abilities",
      color: "text-amber-400",
    },
  ];

  return (
    <section id="education" className="py-20 gradient-hero" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Education & <span className="text-primary">Achievements</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="gradient-card p-8 rounded-lg shadow-card"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-12 h-12 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    B.Tech in Computer Science And Engineering
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-2">
                    Noida Institute Of Engineering And Technology, Greater Noida
                  </p>
                  <p className="text-muted-foreground mb-2">Nov 2020 – May 2024</p>
                  <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-lg font-semibold">
                    CGPA: 8.0/10
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="gradient-card p-6 rounded-lg shadow-card hover:shadow-glow transition-smooth"
                >
                  <achievement.icon className={`w-10 h-10 ${achievement.color} mb-4`} />
                  <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
