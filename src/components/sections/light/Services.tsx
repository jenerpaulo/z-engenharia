import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Wrench, 
  ShieldCheck, 
  Palette, 
  Zap, 
  HardHat,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Manutenção Preventiva",
      description: "Inspeções regulares e manutenção programada para preservar a integridade estrutural e estética das fachadas.",
      features: ["Inspeção técnica detalhada", "Cronograma personalizado", "Relatórios técnicos", "Garantia de qualidade"],
      badge: "Essencial"
    },
    {
      icon: Wrench,
      title: "Restauração de Fachadas",
      description: "Recuperação completa de fachadas deterioradas, devolvendo a beleza e funcionalidade originais do edifício.",
      features: ["Análise estrutural", "Recuperação de materiais", "Técnicas especializadas", "Acabamento premium"],
      badge: "Especializado"
    },
    {
      icon: ShieldCheck,
      title: "Impermeabilização",
      description: "Proteção contra infiltrações e umidade com materiais de alta qualidade e técnicas avançadas.",
      features: ["Materiais premium", "Garantia estendida", "Tecnologia avançada", "Proteção duradoura"],
      badge: "Proteção"
    },
    {
      icon: Palette,
      title: "Pintura Especializada",
      description: "Serviços de pintura para fachadas com tintas especiais e técnicas profissionais para máxima durabilidade.",
      features: ["Tintas especiais", "Preparação completa", "Acabamento perfeito", "Cores personalizadas"],
      badge: "Estética"
    },
    {
      icon: Zap,
      title: "Modernização",
      description: "Atualização de fachadas com novas tecnologias e materiais modernos para melhor eficiência energética.",
      features: ["Eficiência energética", "Materiais modernos", "Design inovador", "Sustentabilidade"],
      badge: "Inovação"
    },
    {
      icon: HardHat,
      title: "Consultoria Técnica",
      description: "Assessoria especializada em projetos de fachadas prediais e soluções personalizadas.",
      features: ["Projetos customizados", "Análise técnica", "Orçamentos detalhados", "Acompanhamento completo"],
      badge: "Consultoria"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">Nossos Serviços</Badge>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Soluções Completas em
            <span className="block text-amber-600">Engenharia de Fachadas</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados em fachadas prediais, 
            desde manutenção preventiva até modernização completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-slate-200 bg-white hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <service.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <CheckCircle className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group border-amber-300 text-amber-700 hover:bg-amber-500 hover:text-white hover:border-amber-500"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-amber-500 text-slate-900 hover:bg-amber-400 px-8 py-4 text-lg font-semibold"
          >
            Solicitar Orçamento Gratuito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;