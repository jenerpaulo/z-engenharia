import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Building2
} from "lucide-react";

const Footer = () => {
  const services = [
    "Manutenção Preventiva",
    "Restauração de Fachadas", 
    "Impermeabilização",
    "Pintura Especializada",
    "Modernização",
    "Consultoria Técnica"
  ];

  const quickLinks = [
    "Sobre Nós",
    "Nossos Serviços",
    "Casos de Sucesso",
    "Blog Técnico",
    "Contato",
    "Orçamento Gratuito"
  ];

  return (
    <footer id="contato" className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Mantenha-se Atualizado
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              Receba dicas técnicas, novidades do setor e conteúdo exclusivo sobre engenharia de fachadas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Seu melhor e-mail"
                className="bg-white text-slate-900 border-slate-300 flex-1"
              />
              <Button className="bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold px-6">
                Assinar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/93ea0413-9261-47d8-bffa-cb437ae5d4df.png" 
                  alt="Z Engenharia" 
                  className="h-12 w-auto mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold">Z Engenharia</h3>
                  <p className="text-slate-400 text-sm">Fachada Predial</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Especialistas em engenharia de fachadas prediais há mais de 15 anos. 
                Transformamos e preservamos a beleza e funcionalidade dos edifícios.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                    >
                      <Building2 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-amber-400 transition-colors" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-slate-500 group-hover:text-amber-400 transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">
                      Rua das Fachadas, 123<br />
                      Copacabana, Rio de Janeiro - RJ<br />
                      CEP: 22070-000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">(21) 3333-4444</p>
                    <p className="text-slate-300">(21) 99999-8888</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                  <p className="text-slate-300">contato@zengenharia.com</p>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      <span className="text-amber-400">Atendimento 24h para emergências</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Z Engenharia - Fachada Predial. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
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