import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import shelterLinkLogo from '@assets/Shelterlink_Logo_1783597725426.png';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Team', href: '/team' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: highlight the nav link for whichever section is in view.
  useEffect(() => {
    if (location !== '/') return;

    const ids = navLinks
      .filter((l) => l.href.startsWith('#'))
      .map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location]);

  const isActive = (href: string) =>
    href.startsWith('#')
      ? location === '/' && `#${activeSection}` === href
      : location === href;

  const scrollToId = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Handles both in-page scroll links (#about) and separate pages (/career)
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('/')) {
      // Navigate to a separate page and jump to the top
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    // In-page anchor: if we're on another page, go home first, then scroll
    if (location !== '/') {
      navigate('/');
      setTimeout(() => scrollToId(href), 100);
    } else {
      scrollToId(href);
    }
  };

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location !== '/') navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-md py-3 border-b border-white/40' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
        <a href="/" onClick={goHome} className="flex items-center group">
          <img
            src={shelterLinkLogo}
            alt="ShelterLink"
            className={`h-28 w-auto object-contain transition-all duration-300 ${isScrolled ? '' : 'drop-shadow-lg brightness-110'}`}
          />
        </a>

        {/* Desktop Nav - centered links */}
        <ul className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2 w-max whitespace-nowrap">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                data-active={isActive(link.href)}
                className={`link-underline text-sm font-medium transition-colors ${
                  isScrolled
                    ? isActive(link.href)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                    : isActive(link.href)
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNav(e, '#contact')}
          className="btn-shine hidden lg:inline-block bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-lg hover:shadow-accent/30"
        >
          Book Consultation
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-foreground' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-foreground' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-4 gap-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`font-medium py-2 px-4 rounded-md transition-colors ${
                isActive(link.href)
                  ? 'bg-primary/10 text-primary border-l-2 border-primary'
                  : 'text-foreground hover:bg-primary/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="bg-accent text-accent-foreground mt-2 px-6 py-3 rounded-full font-medium text-center shadow-sm"
          >
            Book Consultation
          </a>
        </div>
      )}
    </motion.nav>
  );
}
