import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Heart, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { businessConfig, buildQuickWhatsAppUrl } from '../config/business';

interface FooterProps {
  onOpenEnquiryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiryModal }) => {
  return (
    <footer className="bg-forest-950 text-ivory-100 border-t border-gold-500/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-forest-800">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-forest-900 border border-gold-500/30 text-gold-400">
              <span className="veg-badge" />
            </div>
            <div>
              <h4 className="font-semibold text-ivory-50 text-sm">100% Pure Vegetarian</h4>
              <p className="text-xs text-ivory-300 mt-0.5">Strictly vegetarian kitchens honoring sacred family traditions and purity.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-forest-900 border border-gold-500/30 text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-ivory-50 text-sm">Flexible Guest Count</h4>
              <p className="text-xs text-ivory-300 mt-0.5">Equipped to serve intimate family gatherings and grand celebrations as per your need.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-forest-900 border border-gold-500/30 text-gold-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-ivory-50 text-sm">Bespoke Event Menus</h4>
              <p className="text-xs text-ivory-300 mt-0.5">Customized South and North Indian delicacies with live cooking counters.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-forest-900 border border-gold-500/30 text-gold-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-ivory-50 text-sm">Punctual & Gracious</h4>
              <p className="text-xs text-ivory-300 mt-0.5">Attentive service staff ensuring warm hospitality for every celebration.</p>
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-800">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-forest-900 border border-gold-500/60 p-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path d="M50 18 C64 34 68 50 50 82 C32 50 36 34 50 18 Z" fill="#D4AF37" />
                  <circle cx="50" cy="52" r="6" fill="#2E855A" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-ivory-50">
                SANVI CATERING
              </span>
            </div>

            <p className="text-sm text-ivory-200/90 leading-relaxed">
              Pure vegetarian catering dedicated to celebrating life’s most auspicious moments. We serve authentic South Indian breakfasts, traditional banana leaf feasts, North Indian banquets, and modern interactive counters customized to your guest requirements.
            </p>

            <div className="pt-2">
              <a
                href={buildQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wide transition-colors border border-emerald-500/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Catering Team on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-lg font-bold text-gold-400 tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-ivory-200">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-300 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-gold-300 transition-colors">Food & Menus</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-300 transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">Contact & Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Catering Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-bold text-gold-400 tracking-wide">
              Catering Services
            </h3>
            <ul className="space-y-2 text-sm text-ivory-200">
              <li>
                <Link to="/services#weddings-receptions" className="hover:text-gold-300 transition-colors">
                  Wedding & Reception Feasts
                </Link>
              </li>
              <li>
                <Link to="/services#traditional-religious" className="hover:text-gold-300 transition-colors">
                  Puja & Religious Functions
                </Link>
              </li>
              <li>
                <Link to="/services#family-birthdays" className="hover:text-gold-300 transition-colors">
                  Birthdays & Family Gatherings
                </Link>
              </li>
              <li>
                <Link to="/services#corporate-events" className="hover:text-gold-300 transition-colors">
                  Corporate Buffets & Conferences
                </Link>
              </li>
              <li>
                <Link to="/services#breakfast-catering" className="hover:text-gold-300 transition-colors">
                  South Indian Breakfast Catering
                </Link>
              </li>
              <li>
                <Link to="/services#lunch-dinner-catering" className="hover:text-gold-300 transition-colors">
                  Grand Lunch & Dinner Banquets
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Booking Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-bold text-gold-400 tracking-wide">
              Event Booking Desk
            </h3>
            <div className="space-y-2.5 text-xs text-ivory-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{businessConfig.contact.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{businessConfig.contact.displayPhone}</p>
                  <p className="text-[10px] text-gold-400/80">Direct Call & WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="break-all">{businessConfig.contact.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{businessConfig.contact.businessHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiryModal}
                className="w-full py-2 px-3 rounded bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/40 text-xs font-semibold tracking-wide transition-colors"
              >
                Send Online Event Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Notes */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory-300/70 gap-4">
          <p>© {new Date().getFullYear()} {businessConfig.name}. All rights reserved. 100% Pure Vegetarian Catering.</p>
          <div className="flex items-center gap-6">
            <span>Flexible Guest Capacity • As Per Need</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-gold-400/80">Crafted with Pure Cow Ghee & Authentic Spices</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
