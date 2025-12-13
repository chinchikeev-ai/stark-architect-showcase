import { CheckCircle, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const cases = [
    {
      category: "УГОЛОВНОЕ ДЕЛО",
      title: "Оправдательный приговор по статье 159 УК РФ",
      description: "Полное оправдание клиента по обвинению в мошенничестве. Дело прекращено на стадии судебного разбирательства.",
      result: "Оправдан"
    },
    {
      category: "СЕМЕЙНЫЙ СПОР",
      title: "Раздел имущества на сумму более 50 млн рублей",
      description: "Защита интересов клиента при разделе совместно нажитого имущества. Достигнут выгодный результат.",
      result: "Выиграно"
    },
    {
      category: "ГРАЖДАНСКОЕ ДЕЛО",
      title: "Взыскание ущерба с застройщика",
      description: "Успешное взыскание компенсации за нарушение сроков сдачи объекта долевого строительства.",
      result: "Взыскано 3.2 млн"
    },
    {
      category: "ТРУДОВОЙ СПОР",
      title: "Восстановление на работе топ-менеджера",
      description: "Признание увольнения незаконным, восстановление в должности с выплатой компенсации.",
      result: "Восстановлен"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-minimal text-accent mb-4">РЕЗУЛЬТАТЫ РАБОТЫ</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-architectural">
              Успешные дела
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <div 
                key={index} 
                className="group p-8 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-elegant transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-minimal text-accent">
                    {caseItem.category}
                  </span>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">{caseItem.result}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-architectural mb-4 group-hover:text-accent transition-colors duration-300">
                  {caseItem.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {caseItem.description}
                </p>
                
                <button className="flex items-center gap-2 text-accent hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-medium">Подробнее</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;