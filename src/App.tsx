/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu as MenuIcon, 
  X, 
  ChevronRight,
  Star,
  ArrowRight,
  Calendar,
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Menu', href: '#menu' },
    { name: 'Experience', href: '#story' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-4 glass-dark' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col items-center group">
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-[0.2em] text-white group-hover:text-brand-gold transition-colors">
            LUMIÈRE
          </span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-medium -mt-1">
            Haute Cuisine
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/70 hover:text-brand-gold transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="border border-brand-gold text-brand-gold px-8 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-brand-dark transition-all duration-500">
            Reserve
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-dark z-40 lg:hidden flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-8 right-8 p-2 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-10 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif text-white hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-gold text-brand-dark px-12 py-4 rounded-full text-sm uppercase tracking-widest font-bold">
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop" 
          alt="Fine Dining Table" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block mb-6 text-[11px] uppercase tracking-[0.6em] font-bold text-brand-gold">
            The Pinnacle of Gastronomy
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] mb-10 tracking-tight">
            Elegance <br />
            <span className="italic font-light text-brand-gold">Redefined</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-brand-gold text-brand-dark px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-black hover:bg-white transition-all duration-500 shadow-2xl shadow-brand-gold/20 group">
              Explore Menu <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button className="text-white/80 hover:text-white px-12 py-5 text-xs uppercase tracking-[0.2em] font-bold transition-all flex items-center">
              Watch the Film <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-12 hidden xl:block">
        <div className="flex items-center space-x-4 text-white/30 text-[10px] uppercase tracking-[0.4em]">
          <span>Paris</span>
          <div className="w-8 h-px bg-white/20"></div>
          <span>London</span>
          <div className="w-8 h-px bg-white/20"></div>
          <span>Tokyo</span>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 right-12 hidden xl:flex flex-col items-center text-white/40"
      >
        <div className="w-px h-24 bg-gradient-to-b from-brand-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "The Chef's Table",
      desc: "An intimate 12-course journey curated by Michelin-starred Chef Julian Vane.",
      img: "https://images.unsplash.com/photo-1577214286172-eac121091c24?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "The Wine Vault",
      desc: "Home to over 3,000 bottles of rare vintages and artisanal discoveries.",
      img: "https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7ef?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="story" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-gold text-[11px] uppercase tracking-[0.5em] font-bold mb-6 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              Where Tradition <br /> Meets <span className="italic text-brand-gold">Innovation</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light">
              Lumière is more than a restaurant; it's a sanctuary for the senses. We believe that true luxury lies in the details—the curve of a hand-blown glass, the precise temperature of a reduction, and the silent choreography of our service.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-brand-gold text-3xl font-serif mb-2">15+</h4>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-brand-gold text-3xl font-serif mb-2">3</h4>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Michelin Stars</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.3 }}
                className="group relative overflow-hidden rounded-3xl aspect-[16/9]"
              >
                <img 
                  src={exp.img} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-serif text-white mb-2">{exp.title}</h3>
                  <p className="text-white/60 text-sm font-light">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const categories = ["Starters", "Main Course", "Desserts"];
  const [activeTab, setActiveTab] = useState("Starters");

  const menuData = {
    "Starters": [
      { name: "Osetra Caviar", price: "$120", desc: "Traditional accompaniments, buckwheat blinis." },
      { name: "Foie Gras Terrine", price: "$42", desc: "Fig compote, toasted brioche, aged balsamic." },
      { name: "Blue Lobster", price: "$58", desc: "Vanilla butter, citrus segments, sea herbs." }
    ],
    "Main Course": [
      { name: "Wagyu A5 Striploin", price: "$185", desc: "Truffle potato purée, charred leeks, bordelaise." },
      { name: "Wild Turbot", price: "$95", desc: "Champagne sauce, oscietra caviar, baby spinach." },
      { name: "Duck Apicius", price: "$88", desc: "Honey & spice glaze, roasted turnips, cherry jus." }
    ],
    "Desserts": [
      { name: "Gold Leaf Soufflé", price: "$35", desc: "Grand Marnier, vanilla bean crème anglaise." },
      { name: "The Lumière Sphere", price: "$28", desc: "Dark chocolate, salted caramel, hazelnut praline." },
      { name: "Exotic Fruit Vacherin", price: "$24", desc: "Mango sorbet, coconut mousse, lime zest." }
    ]
  };

  return (
    <section id="menu" className="py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-gold text-[11px] uppercase tracking-[0.5em] font-bold mb-4 block">The Collection</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">Signature Menu</h2>
        </div>

        <div className="flex justify-center space-x-8 md:space-x-16 mb-16 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all relative pb-6 ${activeTab === cat ? 'text-brand-gold' : 'text-white/30 hover:text-white'}`}
            >
              {cat}
              {activeTab === cat && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="wait">
            {menuData[activeTab as keyof typeof menuData].map((item, idx) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-serif text-white group-hover:text-brand-gold transition-colors">{item.name}</h4>
                  <span className="text-brand-gold font-mono text-sm">{item.price}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light italic">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ReservationSection = () => {
  return (
    <section id="reservations" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-muted to-brand-dark p-12 md:p-24 rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                An Evening <br />
                <span className="italic text-brand-gold">Awaits You</span>
              </h2>
              <p className="text-slate-400 text-lg font-light mb-12 max-w-md">
                Experience the height of luxury. Our reservations fill quickly, especially for weekend dinner service.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Concierge</p>
                    <p className="text-white font-serif text-lg">+33 1 42 65 00 00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Location</p>
                    <p className="text-white font-serif text-lg">8th Arrondissement, Paris</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 flex items-center">
                      <Calendar size={12} className="mr-2" /> Date
                    </label>
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 flex items-center">
                      <Users size={12} className="mr-2" /> Guests
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white appearance-none">
                      <option className="bg-brand-dark">2 Guests</option>
                      <option className="bg-brand-dark">4 Guests</option>
                      <option className="bg-brand-dark">6+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-white" />
                </div>
                <button className="w-full bg-brand-gold text-brand-dark py-5 rounded-xl font-black uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500 shadow-xl shadow-brand-gold/10">
                  Request Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <a href="#" className="flex flex-col items-center mb-12">
            <span className="text-4xl md:text-5xl font-serif font-bold tracking-[0.3em] text-white">
              LUMIÈRE
            </span>
            <span className="text-xs uppercase tracking-[0.6em] text-brand-gold font-medium mt-2">
              The Art of Dining
            </span>
          </a>
          <div className="flex space-x-12">
            <a href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Facebook size={24} /></a>
            <a href="#" className="text-white/40 hover:text-brand-gold transition-colors"><Twitter size={24} /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-b border-white/5 pb-24">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-6">Address</h4>
            <p className="text-white/70 font-serif text-xl">124 Rue du Faubourg <br /> Saint-Honoré, Paris</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-6">Contact</h4>
            <p className="text-white/70 font-serif text-xl">concierge@lumiere.com <br /> +33 1 42 65 00 00</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-6">Hours</h4>
            <p className="text-white/70 font-serif text-xl">Mon — Sat <br /> 17:30 — 00:00</p>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2024 Lumière Dining Group</p>
          <div className="flex space-x-12 text-[10px] uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <MenuSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}
