import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code, TrendingUp, DollarSign, Video, CheckCircle2, Award, HeartPulse, UserCheck } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const pillars = [
    {
      id: 'web',
      icon: Code,
      title: { en: '1. Web Developer', bn: '১. ওয়েব ডেভেলপার' },
      color: 'bg-blue-500 text-white',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50/50',
      description: {
        en: 'Building clean, fast, SEO-ready web applications, portfolios, and e-commerce stores with React & Tailwind CSS.',
        bn: 'রিয়েক্ট ও টেইলউইন্ড দিয়ে দ্রুতগতির, মোবাইল ফ্রেন্ডলি ও কনভার্সন অপটিমাইজড ওয়েবসাইট তৈরি।'
      }
    },
    {
      id: 'marketing',
      icon: TrendingUp,
      title: { en: '2. Digital Marketing', bn: '২. ডিজিটাল মার্কেটিং' },
      color: 'bg-emerald-500 text-white',
      borderColor: 'border-emerald-200',
      bgColor: 'bg-emerald-50/50',
      description: {
        en: 'Running ROI-driven Facebook/Meta Ads, precise audience targeting, and multi-stage funnel retargeting.',
        bn: 'ফেসবুক এডস ম্যানেজার, টার্গেটেড অডিয়েন্স রিসার্চ এবং বাজেট অপটিমাইজেশনের মাধ্যমে রিটার্ন নিশ্চিত করা।'
      }
    },
    {
      id: 'sales',
      icon: DollarSign,
      title: { en: '3. Sales Specialist', bn: '৩. সেলস স্পেশালিস্ট' },
      color: 'bg-amber-500 text-white',
      borderColor: 'border-amber-200',
      bgColor: 'bg-amber-50/50',
      description: {
        en: 'Converting incoming inquiries into loyal customers with persuasive messenger/WhatsApp sales scripts and pitch strategies.',
        bn: 'গ্রাহকের সাথে সঠিক যোগাযোগ, প্রশ্নের উত্তর দেওয়া এবং ইনবক্স মেসেজ বিক্রয়ে রূপান্তর।'
      }
    },
    {
      id: 'content',
      icon: Video,
      title: { en: '4. Content Creator', bn: '৪. কন্টেন্ট ক্রিয়েটর' },
      color: 'bg-purple-500 text-white',
      borderColor: 'border-purple-200',
      bgColor: 'bg-purple-50/50',
      description: {
        en: 'Designing eye-catching social banners, ad copywriting, and video scriptwriting focusing on health and nutrition products.',
        bn: 'বিজ্ঞাপন স্ক্রিপ্ট, সোশ্যাল ব্যানার ডিজাইন এবং পণ্য প্রচারমূলক আকর্ষণীয় বাংলা কন্টেন্ট কপিরাইটিং।'
      }
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <UserCheck className="w-4 h-4 text-indigo-600" />
            <span>{lang === 'en' ? 'Who Is Md. Nasim uz zaman?' : 'কে এই মো: নাসিম উজ জামান?'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en'
              ? 'Combining Technical Code with High-Converting Marketing'
              : 'প্রযুক্তি ও মার্কেটিংয়ের সমন্বয়ে আধুনিক সমাধান'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {lang === 'en'
              ? 'Having worked 1 full year in marketing for a reputable Nutrition & Health products company, I understand what makes customers click, trust, and purchase. I don’t just write code — I build revenue systems.'
              : '১ বছর পুষ্টি (নিউট্রিশন) ও স্বাস্থ্যসেবা প্রডাক্ট কোম্পানিতে কাজ করে আমি শিখেছি কীভাবে একজন কাস্টমার সিদ্ধান্ত নেয় এবং কেন কেনে। আমি শুধু ওয়েবসাইট বানাই না, সম্পূর্ণ সেলস সিস্টেম গড়ে তুলি।'}
          </p>
        </div>

        {/* Feature Highlight Banner: Nutrition Experience */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
                {lang === 'en' ? 'Featured Industry Experience' : 'বিশেষায়িত অভিজ্ঞতা'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {lang === 'en'
                  ? '1 Year Hands-On Marketing at a Nutrition Company'
                  : 'পুষ্টি ব্র্যান্ডের সেলস ও মার্কেটিংয়ে ১ বছরের অভিজ্ঞতা'}
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                {lang === 'en'
                  ? 'Gained deep insights into health-conscious audience behaviors, product benefit messaging, social proof strategies, and scaling digital ad budgets with measurable return on investment.'
                  : 'স্বাস্থ্যসচেতন অডিয়েন্সের মনস্তত্ত্ব বোঝা, স্বাস্থ্যকর পণ্যের প্রচার, ফেসবুক বিজ্ঞাপন ও সরাসরি অর্ডারের সঠিক সেলস প্রসেস পরিচালনার বাস্তব অভিজ্ঞতা।'}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center">
                <HeartPulse className="w-6 h-6 text-emerald-300 mx-auto mb-1" />
                <p className="text-xs text-white/80">{lang === 'en' ? 'Niche Focus' : 'ফোকাস এরিয়া'}</p>
                <p className="text-base font-bold text-white">{lang === 'en' ? 'Health & Nutrition' : 'নিউট্রিশন ও হেলথ'}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center">
                <Award className="w-6 h-6 text-amber-300 mx-auto mb-1" />
                <p className="text-xs text-white/80">{lang === 'en' ? 'Duration' : 'সময়কাল'}</p>
                <p className="text-base font-bold text-white">{lang === 'en' ? '1 Year Full-Time' : '১ বছর ফুল-টাইম'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.id}
                className={`p-6 rounded-2xl border ${p.borderColor} ${p.bgColor} hover:shadow-md transition-all space-y-4 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center shadow-xs mb-4`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    {p.title[lang]}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {p.description[lang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{lang === 'en' ? 'Practical & Proven' : 'বাস্তবধর্মী দক্ষতা'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
