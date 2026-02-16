import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: '01', title: 'Operational Forensic Analysis', desc: 'Identify the exact nodes where revenue leaks and capacity breaches occur in your current model.' },
    { num: '02', title: 'Intelligent Flow Architecture', desc: 'Engineer custom interactive logic and routing paths that align with your specific execution goals.' },
    { num: '03', title: 'Neural Agent Deployment', desc: 'Configure and train your specific GraceAiGuru instance on your brand voice, protocols, and technical stack.' },
    { num: '04', title: 'Ecosystem Resonance', desc: 'Full architectural integration with your CRM, scheduling, and communication tools for zero-friction data flow.' },
    { num: '05', title: 'Operational Stress Testing', desc: 'High-intensity simulation and tuning to ensure flawless execution before public deployment.' },
    { num: '06', title: 'Sovereign Launch', desc: 'Go live and transition to an autonomous operating model that captures every opportunity 24/7/365.' },
  ];

  return (
    <section id="process" className="section-padding bg-background-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/5 to-transparent -z-10 hidden lg:block"></div>
      
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24 space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em]"
          >
            Chapter 4: The 14-Day Blueprint
          </motion.p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            From Friction to <span className="text-gradient">Flow.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our transition protocol is designed for speed and precision, ensuring you move to an AI-enabled model without interrupting existing momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-24 gap-x-8 lg:gap-x-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                <div className="text-6xl lg:text-8xl font-black text-white/[0.03] absolute -top-12 lg:-top-16 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 group-hover:text-brand-primary/10 transition-all duration-700 select-none">
                  {step.num}
                </div>
                <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_15px_rgba(139,92,246,1)] group-hover:scale-150 transition-transform"></div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
