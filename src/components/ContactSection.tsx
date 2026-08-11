import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Copy, Sparkles, Clock } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, initialMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceNeeded: 'Web Development & Ads',
    message: initialMessage
  });

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
            <MessageSquare className="w-4 h-4 text-indigo-600" />
            <span>{lang === 'en' ? 'Get In Touch' : 'যোগাযোগ করুন'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Let’s Grow Your Business Together' : 'চলুন আপনার প্রজেক্টের কথা বলি'}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            {lang === 'en'
              ? 'Have a web project, ad campaign, or custom sales funnel requirement? Send a message for a quick reply.'
              : 'ওয়েবসাইট, ফেসবুক মার্কেটিং কিংবা কন্টেন্ট সংক্রান্ত যেকোনো প্রয়োজনে মেসেজ পাঠান।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Direct Info & WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6">
              <h3 className="font-bold text-slate-900 text-xl">
                {lang === 'en' ? 'Direct Contact Channels' : 'সরাসরি যোগাযোগের ঠিকানা'}
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium">{lang === 'en' ? 'Email Address' : 'ইমেইল'}</p>
                  <p className="text-sm font-bold text-slate-900 truncate">{PERSONAL_INFO.email}</p>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="mt-1 text-xs text-indigo-600 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedText === 'email' ? (lang === 'en' ? 'Copied!' : 'কপি হয়েছে!') : (lang === 'en' ? 'Copy Email' : 'কপি করুন')}</span>
                  </button>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium">{lang === 'en' ? 'Phone / WhatsApp' : 'ফোন ও হোয়াটসঅ্যাপ'}</p>
                  <p className="text-sm font-bold text-slate-900">{PERSONAL_INFO.phone}</p>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="mt-1 text-xs text-emerald-600 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedText === 'phone' ? (lang === 'en' ? 'Copied!' : 'কপি হয়েছে!') : (lang === 'en' ? 'Copy Phone' : 'কপি করুন')}</span>
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{lang === 'en' ? 'Location' : 'ঠিকানা'}</p>
                  <p className="text-sm font-bold text-slate-900">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
                <p className="text-xs text-slate-600 leading-snug">
                  {lang === 'en'
                    ? 'Guaranteed response within 2 hours during Bangladesh business hours.'
                    : 'সাধারণত ২ ঘণ্টার মধ্যে মেসেজের উত্তর দেওয়া হয়।'}
                </p>
              </div>

            </div>

            {/* Direct WhatsApp Instant Action Button */}
            <a
              id="contact-whatsapp-direct"
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hello%20Md.%20Nasim%20uz%20zaman,%20I%20want%20to%20hire%20you%20for%20a%20project.`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>{lang === 'en' ? 'Chat Directly on WhatsApp' : 'সরাসরি হোয়াটসঅ্যাপে চ্যাট করুন'}</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {lang === 'en' ? 'Message Sent Successfully!' : 'মেসেজ সফলভাবে পাঠানো হয়েছে!'}
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  {lang === 'en'
                    ? 'Thank you for reaching out, Md. Nasim uz zaman will review your request and get back to you shortly.'
                    : 'ধন্যবাদ! আপনার মেসেজটি গৃহীত হয়েছে। মো: নাসিম উজ জামান শীঘ্রই আপনার সাথে যোগাযোগ করবেন।'}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', serviceNeeded: 'Web Development & Ads', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                >
                  {lang === 'en' ? 'Send Another Message' : 'আরেকটি মেসেজ পাঠান'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-bold text-slate-900 text-xl mb-4">
                  {lang === 'en' ? 'Send a Direct Message' : 'মেসেজ পাঠান'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? 'Your Name *' : 'আপনার নাম *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'en' ? 'e.g. Anisur Rahman' : 'যেমন: আনিসুর রহমান'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? 'Phone / WhatsApp *' : 'ফোন নাম্বার *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="01700000000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'en' ? 'Email Address' : 'ইমেইল অ্যাড্রেস'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'en' ? 'Primary Service Needed' : 'প্রয়োজনীয় মূল সার্ভিস'}
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm outline-none bg-white"
                  >
                    <option value="Web Development">{lang === 'en' ? 'Web Development & Landing Pages' : 'ওয়েবসাইট ও ল্যান্ডিং পেজ'}</option>
                    <option value="Digital Marketing & Ads">{lang === 'en' ? 'Facebook / Meta Ads Campaign' : 'ফেসবুক এডস ক্যাম্পেইন'}</option>
                    <option value="Content Creation">{lang === 'en' ? 'Content Creation & Copywriting' : 'কন্টেন্ট ও কপিরাইটিং'}</option>
                    <option value="Sales Funnel">{lang === 'en' ? 'Sales Funnel & Messenger Strategy' : 'সেলস ফানেল ও ইনবক্স ক্লোজিং'}</option>
                    <option value="All-in-One Growth Pack">{lang === 'en' ? 'Full Growth Package (Web + Marketing + Sales)' : 'ফুল গ্রোথ প্যাকেজ'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'en' ? 'Project Details or Requirements' : 'প্রজেক্টের বিবরণ বা যা জানতে চান'}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'en' ? 'Describe your business, timeline, or goals...' : 'আপনার ব্যবসার বা কাজের সংক্ষিপ্ত বিবরণ লিখুন...'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-sm outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Send Message Now' : 'মেসেজ পাঠিয়ে দিন'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
