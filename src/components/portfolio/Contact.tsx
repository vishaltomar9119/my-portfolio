import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tomarvishal9119@gmail.com",
      href: "mailto:tomarvishal9119@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8126979465",
      href: "tel:+918126979465",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "vishaltomar",
      href: "https://linkedin.com/in/vishaltomar",
    },
    {
      icon: Github,
      label: "GitHub",
      username: "vishaltomar9119",
      href: "https://github.com/vishaltomar9119",
    },
  ];

  return (
    <section id="contact" className="py-20 gradient-hero" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="gradient-card p-6 rounded-lg shadow-card text-center"
                >
                  <contact.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-2">{contact.label}</p>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-foreground hover:text-primary transition-smooth font-medium"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{contact.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  size="lg"
                  className="bg-card hover:bg-primary/10 text-foreground border border-border hover:border-primary shadow-card hover:shadow-glow transition-smooth group"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <social.icon className="w-5 h-5 group-hover:text-primary transition-smooth" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">{social.label}</div>
                      <div className="font-semibold">{social.username}</div>
                    </div>
                  </a>
                </Button>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground">
          © 2025 Vishal Tomar. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
