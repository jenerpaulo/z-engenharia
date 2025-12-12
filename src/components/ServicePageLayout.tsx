import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceBenefit {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  process: string[];
  ctaText?: string;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  process,
  ctaText = "Solicite um Orçamento"
}: ServicePageLayoutProps) => {
  const scrollToContact = () => {
    const element = document.getElementById('contato-servico');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/93ea0413-9261-47d8-bffa-cb437ae5d4df.png" 
                alt="Z Engenharia Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Link>
              <Button onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary/90">
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              {subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                {ctaText}
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                <Mail className="w-5 h-5 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            O Que Oferecemos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Por Que Escolher Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Conheça os diferenciais que fazem da Z Engenharia a melhor escolha para seu projeto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <div className="text-primary">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Como Funciona
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
              {process.map((step, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl z-10">
                    {index + 1}
                  </div>
                  <div className="ml-6 pt-4">
                    <p className="text-lg text-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato-servico" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto Para Transformar Sua Fachada?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato conosco e solicite um orçamento sem compromisso. Nossa equipe está pronta para atender você.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground">contato@zengenharia.com</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">São Paulo, SP</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10">
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img 
              src="/lovable-uploads/93ea0413-9261-47d8-bffa-cb437ae5d4df.png" 
              alt="Z Engenharia Logo" 
              className="h-8 w-auto"
            />
            <p className="text-muted-foreground text-sm">
              © 2024 Z Engenharia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicePageLayout;
