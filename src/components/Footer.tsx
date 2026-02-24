import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-white/5 pt-24 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <img src="/logo.png" alt="GraceAiGuru Logo" className="h-12 sm:h-16 w-auto" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tighter">GraceAiGuru</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] mt-1">Sovereign Intelligence</span>
              </div>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Engineering AI-enabled operating models that improve execution, secure revenue velocity, and eliminate operational friction for elite service businesses.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary py-3 px-6 text-sm">
                Book Demonstration <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 tracking-tight uppercase text-xs">Infrastructure</h4>
            <ul className="space-y-5">
              {['Home', 'AI Voice Agent', 'Industries', 'AI Consulting', 'Process', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-medium text-gray-500 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 tracking-tight uppercase text-xs">Connection</h4>
            <ul className="space-y-6">
              <ContactItem 
                icon={<MapPin size={18} />} 
                text={<>30 N Gould St Ste N<br />Sheridan, WY 82801</>} 
              />
              <ContactItem 
                icon={<Phone size={18} />} 
                text={<a href="tel:+14694029932" className="hover:text-white transition-colors">469-402-9932</a>} 
              />
              <ContactItem 
                icon={<Mail size={18} />} 
                text={<a href="mailto:intelligence@graceaiguru.com" className="hover:text-white transition-colors">intelligence@graceaiguru.com</a>} 
              />
              <ContactItem 
                icon={<Globe size={18} />} 
                text={<a href="https://graceaiguru.com" target="_blank" className="hover:text-white transition-colors">www.graceaiguru.com</a>} 
              />
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-gray-600 font-medium">
            © 2026 GraceAiGuru Intelligence. All rights reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 font-medium tracking-wide">Privacy Protocol</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 font-medium tracking-wide">Terms of Sovereignty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon, text }: { icon: React.ReactNode, text: React.ReactNode }) => (
  <li className="flex gap-5 items-start">
    <div className="text-brand-primary pt-1">{icon}</div>
    <span className="text-sm text-gray-400 font-medium leading-relaxed">{text}</span>
  </li>
);

export default Footer;
