import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { HardHat, Compass, Users2, ClipboardCheck, ArrowRight, Mail } from 'lucide-react';
import leaderAvatar from '@assets/generated_images/leader_avatar.jpg';

const departments = [
  {
    icon: HardHat,
    title: 'Engineering & Construction',
    desc: 'Site engineers and supervisors overseeing infrastructure works, quality control, and on-ground execution across every scheme.',
  },
  {
    icon: Compass,
    title: 'Planning & Design',
    desc: 'Architects and town planners designing master plans and residential layouts that balance affordability, sustainability, and community living.',
  },
  {
    icon: Users2,
    title: 'Sales & Client Relations',
    desc: 'The team plot buyers and investors speak to first — guiding families through the process from enquiry to title handover.',
  },
  {
    icon: ClipboardCheck,
    title: 'Operations & Compliance',
    desc: 'Keeping projects on schedule and on budget, and ensuring every scheme meets legal, zoning, and tender requirements.',
  },
];

export default function Team() {
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
              Our Team
            </h1>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              The People Building ShelterLink
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              From leadership to the engineers on-site, every team at ShelterLink
              plays a part in turning a plan into a livable community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Leadership
            </h2>
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
                  <p className="text-primary font-bold uppercase tracking-wider text-sm mt-1">
                    Managing Director
                  </p>
                </div>

                <div className="w-12 h-1 bg-accent mb-8 rounded-full"></div>

                <div className="space-y-4 text-foreground/80 leading-relaxed mb-8">
                  <p>
                    With over two decades of hands-on experience in the
                    construction and infrastructure development sector, Hammad
                    Ahmad Khan leads ShelterLink with a vision focused on
                    practical, high-quality execution.
                  </p>
                  <p>
                    His expertise spans comprehensive project management, from
                    land acquisition and urban zoning to the final delivery of
                    residential infrastructure. Under his guidance, ShelterLink
                    has built a reputation for transparency, timely delivery,
                    and community-centric planning.
                  </p>
                </div>

                <div>
                  <h5 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">
                    Core Expertise
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {['Construction Management', 'Infrastructure Development', 'Strategic Planning', 'Community Development'].map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="bg-slate-100 text-secondary text-xs font-bold px-3 py-1.5 rounded-md border border-slate-200"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Behind Every Project
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Our Teams
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {departments.map((dept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <dept.icon className="w-6 h-6 text-primary" />
                </div>
                <h5 className="text-lg font-bold text-secondary mb-2">{dept.title}</h5>
                <p className="text-foreground/60 text-sm leading-relaxed">{dept.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            We're Growing — Join Us
          </h3>
          <p className="text-white/70 text-lg mb-8">
            ShelterLink is always looking for engineers, planners, and
            professionals who care about building communities, not just
            structures.
          </p>
          <Link
            href="/career"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-sm"
          >
            View Open Roles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
