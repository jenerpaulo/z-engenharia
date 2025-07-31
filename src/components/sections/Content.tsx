import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, BookOpen } from "lucide-react";

const Content = () => {
  const articles = [
    {
      title: "Novas Normas de Segurança para Fachadas Prediais em 2024",
      excerpt: "Entenda as mudanças nas regulamentações e como adequar seu edifício às novas exigências de segurança.",
      author: "Eng. Rafael Santos",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      category: "Regulamentação",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "Tecnologias Sustentáveis em Fachadas: O Futuro é Verde",
      excerpt: "Descubra as inovações tecnológicas que estão revolucionando a sustentabilidade em fachadas prediais.",
      author: "Eng. Maria Silva",
      date: "10 de Janeiro, 2024",
      readTime: "7 min",
      category: "Sustentabilidade",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af78?w=600&h=400&fit=crop"
    },
    {
      title: "Como Identificar Problemas em Fachadas Antes que se Tornem Críticos",
      excerpt: "Sinais de alerta que todo síndico e proprietário devem conhecer para evitar problemas maiores.",
      author: "Eng. Carlos Mendes",
      date: "8 de Janeiro, 2024",
      readTime: "4 min",
      category: "Manutenção",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      title: "Restauração de Edifícios Históricos: Preservando o Patrimônio",
      excerpt: "Os desafios e técnicas especiais envolvidos na restauração de fachadas de edifícios tombados.",
      author: "Arq. Ana Costa",
      date: "5 de Janeiro, 2024",
      readTime: "6 min",
      category: "Patrimônio",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop"
    },
    {
      title: "Investimento em Fachadas: ROI e Valorização Imobiliária",
      excerpt: "Análise do retorno sobre investimento em reformas e manutenção de fachadas prediais.",
      author: "Eng. Pedro Lima",
      date: "3 de Janeiro, 2024",
      readTime: "8 min",
      category: "Investimento",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
    },
    {
      title: "Manutenção Preventiva: O Segredo da Longevidade das Fachadas",
      excerpt: "Como um programa de manutenção preventiva pode economizar milhares de reais a longo prazo.",
      author: "Eng. Lucia Oliveira",
      date: "1 de Janeiro, 2024",
      readTime: "5 min",
      category: "Manutenção",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop"
    }
  ];

  const categories = ["Todos", "Manutenção", "Sustentabilidade", "Regulamentação", "Patrimônio", "Investimento"];

  return (
    <section id="conteudo" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-6">
            <span className="text-primary">Conteúdo</span> Especializado
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas novidades, técnicas e regulamentações 
            do setor de engenharia de fachadas prediais.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              className={category === "Todos" ? "bg-primary text-primary-foreground" : "border-border hover:border-primary"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="bg-card border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Destaque
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  {articles[0].category}
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {articles[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{articles[0].author}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="mr-4">{articles[0].readTime}</span>
                  <span>{articles[0].date}</span>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit group">
                  Ler Artigo Completo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.slice(1).map((article, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-3">{article.author}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
                
                <Button variant="outline" className="w-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground group">
                  Ler Mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Receba Conteúdo Exclusivo
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e receba artigos técnicos, dicas e novidades 
              do setor diretamente em seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu e-mail profissional"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Inscrever-se
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Content;