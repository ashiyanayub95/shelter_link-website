import React from 'react';
import { motion } from 'framer-motion';
import { Telescope, Target } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Telescope className="w-8 h-8 text-accent" />
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Vision</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              To become a trusted name in Pakistan's housing sector by creating modern, inclusive, and sustainable communities that truly serve the needs of low and middle income families — where every household, regardless of income, has access to safe, well-planned, and dignified living.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-accent" />
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Mission</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              To design and develop housing schemes that deliver real value — not just in cost, but in quality of life — building communities that offer essential services, lasting infrastructure, and environments where families can grow with comfort, security, and pride.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
