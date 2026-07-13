import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Leaf, Shield, Wrench } from 'lucide-react';
import aboutImg from '@assets/generated_images/about_construction.jpg';

const highlights = [
  { icon: Users, text: 'Community-First Planning' },
  { icon: Home, text: 'Affordable Housing' },
  { icon: Leaf, text: 'Sustainable Development' },
  { icon: Shield, text: 'Trusted Leadership' },
  { icon: Wrench, text: 'Practical Infrastructure' }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">About ShelterLink</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-6 leading-tight">
              Empowering Families Through Quality Real Estate
            </h3>
            
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              ShelterLink is a registered Pakistani real estate development company committed to providing affordable, high-quality housing for low and middle-income families. We believe that everyone deserves a secure, well-planned community to call home.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow hover:border-primary/20"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-secondary">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="border-l-4 border-accent pl-6 py-2">
              <p className="text-lg font-medium text-secondary italic">
                "We don't just build houses, we develop entire communities with the infrastructure families need to thrive."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
            <div className="absolute -inset-4 border border-accent/30 rounded-[2.5rem] transform -translate-x-2 -translate-y-2"></div>
            
            <img 
              src={aboutImg} 
              alt="Construction site" 
              className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
            />
            
            {/* Floating badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
            >
              <div className="text-primary font-heading font-bold text-4xl mb-1">20+</div>
              <div className="text-sm font-medium text-secondary leading-tight">Years of Combined Leadership Experience</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
