import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Software Developer",
      company: "Prutor.ai (IIT Kanpur)",
      location: "Noida",
      period: "June 2024 – Present",
      description:
        "Contributed to full-stack projects using Node.js, Express.js, and MongoDB for the back-end, and implemented HTML, CSS, jQuery, and JavaScript for the front-end. Played a key role in the developing and maintenance of the features of the Ministry of Education project 'SATHEE.'",
      achievements: [
        "Developed and maintained a quiz module for SATHEE with 10,000+ registered users and 10,000+ daily active users, along with designing RESTful APIs to support and enhance its functionality.",
        "Implemented secure authentication and role-based access control using OAuth, JWT, session-based methods, and CSRF protection, ensuring compliance with modern security standards.",
        "Optimized database queries, improving application performance and response times by up to 40%.",
        "Collaborated with cross-functional teams in an Agile environment to ship production-ready features, conduct code reviews, and ensure high code quality and maintainability.",
      ],
    },
    {
      title: "Node.js Developer Intern",
      company: "Prutor.ai",
      location: "Noida",
      period: "Sept 2023 – May 2024",
      description: "",
      achievements: [
        "Participated in the migration of SQL-based databases to MongoDB, ensuring data integrity and optimizing database schema for NoSQL architecture.",
        "Enhanced UI/UX with Bootstrap, HTML, CSS, JavaScript, jQuery, AJAX, and doT.js templates.",
        "Collaborated on full-stack development and demonstrated strong problem-solving and self-learning skills.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-glow" />
                
                <div className="gradient-card p-6 rounded-lg shadow-card hover:shadow-glow transition-smooth">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-foreground mb-4">{exp.description}</p>
                  )}

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
