import ServicePageLayout from "@/components/ServicePageLayout";
import { Shield, Clock, Award, Users } from "lucide-react";

const ImpermeabilizacaoEdificios = () => {
  const features = [
    {
      title: "Lajes e Coberturas",
      description: "Impermeabilização de lajes expostas, coberturas planas e telhados com materiais de alta performance."
    },
    {
      title: "Terraços e Varandas",
      description: "Tratamento especializado para áreas externas expostas às intempéries."
    },
    {
      title: "Piscinas e Reservatórios",
      description: "Impermeabilização de piscinas, cisternas e caixas d'água com produtos atóxicos."
    },
    {
      title: "Garagens e Subsolos",
      description: "Tratamento de infiltrações em áreas enterradas e semi-enterradas."
    },
    {
      title: "Jardineiras e Floreiras",
      description: "Impermeabilização de jardineiras evitando infiltrações nas unidades abaixo."
    },
    {
      title: "Juntas de Dilatação",
      description: "Tratamento de juntas estruturais com materiais flexíveis e duráveis."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia Estendida",
      description: "Até 10 anos de garantia dependendo do sistema aplicado."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Execução Rápida",
      description: "Técnicas modernas que reduzem o tempo de obra e liberação da área."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Materiais Premium",
      description: "Utilizamos apenas produtos de marcas reconhecidas no mercado."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipe Certificada",
      description: "Profissionais treinados pelos fabricantes dos materiais."
    }
  ];

  const process = [
    "Inspeção detalhada para identificar origem das infiltrações",
    "Definição do sistema de impermeabilização mais adequado",
    "Preparação da superfície e remoção de impermeabilização antiga",
    "Aplicação do sistema impermeabilizante em camadas",
    "Teste de estanqueidade para garantir a eficácia",
    "Proteção mecânica quando necessário",
    "Entrega com certificado de garantia"
  ];

  return (
    <ServicePageLayout
      title="Impermeabilização de Edifícios"
      subtitle="Serviço Especializado"
      description="Soluções definitivas contra infiltrações e umidade. Proteja seu patrimônio com sistemas de impermeabilização de alta performance e durabilidade comprovada."
      heroImage="/lovable-uploads/de72fc87-e00a-4c65-84fa-617240a42da3.png"
      features={features}
      benefits={benefits}
      process={process}
      ctaText="Solicite um Orçamento"
    />
  );
};

export default ImpermeabilizacaoEdificios;
