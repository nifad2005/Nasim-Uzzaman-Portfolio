import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { QuoteCalculator } from './components/QuoteCalculator';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [quoteInitialMsg, setQuoteInitialMsg] = useState<string>('');

  const handleOpenContactWithQuote = (quoteSummary: string) => {
    setQuoteInitialMsg(quoteSummary);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-indigo-500 selection:text-white">
      
      {/* Header */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenContact={handleOpenContact}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenContact={handleOpenContact}
        />

        <About
          lang={lang}
        />

        <Skills
          lang={lang}
        />

        <Experience
          lang={lang}
        />

        <Projects
          lang={lang}
          onOpenContact={handleOpenContact}
        />

        <QuoteCalculator
          lang={lang}
          onOpenContactWithQuote={handleOpenContactWithQuote}
        />

        <Testimonials
          lang={lang}
        />

        <ContactSection
          lang={lang}
          initialMessage={quoteInitialMsg}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

    </div>
  );
}
