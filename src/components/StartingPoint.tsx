import { motion } from 'framer-motion';
import { TrendingUp, Settings, ArrowRight, Calendar, Phone } from 'lucide-react';

const StartingPoint = () => {
  return (
    <section className="section-padding bg-background-dark/30 relative">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20 space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em]"
          >
            Evolution Architecture
          </motion.p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Choose Your <span className="text-gradient">Path to Scale.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          {/* Revenue Capture Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 lg:p-14 flex flex-col group hover:border-brand-primary/40 transition-all duration-700 bg-white/[0.02] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[60px] -z-10 group-hover:scale-150 transition-transform"></div>
            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Revenue Velocity</h3>
            <p className="text-xl font-bold text-brand-primary mb-8 underline decoration-brand-primary/30 underline-offset-8">Neural Voice Agent</p>
            
            <ul className="space-y-5 mb-12 flex-grow">
              <ListItem text="Instant revenue capture (Missed-call recovery)" />
              <ListItem text="Autonomous lead filtration & qualification" />
              <ListItem text="High-velocity CRM execution sync" />
            </ul>

            <button className="btn-primary w-full py-5 text-lg font-bold">
              Analyze Voice Infrastructure <Calendar size={20} />
            </button>
          </motion.div>

          {/* Operational Efficiency Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 lg:p-14 flex flex-col group hover:border-brand-secondary/40 transition-all duration-700 bg-white/[0.02] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 blur-[60px] -z-10 group-hover:scale-150 transition-transform"></div>
            <div className="w-16 h-16 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(217,70,239,0.2)]">
              <Settings size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Operational Alpha</h3>
            <p className="text-xl font-bold text-brand-secondary mb-8 underline decoration-brand-secondary/30 underline-offset-8">Sovereign Consulting</p>
            
            <ul className="space-y-5 mb-12 flex-grow">
              <ListItem text="AI-enabled operating model design" />
              <ListItem text="Deep process automation & tool rationalization" />
              <ListItem text="Governance & execution discipline architecture" />
              <ListItem text="High-margin scalability roadmap" />
            </ul>

            <a 
              href="tel:+14694029932" 
              className="btn-secondary w-full py-5 text-lg font-bold border-brand-secondary/20 hover:border-brand-secondary/40 text-brand-secondary inline-flex items-center justify-center gap-3"
            >
              Book Intelligence Audit <Phone size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-4 text-gray-400 text-base font-medium leading-relaxed">
    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
      <ArrowRight size={14} className="text-brand-primary" />
    </div>
    {text}
  </li>
);

export default StartingPoint;
