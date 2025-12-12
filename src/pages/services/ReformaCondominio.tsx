import ServicePageLayout from "@/components/ServicePageLayout";
import { Shield, Clock, Award, Users, Building, ClipboardCheck, Hammer, Lightbulb } from "lucide-react";

const ReformaCondominio = () => {
  const features = [
    {
      title: "Planejamento Integrado",
      description: "Análise completa das necessidades do condomínio, priorizando intervenções e otimizando recursos."
    },
    {
      title: "Áreas Comuns",
      description: "Revitalização de halls, corredores, salões de festas, playgrounds e áreas de lazer."
    },
    {
      title: "Instalações Elétricas e Hidráulicas",
      description: "Modernização de sistemas elétricos, hidráulicos e de gás conforme normas vigentes."
    },
    {
      title: "Impermeabilização",
      description: "Tratamento de lajes, coberturas, piscinas e garagens para eliminar infiltrações."
    },
    {
      title: "Pintura e Acabamentos",
      description: "Renovação estética completa com materiais de alta durabilidade e qualidade."
    },
    {
      title: "Adequação às Normas",
      description: "Regularização junto à prefeitura, corpo de bombeiros e demais órgãos competentes."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia de Qualidade",
      description: "Todos os serviços com garantia contratual e materiais de primeira linha."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Mínima Interferência",
      description: "Planejamento para causar o menor impacto possível na rotina dos moradores."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Equipe Especializada",
      description: "Profissionais experientes em reformas condominiais de todos os portes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunicação Transparente",
      description: "Relatórios periódicos e canal direto com síndico e conselho."
    }
  ];

  const process = [
    "Reunião inicial com síndico e conselho para entender as necessidades",
    "Vistoria técnica completa de todas as áreas do condomínio",
    "Elaboração de projeto executivo e orçamento detalhado",
    "Apresentação e aprovação em assembleia condominial",
    "Definição do cronograma respeitando a rotina dos moradores",
    "Execução das obras com equipe uniformizada e identificada",
    "Entrega final com toda documentação e termo de garantia"
  ];

  return (
    <ServicePageLayout
      title="Reforma de Condomínio"
      subtitle="Serviço Especializado"
      description="Soluções completas para reforma e manutenção de condomínios residenciais e comerciais. Valorizamos seu patrimônio com planejamento eficiente e execução de qualidade."
      heroImage="/lovable-uploads/de72fc87-e00a-4c65-84fa-617240a42da3.png"
      features={features}
      benefits={benefits}
      process={process}
      ctaText="Solicite um Orçamento"
    />
  );
};

export default ReformaCondominio;
