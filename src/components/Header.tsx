import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'AI Voice Agent', href: '#voice-agent' },
    { name: 'Industries', href: '#industries' },
    { name: 'AI Consulting', href: '#consulting' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isMenuOpen || scrolled ? 'bg-[#050505] border-b border-white/5 py-4' : 
        'bg-[#050505] md:bg-transparent py-4 md:py-8'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <img src="/logo.png" alt="GraceAiGuru Logo" className="h-12 sm:h-16 w-auto" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-tighter leading-none">GraceAiGuru</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-1 hidden sm:block">Elite Intelligence</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="https://assets.cdn.filesafe.space/s6ItVVYZgsP0g9yn6oQe/media/699e06f33db1c194453991bd.mov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-6 text-xs uppercase tracking-widest inline-flex items-center gap-2"
          >
            Book Demo <ArrowRight size={14} />
          </a>
        </nav>

        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[110] bg-[#050505] p-8 flex flex-col pt-32"
          >
            {/* Additional Close Button for Clarity */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white p-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-8 text-center pt-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-gray-400 hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://assets.cdn.filesafe.space/s6ItVVYZgsP0g9yn6oQe/media/699e06f33db1c194453991bd.mov" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full mt-8 py-5 text-xl inline-flex items-center justify-center gap-3"
              >
                Book Demo <ArrowRight size={24} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
