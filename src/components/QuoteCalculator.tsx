import React, { useState } from 'react';
import { Language } from '../types';
import { SERVICES } from '../data/portfolioData';
import { Calculator, Check, ArrowRight, DollarSign, Clock, Sparkles } from 'lucide-react';

interface QuoteCalculatorProps {
  lang: Language;
  onOpenContactWithQuote: (quoteSummary: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ lang, onOpenContactWithQuote }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([SERVICES[0].id]);
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateTotal = () => {
    let base = selectedServices.reduce((sum, sId) => {
      const s = SERVICES.find((item) => item.id === sId);
      return sum + (s ? s.basePriceEstimate : 0);
    }, 0);

    if (selectedServices.length >= 3) {
      base = Math.round(base * 0.85); // 15% multi-service discount
    }

    if (urgency === 'express') {
      base = Math.round(base * 1.25); // 25% express fee
    }

    return base;
  };

  const getEstimatedDays = () => {
    let days = selectedServices.length * 3;
    if (urgency === 'express') days = Math.max(2, Math.round(days * 0.5));
    return days;
  };

  const handleInquire = () => {
    const serviceNames = selectedServices
      .map((id) => SERVICES.find((s) => s.id === id)?.title[lang])
      .filter(Boolean)
      .join(', ');

    const summary = `Selected Services: [${serviceNames}], Speed: ${urgency.toUpperCase()}, Estimate: $${calculateTotal()} USD (~${getEstimatedDays()} Days)`;
    onOpenContactWithQuote(summary);
  };

  return (
    <section id="calculator" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Interactive Estimator' : 'ইন্টারেক্টিভ প্রজেক্ট কোটেশন'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Estimate Your Project Scope & Cost' : 'আপনার প্রজেক্টের সম্ভাব্য বাজেট হিসাব করুন'}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            {lang === 'en'
              ? 'Select the services you need to calculate an instant estimated timeline and budget.'
              : 'আপনার প্রয়োজনীয় সার্ভিস সিলেক্ট করে আনুমানিক বাজেট ও ডেলিভারি টাইম জানুন।'}
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Service Checkboxes */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {lang === 'en' ? '1. Choose Required Services:' : '১. পছন্দনীয় সার্ভিসসমূহ চিহ্নিত করুন:'}
            </h3>

            <div className="space-y-3">
              {SERVICES.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-indigo-600 shadow-xs'
                        : 'bg-white/60 border-slate-200/80 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">
                          {service.title[lang]}
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {service.description[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 ml-2">
                      <span className="text-sm font-extrabold text-indigo-600">
                        ${service.basePriceEstimate}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Speed / Urgency Selector */}
            <div className="pt-4 border-t border-slate-200/80">
              <h3 className="font-bold text-slate-900 text-base mb-3">
                {lang === 'en' ? '2. Delivery Speed:' : '২. ডেলিভারির সময়সীমা:'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setUrgency('standard')}
                  className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                    urgency === 'standard'
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {lang === 'en' ? 'Standard Speed (Normal)' : 'স্ট্যান্ডার্ড টাইম'}
                </button>
                <button
                  onClick={() => setUrgency('express')}
                  className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                    urgency === 'express'
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {lang === 'en' ? 'Express Fast (2x Priority)' : 'জরুরি ফাস্ট ডেলিভারি'}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between border-b border-indigo-800/60 pb-4 mb-4">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  {lang === 'en' ? 'Estimated Investment' : 'আনুমানিক বাজেট'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                  {selectedServices.length >= 3
                    ? lang === 'en' ? '15% Bundle Discount' : '১৫% বান্ডেল ছাড়'
                    : lang === 'en' ? 'Transparent Rate' : 'স্বচ্ছ রেট'}
                </span>
              </div>

              {/* Big Price */}
              <div className="mb-6">
                <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ${calculateTotal()} <span className="text-sm font-normal text-indigo-300">USD</span>
                </p>
                <p className="text-xs text-indigo-300/80 mt-1">
                  {lang === 'en'
                    ? 'Flexible payment terms & milestone delivery available.'
                    : 'প্রজেক্ট ধাপে ধাপে পেমেন্টের সুযোগ রয়েছে।'}
                </p>
              </div>

              {/* Delivery Time Estimate */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-indigo-200 text-xs font-medium">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>
                    {lang === 'en' ? 'Estimated Timeframe:' : 'আনুমানিক সময়:'}
                  </span>
                </div>
                <p className="text-lg font-bold text-white">
                  ~{getEstimatedDays()} {lang === 'en' ? 'Working Days' : 'কর্মদিবস'}
                </p>
              </div>
            </div>

            {/* Inquire Button */}
            <button
              onClick={handleInquire}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{lang === 'en' ? 'Submit Inquiry With This Estimate' : 'এই বাজেটে প্রজেক্ট শুরু করুন'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
