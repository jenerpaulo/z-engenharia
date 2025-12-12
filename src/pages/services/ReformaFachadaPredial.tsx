import ServicePageLayout from "@/components/ServicePageLayout";
import { Shield, Clock, Award, Users, Wrench, FileCheck, Building2, Paintbrush } from "lucide-react";

const ReformaFachadaPredial = () => {
  const features = [
    {
      title: "Diagnóstico Estrutural Completo",
      description: "Avaliação minuciosa do estado atual da fachada, identificando patologias, fissuras e pontos de deterioração."
    },
    {
      title: "Projeto Executivo Detalhado",
      description: "Desenvolvimento de projeto técnico com cronograma, especificações de materiais e metodologia de execução."
    },
    {
      title: "Tratamento de Patologias",
      description: "Correção de infiltrações, trincas, eflorescências e outros problemas estruturais da fachada."
    },
    {
      title: "Impermeabilização Profissional",
      description: "Aplicação de sistemas impermeabilizantes de alta performance para proteção duradoura."
    },
    {
      title: "Restauração Estética",
      description: "Revitalização completa com pintura, texturização e acabamentos que valorizam o imóvel."
    },
    {
      title: "Laudos e Documentação",
      description: "Emissão de laudos técnicos, ART e toda documentação necessária para aprovação junto aos órgãos competentes."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia Estendida",
      description: "Oferecemos garantia de até 5 anos em nossos serviços de reforma."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Prazos Cumpridos",
      description: "Comprometimento total com o cronograma estabelecido no projeto."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Equipe Certificada",
      description: "Profissionais com certificação NR-35 e experiência comprovada."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Suporte Integral",
      description: "Acompanhamento durante e após a execução do projeto."
    }
  ];

  const process = [
    "Contato inicial e agendamento de visita técnica gratuita",
    "Inspeção detalhada da fachada e identificação de patologias",
    "Elaboração do diagnóstico e proposta técnica comercial",
    "Aprovação do projeto e definição do cronograma de execução",
    "Mobilização da equipe e início das obras com segurança",
    "Execução das etapas de tratamento, impermeabilização e acabamento",
    "Entrega final com laudo técnico e termo de garantia"
  ];

  return (
    <ServicePageLayout
      title="Reforma de Fachada Predial"
      subtitle="Serviço Especializado"
      description="Soluções completas em reforma e revitalização de fachadas prediais. Recuperamos a estética e a integridade estrutural do seu edifício com técnicas modernas e materiais de alta qualidade."
      heroImage="/lovable-uploads/de72fc87-e00a-4c65-84fa-617240a42da3.png"
      features={features}
      benefits={benefits}
      process={process}
      ctaText="Solicite um Orçamento"
    />
  );
};

export default ReformaFachadaPredial;
