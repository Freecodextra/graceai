import { motion } from 'framer-motion';
import { AlertCircle, Clock, DollarSign } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <AlertCircle className="text-brand-primary" size={24} />,
      value: '30-40%',
      label: 'Shadow Revenue Loss due to missed calls',
    },
    {
      icon: <Clock className="text-brand-primary" size={24} />,
      value: 'Non-Linear',
      label: 'Customer demand patterns requiring 24/7 capability',
    },
    {
      icon: <DollarSign className="text-brand-primary" size={24} />,
      value: 'Revenue Velocity',
      label: 'The primary metric of elite service execution',
    },
  ];

  return (
    <section id="stats" className="py-16 bg-background-dark border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/[0.02] opacity-50"></div>
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 justify-center md:justify-start group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/10 transition-colors">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-white tracking-tighter">{stat.value}</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-center gap-4">
          <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_10px_rgba(139,92,246,1)]"></div>
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] text-center">
            Sovereign Infrastructure: HIPAA-Aligned & BAA-Supportive Architecture
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
