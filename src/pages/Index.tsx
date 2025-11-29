import Navbar from "@/components/Navbar";
import Hero from "@/components/portfolio/Hero";
import Summary from "@/components/portfolio/Summary";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
