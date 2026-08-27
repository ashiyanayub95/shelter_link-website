import React from 'react';
import { Link, useLocation } from 'wouter';
import shelterLinkLogo from '@assets/Shelterlink_Logo_1783597725426.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const [location, navigate] = useLocation();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white border-t border-accent pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="inline-flex">
              <div className="bg-white rounded-xl px-3 py-2 inline-block">
                <img
                  src={shelterLinkLogo}
                  alt="ShelterLink"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-white/70 text-sm leading-relaxed">
              Developing sustainable housing societies, infrastructure, and community-focused residential projects across Pakistan.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1DN5cDUL3c/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ShelterLink on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white"
              >
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white/80 hover:text-white">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollTo(e, '#home')}
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Team', href: '/team' },
                { label: 'Career', href: '/career' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/70 hover:text-accent transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Township Development</li>
              <li>Master Planning</li>
              <li>Infrastructure Design</li>
              <li>Residential Construction</li>
              <li>Legal & Tender Compliance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <span className="block text-accent font-medium mb-1">Address:</span>
                Ground Floor, House F-20, Khushal Khan Khattak Lane,<br/>Old Bara Road, University Town, Peshawar, Pakistan
              </li>
              <li>
                <span className="block text-accent font-medium mb-1">Phone:</span>
                +92-91-5846395
              </li>
              <li>
                <span className="block text-accent font-medium mb-1">Email:</span>
                Shelterlink.pk@gmail.com
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2025 ShelterLink (Private) Limited. All Rights Reserved.
            <span className="block md:inline md:ml-2 text-white/40">
              SECP Reg. No. 0300325 &middot; NTN H023788
            </span>
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
