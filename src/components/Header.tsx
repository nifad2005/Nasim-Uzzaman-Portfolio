import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code, Globe, MessageSquare, Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: { en: 'About Me', bn: 'আমার সম্পর্কে' } },
    { href: '#skills', label: { en: 'Skills & Tools', bn: 'দক্ষতা ও টুলস' } },
    { href: '#experience', label: { en: 'Experience', bn: 'অভিজ্ঞতা' } },
    { href: '#projects', label: { en: 'Projects', bn: 'প্রজেক্টস' } },
    { href: '#services', label: { en: 'Services', bn: 'সার্ভিসসমূহ' } },
    { href: '#calculator', label: { en: 'Estimate Quote', bn: 'কোটেশন হিসাব' } },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-emerald-500 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base tracking-tight block leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-indigo-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {lang === 'en' ? 'Tech & Marketing Specialist' : 'টেক ও মার্কেটিং স্পেশালিস্ট'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.label[lang]}
              </a>
            ))}
          </nav>

          {/* Actions: Language Toggle & Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher Button */}
            <div className="bg-slate-100 p-1 rounded-full border border-slate-200/80 flex items-center gap-1">
              <button
                id="lang-btn-en"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                id="lang-btn-bn"
                onClick={() => setLang('bn')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === 'bn'
                    ? 'bg-white text-indigo-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                বাংলা
              </button>
            </div>

            {/* Direct Hire CTA Button */}
            <button
              id="header-hire-btn"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'en' ? 'Hire Me' : 'যোগাযোগ করুন'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200"
            >
              {lang === 'en' ? 'বাংলা' : 'EN'}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-indigo-600 py-1"
              >
                {link.label[lang]}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              {lang === 'en' ? 'Contact / Hire Me' : 'যোগাযোগ করুন'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
