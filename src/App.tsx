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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
