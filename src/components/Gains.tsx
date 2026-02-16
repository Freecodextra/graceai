import { motion } from 'framer-motion';
import { 
  BarChart4, 
  Zap, 
  Users, 
  Heart, 
  TrendingUp, 
  Eye 
} from 'lucide-react';

const Gains = () => {
  const gains = [
    {
      title: 'Captured Lead Velocity',
      desc: 'Convert high-intent signals into paying customers with zero response latency.',
      icon: <BarChart4 size={28} />,
    },
    {
      title: 'Real-Time Responsiveness',
      desc: 'Deploy an agent that exists exclusively to ensure no opportunity is left silent.',
      icon: <Zap size={28} />,
    },
    {
      title: 'Human Bandwidth Liberation',
      desc: 'Free your elite staff from the noise of basic intake to focus on high-margin execution.',
      icon: <Users size={28} />,
    },
    {
      title: 'Consistency Engine',
      desc: 'Ensure every single customer interaction meets your exact brand and service protocols.',
      icon: <Heart size={28} />,
    },
    {
      title: 'Aggressive Scalability',
      desc: 'Increase your inbound volume by 10x without adding a single dollar to your headcount.',
      icon: <TrendingUp size={28} />,
    },
    {
      title: 'Diagnostic Visibility',
      desc: 'Gain total architectural insight into every customer intent, sentiment, and interaction.',
      icon: <Eye size={28} />,
    },
  ];

  return (
    <section className="section-padding bg-background-dark relative">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20 space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em]"
          >
            The Strategic Advantage
          </motion.p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Operational <span className="text-gradient">Ascendancy.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Measurable outcomes that redefine what it means to run an elite service organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {gains.map((gain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-6 lg:p-10 rounded-3xl lg:rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand-primary/30 transition-all group hover:bg-white/[0.04]"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-all duration-500 group-hover:bg-brand-primary/20 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                {gain.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white tracking-tight leading-none">{gain.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed font-medium">{gain.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gains;
