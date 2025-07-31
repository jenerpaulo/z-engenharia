import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é o prazo médio para execução de uma reforma de fachada?",
      answer: "O prazo varia conforme a complexidade e tamanho do projeto. Para edifícios residenciais de até 10 andares, o prazo médio é de 3 a 6 meses. Projetos maiores ou com especificidades técnicas podem levar de 6 a 12 meses. Fornecemos um cronograma detalhado após a avaliação inicial."
    },
    {
      question: "Como é feito o orçamento para manutenção de fachadas?",
      answer: "Realizamos uma inspeção técnica completa e gratuita do imóvel. Com base no diagnóstico, elaboramos um orçamento detalhado incluindo materiais, mão de obra, equipamentos e cronograma. O orçamento é válido por 30 dias e não há custos para a avaliação inicial."
    },
    {
      question: "Vocês trabalham com que tipos de edifícios?",
      answer: "Atendemos todos os tipos de edificações: residenciais, comerciais, industriais, hospitalares, educacionais e edifícios históricos. Nossa equipe tem experiência desde pequenos condomínios até grandes complexos corporativos e shopping centers."
    },
    {
      question: "Qual a garantia oferecida nos serviços?",
      answer: "Oferecemos garantia de 5 anos para serviços de impermeabilização, 3 anos para pinturas especiais e 2 anos para manutenções gerais. Materiais premium podem ter garantia estendida de até 10 anos. Toda garantia é documentada em contrato."
    },
    {
      question: "É necessário que os moradores saiam durante a obra?",
      answer: "Na maioria dos casos, não. Nossos métodos de trabalho permitem que os moradores permaneçam no imóvel. Trabalhamos por etapas, minimizando transtornos. Em casos específicos de trabalhos internos ou com produtos químicos, podemos sugerir relocação temporária de alguns apartamentos."
    },
    {
      question: "Como funciona o processo de aprovação em condomínios?",
      answer: "Auxiliamos em todo o processo de aprovação. Fornecemos toda a documentação técnica necessária, apresentamos o projeto em assembleias, esclarecemos dúvidas dos condôminos e ajudamos na obtenção das aprovações junto aos órgãos competentes."
    },
    {
      question: "Vocês fazem manutenção preventiva?",
      answer: "Sim! Oferecemos planos de manutenção preventiva personalizados. Incluem inspeções periódicas, pequenos reparos, limpeza especializada e relatórios técnicos. Os planos ajudam a evitar problemas maiores e reduzem custos a longo prazo."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos pagamento à vista com desconto, parcelamento em até 12x sem juros, financiamento bancário (auxiliamos na documentação) e pagamento por etapas conforme cronograma da obra. Todas as condições são flexíveis e negociáveis."
    },
    {
      question: "Vocês atendem em outras cidades além da capital?",
      answer: "Sim, atendemos em todo o estado e regiões metropolitanas. Para projetos no interior, avaliamos a viabilidade técnica e logística. Grandes projetos justificam deslocamento para qualquer região do país."
    },
    {
      question: "Como identificar se minha fachada precisa de manutenção?",
      answer: "Sinais como manchas, fissuras, descascamento de tinta, infiltrações, peças soltas ou descoloridas indicam necessidade de manutenção. Oferecemos inspeção gratuita para diagnóstico preciso e recomendações técnicas."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços de engenharia de fachadas. 
            Não encontrou sua resposta? Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="font-semibold text-foreground text-lg">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="ml-9 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 max-w-3xl mx-auto mt-16">
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe técnica está pronta para esclarecer todas as suas questões 
              e fornecer orientações personalizadas para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Falar com Especialista
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Solicitar Orçamento
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;