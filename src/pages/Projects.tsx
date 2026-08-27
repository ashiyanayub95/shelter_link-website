import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { CheckCircle, Activity, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  const ongoing = projects.filter((p) => p.status === 'ongoing');
  const completed = projects.filter((p) => p.status === 'completed');

  return (
    <main>
      {/* Hero banner */}
      <section className="relative pt-40 pb-24 bg-gradient-to-br from-secondary via-secondary to-primary/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 transform translate-x-32 origin-top-right"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">
              Our Projects
            </h1>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Communities We're Building
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              From ongoing developments to fully delivered townships, explore the
              residential communities ShelterLink has planned, built, and handed
              over across Peshawar and Mardan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ongoing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              In Progress
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Ongoing Development
            </h3>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {ongoing.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} asChild>
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {project.image && (
                    <div className="h-64 md:h-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-10 bg-primary text-white flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-accent text-secondary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6 w-max">
                      <Activity className="w-4 h-4" />
                      Ongoing Project
                    </div>
                    <h4 className="text-3xl font-heading font-bold mb-3">{project.name}</h4>
                    <p className="text-white/85 leading-relaxed mb-6">{project.tagline}</p>
                    <span className="inline-flex items-center gap-2 font-medium text-accent group-hover:gap-3 transition-all">
                      View Project Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Completed */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Track Record
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Completed Projects
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {completed.map((project, idx) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} asChild>
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group block rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name}
                        className={`absolute inset-0 w-full h-full object-cover ${
                          project.isPlaceholderImage ? 'opacity-40 mix-blend-overlay' : ''
                        }`}
                      />
                    )}
                    <div
                      className={
                        project.isPlaceholderImage
                          ? 'absolute inset-0 bg-black/10 mix-blend-overlay'
                          : 'absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25'
                      }
                    ></div>
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/30 flex items-center gap-1 w-max">
                        <CheckCircle className="w-3 h-3" />
                        Completed
                      </div>
                      {project.isPlaceholderImage && (
                        <span className="bg-white/80 text-secondary text-[10px] font-bold px-2 py-1 rounded-full">
                          Placeholder Photo
                        </span>
                      )}
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-2xl font-heading font-bold text-white mb-1">
                        {project.name}
                      </h4>
                      <p className="text-white/80 font-medium">{project.stats[0]?.value} {project.stats[0]?.label}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-foreground/70 leading-relaxed mb-4">{project.tagline}</p>
                    <span className="inline-flex items-center gap-2 font-medium text-primary group-hover:gap-3 transition-all">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
