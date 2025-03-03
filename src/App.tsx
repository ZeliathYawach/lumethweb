import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { PageTransition } from './components/animations/PageTransition';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppFeatures } from './components/AppFeatures';
import { AiTechnology } from './components/AiTechnology';
import { AppShowcase } from './components/AppShowcase';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { CreateBlog } from './pages/CreateBlog';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { CancellationPolicy } from './pages/CancellationPolicy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Business } from './pages/Business';
import { GetStarted } from './pages/GetStarted';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { SeoHead } from './utils/seo/SeoHead';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <SeoHead
          title="Lumeth | AI-Powered Beauty Platform"
          description="Transform your beauty experience with AI-powered recommendations and instant booking for salons, spas, and beauty services."
          type="website"
          appLinks={{
            ios: "lumeth://home",
            android: "lumeth://home",
            web: "https://lumeth.com"
          }}
        />
        <Header />
        <main>
          <Hero />
          <AppFeatures />
          <AppShowcase />
          <AiTechnology />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

// Component to handle section scrolling with smooth behavior
function SectionScrollHandler() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Map routes to section IDs
    const routeToSectionMap: Record<string, string> = {
      '/features': 'features',
      '/ourapps': 'ourapps',
      '/aibeauty': 'aibeauty',
      '/testimonials': 'testimonials'
    };
    
    // Get the section ID for the current route
    const sectionId = routeToSectionMap[pathname];
    
    if (sectionId) {
      // Find the section element
      const sectionElement = document.getElementById(sectionId);
      
      // If found, scroll to it smoothly
      if (sectionElement) {
        sectionElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  }, [pathname]);
  
  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <SectionScrollHandler />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<HomePage />} />
          <Route path="/ourapps" element={<HomePage />} />
          <Route path="/aibeauty" element={<HomePage />} />
          <Route path="/testimonials" element={<HomePage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blog/create" element={<CreateBlog />} />
          <Route path="/admin/blog" element={<AdminDashboard />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;