import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Building,
  Shield,
  Award
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    "Manutenção Predial",
    "Impermeabilização",
    "Restauração de Fachadas",
    "Consultoria Técnica",
    "Reformas Estruturais",
    "Inspeção e Laudos"
  ];

  const quickLinks = [
    { label: "Sobre Nós", id: "inicio" },
    { label: "Nossos Serviços", id: "servicos" },
    { label: "Casos de Sucesso", id: "casos" },
    { label: "Por Que Escolher", id: "por-que-escolher" },
    { label: "Impacto Social", id: "impacto-social" },
    { label: "Blog", id: "conteudo" },
    { label: "FAQ", id: "faq" }
  ];

  return (
    <footer id="contato" className="bg-gradient-section border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/93ea0413-9261-47d8-bffa-cb437ae5d4df.png" 
                alt="Z Engenharia Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-foreground">Z Engenharia</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Especialistas em engenharia de fachadas prediais com mais de 15 anos de experiência. 
              Transformando edifícios e criando valor para nossos clientes.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Certificação ISO 9001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">PBQP-H Qualificado</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">CREA Registrado</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group text-left"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Endereço Principal</p>
                  <p className="text-muted-foreground text-sm">
                    Rua das Fachadas, 123<br />
                    Centro - São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Telefones</p>
                  <p className="text-muted-foreground text-sm">
                    (11) 3456-7890<br />
                    (11) 99876-5432
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">E-mail</p>
                  <p className="text-muted-foreground text-sm">
                    contato@zengenharia.com.br<br />
                    orcamento@zengenharia.com.br
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Horário de Atendimento</p>
                  <p className="text-muted-foreground text-sm">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h<br />
                    Emergências: 24h
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Solicitar Orçamento Grátis
            </Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <Separator className="my-12 bg-border" />
        
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            Receba Nossas Novidades
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Inscreva-se em nossa newsletter e fique por dentro das últimas tendências 
            em engenharia de fachadas, dicas técnicas e novidades da Z Engenharia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-background border-border focus:border-primary"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Inscrever-se
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border bg-background/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Z Engenharia - Fachada Predial. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;