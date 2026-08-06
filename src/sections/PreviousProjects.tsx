import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Milestone, UtilityPole } from 'lucide-react';

const projects = [
  {
    name: "Sheikh Abad Township",
    stats: "30 Residential Plots",
    features: [
      { icon: UtilityPole, text: "Complete Utilities" },
      { icon: Milestone, text: "Paved Roads" },
      { icon: Home, text: "100% Occupancy" }
    ],
    gradient: "from-emerald-500 to-emerald-700"
  },
  {
    name: "Safi Abad Scheme",
    stats: "45+ Plots Delivered",
    features: [
      { icon: UtilityPole, text: "Sewerage System" },
      { icon: Milestone, text: "Access Roads" },
      { icon: CheckCircle, text: "Title Handover" }
    ],
    gradient: "from-blue-600 to-indigo-800"
  },
  {
    name: "Pakhtoon Society",
    stats: "70 Residential Plots",
    features: [
      { icon: Home, text: "Mosque & School" },
      { icon: UtilityPole, text: "Central Water Tank" },
      { icon: Milestone, text: "Street Lighting" }
    ],
    gradient: "from-slate-700 to-slate-900"
  }
];

export default function PreviousProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Track Record</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Completed Projects
            </h3>
            <p className="text-foreground/70 text-lg mt-4">
              We deliver on our promises. Explore the communities we've built and handed over to satisfied families.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                
                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/30 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Completed
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-heading font-bold text-white mb-1">{project.name}</h4>
                  <p className="text-white/80 font-medium">{project.stats}</p>
                </div>
              </div>
              
              <div className="p-8 bg-white">
                <div className="space-y-4">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                        <feature.icon className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-foreground font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
