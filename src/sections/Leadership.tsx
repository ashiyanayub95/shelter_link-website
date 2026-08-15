import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { leaders } from '@/data/leaders';

const AUTO_SCROLL_INTERVAL = 5000;

export default function Leadership() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex((newIndex + leaders.length) % leaders.length);
  };

  useEffect(() => {
    if (isPaused || leaders.length <= 1) return;
    const timer = setTimeout(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % leaders.length);
    }, AUTO_SCROLL_INTERVAL);
    return () => clearTimeout(timer);
  }, [index, isPaused]);

  const leader = leaders[index];

  return (
    <section id="leadership" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Guided by Experience
          </h3>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="rounded-3xl shadow-xl border border-slate-100 bg-white overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={leader.name}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 relative">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={`${leader.name} - ${leader.title}`}
                      className="w-full h-full object-cover object-center min-h-[300px]"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-slate-50">
                      <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white ${leader.avatarClass}`}>
                        <span className="text-white font-heading font-bold text-4xl md:text-5xl">{leader.initials}</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent md:hidden"></div>
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <h4 className="text-2xl font-heading font-bold text-white">{leader.name}</h4>
                    <p className="text-accent font-medium">{leader.title}</p>
                  </div>
                </div>

                <div className="md:w-3/5 p-8 md:p-12 relative">
                  <div className="hidden md:block mb-6">
                    <h4 className="text-3xl font-heading font-bold text-secondary">{leader.name}</h4>
                    <p className="text-primary font-bold uppercase tracking-wider text-sm mt-1">{leader.title}</p>
                  </div>

                  <div className="w-12 h-1 bg-accent mb-8 rounded-full"></div>

                  <div className="space-y-4 text-foreground/80 leading-relaxed mb-8">
                    {leader.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Core Expertise</h5>
                    <div className="flex flex-wrap gap-2">
                      {leader.tags.map((tag, i) => (
                        <span key={i} className="bg-slate-100 text-secondary text-xs font-bold px-3 py-1.5 rounded-md border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous leader"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {leaders.map((l, i) => (
                <button
                  key={l.name}
                  onClick={() => goTo(i)}
                  aria-label={`Show ${l.name}`}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-primary' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next leader"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

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
