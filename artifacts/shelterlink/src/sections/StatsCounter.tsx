import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 150, suffix: '+', label: 'Plots Delivered' },
  { value: 3, suffix: '+', label: 'Completed Projects' },
  { value: 100, suffix: '%', label: 'Client Commitment' }
];

export default function StatsCounter() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-700 to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2 drop-shadow-md">
                <AnimatedCounter end={stat.value} duration={2.5} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-white/80 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
