import { motion } from 'framer-motion';
import { 
  Wrench, 
  Stethoscope, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: 'Structural Home Services',
      icon: <Wrench size={32} />,
      problem: 'Viral demand spikes during peak environmental shifts. Missed calls are zero-sum—if you don\'t answer, they call the next ad.',
      workflow: 'High-velocity intake, triage, scheduling, and technician dispatch.',
      outcomes: ['Revenue Leakage Sealed', 'Instant Response Authority', 'Optimized Fleet Throughput'],
    },
    {
      title: 'Precision Healthcare',
      icon: <Stethoscope size={32} />,
      problem: 'Administrative saturation leads to patient churn and unused specialized capacity.',
      workflow: 'Patient intake, HIPAA-aligned triage, and instant calendar synchronization.',
      outcomes: ['Maximized Provider Utilization', 'Superior Patient Experience', 'Zero-Loss Referral Capture'],
    },
    {
      title: 'Capital & Protection',
      icon: <Briefcase size={32} />,
      problem: 'High-intent inquiries degrade within seconds. Latency is the primary barrier to lead conversion.',
      workflow: 'Proactive acknowledgment, instant qualification, and strategic expert routing.',
      outcomes: ['Enhanced Lead Velocity', 'Sovereign Brand Consistency', 'Uninterrupted Revenue Streams'],
    },
    {
      title: 'Real Estate & Property',
      icon: <Building2 size={32} />,
      problem: 'Inquiries arrive at all hours. Response delays signal a lack of professional commitment.',
      workflow: 'Rapid inquiry response, intent quantification, and broker mobilization.',
      outcomes: ['Captured Asset Velocity', 'Elite Responsiveness', 'Expanded Market Share'],
    },
  ];

  return (
    <section id="industries" className="section-padding bg-background-dark/50">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20 space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em]"
          >
            Vertical Specialization
          </motion.p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Elite Vertical <span className="text-gradient">Optimization.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            GraceAiGuru is engineered for industries where responsiveness isn't a luxury—it's a competitive necessity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 lg:p-12 flex flex-col group hover:border-brand-primary/30 transition-all duration-700 bg-white/[0.02]"
            >
              <div className="flex items-start gap-4 lg:gap-8 mb-8 lg:mb-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary/20 transition-all duration-500 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                  {industry.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight pt-4 leading-none">{industry.title}</h3>
              </div>

              <div className="space-y-8 flex-grow">
                <div>
                  <p className="text-xs font-black text-red-500/80 uppercase tracking-widest mb-3">The Structural Problem</p>
                  <p className="text-base text-gray-400 leading-relaxed font-medium">{industry.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-3">The Intelligence Workflow</p>
                  <p className="text-base text-gray-400 leading-relaxed font-medium">{industry.workflow}</p>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <p className="text-xs font-black text-brand-primary uppercase tracking-widest mb-6">Strategic Outcomes</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industry.outcomes.map((outcome, oIndex) => (
                      <li key={oIndex} className="flex items-center gap-3 text-sm font-bold text-gray-300 tracking-tight">
                        <CheckCircle2 size={18} className="text-brand-primary shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <button className="flex items-center gap-3 text-base font-bold text-white hover:text-brand-primary transition-colors group">
                  See Technical Blueprint <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
