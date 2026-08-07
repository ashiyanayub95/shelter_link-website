import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import leaderAvatar from '@assets/generated_images/leader_avatar.jpg';

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Guided by Experience
          </h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <img 
                src={leaderAvatar} 
                alt="Hammad Ahmad Khan - Managing Director" 
                className="w-full h-full object-cover object-center min-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent md:hidden"></div>
              <div className="absolute bottom-4 left-4 md:hidden">
                <h4 className="text-2xl font-heading font-bold text-white">Hammad Ahmad Khan</h4>
                <p className="text-accent font-medium">Managing Director</p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12 relative">
              <div className="hidden md:block mb-6">
                <h4 className="text-3xl font-heading font-bold text-secondary">Hammad Ahmad Khan</h4>
                <p className="text-primary font-bold uppercase tracking-wider text-sm mt-1">Managing Director</p>
              </div>
              
              <div className="w-12 h-1 bg-accent mb-8 rounded-full"></div>
              
              <div className="space-y-4 text-foreground/80 leading-relaxed mb-8">
                <p>
                  With over two decades of hands-on experience in the construction and infrastructure development sector, Hammad Ahmad Khan leads ShelterLink with a vision focused on practical, high-quality execution.
                </p>
                <p>
                  His expertise spans comprehensive project management, from land acquisition and urban zoning to the final delivery of residential infrastructure. Under his guidance, ShelterLink has built a reputation for transparency, timely delivery, and community-centric planning.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Core Expertise</h5>
                <div className="flex flex-wrap gap-2">
                  {['Construction Management', 'Infrastructure Development', 'Strategic Planning', 'Community Development'].map((tag, i) => (
                    <span key={i} className="bg-slate-100 text-secondary text-xs font-bold px-3 py-1.5 rounded-md border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-10">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Meet the Full Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
