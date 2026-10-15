import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating with a hash (e.g. #corporate-events), don't jump to top
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialEvent, setModalInitialEvent] = useState<string | undefined>(undefined);

  const handleOpenModal = (eventTitle?: string) => {
    setModalInitialEvent(eventTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalInitialEvent(undefined);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory-50 text-forest-950 font-sans selection:bg-gold-500 selection:text-forest-950">
        {/* Navigation Bar */}
        <Navbar onOpenEnquiryModal={() => handleOpenModal()} />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenEnquiryModal={handleOpenModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenEnquiryModal={() => handleOpenModal()} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenEnquiryModal={handleOpenModal} />}
            />
            <Route
              path="/menu"
              element={<MenuPage onOpenEnquiryModal={handleOpenModal} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenEnquiryModal={handleOpenModal} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenEnquiryModal={() => handleOpenModal()} />

        {/* Persistent Floating WhatsApp Action */}
        <FloatingWhatsApp />

        {/* Global Event Enquiry Modal */}
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialEventType={modalInitialEvent}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
