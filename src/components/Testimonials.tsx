import React from 'react';
import { Language } from '../types';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, HeartHandshake } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <HeartHandshake className="w-4 h-4 text-indigo-600" />
            <span>{lang === 'en' ? 'Client Feedback' : 'ক্লায়েন্ট ও সহকর্মীদের মতামত'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'What Leaders & Clients Say' : 'যা বলছেন উদ্যোক্তা ও কোম্পানি প্রধানরা'}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            {lang === 'en'
              ? 'Testimonials from nutrition brand leads and business clients.'
              : 'পুষ্টি ব্র্যান্ড এবং ই-কমার্স ক্লায়েন্টদের রিভিউ।'}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-indigo-100 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.content[lang]}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-indigo-600 font-medium">
                    {item.role[lang]} • <span className="text-slate-500">{item.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
