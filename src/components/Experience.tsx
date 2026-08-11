import React from 'react';
import { Language } from '../types';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <Briefcase className="w-4 h-4 text-indigo-600" />
            <span>{lang === 'en' ? 'Track Record' : 'কাজের অভিজ্ঞতা'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Work Experience & Impact' : 'কর্মক্ষেত্র ও অর্জিত সাফল্য'}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            {lang === 'en'
              ? 'Proven experience in real-world marketing, digital sales funnels, and custom web development.'
              : 'পুষ্টি কোম্পানিতে ১ বছরের মার্কেটিং কাজের অভিজ্ঞতা এবং সফল ক্লায়েন্ট সার্ভিস।'}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-all"
            >
              {/* Highlight ribbon for 1 year nutrition experience */}
              {exp.id === 'pusti-company' && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'en' ? '1 Year Nutrition Industry Role' : 'নিউট্রিশন কোম্পানিতে ১ বছর'}</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {exp.role[lang]}
                  </h3>
                  <p className="text-indigo-600 font-semibold text-base mt-0.5">
                    {exp.company[lang]}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location[lang]}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description[lang]}
              </p>

              {/* Key Achievements List */}
              <div className="space-y-2.5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {lang === 'en' ? 'Key Impact & Achievements:' : 'প্রধান সাফল্যসমূহ:'}
                </h4>
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm font-medium">
                      {ach[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-2">
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-600"
                  >
                    #{skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
