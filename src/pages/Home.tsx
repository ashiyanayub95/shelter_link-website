import React from 'react';

import Hero from '../sections/Hero';
import About from '../sections/About';
import VisionMission from '../sections/VisionMission';
import CoreValues from '../sections/CoreValues';
import Services from '../sections/Services';
import PreviousProjects from '../sections/PreviousProjects';
import WhyChooseUs from '../sections/WhyChooseUs';
import Leadership from '../sections/Leadership';
import StatsCounter from '../sections/StatsCounter';
import Testimonials from '../sections/Testimonials';
import CTABanner from '../sections/CTABanner';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VisionMission />
      <CoreValues />
      <Services />
      <PreviousProjects />
      <WhyChooseUs />
      <Leadership />
      <StatsCounter />
      <Testimonials />
      <CTABanner />
      <Contact />
    </main>
  );
}
