import React from 'react';
import { ShieldCheck, Users, Utensils, CalendarCheck, Sparkles, Flame } from 'lucide-react';
import { businessConfig } from '../config/business';

export const TrustHighlights: React.FC = () => {
  const pillars = [
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
          <span className="veg-badge" />
        </div>
      ),
      badge: "Pure & Sacred",
      title: "100% Pure Vegetarian",
      desc: "Strictly vegetarian kitchens honoring authentic traditions. We cater to Jain (no onion/garlic) and Sattvic dietary needs with dedicated preparation.",
    },
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-gold-950/80 border border-gold-500/40 flex items-center justify-center text-gold-400">
          <Users className="w-5 h-5" />
        </div>
      ),
      badge: "Flexible Scale",
      title: "Flexible Guest Count",
      desc: "Guest count is not fixed. We cater according to your exact requirement — from intimate gatherings and family pujas to grand multi-counter banquets, customized to your event size.",
    },
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-forest-950/80 border border-gold-500/40 flex items-center justify-center text-gold-400">
          <Utensils className="w-5 h-5" />
        </div>
      ),
      badge: "Full Day Dining",
      title: "Breakfast, Lunch & Dinner",
      desc: "Authentic South Indian tiffin breakfasts, traditional banana leaf sadhyas, rich North Indian curries, live chaat counters, and royal mithais.",
    },
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-forest-950/80 border border-gold-500/40 flex items-center justify-center text-gold-400">
          <CalendarCheck className="w-5 h-5" />
        </div>
      ),
      badge: "All Occasions",
      title: "Personal & Corporate Celebrations",
      desc: "Weddings, housewarmings, naming ceremonies, anniversaries, corporate seminars, and festive gatherings managed with warmth and poise.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-ivory-100 border-y border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
            Our Service Foundations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
            Catering with Purity, Scale, and Warm Hospitality
          </h2>
          <p className="text-sm text-forest-800/80">
            Every celebration has a rhythm of its own. Here is how Sanvi Catering ensures your guests feel cherished from the first welcome sip to the final dessert.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gold-500/25 shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {pillar.icon}
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-700 bg-gold-100/70 px-2.5 py-0.5 rounded-full">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-forest-800/80 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ivory-200 flex items-center justify-between text-xs text-gold-700 font-medium">
                <span>Sanvi Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
