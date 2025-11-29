import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Zap } from "lucide-react";

const Summary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, label: "Years Experience", value: "1.5+" },
    { icon: Users, label: "Daily Active Users", value: "10,000+" },
    { icon: Zap, label: "Performance Boost", value: "40%" },
  ];

  return (
    <section id="summary" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Professional <span className="text-primary">Summary</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Full-stack developer and Backend Engineer with hands-on experience in building scalable web applications 
              using <span className="text-primary font-semibold">Node.js</span>, <span className="text-primary font-semibold">Express.js</span>, 
              and <span className="text-primary font-semibold">MongoDB</span>. Contributed to high-impact projects like SATHEE, 
              with a focus on performance optimization, REST API development, and secure authentication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="gradient-card p-8 rounded-lg text-center shadow-card hover:shadow-glow transition-smooth"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
