import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, CheckCircle } from 'lucide-react';
import { EnquiryData } from '../types';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export default function AdmissionModal({ isOpen, onClose, defaultCourse = "" }: AdmissionModalProps) {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    phone: '',
    course: defaultCourse || 'Board Exams (9th-12th)',
    librarySeat: 'No',
    batchTime: 'Morning Batch (6:00 AM - 10:00 AM)',
    message: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const courses = [
    'Board Exams (9th-12th)',
    'JEE / NEET Preparation',
    'Competitive Exam General Studies',
    'School Tuition Coaching',
    'General Library Bench Seat ONLY',
    'Combined Library + Class Program'
  ];

  const batches = [
    'Morning Batch (6:00 AM - 10:00 AM)',
    'Mid-Day Study (10:00 AM - 2:00 PM)',
    'Afternoon Coaching (2:00 PM - 6:00 PM)',
    'Evening Batch (6:00 PM - 10:00 PM)',
    'Full Day Long Hours (6:00 AM - 10:00 PM)'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create pre-filled WhatsApp message
    const whatsappMsg = `*🚨 NEW ADMISSION ENQUIRY - SAARTHI CLASSES & LIBRARY* 🚨\n\n` +
      `✍️ *Student Name:* ${formData.name}\n` +
      `📞 *Mobile Number:* ${formData.phone}\n` +
      `📚 *Course Interested:* ${formData.course}\n` +
      `🪑 *Library Seat Needed?:* ${formData.librarySeat}\n` +
      `⏰ *Preferred Batch Time:* ${formData.batchTime}\n` +
      `💬 *Message:* ${formData.message || 'No additional questions. Please contact me.'}\n\n` +
      `_Please review my request and help me secure a seat!_`;

    const encodedMsg = encodeURIComponent(whatsappMsg);
    const whatsappUrl = `https://wa.me/917255049999?text=${encodedMsg}`;

    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 15, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg sleek-card bg-white/95 rounded-[2rem] shadow-2xl border border-white p-5 md:p-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Elegant Background Gold Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-display font-black text-xl md:text-2xl text-brand-blue flex items-center gap-2">
                  Admission Enquiry Form
                </h3>
                <p className="text-sm text-slate-500 mt-1 font-medium">
                  Secure your future at Saarthi Bettiah
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-brand-blue transition-colors outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-amber-500 rounded-full mb-4 animate-bounce" />
                <h4 className="font-display font-black text-lg text-brand-blue mb-2">Pre-filling Enquiry Details...</h4>
                <p className="text-sm text-slate-500 max-w-xs font-semibold">
                  Your details are compiled. We are opening WhatsApp to finalize and submit your enquiry instantly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-blue tracking-wider uppercase mb-1 ml-1">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter full name"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-light-blue focus:bg-white rounded-xl py-2.5 px-4 outline-none transition-all text-sm font-semibold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-blue tracking-wider uppercase mb-1 ml-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={15}
                    placeholder="e.g. 072550 49999"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-light-blue focus:bg-white rounded-xl py-2.5 px-4 outline-none transition-all text-sm font-semibold text-slate-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-blue tracking-wider uppercase mb-1 ml-1">
                      Course Interested *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-light-blue focus:bg-white rounded-xl py-2.5 px-3 outline-none transition-all text-sm font-semibold text-slate-800"
                    >
                      {courses.map(course => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-blue tracking-wider uppercase mb-1 ml-1">
                      Library Seat Required?
                    </label>
                    <select
                      name="librarySeat"
                      value={formData.librarySeat}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-light-blue focus:bg-white rounded-xl py-2.5 px-3 outline-none transition-all text-sm font-semibold text-slate-800"
                    >
                      <option value="Yes">Yes, Required</option>
                      <option value="No">No, Only Classes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-blue tracking-wider uppercase mb-1 ml-1">
                    Preferred Batch Time
                  </label>
                  <select
                    name="batchTime"
                    value={formData.batchTime}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-light-blue focus:bg-white rounded-xl py-2.5 px-3 outline-none transition-all text-sm font-semibold text-slate-800"
                  >
                    {batches.map(batch => (
                      <option key={batch} value={batch}>{batch}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-blue tracking-wider uppercase mb-1 ml-1">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter subject topic or queries (e.g., self-study schedules, fees...)"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-light-blue focus:bg-white rounded-xl py-2.5 px-4 outline-none transition-all text-sm font-semibold text-slate-800 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-blue-700 text-white py-3.5 px-6 rounded-2xl font-black text-center text-sm tracking-wide shadow-lg cursor-pointer transform transition-all flex items-center justify-center gap-2 border-b-4 border-blue-900 active:border-b-0 duration-150 select-none"
                  >
                    <span>Send Enquiry on WhatsApp</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
                    ⚡ Form will automatically sync and draft a WhatsApp request to <span className="font-bold text-slate-500">072550 49999</span>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
