import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';

import Home from './pages/Home';
import BuyOldPhone from './pages/BuyOldPhone';
import ServicesPage from './pages/ServicesPage';
import Accessories from './pages/Accessories';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import OwnerLogin from './pages/OwnerLogin';
import OwnerRequests from './pages/OwnerRequests';

// React Error Boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-xl">
            V
          </div>
          <h1 className="text-2xl font-bold">VAMSI MOBILE NEST</h1>
          <p className="text-xs text-slate-400 max-w-sm">
            Something unexpected occurred. Please refresh the page to reload the mobile store website.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 404 Component
function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
      <h1 className="text-4xl font-black text-slate-900">404</h1>
      <h2 className="text-xl font-bold text-slate-800">Page Not Found</h2>
      <p className="text-xs text-slate-500">The page you are looking for does not exist or has moved.</p>
      <a href="/" className="inline-block bg-blue-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow">
        Back to Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buy-old-phone" element={<BuyOldPhone />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/owner-login" element={<OwnerLogin />} />
                <Route path="/view-requests" element={<OwnerRequests />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <StickyMobileBar />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
