import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Layers, ArrowRight, X, CheckCircle2, TrendingUp, Sparkles, Eye } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
  onOpenContact: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, onOpenContact }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: { en: 'All Projects', bn: 'সব প্রজেক্টস' } },
    { id: 'nutrition', label: { en: 'Nutrition Brand', bn: 'পুষ্টি ব্র্যান্ড' } },
    { id: 'web', label: { en: 'Web Dev', bn: 'ওয়েব দেব' } },
    { id: 'marketing', label: { en: 'Digital Marketing', bn: 'ডিজিটাল মার্কেটিং' } },
    { id: 'sales', label: { en: 'Sales & Tech', bn: 'সেলস ও টেক' } },
  ];

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>{lang === 'en' ? 'Portfolio Gallery' : 'প্রজেক্ট গ্যালারি'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Featured Case Studies' : 'বাস্তব প্রজেক্ট ও পোর্টফোলিও'}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            {lang === 'en'
              ? 'Real-world marketing campaigns, nutrition e-commerce landing pages, and lead funnels.'
              : 'পুষ্টি ব্রান্ডের সেলস ল্যান্ডিং পেজ, ফেসবুক এডস ক্যাম্পেইন ও ই-কমার্স প্ল্যাটফর্ম।'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                filter === cat.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image & Overlay Category Badge */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold">
                    {project.categoryLabel[lang]}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title[lang]}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.shortDescription[lang]}
                  </p>

                  {/* Impact Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      {project.stats.map((st, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-xs text-slate-500 font-medium">{st.label[lang]}</p>
                          <p className="text-sm sm:text-base font-extrabold text-indigo-600">{st.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-indigo-600 text-sm font-bold hover:text-indigo-800 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>{lang === 'en' ? 'View Case Details' : 'বিস্তারিত কেস স্টাডি'}</span>
                </button>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                  aria-label="Open Case Details"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Project Detail Case Study */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
            <div className="bg-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-8">
              
              {/* Modal Header */}
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
                    {selectedProject.categoryLabel[lang]}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-2 drop-shadow-md">
                    {selectedProject.title[lang]}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {lang === 'en' ? 'Overview & Strategy:' : 'বিবরণ ও স্ট্র্যাটেজি:'}
                  </h4>
                  <p className="text-slate-700 text-base leading-relaxed">
                    {selectedProject.fullDescription[lang]}
                  </p>
                </div>

                {/* Key Stats */}
                {selectedProject.stats && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      {lang === 'en' ? 'Key Results Achieved:' : 'অর্জিত ফলাফল:'}
                    </h4>
                    <div className="grid grid-cols-3 gap-3 bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100">
                      {selectedProject.stats.map((st, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-xs text-slate-600">{st.label[lang]}</p>
                          <p className="text-xl font-bold text-indigo-700 mt-0.5">{st.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Implementation Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {lang === 'en' ? 'Key Implementation Highlights:' : 'কাজের বিশেষত্ব:'}
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <p className="text-slate-700 text-sm font-medium">{hl[lang]}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {lang === 'en' ? 'Tools & Technologies Used:' : 'ব্যবহৃত প্রযুক্তি:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tg, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-100"
                >
                  {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
                </button>

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenContact();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-sm"
                >
                  {lang === 'en' ? 'Order Similar Project' : 'অনুরূপ প্রজেক্ট অর্ডার করুন'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
