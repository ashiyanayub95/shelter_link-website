import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Tariq Mahmood",
    location: "Sheikh Abad Township",
    quote: "Purchasing a plot through ShelterLink was the best decision for my family. The infrastructure was ready before we even started building our home. Highly professional.",
    initials: "TM",
    color: "bg-blue-600"
  },
  {
    name: "Usman Ali",
    location: "Pakhtoon Society",
    quote: "What impressed me most was their transparency. They kept every promise they made regarding the community park and mosque. A truly trustworthy developer.",
    initials: "UA",
    color: "bg-emerald-600"
  },
  {
    name: "Farhan Ahmed",
    location: "Safi Abad Scheme",
    quote: "Affordable doesn't mean low quality with ShelterLink. The road networks and sewerage systems are better than some premium societies I've seen in the city.",
    initials: "FA",
    color: "bg-indigo-600"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            What Our Community Says
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground/80 italic mb-8 relative z-10 min-h-[100px]">
                "{test.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className={`w-12 h-12 rounded-full ${test.color} text-white flex items-center justify-center font-bold text-lg`}>
                  {test.initials}
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{test.name}</h4>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">{test.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
