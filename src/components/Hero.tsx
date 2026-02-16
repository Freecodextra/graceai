import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 lg:pt-32 overflow-hidden bg-glow">
      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10 text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20"
              >
                <span className="text-brand-primary font-semibold text-xs uppercase tracking-widest">
                  Strategic AI Operations
                </span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-sm">
                Bridging the <br className="hidden lg:block" />
                <span className="text-gradient">Execution Gap.</span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Autonomous operations that respond instantly, execute perfectly, and stop revenue from leaking to competitors—24/7/365.
            </p>

            <p className="text-base text-gray-500 italic max-w-xl mx-auto lg:mx-0 border-l-2 border-brand-primary/30 pl-6 py-1">
              "We don't just build agents; we design the future of elite business execution."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
              <button className="btn-primary w-full sm:w-auto group text-lg py-4 px-8">
                <Calendar size={22} />
                Book Demonstration
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary w-full sm:w-auto text-lg py-4 px-8">
                <Phone size={22} />
                AI Audit
              </button>
            </div>

            <div className="pt-6">
              <p className="text-sm text-gray-600 font-medium uppercase tracking-widest">
                Because if you don't answer, your competition will.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Visual Container with padding to prevent clipping on mobile */}
            <div className="w-full max-w-xl lg:max-w-none p-4 sm:p-8 lg:p-0">
              <div className="glass-card p-4 sm:p-8 relative overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-square shadow-2xl border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-transparent"></div>
                
                <div className="relative h-full w-full flex flex-col items-center justify-center gap-8 p-6 sm:p-12">
                  <div className="animate-float flex flex-col items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                        <Phone className="text-brand-primary w-12 h-12 sm:w-16 sm:h-16 animate-pulse" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-secondary rounded-full animate-ping"></div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-secondary rounded-full"></div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">GraceAiGuru Core</h3>
                      <p className="text-base text-gray-400 font-medium">Processing Live Inbound Request...</p>
                    </div>
                  </div>
                  
                  <div className="w-full max-w-md space-y-4">
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_100%]"
                      />
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                      <span>Analyzing Intent</span>
                      <span>98% Confidence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Elements - Adjusted for mobile */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/30 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/20 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
