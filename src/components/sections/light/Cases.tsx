import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      title: "Edifício Residencial Premium",
      location: "Barra da Tijuca, RJ",
      year: "2023",
      service: "Restauração Completa",
      description: "Restauração completa da fachada de edifício residencial de 20 andares com modernização do sistema de impermeabilização.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      results: ["Redução de 40% nos custos de manutenção", "Melhoria na eficiência energética", "Valorização do imóvel em 25%"]
    },
    {
      title: "Centro Comercial Leblon",
      location: "Leblon, RJ",
      year: "2023",
      service: "Manutenção Preventiva",
      description: "Programa de manutenção preventiva para centro comercial de alto padrão com foco na preservação estética.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      results: ["Programa de 5 anos implementado", "Zero incidentes estruturais", "Satisfação de 100% dos lojistas"]
    },
    {
      title: "Condomínio Vista Mar",
      location: "Copacabana, RJ",
      year: "2022",
      service: "Impermeabilização",
      description: "Impermeabilização especializada em edifício frente ao mar com proteção contra maresia e umidade.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      results: ["Eliminação total de infiltrações", "Garantia de 10 anos", "Resistência à maresia comprovada"]
    },
    {
      title: "Edifício Corporativo",
      location: "Centro, RJ",
      year: "2022",
      service: "Modernização",
      description: "Modernização de fachada corporativa com implementação de sistema de eficiência energética.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      results: ["30% de economia energética", "Certificação LEED", "ROI em 3 anos"]
    },
    {
      title: "Residencial Jardim Botânico",
      location: "Jardim Botânico, RJ",
      year: "2021",
      service: "Pintura Especializada",
      description: "Pintura especializada com tintas de alta durabilidade em edifício histórico preservando características originais.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop",
      results: ["Preservação do patrimônio histórico", "Durabilidade de 15 anos", "Aprovação do IPHAN"]
    },
    {
      title: "Torres Empresariais",
      location: "Barra da Tijuca, RJ",
      year: "2021",
      service: "Consultoria Técnica",
      description: "Consultoria completa para projeto de fachadas de complexo empresarial com 3 torres de 30 andares.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      results: ["Projeto aprovado em primeira instância", "Redução de 20% nos custos", "Cronograma cumprido integralmente"]
    }
  ];

  return (
    <section id="casos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">Casos de Sucesso</Badge>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Projetos que
            <span className="block text-amber-600">Transformaram Fachadas</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos principais projetos e os resultados excepcionais 
            que alcançamos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-slate-200 hover:shadow-amber-500/10">
              <div className="relative overflow-hidden">
                <img 
                  src={case_.image} 
                  alt={case_.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-500 text-slate-900 border-amber-600">
                    {case_.service}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-700 transition-colors">
                  {case_.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-amber-500" />
                    {case_.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-amber-500" />
                    {case_.year}
                  </div>
                </div>
                
                <p className="text-slate-200 mb-4 text-sm leading-relaxed">
                  {case_.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-700 font-medium text-sm">
                    <Users className="w-4 h-4 mr-2 text-amber-500" />
                    Principais Resultados:
                  </div>
                  <ul className="space-y-1">
                    {case_.results.map((result, idx) => (
                      <li key={idx} className="text-xs text-slate-600 pl-6">
                        • {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group border-amber-300 text-amber-700 hover:bg-amber-500 hover:text-white hover:border-amber-500"
                >
                  Ver Detalhes
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
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
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;