import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Clock, Lightbulb, TrendingUp, Users } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Honest dealings with clients, partners, and government authorities in every transaction we make."
  },
  {
    icon: Gem,
    title: "Quality",
    description: "Durable construction and well-planned townships built to stand the test of time."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Delivering on our commitments, on time, so families and investors can plan with confidence."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern, unique approaches to township design that improve on conventional real estate planning."
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Expanding responsibly from local to regional and national scale, one community at a time."
  },
  {
    icon: Users,
    title: "Community",
    description: "Development that genuinely serves the people who live and work there, not just the balance sheet."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function CoreValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Core Values</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            The Foundation of Our Work
          </h3>
          <p className="text-foreground/70 text-lg">
            Our principles guide every decision we make, from land acquisition to final infrastructure delivery.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-heading font-bold text-secondary mb-3">{value.title}</h4>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
