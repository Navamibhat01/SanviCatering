import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Users, Sparkles } from 'lucide-react';
import { businessConfig } from '../config/business';

interface NavbarProps {
  onOpenEnquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-forest-950 text-gold-300 text-xs py-2 px-4 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="veg-badge" title="100% Pure Vegetarian" />
            <span className="font-medium tracking-wide">
              {businessConfig.pureVegPromise} • Flexible Guest Capacity (Tailored to Your Need)
            </span>
          </div>
          <div className="flex items-center gap-4 text-ivory-200">
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-gold-400">
              <Sparkles className="w-3.5 h-3.5" />
              Bespoke Menus for Weddings & Private Functions
            </span>
            <button
              onClick={onOpenEnquiryModal}
              className="text-xs font-semibold text-gold-400 hover:text-gold-200 underline underline-offset-2 transition-colors cursor-pointer"
            >
              Request Event Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-forest-900/95 backdrop-blur-md shadow-lg border-b border-gold-500/20 py-3'
            : 'bg-forest-900 border-b border-forest-800 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              to="/"
              className="group flex items-center gap-3.5 focus:outline-none"
              aria-label="Sanvi Catering Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-forest-950 border border-gold-500/60 p-1.5 flex items-center justify-center shadow-inner group-hover:border-gold-400 transition-colors">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="50" cy="50" r="44" stroke="#D4AF37" strokeWidth="2" strokeDasharray="3 3" />
                  <path d="M50 18 C64 34 68 50 50 82 C32 50 36 34 50 18 Z" fill="#D4AF37" />
                  <circle cx="50" cy="52" r="6" fill="#2E855A" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-2xl font-bold tracking-wider text-ivory-50 group-hover:text-gold-300 transition-colors">
                  SANVI CATERING
                </span>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase text-gold-400 font-medium">
                  Pure Vegetarian Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-1.5 text-sm font-medium tracking-wide rounded-md transition-all duration-200 relative ${
                      active
                        ? 'text-gold-400 bg-forest-800/80 shadow-sm'
                        : 'text-ivory-100 hover:text-gold-300 hover:bg-forest-800/40'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919739049830"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-forest-950/90 border border-gold-500/40 text-xs text-gold-300 hover:text-white hover:border-gold-400 transition-colors"
                title="Call Catering Desk"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-mono font-bold">+91 97390 49830</span>
              </a>

              <button
                onClick={onOpenEnquiryModal}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-forest-950 font-bold text-sm hover:from-gold-400 hover:to-gold-500 transition-all shadow-md hover:shadow-gold-glow cursor-pointer"
              >
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenEnquiryModal}
                className="px-3 py-1.5 rounded bg-gold-500 text-forest-950 font-semibold text-xs hover:bg-gold-400 transition-colors"
              >
                Enquire
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gold-400 hover:text-gold-300 hover:bg-forest-800 focus:outline-none"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-forest-950/95 backdrop-blur-md border-b border-gold-500/30 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="px-5 pt-4 pb-6 space-y-2">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-forest-800 text-xs text-gold-300">
                <span className="flex items-center gap-1.5">
                  <span className="veg-badge" /> 100% Pure Vegetarian
                </span>
                <span className="font-medium">Flexible Guest Count</span>
              </div>

              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? 'bg-forest-800 text-gold-400 font-semibold border-l-4 border-gold-500'
                        : 'text-ivory-100 hover:bg-forest-900 hover:text-gold-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-forest-800 space-y-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenEnquiryModal();
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-forest-950 font-bold text-sm tracking-wide text-center shadow-lg hover:from-gold-400 hover:to-gold-500 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire for Your Event</span>
                </button>

                <p className="text-center text-xs text-ivory-300/80">
                  Breakfast • Lunch • Dinner • Weddings • Functions
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
