import React, { useState } from 'react';
import { Language } from '../types';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, TrendingUp, DollarSign, Video, CheckCircle, Wrench, Sparkles } from 'lucide-react';

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<string>(SKILL_CATEGORIES[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'TrendingUp': return TrendingUp;
      case 'DollarSign': return DollarSign;
      case 'Video': return Video;
      default: return Code;
    }
  };

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>{lang === 'en' ? 'Core Competencies' : 'বিশেষায়িত দক্ষতাসমূহ'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Skills, Tools & Expertise' : 'দক্ষতা, টুলস ও টেকনোলজি'}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            {lang === 'en'
              ? 'A versatile blend of technical coding skills, campaign strategies, sales psychology, and content production.'
              : 'ওয়েব কোডিং, কন্টেন্ট ক্রিয়েশন, ফেসবুক মার্কেটিং ও সেলস ফানেলের সমন্বিত দক্ষতা।'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Category Details Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all">
          <div className="mb-8 pb-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {activeCategory.title[lang]}
              </h3>
              <p className="mt-1 text-slate-600 text-sm">
                {activeCategory.description[lang]}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {lang === 'en' ? 'Primary Stack' : 'টুলস ও প্লাটফর্ম'}
              </span>
            </div>
          </div>

          {/* Skill Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {activeCategory.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-800 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2">
                    {skill.tag && (
                      <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold">
                        {skill.tag}
                      </span>
                    )}
                    <span className="font-semibold text-indigo-600">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2.5 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools Badges */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
              {lang === 'en' ? 'Tools Used:' : 'ব্যবহৃত টুলস:'}
            </span>
            {activeCategory.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
