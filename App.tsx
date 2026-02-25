
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import InvestigationPage from './pages/InvestigationPage';
import PartnersPage from './pages/PartnersPage';
import MembershipPage from './pages/MembershipPage';
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import StatisticsPage from './pages/StatisticsPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BilateralPage from './pages/BilateralPage';
import CommitteesPage from './pages/CommitteesPage';
import { useLocation } from 'react-router-dom';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isNewsPage = location.pathname === '/noticias' || location.pathname.startsWith('/noticias/');

  return (
    <div className="flex flex-col min-h-screen">
      {!isNewsPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Rutas Nosotros */}
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/nosotros/:section" element={<AboutPage />} />

          {/* Rutas Servicios */}
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:slug" element={<ServicesPage />} />

          {/* Rutas Investigación */}
          <Route path="/investigacion" element={<InvestigationPage />} />
          <Route path="/investigacion/economic-report" element={<InvestigationPage />} />
          <Route path="/investigacion/opportunities" element={<InvestigationPage />} />
          <Route path="/investigacion/relaciones-bilaterales" element={<BilateralPage />} />
          <Route path="/investigacion/estadisticas" element={<StatisticsPage />} />

          {/* Rutas Noticias y Eventos */}
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/noticias-eventos" element={<NewsPage />} />
          <Route path="/noticias-eventos/:slug" element={<NewsPage />} />

          {/* Rutas Socios */}
          <Route path="/socios" element={<PartnersPage />} />
          <Route path="/socios/comites" element={<CommitteesPage />} />
          <Route path="/socios/comites/:slug" element={<CommitteesPage />} />

          <Route path="/membresia" element={<MembershipPage />} />
        </Routes>
      </main>
      {!isNewsPage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
