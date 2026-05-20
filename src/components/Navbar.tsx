import { useState, useEffect } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple intersection highlights
      const sections = ['home', 'about', 'courses', 'library', 'facilities', 'gallery', 'reviews', 'admission', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Courses', href: '#courses', id: 'courses' },
    { label: 'Library', href: '#library', id: 'library' },
    { label: 'Facilities', href: '#facilities', id: 'facilities' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Admission', href: '#admission', id: 'admission' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 border-b border-slate-200 shadow-lg py-2.5 backdrop-blur-md'
            : 'bg-white/80 border-b border-slate-200/60 py-4 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo area */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center gap-2.5 group animate-fade-in"
            >
              <div className="w-10 h-10 bg-brand-light-blue text-white rounded-xl flex items-center justify-center font-bold text-xl transition-all shadow-md group-hover:scale-105 group-hover:bg-brand-blue">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base md:text-lg text-brand-blue leading-none tracking-tight">
                  SAARTHI <span className="text-brand-gold font-black">CLASSES</span>
                </span>
                <span className="font-display font-semibold text-[8px] text-slate-400 tracking-widest leading-none mt-1.5 uppercase">
                  & Library Bettiah
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-200 ${
                      activeSection === link.id
                        ? 'bg-brand-light-blue/10 text-brand-light-blue font-bold'
                        : 'text-slate-600 hover:text-brand-light-blue hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Admission CTA Button */}
              <button
                onClick={onOpenConsultation}
                className="bg-brand-light-blue hover:bg-brand-blue text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-100 hover:shadow-blue-200 active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>Admission Enquiry</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:07255049999"
                className="p-2 bg-amber-50 text-amber-600 rounded-full border border-amber-200/50 hover:bg-amber-100 transition-colors"
                title="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md" onClick={() => setIsOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-xs h-full bg-slate-900 text-white shadow-2xl p-6 pt-24 transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`py-3 px-4 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all ${
                  activeSection === link.id
                    ? 'bg-amber-400 text-amber-950 font-black shadow-sm'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="mt-6 w-full bg-amber-400 hover:bg-amber-500 text-amber-950 py-3.5 rounded-xl font-black text-sm tracking-wider shadow-md uppercase cursor-pointer border-b-4 border-amber-600 active:border-b-0 transition-all select-none duration-150"
            >
              Enquire Admission
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
