import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Calendar, Users, Sparkles, ArrowRight } from 'lucide-react';
import { businessConfig, buildQuickWhatsAppUrl } from '../config/business';

interface CTASectionProps {
  onOpenEnquiryModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenEnquiryModal }) => {
  return (
    <section className="relative py-20 sm:py-24 bg-forest-950 overflow-hidden border-t border-gold-500/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-60" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-gold-500/40 text-xs text-gold-300">
          <span className="veg-badge" />
          <span className="font-semibold tracking-wide">
            Flexible Guest Capacity • Pure Vegetarian
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold text-ivory-50 tracking-tight max-w-3xl mx-auto leading-tight">
          Let’s Make Your Next Celebration an Unforgettable Feast
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
          Whether you are planning a traditional South Indian wedding, an auspicious family housewarming puja, a joyful birthday gathering, or a corporate luncheon, our team is ready to curate a customized menu that your guests will cherish.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buildQuickWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-emerald-900/50 transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Enquire on WhatsApp</span>
          </a>

          <button
            onClick={onOpenEnquiryModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-gold-glow transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Plan Your Event (Online Form)</span>
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest-900/80 hover:bg-forest-800 text-ivory-100 hover:text-gold-300 font-semibold text-sm border border-gold-500/30 transition-colors"
          >
            <span>Contact Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Capacity & Service Footnote */}
        <div className="pt-6 border-t border-forest-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-ivory-300/80">
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-gold-400" />
            <span>Flexible Capacity: Tailored as per need</span>
          </span>
          <span>•</span>
          <span>Traditional Banana Leaf & Buffet Dining</span>
          <span>•</span>
          <span className="text-gold-400">Jain / Sattvic Options Available</span>
        </div>
      </div>
    </section>
  );
};
