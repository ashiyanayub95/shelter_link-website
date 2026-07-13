import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Contact ShelterLink
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full">
              <h4 className="text-2xl font-heading font-bold text-secondary mb-6">Send us a Message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Full Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">Phone</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="+92 3XX XXXXXXX" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Message</label>
                  <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-secondary text-white p-8 rounded-3xl shadow-lg">
              <h4 className="text-xl font-heading font-bold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Head Office</h5>
                    <p className="text-white/70 leading-relaxed text-sm">
                      F-20 Khushal Khan Khattak Road,<br />
                      University Town, Peshawar,<br />
                      Pakistan
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Phone</h5>
                    <p className="text-white/70 text-sm">+92 318 8609060</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Email</h5>
                    <p className="text-white/70 text-sm">Shelterlink.pk@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-64 rounded-3xl overflow-hidden shadow-md border border-slate-100">
              <iframe 
                src="https://maps.google.com/maps?q=34.0151,71.5249&z=15&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ShelterLink Office Location"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
