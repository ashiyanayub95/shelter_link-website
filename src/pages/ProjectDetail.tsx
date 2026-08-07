import React from 'react';
import { motion } from 'framer-motion';
import { Link, Redirect, useLocation, useParams } from 'wouter';
import { Activity, CheckCircle2, ArrowLeft, MapPin } from 'lucide-react';
import { getProjectBySlug } from '@/data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [, navigate] = useLocation();

  const handleEnquire = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const el = document.querySelector('#contact');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return <Redirect to="/projects" />;
  }

  const isOngoing = project.status === 'ongoing';

  return (
    <main>
      <section
        className={`relative pt-40 pb-24 overflow-hidden ${
          isOngoing
            ? 'bg-gradient-to-br from-secondary via-secondary to-primary/80'
            : `bg-gradient-to-br ${project.gradient}`
        }`}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 transform translate-x-32 origin-top-right"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-accent text-secondary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6">
              {isOngoing ? <Activity className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
              {isOngoing ? 'Ongoing Project' : 'Completed'}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed flex items-center gap-2">
              <MapPin className="w-5 h-5 shrink-0" /> {project.location}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-6">
              {project.image && (
                <div className="relative mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-80 object-cover rounded-3xl shadow-lg"
                  />
                  {project.isPlaceholderImage && (
                    <span className="absolute top-4 right-4 bg-white/90 text-secondary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      Placeholder — photo coming soon
                    </span>
                  )}
                </div>
              )}

              <p className="text-xl text-secondary font-medium leading-relaxed">
                {project.tagline}
              </p>

              {project.description.map((para, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-6">
                <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">
                  Amenities &amp; Infrastructure
                </h3>
                <div className="space-y-3">
                  {project.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-6">
                  Project Overview
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="font-heading font-bold text-2xl text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-foreground/60">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {project.value && (
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="text-sm text-foreground/60 mb-1">Estimated Project Value</div>
                    <div className="font-heading font-bold text-xl text-secondary">
                      {project.value}
                    </div>
                  </div>
                )}

                {project.currentStatus && (
                  <div className="mt-6 flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></div>
                    <div>
                      <div className="text-xs text-foreground/60">Current Status</div>
                      <div className="font-bold text-secondary text-sm">{project.currentStatus}</div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/#contact"
                onClick={handleEnquire}
                className="block text-center bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors"
              >
                Enquire About This Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
