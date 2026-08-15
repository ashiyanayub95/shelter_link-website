import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../sections/Contact';

export default function Contact() {
  return (
    <main>
      {/* Hero banner */}
      <section className="relative pt-40 pb-24 bg-gradient-to-br from-secondary via-secondary to-primary/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 transform translate-x-32 origin-top-right"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">
              Contact Us
            </h1>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Whether you're a family looking for a plot, an investor exploring
              partnerships, or a public sector body with a project in mind — we'd
              love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
