import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Leaf, 
  GraduationCap, 
  Users,
  TreePine,
  Recycle,
  ArrowRight
} from "lucide-react";

const SocialImpact = () => {
  const impacts = [
    {
      icon: Heart,
      title: "Projetos Sociais",
      description: "Reformas gratuitas em instituições de caridade e organizações sem fins lucrativos.",
      number: "25+",
      label: "Projetos Realizados"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Uso de materiais ecológicos e técnicas sustentáveis em todos os nossos projetos.",
      number: "100%",
      label: "Projetos Sustentáveis"
    },
    {
      icon: GraduationCap,
      title: "Capacitação",
      description: "Programa de treinamento gratuito para jovens em situação de vulnerabilidade social.",
      number: "150+",
      label: "Jovens Capacitados"
    }
  ];

  const initiatives = [
    {
      title: "Orfanato Esperança",
      description: "Reforma completa da fachada e impermeabilização gratuita para orfanato que atende 80 crianças.",
      impact: "Ambiente mais seguro e saudável para as crianças",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop"
    },
    {
      title: "Escola Comunitária Vila Nova",
      description: "Modernização da fachada escolar com foco em eficiência energética e sustentabilidade.",
      impact: "Redução de 40% nos custos de energia da escola",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop"
    },
    {
      title: "Centro de Idosos Vida Plena",
      description: "Restauração e acessibilidade da fachada para centro que atende 200 idosos diariamente.",
      impact: "Melhoria na qualidade de vida dos usuários",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="impacto-social" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Impacto Social</Badge>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Construindo um
            <span className="block text-green-600">Futuro Melhor</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Acreditamos que nossa responsabilidade vai além dos projetos comerciais. 
            Investimos em iniciativas que geram impacto positivo na sociedade e no meio ambiente.
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <Card 
              key={index} 
              className="text-center border-slate-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-green-100 rounded-2xl w-16 h-16 flex items-center justify-center">
                  <impact.icon className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  {impact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {impact.number}
                </div>
                <p className="text-green-700 font-medium mb-3">
                  {impact.label}
                </p>
                <p className="text-slate-600 text-sm">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Environmental Commitment */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mb-16 border border-green-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                Compromisso com o Meio Ambiente
              </h3>
              <p className="text-slate-600 mb-6">
                Implementamos práticas sustentáveis em todos os nossos projetos, 
                contribuindo para um futuro mais verde e responsável.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-green-700">
                  <TreePine className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Materiais Sustentáveis</span>
                </div>
                <div className="flex items-center text-green-700">
                  <Recycle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Reciclagem de Resíduos</span>
                </div>
                <div className="flex items-center text-green-700">
                  <Leaf className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Baixo Impacto Ambiental</span>
                </div>
                <div className="flex items-center text-green-700">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Comunidade Local</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-green-700 font-medium">Redução no Desperdício</p>
              <p className="text-slate-600 text-sm mt-2">
                Comparado aos métodos tradicionais
              </p>
            </div>
          </div>
        </div>

        {/* Social Projects */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Projetos Sociais em Destaque
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="overflow-hidden border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white border-green-600">
                      Projeto Social
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    {initiative.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">
                    {initiative.description}
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-green-700 text-sm font-medium">
                      Impacto: {initiative.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-green-500 text-white hover:bg-green-600 px-8 py-4 text-lg font-semibold"
          >
            Saiba Como Participar
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;