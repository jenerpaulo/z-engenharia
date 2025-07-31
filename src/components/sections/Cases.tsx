import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const Cases = () => {
  const cases = [
    {
      title: "Edifício Comercial Centro",
      location: "São Paulo, SP",
      year: "2023",
      description: "Restauração completa da fachada de edifício comercial de 15 andares no centro de São Paulo.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      results: ["Redução de 40% nos custos de manutenção", "Valorização de 25% do imóvel", "Certificação LEED Gold"]
    },
    {
      title: "Condomínio Residencial Premium",
      location: "Rio de Janeiro, RJ",
      year: "2023",
      description: "Modernização e impermeabilização de fachada em condomínio residencial de alto padrão.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      results: ["100% de aprovação dos moradores", "Garantia estendida de 10 anos", "Redução de infiltrações"]
    },
    {
      title: "Hospital Regional",
      location: "Belo Horizonte, MG",
      year: "2022",
      description: "Reforma estrutural e adequação às normas de segurança em hospital de grande porte.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      results: ["Certificação hospitalar renovada", "Zero interrupções no funcionamento", "Economia energética de 30%"]
    },
    {
      title: "Shopping Center Metropolitano",
      location: "Brasília, DF",
      year: "2022",
      description: "Revitalização completa da fachada de shopping center com 200 lojas.",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&h=400&fit=crop",
      results: ["Aumento de 15% no fluxo de visitantes", "Modernização tecnológica", "Sustentabilidade ambiental"]
    },
    {
      title: "Torre Corporativa",
      location: "Curitiba, PR",
      year: "2021",
      description: "Instalação de sistema de fachada ventilada em torre corporativa de 30 andares.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      results: ["Eficiência energética máxima", "Design inovador premiado", "Tecnologia de ponta"]
    },
    {
      title: "Conjunto Habitacional Social",
      location: "Salvador, BA",
      year: "2021",
      description: "Recuperação de fachadas em conjunto habitacional beneficiando 500 famílias.",
      image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=600&h=400&fit=crop",
      results: ["Impacto social positivo", "Melhoria na qualidade de vida", "Parceria público-privada"]
    }
  ];

  return (
    <section id="casos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-6">
            Nossos <span className="text-primary">Casos de Sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram a paisagem urbana e a vida das pessoas. 
            Cada projeto é uma história de sucesso e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((project, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Ver Detalhes
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;