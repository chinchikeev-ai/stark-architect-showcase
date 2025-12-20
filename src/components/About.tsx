import { Award, BookOpen, Scale, CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "500+", label: "Выигранных дел" },
    { number: "15", label: "Лет практики" },
    { number: "98%", label: "Довольных клиентов" },
  ];

  const advantages = [
    "Индивидуальный подход к каждому делу",
    "Конфиденциальность информации",
    "Прозрачное ценообразование",
    "Круглосуточная связь с адвокатом",
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-minimal text-accent mb-4">ОБ АДВОКАТЕ</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl text-architectural mb-8">
                Чинчикеева Алиса Валерьевна
              </h3>
              
              <div className="space-y-6 mb-10">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Адвокат Адвокатской палаты Новосибирской области. 
                  Специализируюсь на сложных уголовных и гражданских делах.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Регулярно повышаю квалификацию и слежу за изменениями в законодательстве.
                </p>
              </div>

              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {achievements.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-card rounded-lg border border-border">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-minimal text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Credentials */}
              <div className="space-y-6 p-8 bg-primary text-primary-foreground rounded-lg">
                <h4 className="text-minimal mb-6 text-accent">ОБРАЗОВАНИЕ И СТАТУС</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <BookOpen className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">МГЮА им. О.Е. Кутафина</p>
                      <p className="text-sm opacity-80">Юриспруденция, красный диплом</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Scale className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Адвокатская палата Новосибирской области</p>
                      <p className="text-sm opacity-80">Регистрационный номер: 54/1345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Лучший адвокат 2023</p>
                      <p className="text-sm opacity-80">По версии Legal 500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;