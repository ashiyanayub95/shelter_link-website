import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { MapPin, CheckCircle2, Calendar, Map, Activity, Layers } from 'lucide-react';
import featuredProjectImg from '@assets/generated_images/featured_project.jpg';

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:40px_40px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-accent text-secondary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-8 shadow-md">
              <Activity className="w-4 h-4" />
              Ongoing Project
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Arbakan Valley
            </h2>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-xl">
              Our flagship development bringing premium town planning to affordable housing. Strategically located with direct access to major transit routes, offering a complete lifestyle with modern amenities.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
              <div className="flex items-start gap-3">
                <Map className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">15 Acres</div>
                  <div className="text-white/70 text-sm">Total Area</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">50+ Plots</div>
                  <div className="text-white/70 text-sm">Residential</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Q1 2027</div>
                  <div className="text-white/70 text-sm">Est. Completion</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Prime Location</div>
                  <div className="text-white/70 text-sm">Easy Access</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Central Mosque & Primary School</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Water Supply & Underground Drainage</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Electrification & Community Park</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm mb-10 max-w-md">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <div>
                <div className="text-sm text-white/70">Current Status</div>
                <div className="font-bold">Land Leveling & Zoning in Progress</div>
              </div>
            </div>

            <Link
              href="/projects/arbakan-valley"
              className="inline-block bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95"
            >
              View Project Details
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src={featuredProjectImg} 
                alt="Arbakan Valley Master Plan" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <div className="text-white/80 text-sm mb-1">Estimated Project Value</div>
                  <div className="text-3xl font-heading font-bold text-white">PKR 60+ Million</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary rounded-full -z-10 blur-2xl opacity-50"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
