import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Briefcase,
  TrendingUp,
  Users,
  GraduationCap,
  HeartHandshake,
  Mail,
} from 'lucide-react';
import ApplyDialog from '../components/ApplyDialog';
import { APPLY_EMAIL } from '@/lib/apply';

const openings = [
  {
    title: 'Site Civil Engineer',
    type: 'Full-time',
    location: 'Peshawar, Pakistan',
    desc: 'Oversee on-site construction, infrastructure works, and quality control across our housing schemes.',
  },
  {
    title: 'Project Manager',
    type: 'Full-time',
    location: 'Peshawar, Pakistan',
    desc: 'Lead end-to-end delivery of township projects — planning, scheduling, budgeting, and contractor coordination.',
  },
  {
    title: 'Sales & Marketing Executive',
    type: 'Full-time',
    location: 'Peshawar, Pakistan',
    desc: 'Drive plot sales, build client relationships, and represent ShelterLink to prospective investors and families.',
  },
  {
    title: 'Architect / Town Planner',
    type: 'Full-time',
    location: 'Peshawar, Pakistan',
    desc: 'Design master plans and residential layouts that balance affordability, sustainability, and community living.',
  },
];

const perks = [
  { icon: TrendingUp, title: 'Growth & Learning', desc: 'Clear career paths and hands-on experience on large-scale projects.' },
  { icon: Users, title: 'Supportive Team', desc: 'Work alongside experienced professionals in a collaborative culture.' },
  { icon: HeartHandshake, title: 'Meaningful Work', desc: 'Help build affordable communities that change families’ lives.' },
  { icon: GraduationCap, title: 'Skill Development', desc: 'Training and mentorship in construction, planning, and management.' },
];


export default function Career() {
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
              Careers at ShelterLink
            </h1>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Build Your Career While You Build Communities
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Join a growing team of engineers, planners, and professionals shaping
              affordable, sustainable housing across Pakistan. If you take pride in
              quality work and lasting impact, we’d love to meet you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Why ShelterLink
            </h3>
            <h4 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              A Place to Grow
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {perks.map((perk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <perk.icon className="w-6 h-6 text-primary" />
                </div>
                <h5 className="text-lg font-bold text-secondary mb-2">{perk.title}</h5>
                <p className="text-foreground/60 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Open Positions
            </h3>
            <h4 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Current Opportunities
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openings.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/5 flex items-center justify-center mb-5">
                  <Briefcase className="w-5 h-5 text-secondary" />
                </div>
                <h5 className="text-xl font-heading font-bold text-secondary mb-2">
                  {job.title}
                </h5>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/60 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6 grow">{job.desc}</p>
                <ApplyDialog jobTitle={job.title} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open application CTA */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Don’t See the Right Role?
          </h3>
          <p className="text-white/70 text-lg mb-8">
            We’re always looking for talented people. Send us your CV and tell us how
            you’d like to contribute to ShelterLink.
          </p>
          <a
            href={`mailto:${APPLY_EMAIL}?subject=Open Application – ShelterLink Careers`}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-sm"
          >
            <Mail className="w-5 h-5" />
            Send Your CV
          </a>
        </div>
      </section>
    </main>
  );
}
