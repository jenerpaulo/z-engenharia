import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, Paintbrush, CheckCircle, Building2, Hammer } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Reforma de Fachada Predial",
      description: "Revitalização completa de fachadas com técnicas modernas, tratamento de patologias e acabamentos de alta qualidade.",
      features: ["Diagnóstico completo", "Tratamento de patologias", "Impermeabilização", "Acabamento premium"],
      link: "/servicos/reforma-fachada-predial"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manutenção Predial",
      description: "Serviços completos de manutenção preventiva e corretiva para garantir a durabilidade e segurança de sua fachada.",
      features: ["Inspeção técnica", "Manutenção preventiva", "Relatórios detalhados", "Suporte 24/7"],
      link: null
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Impermeabilização",
      description: "Soluções avançadas em impermeabilização para proteger sua edificação contra infiltrações e umidade.",
      features: ["Diagnóstico completo", "Materiais de qualidade", "Garantia estendida", "Técnicas modernas"],
      link: null
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Consultoria Técnica",
      description: "Assessoria especializada para projetos de fachadas, laudos técnicos e aprovações junto aos órgãos competentes.",
      features: ["Laudos técnicos", "Projetos executivos", "Aprovações legais", "Acompanhamento"],
      link: null
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Reformas Estruturais",
      description: "Reformas completas com foco na modernização e adequação às normas de segurança atuais.",
      features: ["Projeto estrutural", "Execução completa", "Normas técnicas", "Pós-obra"],
      link: null
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Inspeção e Laudos",
      description: "Inspeções técnicas detalhadas e emissão de laudos para avaliação do estado da fachada.",
      features: ["Inspeção completa", "Laudo técnico", "Recomendações", "Plano de ação"],
      link: null
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados em engenharia de fachadas, 
            sempre com foco na qualidade, segurança e satisfação do cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link ? (
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to={service.link}>Saiba Mais</Link>
                  </Button>
                ) : (
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Saiba Mais
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;