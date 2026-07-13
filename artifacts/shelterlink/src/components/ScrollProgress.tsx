import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Thin gradient bar pinned to the very top that fills as the user scrolls.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary via-accent to-secondary"
    />
  );
}
