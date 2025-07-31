import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Leaf, GraduationCap, Home, Lightbulb } from "lucide-react";

const SocialImpact = () => {
  const impacts = [
    {
      icon: <Home className="w-12 h-12" />,
      number: "1,200+",
      label: "Famílias Beneficiadas",
      description: "Moradia digna através de projetos sociais"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      number: "350+",
      label: "Jovens Capacitados",
      description: "Formação técnica em construção civil"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      number: "40%",
      label: "Redução de Energia",
      description: "Eficiência energética em projetos sustentáveis"
    },
    {
      icon: <Users className="w-12 h-12" />,
      number: "50+",
      label: "Empregos Gerados",
      description: "Oportunidades de trabalho em comunidades"
    }
  ];

  const projects = [
    {
      title: "Projeto Moradia Digna",
      description: "Recuperação de fachadas em conjuntos habitacionais populares, beneficiando mais de 500 famílias em situação de vulnerabilidade social.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop",
      impact: "Melhoria na qualidade de vida e valorização dos imóveis"
    },
    {
      title: "Escola Técnica Comunitária",
      description: "Parceria com ONGs para capacitação de jovens em técnicas de construção civil e manutenção predial.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      impact: "Formação profissional e inserção no mercado de trabalho"
    },
    {
      title: "Edifícios Verdes",
      description: "Implementação de soluções sustentáveis em edifícios públicos, reduzindo o consumo energético e impacto ambiental.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
      impact: "Sustentabilidade ambiental e economia de recursos"
    }
  ];

  return (
    <section id="impacto-social" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-6">
            Nosso <span className="text-primary">Impacto Social</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acreditamos que a engenharia vai além da técnica. Nossos projetos transformam vidas 
            e contribuem para o desenvolvimento social das comunidades.
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
                <div className="text-primary">
                  {impact.icon}
                </div>
              </div>
              <div className="text-4xl font-black text-primary mb-2">{impact.number}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{impact.label}</div>
              <div className="text-muted-foreground">{impact.description}</div>
            </div>
          ))}
        </div>

        {/* Social Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Heart className="w-5 h-5 text-primary mr-2" />
                    <span className="font-semibold text-foreground">Impacto Gerado:</span>
                  </div>
                  <p className="text-muted-foreground">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Faça Parte da Transformação
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Junte-se a nós em projetos que geram impacto social positivo. 
                Vamos construir um futuro melhor para todos.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Saiba Como Participar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;