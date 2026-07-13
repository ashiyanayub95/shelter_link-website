import React from 'react';
import { motion } from 'framer-motion';
import { 
  PencilRuler, Building, Pickaxe, HardHat, Milestone, 
  Droplets, Waves, TreeDeciduous, Scale, 
  Handshake, Briefcase, Truck
} from 'lucide-react';

const services = [
  { icon: PencilRuler, title: "Master Planning", desc: "Comprehensive site analysis and community-focused zoning." },
  { icon: Building, title: "Township Development", desc: "End-to-end creation of integrated residential communities." },
  { icon: Pickaxe, title: "Residential Construction", desc: "Building durable, affordable homes tailored to family needs." },
  { icon: HardHat, title: "Infrastructure Development", desc: "Executing large-scale essential civic infrastructure." },
  { icon: Milestone, title: "Road Construction", desc: "Paving durable access networks and internal streets." },
  { icon: Waves, title: "Sewerage Systems", desc: "Modern, hygienic waste management and drainage." },
  { icon: Droplets, title: "Water Supply Systems", desc: "Reliable clean water distribution networks." },
  { icon: TreeDeciduous, title: "Community Planning", desc: "Integrating parks, mosques, and schools into designs." },
  { icon: Scale, title: "Legal & Tender Compliance", desc: "Navigating regulatory frameworks and approvals." },
  { icon: Handshake, title: "Public Sector Partnerships", desc: "Collaborating on government housing initiatives." },
  { icon: Briefcase, title: "Investor Collaboration", desc: "Structuring secure real estate investment opportunities." },
  { icon: Truck, title: "Contractor Management", desc: "Efficient procurement and on-site vendor coordination." }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Comprehensive Real Estate Solutions
          </h3>
          <p className="text-foreground/70 text-lg">
            From bare land to thriving communities, we manage the entire lifecycle of township development.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="card-hover bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:scale-110">
                <svc.icon className="w-6 h-6 text-secondary transition-colors group-hover:text-white" />
              </div>
              <h4 className="text-lg font-heading font-bold text-secondary mb-2">{svc.title}</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
