import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, TrendingUp, ShieldCheck, Heart, Leaf, Landmark } from 'lucide-react';

const reasons = [
  { icon: Award, title: "Proven Experience", desc: "20+ years of successful project delivery." },
  { icon: Star, title: "Trusted Leadership", desc: "Led by experienced professionals in construction and infrastructure." },
  { icon: TrendingUp, title: "Investor Backing", desc: "Strong financial partnerships and investor confidence." },
  { icon: ShieldCheck, title: "Transparency", desc: "Every transaction and progress update openly communicated." },
  { icon: Heart, title: "Community Development", desc: "Building complete communities, not just plots." },
  { icon: Leaf, title: "Sustainable Planning", desc: "Future-proof development with lasting value." },
  { icon: Landmark, title: "Public Sector Ready", desc: "C4 construction license positions us to expand into public sector housing partnerships." }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-secondary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-32 origin-top-right"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">The ShelterLink Advantage</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose Us?
          </h3>
          <p className="text-white/70 text-lg">
            We bridge the gap between premium quality and affordability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                <reason.icon className="w-5 h-5 text-accent transition-colors group-hover:text-secondary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">{reason.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
