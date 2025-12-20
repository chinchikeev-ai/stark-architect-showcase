import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-minimal text-accent mb-4">СВЯЗАТЬСЯ</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-8">
                Запишитесь на
                <br />
                консультацию
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Первичная консультация — бесплатно. Расскажите о вашей ситуации, 
                и мы вместе найдём оптимальное решение.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="tel:+79133930700" 
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors duration-300"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-minimal text-muted-foreground mb-1">ТЕЛЕФОН</p>
                    <p className="text-xl font-medium">+7 (913) 393-07-00</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:Ch.legal@mail.ru" 
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors duration-300"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-minimal text-muted-foreground mb-1">EMAIL</p>
                    <p className="text-xl font-medium">Ch.legal@mail.ru</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-minimal text-muted-foreground mb-1">АДРЕС</p>
                    <p className="text-xl font-medium">г. Новосибирск</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-minimal text-muted-foreground mb-1">РЕЖИМ РАБОТЫ</p>
                    <p className="text-xl font-medium">Пн-Пт: 9:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary text-primary-foreground p-10 rounded-lg">
              <h4 className="text-2xl text-architectural mb-6">
                Оставьте заявку
              </h4>
              <p className="text-primary-foreground/80 mb-8">
                Опишите вашу ситуацию, и я свяжусь с вами в течение 30 минут.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="text-minimal text-accent mb-2 block">ИМЯ</label>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
                  />
                </div>
                
                <div>
                  <label className="text-minimal text-accent mb-2 block">ТЕЛЕФОН</label>
                  <input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
                  />
                </div>
                
                <div>
                  <label className="text-minimal text-accent mb-2 block">СООБЩЕНИЕ</label>
                  <textarea 
                    rows={4}
                    placeholder="Кратко опишите вашу ситуацию..."
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
              </form>
              
              <p className="text-sm text-primary-foreground/60 mt-6 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;