import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingScreen } from './components/animations/LoadingScreen';
import { PageTransition } from './components/animations/PageTransition';
import { useLoading } from './hooks/useLoading';
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

function ScrollToSection() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      const id = hash.substring(1); // Remove the # from the hash
      const element = document.getElementById(id);
      if (element) {
        // Simple smooth scroll without animation
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (pathname === '/') {
      // If on home page with no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
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
          <AiTechnology />
          <AppShowcase />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoading = useLoading();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <ScrollToSection />
      <Routes location={location} key={location.pathname + location.search + location.hash}>
        <Route path="/" element={<HomePage />} />
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