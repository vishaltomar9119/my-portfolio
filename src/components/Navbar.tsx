import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "summary" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="w-full py-4 px-6 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          VT
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              onClick={() => scrollToSection(link.id)}
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
            >
              {link.label}
            </Button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="hover:bg-primary/10 transition-smooth"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-primary" />
          ) : (
            <Moon className="h-5 w-5 text-primary" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden mt-4 flex flex-wrap gap-2 justify-center">
        {navLinks.map((link) => (
          <Button
            key={link.id}
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection(link.id)}
            className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
          >
            {link.label}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
