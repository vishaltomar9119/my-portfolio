import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Vehicle Rental Service",
      description:
        "Developed a vehicle rental platform with a seamless user experience, enabling users to find and book vehicles easily through a single search.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Online Quiz Application",
      description:
        "Built a full-stack quiz application with a user-friendly interface for taking quizzes and viewing results.",
      technologies: ["Bootstrap", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="gradient-card p-8 rounded-lg shadow-card hover:shadow-glow transition-smooth cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`${
                        tech === "Node.js" || tech === "Express.js" || tech === "MongoDB"
                          ? "bg-primary/20 text-primary border border-primary"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {tech}
                    </Badge>
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

export default Projects;
