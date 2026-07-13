import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroTownshipImg from '@assets/generated_images/hero_township.jpg';

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroTownshipImg}
          alt="Modern housing community"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-start justify-center grow pb-20">
        <div className="max-w-3xl mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Building Affordable Communities for a Better Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              ShelterLink develops sustainable housing societies, infrastructure, and community-focused residential projects across Pakistan.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('#projects')}
                className="btn-shine bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                Explore Projects
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-full font-medium transition-all active:scale-95"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll-down indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.button>
    </section>
  );
}
