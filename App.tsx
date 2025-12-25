
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AiAssistant from './components/AiAssistant';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenAi={() => setIsAiOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenAi={() => setIsAiOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer onOpenAi={() => setIsAiOpen(true)} />
        <WhatsAppButton />
        <AiAssistant isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
