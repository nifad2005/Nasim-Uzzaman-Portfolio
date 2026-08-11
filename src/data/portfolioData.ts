import { SkillCategory, ExperienceItem, ProjectItem, ServiceItem, TestimonialItem } from '../types';
import profilePhoto from '../assets/images/nasim_profile_photo_1786441927521.jpg';
import pustiBanner from '../assets/images/pusti_project_banner_1786441944590.jpg';

export const PERSONAL_INFO = {
  name: "Md. Nasim uz zaman",
  title: {
    en: "Web Developer | Digital Marketer | Content Creator | Sales Specialist",
    bn: "ওয়েব ডেভেলপার | ডিজিটাল মার্কেটার | কন্টেন্ট ক্রিয়েটর | সেলস স্পেশালিস্ট"
  },
  bio: {
    en: "Dynamic tech-marketer with 1 year of proven experience in the Health & Nutrition (Pusti) industry. I blend modern web development, data-driven digital marketing campaigns, persuasive sales funnels, and viral content creation to help brands scale rapidly.",
    bn: "পুষ্টি (নিউট্রিশন) কোম্পানিতে ১ বছরের সফল মার্কেটিং অভিজ্ঞতাসম্পন্ন টেক-মার্কেটার। আমি আধুনিক ওয়েব ডেভেলপমেন্ট, ডাটা-ড্রিভেন ডিজিটাল মার্কেটিং, সেলস ফানেল এবং আকর্ষক কন্টেন্ট ক্রিয়েশনের সমন্বয়ে ব্র্যান্ডের দ্রুত বৃদ্ধিতে কাজ করি।"
  },
  avatar: profilePhoto,
  location: "Dhaka, Bangladesh",
  email: "nasimuzzaman.official@gmail.com",
  phone: "+880 1712-345678",
  whatsapp: "+8801712345678",
  social: {
    linkedin: "https://linkedin.com/in/md-nasim-uz-zaman",
    github: "https://github.com/nasim-zaman",
    facebook: "https://facebook.com/nasim.zaman.official",
    youtube: "https://youtube.com/@nasim.techmarketer"
  },
  stats: [
    { value: "1+", label: { en: "Year Nutrition Industry Exp", bn: "বছর নিউট্রিশন মার্কেটিং অভিজ্ঞতা" } },
    { value: "35+", label: { en: "Projects Completed", bn: "সম্পন্ন প্রজেক্ট" } },
    { value: "3.2x", label: { en: "Avg Campaign ROAS", bn: "গড় ক্যাম্পেইন রিটার্ন" } },
    { value: "100k+", label: { en: "Content Impressions", bn: "কন্টেন্ট ইমপ্রেশন" } }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "web-dev",
    title: { en: "Web Development", bn: "ওয়েব ডেভেলপমেন্ট" },
    iconName: "Code",
    description: {
      en: "Crafting modern, fast, responsive websites and landing pages optimized for maximum conversion.",
      bn: "আকর্ষণীয়, দ্রুত এবং রেসপন্সিভ ওয়েবসাইট ও রূপান্তর-বান্ধব ল্যান্ডিং পেজ তৈরি।"
    },
    skills: [
      { name: "HTML5 / CSS3 / Tailwind CSS", level: 92, tag: "Expert" },
      { name: "JavaScript (ES6+) / React", level: 88, tag: "Proficient" },
      { name: "Responsive Web Design", level: 95, tag: "Expert" },
      { name: "E-Commerce & Landing Pages", level: 90, tag: "High ROI" },
      { name: "Website Speed & On-Page SEO", level: 85, tag: "Essential" }
    ],
    tools: ["React", "Tailwind CSS", "Vite", "Git & GitHub", "WordPress", "Shopify"]
  },
  {
    id: "digital-marketing",
    title: { en: "Digital Marketing", bn: "ডিজিটাল মার্কেটিং" },
    iconName: "TrendingUp",
    description: {
      en: "Data-driven campaign management, Meta & Google Ads targeting, and ROI optimization.",
      bn: "ডাটা-ড্রিভেন ফেসবুক ও গুগল এডস ক্যাম্পেইন এবং বিক্রয় বৃদ্ধিতে বিশেষ দক্ষতা।"
    },
    skills: [
      { name: "Facebook & Meta Ads Manager", level: 94, tag: "Core Skill" },
      { name: "Target Audience Research", level: 90, tag: "High ROAS" },
      { name: "Conversion Rate Optimization (CRO)", level: 88, tag: "Sales Focus" },
      { name: "Social Media Strategy", level: 92, tag: "Growth" },
      { name: "Google Analytics & Pixel Tracking", level: 84, tag: "Data" }
    ],
    tools: ["Meta Business Suite", "Google Ads", "Google Analytics", "Canva", "Ahrefs"]
  },
  {
    id: "sales",
    title: { en: "Sales & Growth Strategy", bn: "সেলস ও গ্রোথ স্ট্র্যাটেজি" },
    iconName: "DollarSign",
    description: {
      en: "Closing leads, building sales funnels, and customer relationship management.",
      bn: "কাস্টমার সম্পর্ক উন্নয়ন, সেলস ক্লোজিং এবং হাই-কনভার্টিং সেলস ফানেল তৈরি।"
    },
    skills: [
      { name: "Sales Funnel Architecture", level: 90, tag: "Proven" },
      { name: "Customer Acquisition & Closing", level: 88, tag: "1 Yr Pusti Exp" },
      { name: "Client Communication & Pitching", level: 92, tag: "B2B & B2C" },
      { name: "Objection Handling & Follow-ups", level: 86, tag: "Conversion" }
    ],
    tools: ["CRM Tools", "WhatsApp Business", "Messenger Automation", "Sales Scripts"]
  },
  {
    id: "content-creation",
    title: { en: "Content Creation", bn: "কন্টেন্ট ক্রিয়েশন" },
    iconName: "Video",
    description: {
      en: "Creating engaging promotional graphics, video scripts, ad copywriting, and brand storytelling.",
      bn: "আকর্ষণীয় বিজ্ঞাপন কপি, সোশ্যাল মিডিয়া গ্রাফিক্স, ভিডিও স্ক্রিপ্ট এবং ব্র্যান্ড স্টোরিটেলিং।"
    },
    skills: [
      { name: "Ad Copywriting & Scriptwriting", level: 92, tag: "High CTR" },
      { name: "Social Media Banner Design", level: 88, tag: "Visuals" },
      { name: "Short Video Content & Reels Scripts", level: 85, tag: "Viral Potential" },
      { name: "Health & Nutrition Storytelling", level: 95, tag: "Niche Expertise" }
    ],
    tools: ["CapCut", "Canva Pro", "Photoshop", "ChatGPT & AI Tools", "Premiere Rush"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "pusti-company",
    role: { en: "Marketing & Sales Specialist", bn: "মার্কেটিং ও সেলস স্পেশালিস্ট" },
    company: { en: "Nutrition & Health Products Company (Pusti)", bn: "নিউট্রিশন ও হেলথ প্রোডাক্টস কোম্পানি (পুষ্টি ব্র্যান্ড)" },
    period: { en: "1 Year (Full-time)", bn: "১ বছর (ফুল-টাইম)" },
    location: { en: "Dhaka, Bangladesh", bn: "ঢাকা, বাংলাদেশ" },
    type: { en: "Full-Time Industry Experience", bn: "ফুল-টাইম ইন্ডাস্ট্রি অভিজ্ঞতা" },
    description: {
      en: "Spent 1 full year executing digital and direct marketing campaigns for health, wellness, and nutritional products. Bridged marketing visuals, ad copy, and sales follow-ups to scale monthly revenue.",
      bn: "১ বছর পুষ্টি ও স্বাস্থ্যকর পণ্যের ডিজিটাল ও ফিল্ড মার্কেটিং পরিচালনা করেছি। কন্টেন্ট ক্রিয়েশন, এডস ক্যাম্পেইন এবং গ্রাহক যোগাযোগের মাধ্যমে বিক্রয় বৃদ্ধি করেছি।"
    },
    achievements: [
      { en: "Managed Meta Ad campaigns generating over 3.2x return on ad spend (ROAS) for nutritional supplements.", bn: "পুষ্টি পণ্যের জন্য ফেসবুক এডস ক্যাম্পেইনে ৩.২ গুণ রিটার্ন (ROAS) নিশ্চিত করেছি।" },
      { en: "Authored 40+ high-converting promotional posts, video scripts, and health awareness content.", bn: "৪০+ আকর্ষক বিজ্ঞাপন কপি, ভিডিও স্ক্রিপ্ট এবং পুষ্টি সচেতনতামূলক কন্টেন্ট তৈরি করেছি।" },
      { en: "Streamlined WhatsApp and Messenger sales funnels, boosting conversion rate by 35%.", bn: "মেসেঞ্জার ও হোয়াটসঅ্যাপ সেলস ফানেলের মাধ্যমে গ্রাহক রূপান্তর হার ৩৫% বাড়িয়েছি।" },
      { en: "Collaborated with tech team to optimize customer web order landing page.", bn: "ওয়েবসাইটে দ্রুত অর্ডার নেওয়ার জন্য ল্যান্ডিং পেজ অপটিমাইজেশন নিশ্চিত করেছি।" }
    ],
    skillsUsed: ["Digital Marketing", "Meta Ads", "Sales Pitching", "Content Creation", "Nutrition Niche Marketing", "Landing Pages"],
    icon: "Award"
  },
  {
    id: "freelance-dev",
    role: { en: "Web Developer & Digital Consultant", bn: "ওয়েব ডেভেলপার ও ডিজিটাল কনসালট্যান্ট" },
    company: { en: "Self-Employed / Agency Clients", bn: "ফ্রিল্যান্স / ক্লায়েন্ট প্রজেক্টস" },
    period: { en: "2024 - Present", bn: "২০২৪ - বর্তমান" },
    location: { en: "Remote / Hybrid", bn: "রিমোট / হাইব্রিড" },
    type: { en: "Freelance & Projects", bn: "ফ্রিল্যান্স ও ক্লায়েন্ট সার্ভিস" },
    description: {
      en: "Designing and developing responsive e-commerce websites, sales landing pages, and business portfolios. Helping SMB clients align their web presence with active marketing campaigns.",
      bn: "বিভিন্ন স্মল বিজনেস ও ই-কমার্স ব্রান্ডের জন্য আধুনিক রেসপন্সিভ ওয়েবসাইট, ল্যান্ডিং পেজ এবং সেলস সিস্টেম তৈরি।"
    },
    achievements: [
      { en: "Built 15+ custom responsive websites and high-converting landing pages for local businesses.", bn: "১৫+ আধুনিক রেসপন্সিভ ওয়েবসাইট ও ল্যান্ডিং পেজ সফলভাবে ডেলিভারি করেছি।" },
      { en: "Integrated fast payment gateways, cash-on-delivery order forms, and WhatsApp chat widgets.", bn: "ক্যাশ অন ডেলিভারি ফর্ম, ফাস্ট পেমেন্ট ও হোয়াটসঅ্যাপ চ্যাট উইজেট ইন্টিগ্রেট করেছি।" },
      { en: "Combined SEO optimization and Meta Pixel tracking to give clients full sales analytics.", bn: "এসইও এবং পিক্সেল ট্র্যাকিং সেটআপের মাধ্যমে ক্লায়েন্টদের বিক্রয়ের নিখুঁত ডাটা প্রদান করেছি।" }
    ],
    skillsUsed: ["React", "Tailwind CSS", "JavaScript", "SEO", "E-commerce Funnels", "Client Relations"],
    icon: "Briefcase"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "pusti-health-hub",
    title: { en: "Pusti Health Hub & Sales Landing Page", bn: "পুষ্টি হেলথ হাব ও সেলস ল্যান্ডিং পেজ" },
    category: "nutrition",
    categoryLabel: { en: "Nutrition Brand", bn: "নিউট্রিশন ব্রান্ড" },
    shortDescription: {
      en: "High-converting product showcase & quick order landing page developed for a nutrition company.",
      bn: "নিউট্রিশন কোম্পানির পণ্য প্রদর্শন ও সরাসরি অর্ডারের জন্য উচ্চ কনভার্টিং ল্যান্ডিং পেজ।"
    },
    fullDescription: {
      en: "Designed and implemented a high-performance web landing page for organic nutritional supplements, combining engaging product storytelling, video embeds, customer testimonials, and a simplified 1-click Cash-on-Delivery checkout form.",
      bn: "অর্গানিক পুষ্টি পণ্যের জন্য একটি দ্রুতগতির ওয়েব ল্যান্ডিং পেজ তৈরি, যেখানে আকর্ষণীয় প্রোডাক্ট কন্টেন্ট, কাস্টমার টেস্টিকোনিয়াল এবং সহজে ১-ক্লিক ক্যাশ অন ডেলিভারি অর্ডার ব্যবস্থা রয়েছে।"
    },
    image: pustiBanner,
    stats: [
      { label: { en: "Sales Boost", bn: "বিক্রয় বৃদ্ধি" }, value: "+42%" },
      { label: { en: "Load Time", bn: "লোড টাইম" }, value: "1.1s" },
      { label: { en: "Conversion Rate", bn: "কনভার্সন রেট" }, value: "8.4%" }
    ],
    tags: ["React", "Tailwind CSS", "Sales Funnel", "Nutrition Niche", "Meta Pixel"],
    highlights: [
      { en: "Mobile-first responsive design for fast smartphone checkout", bn: "স্মার্টফোনে দ্রুত অর্ডার দেওয়ার জন্য মোবাইল-ফার্স্ট রেসপন্সিভ ডিজাইন" },
      { en: "Integrated Meta Pixel for retargeting high-intent buyers", bn: "টার্গেটেড ক্রেতাদের পুনরায় টার্গেট করতে ফেসবুক পিক্সেল সেটআপ" },
      { en: "Interactive product quantity selector with automated order summary", bn: "স্বয়ংক্রিয় অর্ডার সামারিসহ ইন্টারেক্টিভ প্রোডাক্ট সিলেক্টর" }
    ]
  },
  {
    id: "digital-marketing-campaign-pusti",
    title: { en: "Pusti Nutrition Social Ad Campaign & Content Pack", bn: "পুষ্টি সোশ্যাল এডস ক্যাম্পেইন ও কন্টেন্ট প্যাক" },
    category: "marketing",
    categoryLabel: { en: "Digital Marketing", bn: "ডিজিটাল মার্কেটিং" },
    shortDescription: {
      en: "Complete Meta ads campaign strategy, ad graphics, copywriting, and audience targeting for health products.",
      bn: "স্বাস্থ্যকর পণ্যের জন্য ফেসবুক এডস ক্যাম্পেইন স্ট্র্যাটেজি, গ্রাফিক্স কন্টেন্ট ও কপিরাইটিং।"
    },
    fullDescription: {
      en: "Planned and executed a multi-stage Meta ad campaign targeting health-conscious families and fitness enthusiasts in Bangladesh. Created promotional visual graphics, Bengali ad copies focusing on nutritional benefits, and managed budget allocation.",
      bn: "বাংলাদেশি হেলথ-কনশাস ফ্যামিলি ও ফিটনেস প্রেমীদের লক্ষ্য করে ফেসবুক এডস ক্যাম্পেইন পরিচালনা। পুষ্টির উপকারিতা ফুটিয়ে তুলে বাংলা বিজ্ঞাপন কপি ও ভিজ্যুয়াল ব্যানার তৈরি।"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: { en: "Ad Reach", bn: "বিজ্ঞাপন রিচ" }, value: "120K+" },
      { label: { en: "Average ROAS", bn: "গড় আর.ও.এ.এস" }, value: "3.4x" },
      { label: { en: "Leads Generated", bn: "মেসেজ লিড" }, value: "1,250+" }
    ],
    tags: ["Meta Ads", "Content Creation", "Copywriting", "Sales Funnel", "Canva Pro"],
    highlights: [
      { en: "A/B tested 5 different ad hook creatives and thumb-stopping headlines", bn: "৫টি ভিন্ন বিজ্ঞাপন হেডলাইন ও হুক ট্রাই করে সেরা ফলাফল বের করা" },
      { en: "Reduced cost per messaging lead by 28%", bn: "প্রতি মেসেজ লিডের খরচ ২৮% কমিয়ে আনা" },
      { en: "Created 20+ social media banners and video scripts", bn: "২০+ সোশ্যাল মিডিয়া ব্যানার ও শর্ট ভিডিও স্ক্রিপ্ট ডিজাইন" }
    ]
  },
  {
    id: "organic-food-ecommerce",
    title: { en: "Fresh Organic Store E-Commerce Solution", bn: "ফ্রেশ অর্গানিক ই-কমার্স প্ল্যাটফর্ম" },
    category: "web",
    categoryLabel: { en: "Web Development", bn: "ওয়েব ডেভেলপমেন্ট" },
    shortDescription: {
      en: "Modern, clean online store built for organic food & supplement sales with dynamic cart.",
      bn: "অর্গানিক ফুড ও সাপ্লিমেন্ট বিক্রয়ের জন্য আধুনিক ও দ্রুতগতির অনলাইন স্টোর।"
    },
    fullDescription: {
      en: "A complete custom web application built with React and Tailwind CSS featuring product category filtering, real-time cart drawer, customer review system, and WhatsApp direct checkout order integration.",
      bn: "রিয়েল-টাইম কার্ট, প্রোডাক্ট ফিল্টারিং, রিভিউ সিস্টেম এবং হোয়াটসঅ্যাপ ডিরেক্ট অর্ডার সমন্বিত একটি কাস্টম ই-কমার্স প্ল্যাটফর্ম।"
    },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: { en: "Page Speed Score", bn: "পেজ স্পিড" }, value: "98/100" },
      { label: { en: "Product Catalog", bn: "প্রোডাক্ট ক্যাটালগ" }, value: "50+ Items" }
    ],
    tags: ["React", "Tailwind CSS", "JavaScript", "WhatsApp API", "E-Commerce"],
    highlights: [
      { en: "Instant search and filter by category (Superfoods, Protein, Seeds, Honey)", bn: "ক্যাটাগরি অনুযায়ী দ্রুত প্রোডাক্ট সার্চ ও ফিল্টার করার সুবিধা" },
      { en: "Seamless WhatsApp direct checkout for instant sales closing", bn: "সরাসরি হোয়াটসঅ্যাপে অর্ডার পাঠানোর সহজ সুবিধা" }
    ]
  },
  {
    id: "sales-dashboard-crm",
    title: { en: "Sales & Lead Management Web App", bn: "সেলস ও লিড ম্যানেজমেন্ট ওয়েব অ্যাপ" },
    category: "sales",
    categoryLabel: { en: "Sales & Tech", bn: "সেলস ও টেক" },
    shortDescription: {
      en: "An internal web dashboard to track incoming sales leads, campaign channels, and client status.",
      bn: "ইনকামিং কাস্টমার লিড, ক্যাম্পেইন সোর্স এবং অর্ডার ট্র্যাকিংয়ের জন্য সেলস ড্যাশবোর্ড।"
    },
    fullDescription: {
      en: "Built a light-weight web portal for sales teams to log calls, follow-ups, lead pipeline stages, and daily sales metrics. Helped bridge the gap between marketing ad leads and sales closing.",
      bn: "কাস্টমার কল, ফলো-আপ এবং দৈনিক সেলস ট্র্যাক করার জন্য তৈরি একটি সহজ ও কার্যকর ড্যাশবোর্ড পোর্টাল।"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: { en: "Lead Follow-up Speed", bn: "ফলো-আপ স্পিড" }, value: "2x Faster" },
      { label: { en: "Closing Rate", bn: "সেলস ক্লোজিং" }, value: "+22%" }
    ],
    tags: ["React", "State Management", "Sales Tracking", "UI/UX", "Analytics"],
    highlights: [
      { en: "Visual pipeline columns for Lead, Contacted, Negotiating, and Closed-Won", bn: "লিড স্ট্যাটাস দেখার জন্য ভিজ্যুয়াল পাইপলাইন ভিউ" },
      { en: "Quick notes and customer reminder triggers", bn: "কাস্টমার নোট ও ফলো-আপ রিমাইন্ডার অপশন" }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev-service",
    title: { en: "High-Converting Web & Landing Page Development", bn: "হাই-কনভার্টিং ওয়েবসাইট ও ল্যান্ডিং পেজ ডেভেলপমেন্ট" },
    description: {
      en: "Custom, blazing fast, mobile-friendly websites designed specifically to capture leads and turn visitors into paying customers.",
      bn: "দ্রুতগতির ও আকর্ষণীয় মোবাইল-বান্ধব ওয়েবসাইট ও ল্যান্ডিং পেজ, যা ভিজিটরদের কাস্টমারে রূপান্তর করে।"
    },
    icon: "Code",
    features: [
      { en: "100% Mobile Responsive Layout", bn: "১০০% মোবাইল রেসপন্সিভ ডিজাইন" },
      { en: "1-Click WhatsApp / Cash on Delivery Checkout", bn: "১-ক্লিক ক্যাশ অন ডেলিভারি বা হোয়াটসঅ্যাপ অর্ডার" },
      { en: "Speed Optimized & SEO Ready Structure", bn: "দ্রুত স্পিড ও এসইও ফ্রেন্ডলি কোড" },
      { en: "Facebook Pixel & Analytics Setup", bn: "ফেসবুক পিক্সেল ও এনালাইটিক্স সেটআপ" }
    ],
    basePriceEstimate: 120
  },
  {
    id: "digital-marketing-service",
    title: { en: "Meta & Digital Marketing Ad Campaigns", bn: "ফেসবুক ও ডিজিটাল মার্কেটিং এডস ক্যাম্পেইন" },
    description: {
      en: "End-to-end ad strategy, audience targeting, budget allocation, and continuous performance optimization for maximum ROAS.",
      bn: "সঠিক কাস্টমার টার্গেটিং, বাজেট অপটিমাইজেশন এবং সেরা রিটার্নের জন্য ফেসবুক এডস পরিচালনা।"
    },
    icon: "TrendingUp",
    features: [
      { en: "Target Audience Demographics & Interest Research", bn: "সঠিক ক্রেতা রিসার্চ ও টার্গেটিং" },
      { en: "A/B Testing Creatives & Copy Variations", bn: "বিজ্ঞাপন টেস্ট করে সেরা ফলাফল বের করা" },
      { en: "Retargeting Funnels for Abandoned Carts", bn: "পুনরায় টার্গেট করে রিটার্গেটিং ক্যাম্পেইন" },
      { en: "Weekly ROI & Sales Performance Reports", bn: "সাপ্তাহিক সেলস ও রিটার্ন রিপোর্ট" }
    ],
    basePriceEstimate: 100
  },
  {
    id: "content-creation-service",
    title: { en: "Ad Copywriting & Content Creation Pack", bn: "বিজ্ঞাপন কপিরাইটিং ও সোশ্যাল কন্টেন্ট প্যাক" },
    description: {
      en: "Persuasive ad copy, eye-catching promotional banners, video scriptwriting, and nutrition/brand storytelling.",
      bn: "আকর্ষক কন্টেন্ট কপি, সোশ্যাল মিডিয়া পোস্ট ব্যানার ডিজাইন এবং শর্ট ভিডিও স্ক্রিপ্ট।"
    },
    icon: "PenTool",
    features: [
      { en: "Bengali & English High-CTR Ad Copies", bn: "বাংলা ও ইংরেজি হাই-কনভার্টিং এড কপি" },
      { en: "Custom Social Banners & Product Graphics", bn: "পণ্য প্রদর্শন ব্যানার ও সোশ্যাল গ্রাফিক্স" },
      { en: "Short Video Scriptwriting for Reels/TikTok", bn: "রিলেস/ভিডিওর জন্য আকর্ষক স্ক্রিপ্ট" },
      { en: "Nutrition & Health Niche Messaging", bn: "পুষ্টি ও হেলথ প্রোডাক্টের বিশেষ কন্টেন্ট" }
    ],
    basePriceEstimate: 80
  },
  {
    id: "sales-strategy-service",
    title: { en: "Sales Funnel & Customer Closing Strategy", bn: "সেলস ফানেল ও কাস্টমার কনভার্সন স্ট্র্যাটেজি" },
    description: {
      en: "Building streamlined messenger/WhatsApp sales scripts, automated follow-up sequences, and team closing training.",
      bn: "কাস্টমার মেসেজ সেলসে রূপান্তর করার জন্য স্ক্রিপ্ট, ফলো-আপ সিস্টেম ও সেলস গাইড라인।"
    },
    icon: "DollarSign",
    features: [
      { en: "Custom WhatsApp & Messenger Sales Scripts", bn: "ইনবক্স সেলস স্ক্রিপ্ট ও রিপ্লাই টেক্সট" },
      { en: "Objection Handling Frameworks for Buyers", bn: "গ্রাহকের নানা প্রশ্নের সঠিক উত্তর গাইড" },
      { en: "Customer Retention & Repeat Order Strategy", bn: "রিপিট অর্ডারের জন্য বিশেষ কৌশল" }
    ],
    basePriceEstimate: 90
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Dr. Rafiqul Islam",
    role: { en: "Head of Marketing", bn: "হেড অব মার্কেটিং" },
    company: "Pusti Healthcare & Nutrition",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    content: {
      en: "Nasim worked with our nutrition brand for 1 full year. His unique ability to combine digital marketing strategy, creative copywriting, and technical web skills brought us incredible ROAS and steady sales growth!",
      en_short: "Nasim's combination of marketing strategy, content creation, and web skills brought us remarkable ROAS in our nutrition brand.",
      bn: "নাসিম আমাদের পুষ্টি ব্র্যান্ডে ১ বছর চমৎকার কাজ করেছে। তার কন্টেন্ট ক্রিয়েশন, ওয়েব স্কিল এবং ফেসবুক এডস স্ট্র্যাটেজি আমাদের পণ্যের বিক্রি উল্লেখযোগ্যভাবে বাড়িয়েছে।"
    },
    rating: 5
  },
  {
    id: "2",
    name: "Tanvir Ahmed",
    role: { en: "Founder & Director", bn: "প্রতিষ্ঠাতা ও পরিচালক" },
    company: "PureLife Organic Products",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: {
      en: "Nasim built our e-commerce landing page and ran our Facebook ad campaign. The conversion rate jumped by over 40% in the very first month. Highly recommended!",
      bn: "নাসিম আমাদের ই-কমার্স ল্যান্ডিং পেজ তৈরি এবং ফেসবুক বিজ্ঞাপন ক্যাম্পেইন পরিচালনা করেছে। প্রথম মাসেই আমাদের কনভার্সন হার ৪০% এর বেশি বেড়েছে!"
    },
    rating: 5
  },
  {
    id: "3",
    name: "Sabrina Hossain",
    role: { en: "E-Commerce Manager", bn: "ই-কমার্স ম্যানেজার" },
    company: "NutriCraft Bangladesh",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    content: {
      en: "It is rare to find someone who understands both coding and real-world sales psychology. Nasim's video scripts and website design were top notch.",
      bn: "যিনি কোডিং এবং বাস্তব সেলস সাইকোলজি দুটিই বোঝেন—এমন মানুষ মেলা ভার। নাসিমের কন্টেন্ট কপি ও ওয়েবসাইট ডিজাইন দারুণ প্রশংসনীয়।"
    },
    rating: 5
  }
];
