import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { Footer } from './components/layout/Footer';
import { AvailabilityModal } from './components/common/AvailabilityModal';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { PageTransitionLoader } from './components/common/PageTransitionLoader';

// Pages
import { Home } from './pages/Home';
import { ProfilePage } from './pages/Profile';
import { ServicesPage } from './pages/Services';
import { ServiceDetailPage } from './pages/ServiceDetail';
import { ProductsPage } from './pages/Products';
import { ProductDetailPage } from './pages/ProductDetail';
import { ContactPage } from './pages/Contact';
import { LocationMapPage } from './pages/LocationMapPage';
import { SpeedTestPage } from './pages/SpeedTestPage';
import { OffersPage } from './pages/Offers';
import { RetailPage } from './pages/Retail';
import { CorporatePage } from './pages/Corporate';
import { IPTVPage } from './pages/IPTV';
import { OTTPage } from './pages/OTT';
import { PrimePage } from './pages/Prime';
import { CAFPage } from './pages/CAF';
import { LCOPage } from './pages/LCO';
import { AddressPage } from './pages/Address';
import { PrivacyPage } from './pages/Privacy';
import { RefundPage } from './pages/Refund';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(false);

  // Handle browser back button and path state with animated loading screen
  const handleNavigate = (path: string) => {
    if (path === currentPath) return;
    
    setIsPageLoading(true);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Smooth transition timeout
    setTimeout(() => {
      setIsPageLoading(false);
    }, 400);
  };

  // Helper parser for dynamic slug routes
  const renderCurrentPage = () => {
    if (currentPath === '/') {
      return (
        <Home
          onNavigate={handleNavigate}
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
          onOpenSpeedGauge={() => handleNavigate('/speedtest')}
        />
      );
    }

    if (currentPath === '/profile') {
      return <ProfilePage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/services') {
      return (
        <ServicesPage
          onNavigate={handleNavigate}
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
          isLoading={isPageLoading}
        />
      );
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return (
        <ServiceDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
        />
      );
    }

    if (currentPath === '/products') {
      return <ProductsPage onNavigate={handleNavigate} isLoading={isPageLoading} />;
    }

    if (currentPath.startsWith('/products/')) {
      const slug = currentPath.replace('/products/', '');
      return <ProductDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    if (currentPath === '/presence' || currentPath === '/location' || currentPath === '/map') {
      return (
        <LocationMapPage
          onNavigate={handleNavigate}
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
        />
      );
    }

    if (currentPath === '/speedtest') {
      return <SpeedTestPage />;
    }

    if (currentPath === '/offers') {
      return (
        <OffersPage
          onNavigate={handleNavigate}
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
          isLoading={isPageLoading}
        />
      );
    }

    if (currentPath === '/retail') {
      return (
        <RetailPage
          onNavigate={handleNavigate}
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
          isLoading={isPageLoading}
        />
      );
    }

    if (currentPath === '/corporate') {
      return <CorporatePage onNavigate={handleNavigate} />;
    }

    if (currentPath === '/iptv') {
      return (
        <IPTVPage
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
        />
      );
    }

    if (currentPath === '/ott') {
      return (
        <OTTPage
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
        />
      );
    }

    if (currentPath === '/prime') {
      return (
        <PrimePage
          onNavigate={handleNavigate}
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
        />
      );
    }

    if (currentPath === '/caf') {
      return <CAFPage />;
    }

    if (currentPath === '/lco') {
      return <LCOPage />;
    }

    if (currentPath === '/address') {
      return <AddressPage />;
    }

    if (currentPath === '/privacy') {
      return <PrivacyPage />;
    }

    if (currentPath === '/refund') {
      return <RefundPage />;
    }

    // Default Fallback
    return (
      <Home
        onNavigate={handleNavigate}
        onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
        onOpenSpeedGauge={() => handleNavigate('/speedtest')}
      />
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-800 text-slate-400 flex flex-col font-sans selection:bg-yellow-400 selection:text-zinc-900 transition-colors duration-300">
        {/* Top Header */}
        <Header
          currentPath={currentPath}
          onNavigate={handleNavigate}
          onOpenCheckAvailability={() => setIsAvailabilityModalOpen(true)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        {/* Main View Area */}
        <main className="flex-1 pb-20 md:pb-0">
          {renderCurrentPage()}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} onOpenCheckAvailability={function (): void {
          throw new Error('Function not implemented.');
        } } />

        {/* Floating Bottom Nav */}
        <BottomNav
          currentPath={currentPath}
          onNavigate={handleNavigate}
          onOpenSpeedGauge={() => handleNavigate('/speedtest')}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* WhatsApp Help Button */}
        <WhatsAppButton />

        {/* Page Transition Loading Overlay (Bypassed for listing pages which render skeleton placeholders) */}
        <PageTransitionLoader
          isLoading={isPageLoading && !['/products', '/services', '/retail', '/offers'].includes(currentPath)}
        />

        {/* Modal - Check Coverage & Feasibility */}
        <AvailabilityModal
          isOpen={isAvailabilityModalOpen}
          onClose={() => setIsAvailabilityModalOpen(false)}
   
        />
      </div>
    </ThemeProvider>
  );
}
