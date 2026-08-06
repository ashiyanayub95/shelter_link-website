import React from 'react';
import { motion } from 'framer-motion';

export default function CTABanner() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-secondary">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -right-[10%] w-[1000px] h-[1000px] border-[100px] border-primary/30 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[50%] -left-[10%] w-[800px] h-[800px] border-[80px] border-accent/20 rounded-full"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Build the Future Together?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Join thousands of families who trust ShelterLink for their housing needs. Let's discuss your next project or investment opportunity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white text-secondary hover:bg-slate-100 px-8 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95"
            >
              Contact Us
            </button>
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-accent text-secondary hover:bg-accent/90 px-8 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95"
            >
              Schedule Meeting
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
