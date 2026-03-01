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
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tight">
          LUMIÈRE <span className="font-light italic">Dining</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest font-medium hover:text-brand-olive transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-ink text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-olive transition-all duration-300">
            Book a Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-ink/5 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-ink text-white w-full py-4 rounded-xl font-medium">
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
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block mb-4 text-sm uppercase tracking-[0.3em] font-medium text-white/80">
            Est. 2024 — Paris
          </span>
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] mb-8">
            Artistry <br />
            <span className="italic font-light">on a Plate</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed max-w-lg">
            Experience the harmony of seasonal flavors and modern culinary techniques in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-brand-ink px-10 py-4 rounded-full font-medium hover:bg-brand-cream transition-all flex items-center justify-center group">
              View Menu <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-12 bg-white/20" />
      </motion.div>
    </section>
  );
};

const FeaturedSection = () => {
  const features = [
    {
      title: "Farm to Table",
      description: "We partner with local artisans and organic farms to bring you the freshest ingredients every morning.",
      icon: <Utensils className="text-brand-olive" size={32} />,
      img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Exquisite Pairing",
      description: "Our sommelier curated a collection of rare vintages and contemporary blends to complement every dish.",
      icon: <Star className="text-brand-olive" size={32} />,
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Modern Ambiance",
      description: "A space designed for connection, featuring minimalist aesthetics and warm, intimate lighting.",
      icon: <Clock className="text-brand-olive" size={32} />,
      img: "https://images.unsplash.com/photo-1550966842-2849a220276c?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="mb-8 overflow-hidden rounded-2xl aspect-[4/5]">
                <img 
                  src={feature.img} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-3xl font-serif mb-4">{feature.title}</h3>
              <p className="text-brand-ink/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuPreview = () => {
  const menuItems = [
    { name: "Roasted Beetroot & Goat Cheese", price: "$18", desc: "Honey glazed beets, whipped chevre, toasted walnuts, balsamic reduction." },
    { name: "Wild Mushroom Risotto", price: "$26", desc: "Arborio rice, porcini mushrooms, truffle oil, aged parmesan." },
    { name: "Pan-Seared Scallops", price: "$32", desc: "Hokkaido scallops, cauliflower purée, crispy pancetta, lemon butter." },
    { name: "Aged Ribeye Steak", price: "$45", desc: "28-day dry-aged beef, roasted bone marrow, red wine jus." },
    { name: "Lavender Infused Crème Brûlée", price: "$14", desc: "Classic custard with a floral twist, caramelized sugar crust." },
    { name: "Dark Chocolate Fondant", price: "$16", desc: "Molten center, raspberry coulis, vanilla bean gelato." },
  ];

  return (
    <section id="menu" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-brand-olive font-semibold mb-4 block">The Menu</span>
          <h2 className="text-5xl md:text-6xl font-serif">Seasonal Selections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {menuItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-b border-brand-ink/10 pb-8 group cursor-pointer"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-xl font-serif font-medium group-hover:text-brand-olive transition-colors">{item.name}</h4>
                <span className="font-mono text-sm">{item.price}</span>
              </div>
              <p className="text-sm text-brand-ink/50 italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center text-brand-ink font-medium border-b-2 border-brand-ink pb-1 hover:text-brand-olive hover:border-brand-olive transition-all">
            Explore Full Menu <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ReservationSection = () => {
  return (
    <section id="reservations" className="py-24 bg-brand-olive text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.5,-0.8C84.1,14.1,78,28.2,69.2,40.6C60.4,53,48.9,63.7,35.5,70.9C22.1,78.1,6.8,81.8,-8.5,80.3C-23.8,78.8,-39.1,72.1,-52.5,62.4C-65.9,52.7,-77.4,40,-81.8,25.4C-86.2,10.8,-83.5,-5.7,-77.8,-20.5C-72.1,-35.3,-63.4,-48.4,-51.4,-56.3C-39.4,-64.2,-24.1,-66.9,-9.5,-73.4C5.1,-79.9,19.7,-90.2,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Secure Your <br />
            <span className="italic font-light">Evening of Elegance</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 font-light max-w-xl">
            Join us for an unforgettable dining experience. We recommend booking at least 48 hours in advance for weekend dinners.
          </p>
          
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Date</label>
              <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-60">Guests</label>
              <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors">
                <option className="text-brand-ink">2 People</option>
                <option className="text-brand-ink">4 People</option>
                <option className="text-brand-ink">6+ People</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-white text-brand-olive py-3.5 rounded-xl font-bold hover:bg-brand-cream transition-all">
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-ink text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold">LUMIÈRE</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Crafting memorable culinary experiences through the lens of modern French gastronomy and local seasonality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white/40">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-olive mt-1" />
                <p className="text-white/70 text-sm">124 Rue du Faubourg Saint-Honoré,<br />75008 Paris, France</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-olive" />
                <p className="text-white/70 text-sm">+33 1 42 65 00 00</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white/40">Hours</h4>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>18:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>17:30 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-white/40">Newsletter</h4>
            <p className="text-white/50 text-sm">Join our list for seasonal menu updates and exclusive events.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg focus:outline-none focus:border-brand-olive w-full text-sm"
              />
              <button className="bg-brand-olive px-4 py-2 rounded-r-lg hover:bg-opacity-80 transition-all">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/30 text-xs">© 2024 Lumière Dining Group. All rights reserved.</p>
          <div className="flex space-x-8 text-xs text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
        <MenuPreview />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}
