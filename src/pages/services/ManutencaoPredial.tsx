import ServicePageLayout from "@/components/ServicePageLayout";
import { Shield, Clock, Award, Users } from "lucide-react";

const ManutencaoPredial = () => {
  const features = [
    {
      title: "Manutenção Preventiva",
      description: "Programa de manutenção periódica para evitar problemas e prolongar a vida útil das instalações."
    },
    {
      title: "Manutenção Corretiva",
      description: "Reparos emergenciais e correção de problemas estruturais, elétricos e hidráulicos."
    },
    {
      title: "Sistemas Elétricos",
      description: "Revisão de quadros, fiação, iluminação e adequação às normas de segurança."
    },
    {
      title: "Sistemas Hidráulicos",
      description: "Manutenção de bombas, caixas d'água, tubulações e sistemas de esgoto."
    },
    {
      title: "Elevadores e Equipamentos",
      description: "Acompanhamento e coordenação de manutenção de elevadores e equipamentos prediais."
    },
    {
      title: "Conservação Predial",
      description: "Limpeza de fachadas, manutenção de jardins, pintura e pequenos reparos."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Prevenção de Problemas",
      description: "Identificação antecipada de falhas evitando gastos maiores no futuro."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Atendimento Rápido",
      description: "Equipe disponível para emergências com tempo de resposta reduzido."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Profissionais Qualificados",
      description: "Técnicos especializados em todas as áreas de manutenção predial."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestão Integrada",
      description: "Relatórios detalhados e planejamento anual de manutenções."
    }
  ];

  const process = [
    "Visita técnica para diagnóstico completo do edifício",
    "Elaboração de plano de manutenção personalizado",
    "Definição de cronograma e prioridades",
    "Execução das manutenções preventivas programadas",
    "Atendimento de chamados para manutenções corretivas",
    "Relatórios mensais de atividades e recomendações",
    "Revisão anual do plano de manutenção"
  ];

  return (
    <ServicePageLayout
      title="Manutenção Predial"
      subtitle="Serviço Especializado"
      description="Soluções completas de manutenção preventiva e corretiva para seu edifício. Garantimos o funcionamento adequado de todas as instalações e a valorização do seu patrimônio."
      heroImage="/lovable-uploads/de72fc87-e00a-4c65-84fa-617240a42da3.png"
      features={features}
      benefits={benefits}
      process={process}
      ctaText="Solicite um Orçamento"
    />
  );
};

export default ManutencaoPredial;
