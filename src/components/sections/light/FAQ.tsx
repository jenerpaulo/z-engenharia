import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é o prazo médio para execução de uma manutenção de fachada?",
      answer: "O prazo varia conforme a complexidade e tamanho do projeto. Para manutenções simples, de 15 a 30 dias. Para restaurações completas, pode variar de 2 a 6 meses. Sempre fornecemos um cronograma detalhado antes do início dos trabalhos."
    },
    {
      question: "Vocês oferecem garantia nos serviços realizados?",
      answer: "Sim, oferecemos garantia de até 10 anos dependendo do tipo de serviço. Pintura tem garantia de 5 anos, impermeabilização de 10 anos, e restauração estrutural de 8 anos. Tudo documentado em contrato."
    },
    {
      question: "É necessário desocupar o prédio durante a obra?",
      answer: "Na maioria dos casos, não é necessário. Nossos procedimentos são planejados para minimizar o incômodo aos moradores. Apenas em casos específicos de restauração estrutural profunda pode haver necessidade de desocupação temporária de alguns apartamentos."
    },
    {
      question: "Como vocês garantem a segurança durante os trabalhos?",
      answer: "Seguimos rigorosamente as normas de segurança NR-35 e NR-18. Utilizamos equipamentos de proteção individual (EPIs) completos, sistemas de proteção coletiva, e nossa equipe é certificada em trabalho em altura. Possuímos seguro de responsabilidade civil."
    },
    {
      question: "Quais materiais vocês utilizam nas impermeabilizações?",
      answer: "Utilizamos apenas materiais de primeira linha como mantas asfálticas, membranas acrílicas, poliuretânicas e sistemas cimentícios. A escolha depende da análise técnica de cada caso. Todos com certificação e garantia do fabricante."
    },
    {
      question: "Vocês fazem orçamento sem custo?",
      answer: "Sim, nossa avaliação inicial e orçamento são completamente gratuitos. Inclui visita técnica, análise da situação atual da fachada, diagnóstico e proposta detalhada sem nenhum compromisso."
    },
    {
      question: "Como funciona o acompanhamento da obra?",
      answer: "Fornecemos relatórios semanais com fotos do progresso, mantemos um engenheiro responsável disponível para contato direto, e realizamos reuniões de acompanhamento com síndicos ou responsáveis conforme necessário."
    },
    {
      question: "Vocês trabalham em finais de semana?",
      answer: "Sim, adequamos nosso cronograma conforme a necessidade do condomínio. Trabalhos em finais de semana podem ter um acréscimo no valor, mas priorizamos sempre a conveniência dos moradores."
    },
    {
      question: "Qual a diferença entre manutenção preventiva e corretiva?",
      answer: "A manutenção preventiva é planejada e regular, evitando problemas futuros e sendo mais econômica. A corretiva é realizada após identificação de problemas, geralmente mais custosa e urgente. Recomendamos sempre a preventiva."
    },
    {
      question: "Vocês emitem nota fiscal e garantem a documentação legal?",
      answer: "Sim, somos uma empresa regularizada com CNPJ, emitimos nota fiscal de todos os serviços, possuímos todas as licenças necessárias e fornecemos toda documentação legal exigida pelos órgãos competentes."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-slate-100 text-slate-800 border-slate-200">Perguntas Frequentes</Badge>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Dúvidas
            <span className="block text-slate-600">Mais Comuns</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossos serviços de engenharia de fachadas. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-200 rounded-lg px-6 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-slate-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-slate-300 mb-2">
                Ainda tem dúvidas?
              </CardTitle>
              <p className="text-slate-200">
                Nossa equipe técnica está pronta para esclarecer todas as suas questões
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center p-6 h-auto border-slate-300 hover:bg-slate-200 hover:border-slate-400"
                >
                  <div className="text-center">
                    <Phone className="w-6 h-6 mx-auto mb-2 text-slate-200" />
                    <div className="font-semibold text-slate-800">Telefone</div>
                    <div className="text-sm text-slate-600">(21) 3333-4444</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center p-6 h-auto border-slate-300 hover:bg-slate-200 hover:border-slate-400"
                >
                  <div className="text-center">
                    <Mail className="w-6 h-6 mx-auto mb-2 text-slate-200" />
                    <div className="font-semibold text-slate-800">E-mail</div>
                    <div className="text-sm text-slate-600">contato@zengenharia.com</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center p-6 h-auto border-slate-300 hover:bg-slate-200 hover:border-slate-400"
                >
                  <div className="text-center">
                    <MessageCircle className="w-6 h-6 mx-auto mb-2 text-slate-200" />
                    <div className="font-semibold text-slate-800">WhatsApp</div>
                    <div className="text-sm text-slate-600">(21) 99999-8888</div>
                  </div>
                </Button>
              </div>
              
              <div className="text-center mt-6">
                <Button 
                  size="lg" 
                  className="bg-slate-800 text-white hover:bg-slate-700 px-8 py-4 text-lg font-semibold"
                >
                  Fale com Nossos Especialistas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;