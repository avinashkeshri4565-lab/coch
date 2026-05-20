import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareCode, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

export default function ReviewSection() {
  const reviews: Review[] = [
    {
      id: '1',
      author: 'Sumit Sharma',
      text: 'Very good study environment with peaceful atmosphere.',
      role: 'Self Study / Aspirant',
      rating: 5,
      initials: 'SS'
    },
    {
      id: '2',
      author: 'Aarav Kumar',
      text: 'Best place for quality education in Hathikhana area.',
      role: 'Board Exams Preparation',
      rating: 5,
      initials: 'AK'
    },
    {
      id: '3',
      author: 'Ravi Ranjan',
      text: 'Official best coaching and library facility in Bettiah. Best result coaching.',
      role: 'Competitive Exam Student',
      rating: 5,
      initials: 'RR'
    },
    {
      id: '4',
      author: 'Bihari Babu (Anonymous)',
      text: 'दिल से किया हुआ रिव्यू है। इससे अच्छा लाइब्रेरी और कोचिंग सेंटर बेतिया में नहीं है। दोस्तों, अगर अच्छा रिजल्ट चाहिए तो सारथी ज्वाइन करो।',
      role: 'Joined Library & Classes',
      rating: 5,
      initials: 'BB'
    },
    {
      id: '5',
      author: 'Nisha Singh',
      text: 'Best library in Bettiah #Saarthi_Library. Highly recommended peaceful desks.',
      role: 'BPSC Aspirant',
      rating: 5,
      initials: 'NS'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 -right-16 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-16 w-64 h-64 bg-brand-light-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Review Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 px-3.5 py-1.5 rounded-full text-brand-blue font-bold text-xs tracking-wider uppercase mb-4"
          >
            <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
            <span>Google Reviews Feedback</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl md:text-4xl text-brand-blue"
          >
            What Our Students Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-500 font-medium text-sm md:text-base leading-relaxed"
          >
            Experience pure academic transformation with true stories from local students in Bettiah who successfully prepared for board exams and competitive studies.
          </motion.p>
        </div>

        {/* Local Highlights Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Rating Summary Left Pane */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 sleek-card bg-white/95 border border-white rounded-[2rem] p-6 md:p-8 shadow-xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-400" />
            <h3 className="font-display font-black text-6xl text-brand-blue mb-1">4.9</h3>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 fill-amber-400 text-amber-500`} />
              ))}
            </div>
            <p className="font-bold text-slate-800 text-sm">Institution Rating Badge</p>
            <p className="text-xs text-slate-400 mt-1 font-semibold">Based on 50 verified active reviews</p>

            <div className="border-t border-slate-100 my-6 pt-6 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                <span className="font-bold">Peaceful Study Vibe</span>
                <span className="text-brand-blue">100%</span>
              </div>
              <div className="w-full bg-slate-150 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: '100%' }} />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                <span className="font-bold">Coaching Excellence</span>
                <span className="text-brand-blue">98%</span>
              </div>
              <div className="w-full bg-slate-150 h-1.5 rounded-full overflow-hidden">
                <div className="bg-brand-light-blue h-full rounded-full" style={{ width: '98%' }} />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                <span className="font-bold">Facilities & Cleanliness</span>
                <span className="text-brand-blue">100%</span>
              </div>
              <div className="w-full bg-slate-150 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center justify-center gap-2">
              <span className="text-xs font-bold text-amber-800 font-display uppercase tracking-wider">100% Verified Student Feedback</span>
            </div>
          </motion.div>

          {/* Interactive Responsive Carousel Right Pane */}
          <div className="lg:col-span-8 relative">
            
            {/* Core Review Card Animation container */}
            <div className="min-h-[260px] md:min-h-[220px] flex items-stretch">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full sleek-card bg-white/95 rounded-[2rem] p-6 md:p-8 border border-white shadow-xl flex flex-col justify-between relative hover:border-brand-light-blue/20"
                >
                  <Quote className="absolute top-6 right-8 w-14 h-14 text-slate-100 fill-slate-50/10 pointer-events-none" />
                  
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(reviews[activeIndex].rating)].map((_, idx) => (
                        <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold italic relative z-10">
                      "{reviews[activeIndex].text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm tracking-wide shadow-md">
                      {reviews[activeIndex].initials}
                    </div>
                    <div>
                      <h4 className="font-display font-black text-brand-blue text-sm">
                        {reviews[activeIndex].author}
                      </h4>
                      <p className="text-xs text-brand-light-blue font-bold tracking-wider uppercase mt-0.5">
                        {reviews[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Custom Carousel Navigation */}
            <div className="flex items-center justify-between mt-6 px-2">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? 'w-8 bg-brand-gold' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-white hover:bg-brand-blue hover:text-white text-slate-600 border border-slate-200 transition-all shadow-sm cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-white hover:bg-brand-blue hover:text-white text-slate-600 border border-slate-200 transition-all shadow-sm cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
