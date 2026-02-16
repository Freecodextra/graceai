import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      q: 'Is an AI voice agent HIPAA compliant?',
      a: 'Yes, our solution is built on HIPAA-supportive infrastructure and we can provide Business Associate Agreement (BAA) support for eligible healthcare implementations.',
    },
    {
      q: 'Can AI replace a receptionist?',
      a: 'While it handles high volumes of calls, qualifies leads, and schedules appointments, we see it as an enhancement that allows your human team to focus on high-value guest or patient interactions rather than simple intake.',
    },
    {
      q: 'How long does setup take?',
      a: 'Our streamlined implementation process typically takes between 7 to 14 days from discovery to launch.',
    },
    {
      q: 'Can it integrate with my CRM?',
      a: 'Absolutely. We integrate with major CRMs to ensure full call summaries, leads, and notes are automatically logged into your existing system.',
    },
    {
      q: 'How natural does the AI sound?',
      a: 'Our agents use elite natural language processing. They can handle complex queries, express empathy, and maintain a professional tone consistent with your brand.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background-dark">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 lg:mb-8">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="space-y-6 text-gray-400">
              <p className="text-lg">
                GraceAiGuru helps organizations improve execution by designing and implementing AI-enabled operating models that reduce friction and drive measurable business outcomes.
              </p>
              <div className="pt-8 border-t border-white/5">
                <a href="https://graceaiguru.com" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors group">
                  Learn more about GraceAiGuru <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`glass-card overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-primary/30' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left group"
      >
        <span className="font-bold text-white group-hover:text-brand-primary transition-colors">{question}</span>
        <ChevronDown size={20} className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
