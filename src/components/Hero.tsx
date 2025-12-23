import heroImage from "@/assets/hero-lawyer.jpg";
import { Button } from "@/components/ui/button";
import { Shield, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
        <div className="flex justify-center mb-8 reveal">
          <Shield className="h-16 w-16 text-accent" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white text-architectural mb-8 reveal">
          ЗАЩИТА
          <br />
          <span className="text-accent">ВАШИХ ПРАВ</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-3xl mx-auto mb-12 reveal-delayed">
          Профессиональная юридическая помощь в уголовных, гражданских и семейных делах. 
          Более 15 лет успешной практики.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-delayed">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
          >
            Консультация
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
            asChild
          >
            <a href="tel:+79133930700">
              <Phone className="mr-2 h-5 w-5" />
              +7 (913) 393-07-00
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40" />
        <div className="text-minimal text-white/60 mt-4">
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;