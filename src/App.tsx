import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Portfolio } from './components/sections/Portfolio';
import { Shop } from './components/sections/Shop';
import { Contact } from './components/sections/Contact';
import { Testimonials } from './components/sections/Testimonials';
import { Toaster } from './components/ui/sonner';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll and update active section for navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'shop', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>

        <section id="services" className="py-20 bg-slate-900/50">
          <Services />
        </section>

        <section id="portfolio" className="py-20">
          <Portfolio />
        </section>

        <section id="shop" className="py-20 bg-slate-900/50">
          <Shop />
        </section>

        <Testimonials />

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;