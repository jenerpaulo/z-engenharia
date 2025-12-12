import ServicePageLayout from "@/components/ServicePageLayout";
import { Shield, Clock, Award, Users } from "lucide-react";

const InspecaoLaudos = () => {
  const features = [
    {
      title: "Inspeção Predial",
      description: "Vistoria completa de todas as áreas e sistemas do edifício conforme IBAPE."
    },
    {
      title: "Laudo de Autovistoria",
      description: "Documento obrigatório para atendimento à legislação municipal (Lei de Autovistoria)."
    },
    {
      title: "Laudo de Fachada",
      description: "Avaliação das condições de conservação e segurança das fachadas."
    },
    {
      title: "Laudo Estrutural",
      description: "Análise da integridade estrutural com ensaios e mapeamento de patologias."
    },
    {
      title: "Laudo de Instalações",
      description: "Avaliação de sistemas elétricos, hidráulicos, gás e combate a incêndio."
    },
    {
      title: "Perícia Técnica",
      description: "Laudos para fins judiciais, seguros e disputas condominiais."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Conformidade Legal",
      description: "Laudos que atendem às exigências dos órgãos fiscalizadores."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Ágil",
      description: "Prazos reduzidos sem comprometer a qualidade técnica."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Profissionais Habilitados",
      description: "Engenheiros e arquitetos com registro no CREA/CAU."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Relatórios Detalhados",
      description: "Documentação completa com fotos, análises e recomendações."
    }
  ];

  const process = [
    "Solicitação e definição do tipo de laudo necessário",
    "Agendamento da vistoria técnica",
    "Inspeção in loco com registro fotográfico",
    "Análise de documentação existente do edifício",
    "Elaboração do laudo técnico com diagnóstico",
    "Apresentação das conclusões e recomendações",
    "Entrega do laudo assinado com ART/RRT"
  ];

  return (
    <ServicePageLayout
      title="Inspeção e Laudos"
      subtitle="Serviço Especializado"
      description="Inspeções técnicas e laudos profissionais para seu edifício. Atenda às exigências legais e garanta a segurança dos ocupantes com documentação completa."
      heroImage="/lovable-uploads/de72fc87-e00a-4c65-84fa-617240a42da3.png"
      features={features}
      benefits={benefits}
      process={process}
      ctaText="Solicite um Orçamento"
    />
  );
};

export default InspecaoLaudos;
