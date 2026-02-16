import { motion } from 'framer-motion';
import { PhoneOff, XCircle, Users, Zap, DollarSign, CheckCircle2 } from 'lucide-react';

const Problem = () => {
  const painPoints = [
    { title: 'Response Fragmentation', icon: <Zap size={20} /> },
    { title: 'Silence is the Killer', icon: <XCircle size={20} /> },
    { title: 'Team Saturation', icon: <Users size={20} /> },
    { title: 'Shadow Revenue Loss', icon: <PhoneOff size={20} /> },
  ];

  return (
    <section id="problem" className="section-padding bg-background-dark">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20 space-y-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em]"
          >
            Chapter 1: The Cost of Inaction
          </motion.p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            When You Don't Answer, <br />
            <span className="text-gradient">You Fund Your Competitor.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every missed call is a signal of failure to your prospect, and a gift to your competition. We call this "Shadow Loss"—revenue that disappears before it even hits your books.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 lg:mb-24">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 lg:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center gap-6 group hover:border-red-500/20 transition-all duration-500 hover:bg-red-500/[0.02]"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-red-500 transition-colors group-hover:bg-red-500/10">
                {point.icon}
              </div>
              <p className="font-bold text-white text-base tracking-tight">{point.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-6 lg:p-16 relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-[120px] -z-10" />
          
          <h3 className="text-3xl font-bold text-center mb-16 text-white tracking-tight">The Operational Delta</h3>
          
          <div className="grid lg:grid-cols-2 gap-16 relative">
            {/* Divider Line for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
            
            {/* Legacy Model */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <p className="text-xs font-bold text-red-500 uppercase tracking-[0.2em]">Legacy Model (High Friction)</p>
              </div>
              <div className="space-y-4">
                <Step icon={<PhoneOff size={18} />} text="Inbound Signal" />
                <Connector active={false} />
                <Step icon={<XCircle size={18} />} text="Capacity Breach (No Answer)" />
                <Connector active={false} />
                <Step icon={<Users size={18} />} text="Voicemail Grave" />
                <Connector active={false} />
                <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex flex-col gap-2">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Outcome</span>
                  <p className="text-xl font-bold text-white flex items-center gap-3">
                    <DollarSign size={24} className="text-red-500" /> Shadow Loss Confirmed
                  </p>
                </div>
              </div>
            </div>

            {/* GraceAiGuru Intelligence */}
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                <p className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em]">GraceAiGuru Model (Zero Friction)</p>
              </div>
              <div className="space-y-4">
                <Step icon={<Zap size={18} className="text-brand-primary" />} text="Inbound Signal" active />
                <Connector active={true} />
                <Step icon={<CheckCircle2 size={18} className="text-brand-primary" />} text="GraceAiGuru Instant Deployment" active />
                <Connector active={true} />
                <Step icon={<Users size={18} className="text-brand-primary" />} text="Dynamic Lead Acquisition" active />
                <Connector active={true} />
                <div className="p-6 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex flex-col gap-2 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">Outcome</span>
                  <p className="text-xl font-bold text-white flex items-center gap-3">
                    <DollarSign size={24} className="text-brand-primary" /> Revenue Velocity Secured
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ icon, text, active = false }: { icon: React.ReactNode, text: string, active?: boolean }) => (
  <div className={`p-5 rounded-2xl border flex items-center gap-4 text-base font-bold transition-all duration-500 ${
    active ? 'bg-white/[0.05] border-white/20 text-white shadow-xl translate-x-2' : 'bg-white/[0.02] border-white/5 text-gray-500'
  }`}>
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active ? 'bg-brand-primary/20' : 'bg-white/5'}`}>
      {icon}
    </div>
    {text}
  </div>
);

const Connector = ({ active = false }: { active?: boolean }) => (
  <div className="flex justify-center lg:justify-start pl-7">
    <div className={`w-0.5 h-8 ${active ? 'bg-gradient-to-b from-brand-primary to-brand-primary/30' : 'bg-white/5'}`}></div>
  </div>
);


export default Problem;
