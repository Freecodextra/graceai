import { motion } from 'framer-motion';
import { 
  PhoneIncoming, 
  PhoneOutgoing, 
  UserCheck, 
  CalendarDays, 
  Route, 
  Database, 
  BellRing,
  ArrowRight 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Inbound Response Intelligence',
      desc: 'Deploy an elite agent that answers every call internally, 24/7/365 with perfect brand alignment.',
      icon: <PhoneIncoming size={28} />,
    },
    {
      title: 'Outbound Revenue Recovery',
      desc: 'Proactive reactivation of stagnant leads and automated confirmation streams that drive throughput.',
      icon: <PhoneOutgoing size={28} />,
    },
    {
      title: 'Precision Qualification',
      desc: 'Dynamic inquiry layers that filter noise and ensure your human team ONLY touches high-value opportunities.',
      icon: <UserCheck size={28} />,
    },
    {
      title: 'Seamless Calendar Forge',
      desc: 'Direct synchronization with elite scheduling systems, removing friction from the booking lifecycle.',
      icon: <CalendarDays size={28} />,
    },
    {
      title: 'Sovereign Routing',
      desc: 'Automatic intent detection that routes the right customer to the right expert with zero latency.',
      icon: <Route size={28} />,
    },
    {
      title: 'Architectural CRM Sync',
      desc: 'Deep integration that logs perfect call summaries, intent, and sentiment directly into your source of truth.',
      icon: <Database size={28} />,
    },
    {
      title: 'Reactive Automation',
      desc: 'Trigger complex post-call workflows instantly—from SMS follow-ups to contract deployments.',
      icon: <BellRing size={28} />,
    },
  ];

  return (
    <section id="voice-agent" className="section-padding bg-background-dark">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20 space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em]"
          >
            Chapter 2: The Digital Strike Force
          </motion.p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Elite Operations, <br />
            <span className="text-gradient">Fully Autonomous.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            GraceAiGuru isn't just software. It's an elite digital employee that works every second of every day to ensure your business remains responsive and profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 lg:p-10 group hover:border-brand-primary/40 transition-all duration-500 bg-white/[0.02]"
            >
              <div className="w-16 h-16 rounded-3xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-brand-primary/20 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base">{feature.desc}</p>
            </motion.div>
          ))}
          
          {/* Enhanced CTA Box */}
          <div className="glass-card p-6 lg:p-10 bg-brand-primary/10 border-brand-primary/30 flex flex-col justify-between group hover:bg-brand-primary/20 transition-all overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 blur-[60px] -z-10 group-hover:scale-150 transition-transform duration-700"></div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Secure Your Execution Infrastructure.</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Stop guessing. Start executing. Join the elite businesses capturing 100% of their opportunity.
              </p>
            </div>
            <button className="btn-primary w-full mt-12 group-hover:scale-[1.02] transition-transform py-4">
              Deploy GraceAiGuru <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
