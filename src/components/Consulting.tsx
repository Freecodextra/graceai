import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, DollarSign, Shield, Search, Workflow, Database, Zap, Map } from 'lucide-react';

const Consulting = () => {
  return (
    <section id="consulting" className="section-padding bg-background-dark/80 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20 space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em]"
          >
            Chapter 3: The Intelligence Audit
          </motion.p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Designing Your <span className="text-gradient">Sovereign Model.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Move beyond simple tool adoption. We engineer AI-enabled operating models that reduce friction, protect your margin, and drive superior business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">Core Strategic Focus</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <FocusItem icon={<Target size={20} />} text="Improved Execution Velocity" />
                <FocusItem icon={<TrendingUp size={20} />} text="Architectural Revenue Capture" />
                <FocusItem icon={<DollarSign size={20} />} text="Operational Alpha Strategy" />
                <FocusItem icon={<Shield size={20} />} text="Sovereign Data Governance" />
              </div>
            </div>

            <div className="p-6 lg:p-10 rounded-3xl lg:rounded-[2.5rem] bg-brand-primary/5 border border-brand-primary/20 space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[60px] -z-10 group-hover:scale-150 transition-transform"></div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Engagement Entry: The Intelligence & Tools Audit</h4>
                <p className="text-gray-400 leading-relaxed font-medium">
                  A high-intensity diagnostic to identify exactly where AI can drive immediate value across your people, processes, and technology stack.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <AuditTag icon={<Search size={16} />} text="Tool rationalization" />
                <AuditTag icon={<Workflow size={16} />} text="Process engineering" />
                <AuditTag icon={<Database size={16} />} text="Source of truth hygiene" />
                <AuditTag icon={<Zap size={16} />} text="Execution gaps" />
              </div>
              <a 
                href="tel:+14694029932" 
                className="btn-primary w-full py-5 text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)] inline-flex items-center justify-center"
              >
                Book Intelligent Audit
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:p-16 relative group bg-white/[0.02]"
          >
            <div className="w-20 h-20 rounded-3xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-12 group-hover:scale-110 transition-transform duration-700 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <Map size={40} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">The Deliverables</h3>
            <ul className="space-y-8">
              <BenefitItem num="1" text="Bespoke AI operating model architecture" />
              <BenefitItem num="2" text="Prioritized execution roadmap with ROI tagging" />
              <BenefitItem num="3" text="Strategic advisory on autonomous transition" />
              <BenefitItem num="4" text="Measurable metrics for margin protection" />
            </ul>
            <div className="mt-12 pt-10 border-t border-white/10">
              <p className="text-base text-gray-500 italic leading-relaxed font-medium">
                "Stop buying tools. Start building a strategic asset. GraceAiGuru engineers the future of your organization's intelligence."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FocusItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-primary/30 transition-all duration-300">
    <div className="text-brand-primary">{icon}</div>
    <span className="text-sm font-bold text-gray-300 tracking-tight">{text}</span>
  </div>
);

const AuditTag = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
    <div className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary">{icon}</div>
    {text}
  </div>
);

const BenefitItem = ({ num, text }: { num: string, text: string }) => (
  <li className="flex gap-6">
    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-black text-lg shadow-[0_5px_15px_rgba(139,92,246,0.2)]">
      {num}
    </span>
    <span className="text-gray-300 font-bold text-lg pt-1 tracking-tight">{text}</span>
  </li>
);

export default Consulting;
