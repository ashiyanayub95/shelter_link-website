import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { HardHat, Compass, Users2, ClipboardCheck, ArrowRight, Mail, Landmark, Crown } from 'lucide-react';
import { leaders } from '@/data/leaders';

const orgBranches = [
  {
    head: 'Director of Operations',
    reports: [
      { title: 'Admin Officer', team: ['Office Support', 'Security Guards', 'Drivers'] },
      { title: 'Finance Officer' },
      { title: 'HR Officer' },
      { title: 'IT / Computer Officer' },
      { title: 'Marketing Officer' },
    ],
  },
  {
    head: 'Director of Programs',
    reports: [
      { title: 'Civil Engineer', team: ['Sub-Engineers', 'Surveyors'] },
      { title: 'Tehsildar', team: ['Patwari'] },
    ],
  },
];

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

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {leaders.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/5] relative">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={`${leader.name} - ${leader.title}`}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50">
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white ${leader.avatarClass}`}>
                        <span className="text-white font-heading font-bold text-2xl">{leader.initials}</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-heading font-bold text-white">{leader.name}</h4>
                    <p className="text-accent font-medium text-sm">{leader.title}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-4">
                    {leader.bio[0]}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {leader.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-bold bg-slate-100 text-secondary px-2 py-1 rounded-md border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Organizational Structure
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Our Reporting Chart
            </h3>
            <p className="text-foreground/70 text-lg mt-4">
              How responsibilities flow from the board down to every function that keeps a project running.
            </p>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider shadow-md"
            >
              <Landmark className="w-4 h-4 text-accent" />
              Board of Directors
            </motion.div>
            <div className="w-px h-8 bg-slate-300"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-heading font-bold text-lg shadow-lg"
            >
              <Crown className="w-5 h-5" />
              CEO / Managing Director
            </motion.div>
            <div className="w-px h-8 bg-slate-300"></div>

            <div className="grid md:grid-cols-2 gap-8 w-full">
              {orgBranches.map((branch, bIdx) => (
                <motion.div
                  key={branch.head}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + bIdx * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white border border-slate-200 rounded-2xl px-6 py-3 font-bold text-secondary shadow-sm mb-4 text-center w-full">
                    {branch.head}
                  </div>
                  <div className="w-px h-6 bg-slate-300"></div>
                  <div className="flex flex-col gap-3 w-full mt-2">
                    {branch.reports.map((report) => (
                      <div
                        key={report.title}
                        className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm"
                      >
                        <div className="text-sm font-bold text-secondary">{report.title}</div>
                        {report.team && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {report.team.map((member) => (
                              <span
                                key={member}
                                className="text-[11px] font-medium bg-slate-100 text-foreground/70 px-2 py-1 rounded-md"
                              >
                                {member}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-white">
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
