import { Gavel, Users, FileText, Building2, Heart, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Gavel,
      title: "УГОЛОВНЫЕ ДЕЛА",
      description: "Защита по уголовным делам любой сложности. Представление интересов на всех стадиях уголовного процесса."
    },
    {
      icon: Users,
      title: "СЕМЕЙНЫЕ СПОРЫ",
      description: "Расторжение брака, раздел имущества, определение места жительства детей, алиментные обязательства."
    },
    {
      icon: FileText,
      title: "ГРАЖДАНСКИЕ ДЕЛА",
      description: "Защита прав потребителей, взыскание долгов, споры с застройщиками, наследственные дела."
    },
    {
      icon: Building2,
      title: "НЕДВИЖИМОСТЬ",
      description: "Сопровождение сделок с недвижимостью, споры о праве собственности, земельные вопросы."
    },
    {
      icon: Heart,
      title: "МЕДИЦИНСКОЕ ПРАВО",
      description: "Защита прав пациентов, споры с медицинскими учреждениями, компенсация вреда здоровью."
    },
    {
      icon: Briefcase,
      title: "ТРУДОВЫЕ СПОРЫ",
      description: "Незаконное увольнение, невыплата заработной платы, восстановление на работе."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-minimal text-accent mb-4">НАПРАВЛЕНИЯ ПРАКТИКИ</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-architectural">
              Юридические услуги
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-elegant transition-all duration-500"
              >
                <service.icon className="h-10 w-10 text-accent mb-6" />
                <h4 className="text-xl font-semibold mb-4 text-architectural group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;