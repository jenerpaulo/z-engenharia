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
    <section 
      id="inicio" 
      className="min-h-screen relative flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.8)), url('/lovable-uploads/de72fc87-e00a-4c65-84fa-617240a42da3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            Transformando
            <span className="block text-amber-400">Fachadas</span>
            <span className="block">Prediais</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Especialistas em engenharia de fachadas prediais com mais de 15 anos de experiência. 
            Oferecemos soluções completas em manutenção, restauração e modernização de edifícios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('servicos')} 
              size="lg" 
              className="text-lg px-8 py-4 bg-amber-500 text-slate-900 hover:bg-amber-400 group font-semibold"
            >
              Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contato')} 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 bg-slate-900/20 backdrop-blur-sm"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                <Building className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-200">Projetos Realizados</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-slate-200">Anos de Experiência</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-slate-200">Satisfação do Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;