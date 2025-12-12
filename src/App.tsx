import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Light from "./pages/Light";
import NotFound from "./pages/NotFound";
import ReformaFachadaPredial from "./pages/services/ReformaFachadaPredial";
import ReformaCondominio from "./pages/services/ReformaCondominio";
import ManutencaoPredial from "./pages/services/ManutencaoPredial";
import ImpermeabilizacaoEdificios from "./pages/services/ImpermeabilizacaoEdificios";
import ReformasEstruturais from "./pages/services/ReformasEstruturais";
import InspecaoLaudos from "./pages/services/InspecaoLaudos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/light" element={<Light />} />
          <Route path="/servicos/reforma-fachada-predial" element={<ReformaFachadaPredial />} />
          <Route path="/servicos/reforma-condominio" element={<ReformaCondominio />} />
          <Route path="/servicos/manutencao-predial" element={<ManutencaoPredial />} />
          <Route path="/servicos/impermeabilizacao-edificios" element={<ImpermeabilizacaoEdificios />} />
          <Route path="/servicos/reformas-estruturais" element={<ReformasEstruturais />} />
          <Route path="/servicos/inspecao-laudos" element={<InspecaoLaudos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
