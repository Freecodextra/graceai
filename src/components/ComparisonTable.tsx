import { Check, X } from 'lucide-react';

interface Feature {
  name: string;
  voicemail: boolean;
  human: boolean;
  traditional: boolean;
  ai: boolean;
}

const ComparisonTable = () => {
  const features: Feature[] = [
    { name: '24/7 Responsiveness', voicemail: false, human: false, traditional: true, ai: true },
    { name: 'Strategic Qualification', voicemail: false, human: true, traditional: false, ai: true },
    { name: 'Instant Lifecycle Booking', voicemail: false, human: true, traditional: false, ai: true },
    { name: 'Architectural CRM Sync', voicemail: false, human: false, traditional: false, ai: true },
    { name: 'Zero-Variance Quality', voicemail: false, human: false, traditional: false, ai: true },
    { name: 'Economic Efficiency', voicemail: true, human: false, traditional: false, ai: true },
    { name: 'Infinite Scalability', voicemail: true, human: false, traditional: true, ai: true },
  ];

  return (
    <section className="section-padding bg-background-dark py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-20 space-y-6">
          <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.4em]">The Operational Delta</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            The Evolution of <span className="text-gradient">Service Execution.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Traditional methods of call handling are linear and frail. GraceAiGuru is neural and resilient—designed for revenue velocity.
          </p>
        </div>

        <div className="glass-card overflow-hidden shadow-2xl border-white/5 bg-white/[0.01]">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 lg:p-10 text-xs font-black text-gray-500 uppercase tracking-[0.3em]">Operational Feature</th>
                  <th className="p-6 lg:p-10 text-xs font-black text-gray-500 uppercase tracking-[0.3em] text-center">Voicemail</th>
                  <th className="p-6 lg:p-10 text-xs font-black text-gray-500 uppercase tracking-[0.3em] text-center">In-House Human</th>
                  <th className="p-6 lg:p-10 text-xs font-black text-gray-500 uppercase tracking-[0.3em] text-center">Legacy Call Center</th>
                  <th className="p-6 lg:p-10 text-xs font-black text-brand-primary bg-brand-primary/10 uppercase tracking-[0.3em] text-center border-x border-brand-primary/20">
                    GraceAiGuru
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {features.map((feature, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-all duration-300">
                    <td className="p-6 lg:p-10 font-bold text-lg text-white tracking-tight">{feature.name}</td>
                    <td className="p-6 lg:p-10 text-center"><StatusIcon active={feature.voicemail} type="bad" /></td>
                    <td className="p-6 lg:p-10 text-center"><StatusIcon active={feature.human} /></td>
                    <td className="p-6 lg:p-10 text-center"><StatusIcon active={feature.traditional} /></td>
                    <td className="p-6 lg:p-10 text-center bg-brand-primary/[0.03] border-x border-brand-primary/10">
                      <StatusIcon active={feature.ai} type="highlight" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Instant Velocity', 'Total Consistency', 'Economic Dominance', 'Seamless Elasticity'].map((item) => (
            <div key={item} className="p-6 lg:p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 text-center group hover:border-brand-primary/40 transition-all duration-500">
              <h4 className="font-bold text-white mb-2 text-lg tracking-tight">{item}</h4>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Sovereign Performance</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatusIcon = ({ active, type = 'default' }: { active: boolean, type?: 'default' | 'bad' | 'highlight' }) => {
  if (active) {
    return (
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-2xl ${
        type === 'highlight' ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]' : 'bg-brand-primary/20 text-brand-primary'
      }`}>
        <Check size={20} />
      </div>
    );
  }
  return (
    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-2xl ${
      type === 'bad' ? 'bg-red-500/10 text-red-500/30' : 'bg-white/5 text-gray-800'
    }`}>
      <X size={20} />
    </div>
  );
};

export default ComparisonTable;
