import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  BookOpen,
  TrendingUp
} from "lucide-react";

const Content = () => {
  const featuredArticle = {
    title: "Guia Completo: Manutenção Preventiva de Fachadas em 2024",
    excerpt: "Descubra as melhores práticas e tecnologias mais recentes para manter suas fachadas em perfeito estado e evitar custos desnecessários.",
    author: "Eng. Carlos Santos",
    date: "15 de Janeiro, 2024",
    readTime: "8 min",
    category: "Manutenção",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
  };

  const articles = [
    {
      title: "Impermeabilização: Como Escolher o Material Ideal",
      excerpt: "Análise comparativa dos principais materiais de impermeabilização disponíveis no mercado brasileiro.",
      author: "Eng. Ana Paula",
      date: "12 de Janeiro, 2024",
      readTime: "5 min",
      category: "Técnicas",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=250&fit=crop"
    },
    {
      title: "Sustentabilidade em Fachadas: Tendências 2024",
      excerpt: "As principais inovações sustentáveis que estão revolucionando a engenharia de fachadas prediais.",
      author: "Eng. Roberto Lima",
      date: "10 de Janeiro, 2024",
      readTime: "6 min",
      category: "Sustentabilidade",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=250&fit=crop"
    },
    {
      title: "Tecnologia BIM em Projetos de Fachada",
      excerpt: "Como a tecnologia BIM está transformando o planejamento e execução de projetos de fachadas prediais.",
      author: "Eng. Mariana Costa",
      date: "8 de Janeiro, 2024",
      readTime: "7 min",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
    },
    {
      title: "Inspeção de Fachadas: Checklist Essencial",
      excerpt: "Lista completa de verificações que devem ser realizadas em inspeções periódicas de fachadas prediais.",
      author: "Eng. Pedro Oliveira",
      date: "5 de Janeiro, 2024",
      readTime: "4 min",
      category: "Inspeção",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
    },  
  ];

  const categories = [
    { name: "Manutenção", count: 12, color: "blue" },
    { name: "Técnicas", count: 8, color: "green" },
    { name: "Sustentabilidade", count: 6, color: "emerald" },
    { name: "Tecnologia", count: 5, color: "purple" },
    { name: "Inspeção", count: 7, color: "orange" },
    { name: "Design", count: 4, color: "pink" }
  ];

  return (
    <section id="conteudo" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Conteúdo Técnico</Badge>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Centro de
            <span className="block text-blue-600">Conhecimento</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Artigos técnicos, guias práticos e insights especializados sobre engenharia de fachadas 
            para manter você sempre atualizado.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="overflow-hidden border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 text-white border-blue-600">
                    Artigo em Destaque
                  </Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-blue-100 text-blue-800 border-blue-200">
                  {featuredArticle.category}
                </Badge>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="w-fit bg-blue-500 text-white hover:bg-blue-600"
                >
                  Ler Artigo Completo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:shadow-blue-500/10"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-700 border-slate-200">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-200 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{article.date}</span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-blue-300 text-blue-700 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                      >
                        Ler Mais
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-300">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Categorias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
                  >
                    <span className="text-slate-400 font-medium">{category.name}</span>
                    <Badge 
                      variant="secondary" 
                      className="bg-slate-100 text-slate-400 border-slate-200"
                    >
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-800">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Newsletter Técnica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm mb-4">
                  Receba artigos técnicos e insights especializados diretamente no seu e-mail.
                </p>
                <Button 
                  className="w-full bg-blue-500 text-white hover:bg-blue-600"
                  size="sm"
                >
                  Assinar Gratuitamente
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-blue-300 text-blue-700 hover:bg-blue-500 hover:text-white hover:border-blue-500 px-8 py-4 text-lg font-semibold"
          >
            Ver Todos os Artigos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Content;