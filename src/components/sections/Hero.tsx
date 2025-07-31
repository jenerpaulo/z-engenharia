import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 leading-tight">
            Transformando
            <span className="block text-primary">Fachadas</span>
            <span className="block">Prediais</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Especialistas em engenharia de fachadas prediais com mais de 15 anos de experiência. 
            Oferecemos soluções completas em manutenção, restauração e modernização de edifícios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('servicos')} 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contato')} 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground">Satisfação do Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;