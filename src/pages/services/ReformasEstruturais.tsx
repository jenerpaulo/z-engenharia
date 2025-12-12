import ServicePageLayout from "@/components/ServicePageLayout";
import { Shield, Clock, Award, Users } from "lucide-react";

const ReformasEstruturais = () => {
  const features = [
    {
      title: "Reforço de Pilares e Vigas",
      description: "Recuperação e reforço estrutural utilizando técnicas avançadas de engenharia."
    },
    {
      title: "Tratamento de Concreto",
      description: "Reparo de concreto deteriorado, trincas, fissuras e corrosão de armaduras."
    },
    {
      title: "Recuperação de Lajes",
      description: "Reforço e recuperação de lajes com problemas estruturais ou sobrecarga."
    },
    {
      title: "Fundações",
      description: "Reforço de fundações e tratamento de recalques diferenciais."
    },
    {
      title: "Proteção Catódica",
      description: "Sistemas de proteção contra corrosão das armaduras de aço."
    },
    {
      title: "Retrofit Estrutural",
      description: "Adequação estrutural para mudança de uso ou aumento de carga."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Garantida",
      description: "Projetos assinados por engenheiros estruturais com ART."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Diagnóstico Preciso",
      description: "Ensaios e análises para identificar a real condição estrutural."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Técnicas Modernas",
      description: "Utilização de fibra de carbono, graute e outros materiais de alta tecnologia."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipe Especializada",
      description: "Engenheiros e técnicos com experiência em recuperação estrutural."
    }
  ];

  const process = [
    "Inspeção visual e instrumental da estrutura",
    "Ensaios de caracterização do concreto e armaduras",
    "Elaboração de laudo técnico com diagnóstico",
    "Projeto executivo de reforço ou recuperação",
    "Execução das intervenções estruturais",
    "Controle de qualidade durante a execução",
    "Entrega com documentação técnica completa"
  ];

  return (
    <ServicePageLayout
      title="Reformas Estruturais"
      subtitle="Serviço Especializado"
      description="Recuperação e reforço estrutural de edifícios com segurança e tecnologia. Garantimos a integridade e longevidade da estrutura do seu patrimônio."
      heroImage="/lovable-uploads/de72fc87-e00a-4c65-84fa-617240a42da3.png"
      features={features}
      benefits={benefits}
      process={process}
      ctaText="Solicite um Orçamento"
    />
  );
};

export default ReformasEstruturais;
