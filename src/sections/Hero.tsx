import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import heroVideo from '@assets/hero_video.mp4';
import heroTownshipImg from '@assets/generated_images/hero_township.jpg';

const trustStats = [
  { value: '20+', label: 'Years Experience' },
  { value: '150+', label: 'Plots Delivered' },
  { value: '100%', label: 'Client Commitment' },
];

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

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
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroTownshipImg}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-start justify-center grow pb-20">
        <motion.div
          className="max-w-3xl mt-12 md:mt-16"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              SECP Registered
            </span>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
          >
            Building Affordable Communities for a Better Tomorrow
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
          >
            ShelterLink develops sustainable housing societies, infrastructure, and community-focused residential projects across Pakistan.
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('#projects')}
              className="btn-shine bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95 inline-flex items-center gap-2"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-full font-medium transition-all active:scale-95"
            >
              Contact Us
            </button>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-fit"
          >
            {trustStats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && <div className="hidden sm:block w-px h-8 bg-white/20" />}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl md:text-2xl font-heading font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-white/70 uppercase tracking-wide">{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
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
