import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Clock, 
  ShieldCheck, 
  Users, 
  Zap, 
  Heart,
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "15+ Anos de Experiência",
      description: "Mais de uma década dedicada exclusivamente à engenharia de fachadas prediais, com centenas de projetos bem-sucedidos."
    },
    {
      icon: ShieldCheck,
      title: "Garantia Estendida",
      description: "Oferecemos garantias de até 10 anos em nossos serviços, demonstrando nossa confiança na qualidade do trabalho realizado."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados e altamente qualificados, com formação específica em engenharia de fachadas e tecnologias avançadas."
    },
    {
      icon: Clock,
      title: "Prazo Garantido",
      description: "Cumprimos rigorosamente os prazos estabelecidos, com cronogramas detalhados e acompanhamento diário das atividades."
    },
    {
      icon: Zap,
      title: "Tecnologia Avançada",
      description: "Utilizamos equipamentos de última geração e materiais inovadores para garantir resultados superiores e maior durabilidade."
    },
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Cada projeto recebe atenção individual, com soluções customizadas que atendem às necessidades específicas de cada cliente."
    }
  ];

  return (
    <section id="por-que-escolher" className="py-24 bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">Por Que Escolher</Badge>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Por Que Somos a
            <span className="block text-amber-600">Melhor Escolha?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Combinamos experiência, tecnologia e compromisso para entregar resultados excepcionais 
            em cada projeto de fachada predial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-amber-100 rounded-2xl w-16 h-16 flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-slate-700 mb-6 italic">
                "A Z Engenharia transformou completamente a fachada do nosso edifício. 
                O trabalho foi impecável, dentro do prazo e superou todas as nossas expectativas. 
                Recomendamos sem hesitação!"
              </blockquote>
              <div className="border-t border-amber-200 pt-6">
                <p className="font-semibold text-slate-800">Maria Silva</p>
                <p className="text-slate-600">Síndica - Edifício Residencial Premium</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;