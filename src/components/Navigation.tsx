import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.jpeg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Логотип" className="h-10 w-auto" />
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          <a href="/#services" className="text-minimal text-muted-foreground hover:text-accent transition-colors duration-300">
            УСЛУГИ
          </a>
          <a href="/#about" className="text-minimal text-muted-foreground hover:text-accent transition-colors duration-300">
            ОБ АДВОКАТЕ
          </a>
          <a href="/#cases" className="text-minimal text-muted-foreground hover:text-accent transition-colors duration-300">
            ПРАКТИКА
          </a>
          <a href="/#contact" className="text-minimal text-muted-foreground hover:text-accent transition-colors duration-300">
            КОНТАКТЫ
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Консультация
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <a href="/#services" className="block text-minimal text-muted-foreground hover:text-accent transition-colors duration-300">
              УСЛУГИ
            </a>
            <a href="/#about" className="block text-minimal text-muted-foreground hover:text-accent transition-colors duration-300">
              ОБ АДВОКАТЕ
            </a>
            <a href="/#cases" className="block text-minimal text-muted-foreground hover:text-accent transition-colors duration-300">
              ПРАКТИКА
            </a>
            <a href="/#contact" className="block text-minimal text-muted-foreground hover:text-accent transition-colors duration-300">
              КОНТАКТЫ
            </a>
            
            {/* Mobile Theme Toggle */}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <ThemeToggle />
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Консультация
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;