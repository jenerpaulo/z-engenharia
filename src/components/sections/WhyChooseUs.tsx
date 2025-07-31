import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Award, Wrench, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Experiência Comprovada",
      description: "Mais de 15 anos no mercado com centenas de projetos bem-sucedidos em todo o Brasil.",
      stats: "500+ projetos concluídos"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificações e Qualidade",
      description: "Equipe certificada e processos que seguem as mais rigorosas normas técnicas nacionais e internacionais.",
      stats: "ISO 9001 e PBQP-H"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pontualidade Garantida",
      description: "Cumprimos 100% dos prazos estabelecidos, com planejamento detalhado e execução eficiente.",
      stats: "100% dos prazos cumpridos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados com formação técnica específica em engenharia de fachadas.",
      stats: "50+ especialistas"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tecnologia Avançada",
      description: "Utilizamos equipamentos de última geração e técnicas inovadoras para resultados superiores.",
      stats: "Tecnologia de ponta"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compromisso Social",
      description: "Desenvolvemos projetos que geram impacto social positivo e contribuem para comunidades carentes.",
      stats: "1000+ famílias beneficiadas"
    }
  ];

  return (
    <section id="por-que-escolher" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-6">
            Por Que <span className="text-primary">Escolher a Z Engenharia?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos referência no mercado de engenharia de fachadas prediais. 
            Nossa experiência, qualidade e compromisso nos diferem da concorrência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {reason.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {reason.description}
                </p>
                
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  {reason.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="text-center">
            <div className="text-6xl text-primary mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-8 italic">
              A Z Engenharia transformou completamente nosso edifício. O profissionalismo, 
              a qualidade do trabalho e o cumprimento dos prazos superaram nossas expectativas.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                alt="Cliente" 
                className="w-15 h-15 rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">Carlos Mendonça</div>
                <div className="text-muted-foreground">Síndico - Edifício Empresarial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;