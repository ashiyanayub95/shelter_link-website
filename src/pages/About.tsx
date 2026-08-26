import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Users, Home, Leaf, Shield, Wrench, Telescope, Target, ArrowRight } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import aboutImg from '@assets/generated_images/about_construction.jpg';

const highlights = [
  { icon: Users, text: 'Community-First Planning' },
  { icon: Home, text: 'Affordable Housing' },
  { icon: Leaf, text: 'Sustainable Development' },
  { icon: Shield, text: 'Trusted Leadership' },
  { icon: Wrench, text: 'Practical Infrastructure' },
];

const stats = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 150, suffix: '+', label: 'Plots Delivered' },
  { value: 3, suffix: '+', label: 'Completed Projects' },
  { value: 100, suffix: '%', label: 'Client Commitment' },
];

export default function About() {
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
              About ShelterLink
            </h1>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Empowering Families Through Quality Real Estate
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              ShelterLink is a registered Pakistani real estate development
              company committed to providing affordable, high-quality housing
              for low and middle-income families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our story */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                Our Story
              </h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
                Built on Trust, Transparency & Community
              </h3>

              <p className="text-foreground/80 text-lg mb-4 leading-relaxed">
                We believe that everyone deserves a secure, well-planned community
                to call home. From land acquisition and urban zoning through to the
                final handover of residential infrastructure, ShelterLink manages
                every stage of a housing scheme with a focus on quality and
                accountability.
              </p>
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                That approach has shaped a track record of fully-utilised,
                fully-occupied housing societies across Peshawar — communities
                built with complete infrastructure, not just plots on paper.
              </p>

              <div className="flex flex-wrap gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow hover:border-primary/20"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-secondary">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
              <div className="absolute -inset-4 border border-accent/30 rounded-[2.5rem] transform -translate-x-2 -translate-y-2"></div>
              <img
                src={aboutImg}
                alt="ShelterLink construction site"
                className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <Telescope className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To become a trusted name in Pakistan's housing sector by creating
                modern, inclusive, and sustainable communities that truly serve
                the needs of low and middle income families — where every
                household, regardless of income, has access to safe,
                well-planned, and dignified living.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Our Mission</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To design and develop housing schemes that deliver real value —
                not just in cost, but in quality of life — building communities
                that offer essential services, lasting infrastructure, and
                environments where families can grow with comfort, security,
                and pride.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2 drop-shadow-md">
                  <AnimatedCounter end={stat.value} duration={2.5} />
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <div className="text-white/80 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Meet the People Behind ShelterLink
          </h3>
          <p className="text-foreground/70 text-lg mb-8">
            Get to know the leadership and teams guiding our projects from the
            ground up.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-sm"
          >
            Meet Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
