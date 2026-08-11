import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, ArrowRight, ShieldCheck, Download, CheckCircle2, MessageCircle, TrendingUp, Award, Laptop } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContact }) => {
  return (
    <section id="hero-section" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-slate-50 overflow-hidden relative">
      {/* Decorative background glow rings */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-200/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Experience Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200/60 text-indigo-900 text-xs sm:text-sm font-semibold shadow-2xs">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>
                {lang === 'en'
                  ? '1 Year Full-Time Marketing Exp in Nutrition Industry'
                  : 'পুষ্টি কোম্পানিতে ১ বছরের সফল মার্কেটিং অভিজ্ঞতা'}
              </span>
            </div>

            {/* Main Name & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-bold text-indigo-600">
                {PERSONAL_INFO.title[lang]}
              </p>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio[lang]}
            </p>

            {/* Core Capability Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { en: '🌐 Responsive Web Dev', bn: '🌐 রেসপন্সিভ ওয়েব দেব' },
                { en: '📈 Meta & Google Ads', bn: '📈 মেটা ও গুগল এডস' },
                { en: '🎯 Sales Funnel & CRO', bn: '🎯 সেলস ফানেল ও কনভার্সন' },
                { en: '🎬 Nutrition Content & Copy', bn: '🎬 নিউট্রিশন কন্টেন্ট ও কপি' }
              ].map((chip, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
                  {chip[lang]}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="hero-contact-btn"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{lang === 'en' ? 'Let’s Discuss Your Project' : 'প্রজেক্ট আলোচনা করুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hello%20Md.%20Nasim%20uz%20zaman,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-base hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md"
              >
                <span>WhatsApp</span>
              </a>

              <a
                id="hero-projects-link"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-slate-700 font-semibold text-base border border-slate-200 hover:bg-slate-50 transition-all"
              >
                <span>{lang === 'en' ? 'View Portfolio' : 'পোর্টফোলিও দেখুন'}</span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>
                {lang === 'en'
                  ? 'Guaranteed high performance, data-backed strategies & transparent communication.'
                  : 'গ্যারান্টিযুক্ত পারফরম্যান্স, তথ্যভিত্তিক স্ট্র্যাটেজি এবং বিশ্বস্ত কাজ।'}
              </span>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Floating Impact Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Image Container */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl p-3 bg-gradient-to-b from-indigo-500/20 via-white to-emerald-500/20 shadow-xl border border-white">
              
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl shadow-inner"
              />

              {/* Floating Badge 1: ROAS Impact */}
              <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    {lang === 'en' ? 'Ad Campaign ROAS' : 'বিজ্ঞাপন রিটার্ন'}
                  </p>
                  <p className="text-base font-bold text-slate-900">3.2x Average</p>
                </div>
              </div>

              {/* Floating Badge 2: Tech + Sales Experience */}
              <div className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    {lang === 'en' ? 'Core Expertise' : 'বিশেষায়িত কাজ'}
                  </p>
                  <p className="text-sm font-bold text-slate-900">Web Dev + Sales</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3 border-r last:border-r-0 border-slate-100">
              <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600 tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600">
                {stat.label[lang]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
