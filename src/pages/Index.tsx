import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import { Scale } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-accent" />
                <span className="text-minimal font-semibold">ПРАВО И ЗАЩИТА</span>
              </div>
              
              <p className="text-primary-foreground/60 text-sm text-center">
                © 2024 Адвокат Иванов И.И. Все права защищены.
              </p>
              
              <div className="flex items-center gap-6">
                <a href="#" className="text-minimal text-primary-foreground/60 hover:text-accent transition-colors">
                  TELEGRAM
                </a>
                <a href="#" className="text-minimal text-primary-foreground/60 hover:text-accent transition-colors">
                  WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;