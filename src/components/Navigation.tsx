import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'casos', label: 'Casos' },
    { id: 'por-que-escolher', label: 'Por Que Escolher' },
    { id: 'impacto-social', label: 'Impacto Social' },
    { id: 'conteudo', label: 'Conteúdo' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/93ea0413-9261-47d8-bffa-cb437ae5d4df.png" 
              alt="Z Engenharia Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-foreground">Z Engenharia</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contato')} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contato')} className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                Contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;