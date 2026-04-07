import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import {
  MaintenanceCVC,
  ContratsMaintenance,
  EntretienChaufferie,
  DepannageCVC,
  RenovationCVC,
  OptimisationEnergetique,
} from './pages/ServicePages';
import Realisations from './pages/Realisations';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueCookies from './pages/PolitiqueCookies';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import PlanDuSite from './pages/PlanDuSite';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/maintenance-cvc-ile-de-france" element={<MaintenanceCVC />} />
            <Route path="/contrats-maintenance-cvc" element={<ContratsMaintenance />} />
            <Route path="/entretien-chaufferie-ile-de-france" element={<EntretienChaufferie />} />
            <Route path="/depannage-cvc-urgence-ile-de-france" element={<DepannageCVC />} />
            <Route path="/renovation-installation-cvc" element={<RenovationCVC />} />
            <Route path="/optimisation-energetique-cvc" element={<OptimisationEnergetique />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-cookies" element={<PolitiqueCookies />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/plan-du-site" element={<PlanDuSite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;