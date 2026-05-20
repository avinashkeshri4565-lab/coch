import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  BookOpen, 
  Award, 
  ShieldAlert, 
  Check, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Compass, 
  Wifi, 
  Wind, 
  BatteryCharging,
  Zap,
  Bookmark,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

import Navbar from './components/Navbar';
import ReviewSection from './components/ReviewSection';
import AdmissionModal from './components/AdmissionModal';

// Curation of gallery images with representative academic tags
const GALLERY_IMAGES = [
  {
    title: 'Modern Library Desks',
    tag: 'Library Facility',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Focused Self-Study Hour',
    tag: 'Quiet Environment',
    url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Coaching Smart Classroom',
    tag: 'Interactive Lectures',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Extensive Syllabus Bookshelves',
    tag: 'Reference Material',
    url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Daily High School Prep',
    tag: 'Foundation Batches',
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Mentoring Sessions',
    tag: 'Experienced Guidance',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Admission Support Desk',
    tag: 'Hathikhana Center',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Personal Cabins & Lamp',
    tag: 'Disciplined Atmosphere',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
  }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  
  // Custom states for in-page contact form
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactEnquiryType, setContactEnquiryType] = useState('Both Coaching & Library Space');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const openEnquiryModal = (courseName: string = '') => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message for direct redirection
    const textMsg = `*🚨 NEW QUICK CONTACT ENQUIRY - SAARTHI* 🚨\n\n` +
      `👤 *Student Name:* ${contactName}\n` +
      `📞 *Mobile Phone:* ${contactPhone}\n` +
      `❓ *Service Requested:* ${contactEnquiryType}\n` +
      `✉️ *Message:* ${contactMessage || 'Please share more info about fees and timings.'}`;

    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/917255049999?text=${encoded}`, '_blank', 'noopener,noreferrer');
    
    // Clear state
    setContactName('');
    setContactPhone('');
    setContactMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-gold selection:text-brand-blue overflow-x-hidden">
      
      {/* Dynamic Navbar */}
      <Navbar onOpenConsultation={() => openEnquiryModal('')} />

      {/* 1. Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50">
        
        {/* Sleek background decoration circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] border-[40px] border-blue-50/10 rounded-full pointer-events-none z-0" />
        <div className="absolute -bottom-10 left-1/4 w-20 h-20 bg-blue-500/5 rounded-xl rotate-12 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-amber-500/10 rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Header Left Pane */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full text-amber-800 font-bold text-xs tracking-wide uppercase transition-all shadow-sm"
            >
              <span className="flex items-center gap-0.5 text-amber-500">
                ★★★★★
              </span>
              <span>4.9 Rating | 50+ Review Badges Verified</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-brand-blue leading-[1.15] tracking-tight"
              >
                सारथी क्लासेज <br/>
                <span className="font-serif italic font-normal text-brand-light-blue">& लाइब्रेरी</span> बेतिया
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-700 font-medium max-w-2xl leading-relaxed"
              >
                Peaceful Study Environment + Quality Education. The premier institute for focused learning in the heart of Hathikhana.
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-slate-500 max-w-lg leading-relaxed font-medium"
            >
              Secure your daily library desk space and premium exam coaching near Durga Mandir Road, Hathikhana. Expert guidance, peaceful noise-free chambers, and fast 5G WiFi study routines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2"
            >
              <button
                onClick={() => openEnquiryModal('')}
                className="flex-1 sm:flex-none bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold py-4 px-8 rounded-2xl shadow-xl shadow-amber-100 flex items-center justify-center gap-2 border-b-4 border-amber-600 active:border-b-0 transition-all select-none duration-150 cursor-pointer text-base uppercase tracking-wider"
              >
                <Sparkles className="w-5 h-5 text-amber-950 fill-amber-950/20" />
                <span>Apply for Admission</span>
              </button>

              <div className="flex gap-4">
                <a
                  href="tel:07255049999"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-4 rounded-full font-bold text-sm transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-light-blue" />
                  <span>Call 072550 49999</span>
                </a>

                <a
                  href="https://wa.me/917255049999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-green-500 hover:bg-green-600 border border-green-600/10 rounded-2xl text-white transition-all flex items-center justify-center shadow-lg shadow-green-100"
                  title="WhatsApp Enquiry"
                >
                  <MessageCircle className="w-6 h-6 fill-white text-green-500" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* 3D Collage Image Right Pane (Floating Elements) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 hidden lg:flex justify-center relative"
          >
            {/* Visual anchor / outer outline */}
            <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Main floating asset collage containing graduation cap, book, clock, learning desk, and clock */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuEdFjxHVNO4dmF_EJEUyS1mWQgX9WIqMXLxubZVOMvfdhIY4jxHKPXnkHSC6eH-Xk6-HMGLBKGs-fKf3WBCcxliBwnTuPQHOdYiG2rJqfki3sXRKjGGwO1JT2Zi3n2JiPa0Mmjw0OiEdplAKOXgdz7INT0R34pgGNZnnguAsAMYuaiVrcS6EvY6Jd3rr6pBZ8eeaiUOVDNXdltNagVf8ngxInot9I_EtVBJ9Q-hddPAVJ3vVqwmXViR0ny4w7Dg0uld2uNq643JbA"
                alt="Saarthi Scholastic Collage"
                className="w-full h-full object-contain animate-float-slow drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
                referrerPolicy="no-referrer"
              />
              
              {/* Dynamic floating overlays */}
              <div className="absolute -top-4 -right-2 bg-white/95 text-slate-900 border border-slate-200/50 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-fast">
                <div className="bg-emerald-500 text-white p-1 rounded-full"><Check className="w-3.5 h-3.5" /></div>
                <div className="text-left"><p className="text-[11px] font-black leading-none">Admission Open</p><p className="text-[9px] text-slate-400 mt-0.5">Session 2026</p></div>
              </div>

              <div className="absolute -bottom-1 -left-4 bg-white/95 text-slate-800 border border-slate-200/50 rounded-2xl p-4 shadow-xl backdrop-blur-md flex flex-col items-center animate-float-slow delay-1000">
                <span className="font-display font-black text-brand-blue text-lg">6:00 AM</span>
                <span className="text-[10px] text-brand-gold uppercase tracking-widest font-black leading-none mt-1">Opens Early</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
              className="lg:col-span-5 relative group"
            >
              <div className="absolute -inset-4 bg-brand-gold/15 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-square bg-slate-100">
                {/* Official student image */}
                <motion.img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo-7suXkvr8U2p0D9UFpQYejnCFqFgCtDHWt9J-Eb_lidBglSZNkSYNmaP1mLKPq81JXc6qUq-dHXruWkLx3YINMV9FteYW6fecbKYLX27H1uFOs-Z84zwcNmGkiUfhvEBXX5uh0f0gTeVXEZt2HrTFJIOCJ2waHnnNdRzRj2anKuHPNj_HIBq8SLHj9gqD5Ebc7pZt7nVsVOU9aix46BW-u_krFiig479DWhuv-KpjJD5cWxdhBrUzpDl_1bn6DjMm3XB6M6wqoI"
                  alt="Students Studying Happily at Saarthi Library"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                
                {/* Visual Glass Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 15 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 rounded-2xl p-4 shadow-lg flex items-center gap-3"
                >
                  <div className="bg-brand-blue text-white p-2.5 rounded-xl"><Award className="w-5 h-5 text-brand-gold" /></div>
                  <div>
                    <p className="text-xs text-slate-400 font-extrabold uppercase tracking-wider leading-none">Bettiah's Premium Hub</p>
                    <p className="text-sm text-brand-blue font-bold mt-1">Guarantees 100% Focused Atmosphere</p>
                  </div>
                </motion.div>
              </div>

              {/* Float badging block on top layer */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 70, damping: 14 }}
                className="absolute -bottom-6 -right-6 hidden sm:flex bg-brand-blue text-white rounded-2xl p-5 shadow-2xl flex-col items-center animate-pulse duration-3000"
              >
                <span className="font-display font-black text-brand-gold text-2xl">4.9 ★</span>
                <span className="text-[10px] text-white/80 font-semibold tracking-wider uppercase mt-1">Average rating</span>
              </motion.div>
            </motion.div>

            {/* Right Information Side */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="space-y-3">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  <Bookmark className="w-3 h-3 text-brand-gold fill-brand-gold" />
                  <span>About Saarthi Classes AND LIBRARY</span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 15 }}
                  className="font-display font-black text-3xl md:text-4xl text-brand-blue tracking-tight leading-tight"
                >
                  Providing peaceful study environment & quality coaching classes in Bettiah city
                </motion.h2>
              </div>

              <div className="space-y-4 text-slate-600 font-normal text-sm md:text-base leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 70, damping: 15 }}
                >
                  Saarthi Classes & Library Bettiah is a trusted educational institution and library facility located at Hathikhana, Bettiah. It provides students with a peaceful study environment, quality education, comfortable seating, disciplined atmosphere, and guidance for better results.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 70, damping: 15 }}
                >
                  Whether you are preparing for 10th and 12th state boards, aspiring for elite national competitive challenges like JEE/NEET, or practicing self-study for BPSC, SSC, and banking general lines, Saarthi offers a centralized, air-conditioned sanctuary designed for high output learning schedules.
                </motion.p>
              </div>

              {/* 3D highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "50+ Reviews", text: "Excellent Student Support" },
                  { title: "4.9 Rated", text: "Best Academic Library" },
                  { title: "Quiet Zones", text: "Individually Partitioned Desks" },
                  { title: "Expert Staff", text: "Guidance on Career Options" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.08), type: "spring", stiffness: 80, damping: 15 }}
                    className="sleek-card p-4 sm:p-5 rounded-2xl border border-white hover:border-brand-light-blue/20"
                  >
                    <span className="font-display font-black text-brand-blue text-lg">{item.title}</span>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-2"
              >
                <button
                  onClick={() => openEnquiryModal('')}
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-light-blue font-extrabold text-sm uppercase tracking-wider group cursor-pointer"
                >
                  <span>Request Center Tour & Syllabus Consult</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1.5 transition-transform" />
                </button>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Courses Section & Program Cards */}
      <section id="courses" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="inline-flex items-center gap-1.5 bg-brand-gold/15 text-brand-blue px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3"
            >
              <BookOpen className="w-3.5 h-3.5 text-brand-gold" />
              <span>Specialized Syllabi</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 15 }}
              className="font-display font-black text-3xl md:text-4xl text-brand-blue tracking-tight"
            >
              Classroom & Study Programs
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 70, damping: 15 }}
              className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed"
            >
              Explore custom tuition courses and premium library services carefully structured to fit school curriculum and competitive test dates.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Foundation Classes',
                desc: 'Class 9th to 12th math, physics, biology board preparation focus. Specialized tutoring for state boards with regular testing.',
                icon: <Award className="w-6 h-6" />,
                enquiry: 'Foundation Classes (9th-12th)',
                goldIcon: false
              },
              {
                title: 'Competitive Prep',
                desc: 'Intense test preparation for medical (NEET) and engineering (JEE). Regular mock test analysis, tips, and numerical focus.',
                icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
                enquiry: 'JEE / NEET Preparation',
                goldIcon: true
              },
              {
                title: 'General Studies',
                desc: 'Coaching lines for general competition subjects (SSC, Railroads, BPSC basic concepts, writing layout tips).',
                icon: <BookOpen className="w-6 h-6" />,
                enquiry: 'Competitive Exam General Studies',
                goldIcon: false
              },
              {
                title: 'School Coaching',
                desc: 'Dedicated school coaching routines with weekly homework guides, science experiments explanation, and primary subject revisions.',
                icon: <Compass className="w-6 h-6" />,
                enquiry: 'School Tuition Coaching',
                goldIcon: false
              },
              {
                title: 'Library Facility',
                desc: 'Personal quiet study chambers for students demanding maximum focus. Safe, sanitized separate cabins with independent charging slots.',
                icon: <Wifi className="w-6 h-6" />,
                enquiry: 'General Library Bench Seat ONLY',
                goldIcon: false
              },
              {
                title: 'Self Study Space',
                desc: 'Combined Coaching + Self Study pack designed to save travel time. Sit and study continuously with expert faculty doubt support on premises.',
                icon: <Zap className="w-6 h-6 text-brand-gold" />,
                enquiry: 'Combined Library + Class Program',
                goldIcon: true
              }
            ].map((course, idx) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, type: "spring", stiffness: 80, damping: 15 }}
                className="sleek-card p-6 rounded-3xl border border-white hover:border-brand-light-blue/20 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="w-12 h-12 rounded-2xl bg-brand-light-blue/10 text-brand-light-blue flex items-center justify-center font-bold mb-6 group-hover:bg-brand-light-blue group-hover:text-white transition-all duration-300"
                  >
                    {course.icon}
                  </motion.div>
                  <h3 className="font-display font-black text-lg text-brand-blue mb-2">{course.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>
                </div>
                <button
                  onClick={() => openEnquiryModal(course.enquiry)}
                  className="w-full text-center bg-slate-50 text-brand-light-blue border border-slate-200 hover:bg-brand-light-blue hover:text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                >
                  Enquire Now
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Library Section */}
      <section id="library" className="py-24 bg-brand-dark/95 text-white relative overflow-hidden">
        
        {/* Decorative dynamic ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-light-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="space-y-3">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-brand-gold/30"
                >
                  <Wifi className="w-3.5 h-3.5 animate-pulse" />
                  <span>PREMIUM DIGITAL SERVICES AVAILABLE</span>
                </motion.span>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 15 }}
                  className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight"
                >
                  Best Library Facility in Bettiah
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-300 text-sm md:text-base leading-relaxed"
                >
                  Establish an elevated discipline in your day-to-day scholastic goals. Saarthi features independent premium glass benches with specialized ergonomic seats, 5G internet connection, and backup lights.
                </motion.p>
              </div>

              {/* Bullet features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Peaceful Atmosphere", desc: "Absolutely zero outside road noises" },
                  { title: "Comfortable Seating", desc: "Ergonomic chairs for long study hours" },
                  { title: "Clean Study Space", desc: "Daily sanitation and sweep" },
                  { title: "Focused Environment", desc: "Guaranteed serious, non-chatty room" },
                  { title: "Long Study Hours", desc: "Opens early 6 AM to Late night" },
                  { title: "Separate Study Desks", desc: "Private partition blocks for privacy" },
                  { title: "Proper Desk Lighting", desc: "Individual study lamp slot accessibility" },
                  { title: "Affordable Monthly Plans", desc: "Discounts on combined coaching enrollment" }
                ].map((bullet, idx) => (
                  <motion.div 
                    key={bullet.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, type: "spring", stiffness: 90, damping: 14 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-white/10 text-brand-gold p-1.5 rounded-lg mt-0.5"><Check className="w-4 h-4" /></div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{bullet.title}</h4>
                      <p className="text-xs text-slate-400">{bullet.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-4 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => openEnquiryModal('General Library Bench Seat ONLY')}
                  className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-amber-950 px-8 py-4.5 rounded-2xl font-black text-sm tracking-wider uppercase transition-all select-none duration-150 cursor-pointer border-b-4 border-amber-600 active:border-b-0 shadow-xl shadow-brand-dark/30 text-center flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-950 fill-amber-950/20 shrink-0" />
                  <span>Book Your Seat Now</span>
                </button>
                <a
                  href="tel:07255049999"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4.5 rounded-2xl font-bold text-sm tracking-wider uppercase text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Timings & Timetable Call</span>
                </a>
              </motion.div>
            </div>

            {/* Right Video / Real Image Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 16 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-brand-light-blue/30 rounded-[2.5rem] blur-2xl pointer-events-none" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-brand-dark">
                {/* Official premium library room representation */}
                <motion.img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe0x-vT-MBxWKjv7D0m89nMHjtJFk_K99z0jh5Zydtdg5sLodkkVvOPMRPkhb0pZfpP16QNQ4hnKNHbtFsKHUb89AJ09jMvrg0kzUS1Kpjy9512VxWmrEtnDZtuzOd5vyMVeVpbMYmzXUr1ibxMgOT8QLpOOwpYGQPoz2sA4VGChw6NxZzHMG9xSag-4Gvl5pkCCdF17goZeC6H9j_JW9i-AP3X7D_I4V19JHPht3DlXxEbXRg-k1CX4_-dX31d5miwNFlzd2EOaM"
                  alt="Elite Library Cabin Bettiah"
                  className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700 filter brightness-95"
                  referrerPolicy="no-referrer"
                  initial={{ scale: 1.05, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Micro tech features indicator */}
                <div className="p-4 bg-black/60 backdrop-blur-md absolute bottom-0 left-0 right-0 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                    <span className="font-medium text-slate-300">Limited Daily Bench Seats</span>
                  </div>
                  <span className="text-[11px] font-black text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20 uppercase">Hurry Up!</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Facilities Section */}
      <section id="facilities" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
              <span>Full Campus Features</span>
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 15 }}
              className="font-display font-black text-3xl md:text-4xl text-slate-900 tracking-tight"
            >
              Premium Infrastructure & Benefits
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed"
            >
              We focus on absolute results by keeping the surroundings modern, high-speed, clean, and safe for male & female students.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Peaceful Study Environment",
                desc: "Structured specifically for prolonged focus sessions without noise interruption.",
                icon: <Wind className="w-5 h-5" />
              },
              {
                title: "Quality Education",
                desc: "State or central board-matched curriculum mapped exactly to textbook chapters.",
                icon: <Award className="w-5 h-5 text-brand-gold" />
              },
              {
                title: "Class + Coaching Hub",
                desc: "Transition seamlessly from self-study desks upstairs to faculty support counseling rooms downstairs.",
                icon: <Compass className="w-5 h-5 text-emerald-600" />
              },
              {
                title: "Experienced Guidance",
                desc: "Dedicated center director providing consistent tips and target reviews.",
                icon: <HeartHandshake className="w-5 h-5 text-brand-gold" />
              },
              {
                title: "Disciplined Atmosphere",
                desc: "Non-interfering study policies. Firm silence guidelines are non-negotiable.",
                icon: <CheckCircle2 className="w-5 h-5 text-brand-light-blue" />
              },
              {
                title: "Student-Friendly Space",
                desc: "Filtered water cooler, hygienic washrooms, separate shelves for student books.",
                icon: <Sparkles className="w-5 h-5 text-brand-gold" />
              },
              {
                title: "Easy WhatsApp Enquiry",
                desc: "Book a demo or register a library workspace easily in 1 minute using the form overlay.",
                icon: <Bookmark className="w-5 h-5 text-slate-600" />
              },
              {
                title: "Located in Bettiah City",
                desc: "Situated on Durga Mandir Road, Hathikhana with secure private parking under strict guard supervision.",
                icon: <MapPin className="w-5 h-5 text-red-600" />
              }
            ].map((facility, idx) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 85, damping: 15 }}
                className="sleek-card p-6 rounded-2xl border border-white hover:border-brand-light-blue/20 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-light-blue/5 text-brand-light-blue flex items-center justify-center mb-4">
                    {facility.icon}
                  </div>
                  <h4 className="font-display font-black text-base text-brand-blue mb-1">{facility.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-semibold">{facility.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Gallery Section */}
      <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="inline-flex items-center gap-1.5 bg-brand-gold/15 text-brand-blue px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
              <span>Campus Glimpses</span>
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 15 }}
              className="font-display font-black text-3xl md:text-4xl text-slate-900 tracking-tight"
            >
              Our Modern Campus Gallery
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed"
            >
              Have a visual walk-through of the study cabins, the modern learning library shelves, reference databases, and general class lecture configurations.
            </motion.p>
          </div>

          {/* Interactive Zoom Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.08, type: "spring", stiffness: 80, damping: 15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-150/70 relative group"
              >
                <div className="h-48 overflow-hidden relative bg-slate-100 inline-block w-full">
                  <motion.img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550"
                    referrerPolicy="no-referrer"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-slate-900/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
                </div>
                
                <div className="p-4">
                  <span className="text-[10px] font-extrabold text-brand-light-blue tracking-widest uppercase block mb-1">
                    {img.tag}
                  </span>
                  <h4 className="font-display font-bold text-slate-900 text-sm truncate">
                    {img.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Reviews Section */}
      <ReviewSection />

      {/* 8. Admission Section (Strong CTA) */}
      <section id="admission" className="py-24 bg-brand-blue text-white relative overflow-hidden text-center">
        {/* Parallax elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue via-brand-blue to-brand-dark filter opacity-95 pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-light-blue/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 110, damping: 14 }}
            className="inline-flex items-center gap-1.5 bg-brand-gold text-brand-blue px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 fill-brand-blue animate-pulse" />
            <span>Admission Open – Join Saarthi Today</span>
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 15 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
          >
            Limited seats available for school tutoring & private library bench reservations.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Join the most trusted education platform and library facility in Bettiah. Benefit from silent cabins, active doubt-solving teachers, and premium speed 5G internet. Click below to secure a seat immediately.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
          >
            <button
              onClick={() => openEnquiryModal('')}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-amber-950 px-10 py-4.5 rounded-2xl font-black text-base transition-all select-none duration-150 cursor-pointer border-b-4 border-amber-600 active:border-b-0 shadow-xl shadow-brand-dark/30 uppercase tracking-wider"
            >
              Apply for Admission
            </button>
            <a
              href="https://wa.me/917255049999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-white text-green-400 shrink-0" />
              <span>Timings & Slots Enquiry</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 9. Location & Direction Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Location Card Info Side */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              <div className="space-y-3">
                <motion.span 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 14 }}
                  className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-600 animate-bounce" />
                  <span>How to Find Us</span>
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 85, damping: 15 }}
                  className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight"
                >
                  Located Safely in the Heart of Bettiah Town
                </motion.h2>
              </div>

              {/* Verified location details */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 bg-slate-50 border border-slate-150 rounded-3xl p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 text-brand-blue p-2 rounded-xl mt-1 shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">Saarthi Center Address</h4>
                    <p className="text-slate-500 text-sm mt-1 font-medium leading-relaxed">
                      Durga Mandir Road, near B C English Vidyalaya, Hathikhana, Bettiah, Bihar 845438
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 text-brand-blue p-2 rounded-xl mt-1 shrink-0"><Clock className="w-5 h-5 text-brand-gold" /></div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">Center Timing Guidelines</h4>
                    <p className="text-slate-500 text-sm mt-1 font-medium">
                      Coaching classes and peaceful study seats start early at <span className="font-bold text-slate-700">6:00 AM</span>. Opens 7 Days a week.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366]/10 text-slate-800 p-2 rounded-xl mt-1 shrink-0"><MessageCircle className="w-5 h-5 text-emerald-500 fill-[#25D366]/20" /></div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">Direct Contacts</h4>
                    <p className="text-slate-500 text-sm mt-1 font-medium">
                      Call or text back at <span className="font-bold text-brand-blue">072550 49999</span> for reservation assistance.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Conversion Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <a
                  href="https://maps.app.goo.gl/qX8sZ2mTM5gZ8W6j8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-blue hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-black text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl border-b-4 border-blue-900 active:border-b-0 transition-all select-none duration-150 cursor-pointer"
                >
                  <Compass className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </motion.div>
            </div>

            {/* Right Map Embed Frame Pane */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 60, damping: 15 }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-4 bg-brand-gold/10 rounded-[2.5rem] blur-2xl pointer-events-none" />
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-slate-50 h-[300px] sm:h-[380px] md:h-[420px]">
                {/* Embedded standard clean Google map matching coordinate specs of Bettiah Saarthi Library */}
                <iframe
                  title="Saarthi Classes and Library Location Bettiah"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.085023908851!2d84.49841677626993!3d27.011850376587933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993b5a770af197b%3A0xe54df9741e4252a1!2sSaarthi%20Classes%20and%20Library!5e0!3m2!1sen!2sin!4v1716234000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 10. Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Contact Side Details */}
            <div className="lg:col-span-4 space-y-6 md:space-y-8">
              <div className="space-y-3">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 14 }}
                  className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Reach Out Instantly</span>
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight"
                >
                  Always Here to Answer Your Educational Queries
                </motion.h2>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-slate-500 font-medium text-sm leading-relaxed"
              >
                <p>
                  Do you have questions about boarding exam batches, standard fees structure, monthly passes, discount policies for students, or space timings?
                </p>
                <p>
                  Submit the quick form here or contact us direct on the phone. Our support desk answers instantly.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="border-t border-slate-200 pt-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-brand-gold" /></div>
                  <div><p className="text-xs text-slate-400 font-bold uppercase tracking-wider leading-none">WhatsApp Call & Chat Hotline</p><p className="text-sm text-brand-blue font-extrabold mt-1">072550 49999</p></div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-brand-gold" /></div>
                  <div><p className="text-xs text-slate-400 font-bold uppercase tracking-wider leading-none">Hathikhana Center Study Timings</p><p className="text-sm text-brand-blue font-extrabold mt-1">Mon - Sun: 6 AM - 10 PM</p></div>
                </div>
              </motion.div>
            </div>

            {/* Right Quick Contact Form Pane */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 70, damping: 15 }}
              className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="mb-6">
                <h3 className="font-display font-black text-xl text-slate-900">Send an Instant Notification</h3>
                <p className="text-xs text-slate-400 mt-1">Fields marked with an asterisk (*) are requested for student callback records.</p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 ml-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={e => setContactName(e.target.value)}
                      placeholder="e.g., Manish Chaurasia"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-light-blue focus:bg-white rounded-xl py-3 px-4 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 ml-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={e => setContactPhone(e.target.value)}
                      placeholder="e.g., +91 72550 49999"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-light-blue focus:bg-white rounded-xl py-3 px-4 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 or-ml-1">Course / Library Service Category Required *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1.5">
                    {[
                      'Both Coaching & Library Space',
                      'Coaching Classroom Guidance ONLY',
                      'Safe Quiet Library Desk ONLY'
                    ].map(opt => (
                      <label key={opt} className="flex items-center gap-2 border border-slate-100 bg-slate-50 rounded-xl px-4 py-3 cursor-pointer hover:border-brand-gold/40 transition-all text-xs font-bold text-slate-600">
                        <input
                          type="radio"
                          name="enquiry_type"
                          value={opt}
                          checked={contactEnquiryType === opt}
                          onChange={() => setContactEnquiryType(opt)}
                          className="text-brand-blue focus:ring-brand-gold"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 ml-1">Detailed Message or Topic Question</label>
                  <textarea
                    rows={4}
                    value={contactMessage}
                    onChange={e => setContactMessage(e.target.value)}
                    placeholder="Enter subjects name, timing limits, target boards or custom goals you want to focus on..."
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-light-blue focus:bg-white rounded-xl py-3 px-4 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl border-b-4 border-blue-900 active:border-b-0 transition-all select-none duration-150 cursor-pointer text-center"
                  >
                    <span>Submit Setup Call via WhatsApp</span>
                    <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400/20 shrink-0" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">
                    ⚡ Form will automatically draft a WhatsApp request to <span className="font-bold text-slate-600">072550 49999</span>
                  </p>
                </div>
              </form>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 11. Footer Section */}
      <footer className="bg-brand-dark text-slate-400 border-t border-white/5 relative z-10">
        
        {/* Core Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="font-display font-black text-xl text-white leading-none">
              SAARTHI <span className="text-brand-gold">CLASSES & LIBRARY</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Academic excellence through dedicated coaching programs, quiet partitioned library desk allocations, and daily test mentorship under strict guidance in Bettiah town.
            </p>
            <div className="pt-2 class flex items-center gap-3">
              <a
                href="https://wa.me/917255049999"
                className="w-8 h-8 rounded-full bg-white/5 text-slate-300 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center"
                title="WhatsApp Hot Support"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="tel:07255049999"
                className="w-8 h-8 rounded-full bg-white/5 text-slate-300 hover:bg-brand-gold hover:text-brand-blue transition-all flex items-center justify-center"
                title="Direct Phone Call Line"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Saarthi Classes</a></li>
              <li><a href="#courses" className="hover:text-brand-gold transition-colors">Tutoring Courses</a></li>
              <li><a href="#library" className="hover:text-brand-gold transition-colors">Library Facilities</a></li>
              <li><a href="#reviews" className="hover:text-brand-gold transition-colors">Google Reviews</a></li>
              <li><a href="#admission" className="hover:text-brand-gold transition-colors">Admission Enquiry Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Contact Details</h4>
            <ul className="space-y-3 text-xs leading-relaxed font-medium">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Durga Mandir Road, Near B C English Vidyalaya, Hathikhana, Bettiah, Bihar 845438</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>+91 72550 49999 (Call or Chat Ready)</span>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Opens Daily Early 6:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Newsletter & Security</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Get updates on educational changes, Board mock test routines, and seat openings at Saarthi.
            </p>
            {newsletterSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-2xl p-4 text-xs font-semibold leading-relaxed"
              >
                ✓ Subscribed successfully! We will post new schedules directly to your mailbox!
              </motion.div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Student Email Address"
                  className="bg-white/5 border border-white/10 text-white rounded-xl px-3 py-2.5 text-xs w-full focus:outline-none focus:border-amber-400"
                />
                <button
                  onClick={() => setNewsletterSubscribed(true)}
                  className="bg-amber-400 hover:bg-white text-slate-900 font-extrabold px-4 py-2 rounded-xl text-xs uppercase cursor-pointer transition-colors shrink-0"
                >
                  Sub
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Legal Copyright Block */}
        <div className="border-t border-white/5 text-center py-6 text-xs text-slate-500 font-medium bg-slate-950/40">
          <p>© 2026 Saarthi Classes AND LIBRARY Bettiah. All Rights Reserved.</p>
          <p className="mt-1 text-[10px] text-slate-600">Built for Peaceful study routines & elite scholastic coaching guidance.</p>
        </div>

      </footer>

      {/* Interactive Admission Modal Popup */}
      <AdmissionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultCourse={selectedCourse}
      />

    </div>
  );
}
