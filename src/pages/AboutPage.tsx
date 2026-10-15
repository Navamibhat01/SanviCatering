import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { businessConfig } from '../config/business';
import { 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Heart, 
  Utensils, 
  CheckCircle2, 
  Award,
  Layers,
  Leaf
} from 'lucide-react';

interface AboutPageProps {
  onOpenEnquiryModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiryModal }) => {
  return (
    <div className="space-y-0 bg-ivory-50">
      {/* Page Header */}
      <PageHeader
        title="About Sanvi Catering"
        subtitle="Dedicated pure vegetarian catering celebrating family traditions, cultural heritage, and warm Indian hospitality."
        currentPage="About Us"
        bgImage="/images/traditional-leaf-meal.jpg"
      />

      {/* 1. Philosophy & Approach */}
      <section className="py-20 sm:py-24 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/30 aspect-[4/5] bg-forest-950">
                <img
                  src="/images/hero-feast.jpg"
                  alt="Sanvi Catering vegetarian banquet on banana leaf"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-forest-950/90 backdrop-blur-md border border-gold-500/40 text-ivory-50">
                  <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase">
                    <span className="veg-badge" />
                    <span>Pure Vegetarian Dedication</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-ivory-100 mt-1">
                    Serving intimate gatherings and grand celebrations tailored to your need.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
                Our Service Philosophy
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 leading-tight">
                Where Pure Vegetarian Cuisine Meets Reverent Hospitality
              </h2>

              <p className="text-base text-forest-800/90 leading-relaxed">
                At <strong>Sanvi Catering</strong>, we view catering not simply as the preparation and delivery of food, but as a sacred ritual of hospitality (<em>Athithi Devo Bhava</em>). In traditional celebrations, food is the element guests remember most vividly — the warmth of a steaming ghee dosa in the morning, the fragrant complexity of a festive sadhya on a plantain leaf, or the comfort of slow-simmered dal makhani with hot tandoori rotis.
              </p>

              <p className="text-sm sm:text-base text-forest-800/80 leading-relaxed">
                We specialize strictly in pure vegetarian catering. We do not handle, store, or prepare any non-vegetarian ingredients, guaranteeing peace of mind for families, temple communities, and organizations with deep cultural and spiritual values.
              </p>

              <div className="p-5 rounded-2xl bg-ivory-100 border border-gold-500/30 space-y-2">
                <h4 className="font-serif text-xl font-bold text-forest-950 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <span>The Sanvi Vegetarian Commitment</span>
                </h4>
                <p className="text-xs sm:text-sm text-forest-800/80 leading-relaxed">
                  Our kitchens adhere to strict purity protocols. Pure cow ghee, freshly ground spices, unadulterated cold-pressed oils, and farm-sourced vegetables form the foundation of everything we cook.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Commitments */}
      <section className="py-20 sm:py-24 bg-ivory-100 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
              Our Core Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
              Four Principles that Guide Every Event
            </h2>
            <p className="text-sm text-forest-800/80">
              How we approach food preparation, event logistics, and guest care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessConfig.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gold-500/20 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-gold-700 uppercase tracking-wider block mb-2">
                    {feature.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-forest-800/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-ivory-200 text-xs text-gold-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Sanvi Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dining Formats & Dietary Flexibility */}
      <section className="py-20 sm:py-24 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
                Service Formats
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950 leading-tight">
                Tailored for Both Traditional Banquets and Contemporary Receptions
              </h2>
              <p className="text-sm sm:text-base text-forest-800/80 leading-relaxed">
                Whether your event demands traditional plantain leaf seating with customary multi-course serving sequences or an elegant multi-cuisine buffet featuring live tawa and chaat stations, our infrastructure is built to deliver smooth, piping-hot service.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gold-500/20">
                  <div className="p-2 rounded-lg bg-gold-100 text-gold-700 shrink-0">
                    <Leaf className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-forest-950">Traditional Banana Leaf Sadhya</h4>
                    <p className="text-xs text-forest-800/80">Respectful sit-down dining served on fresh plantain leaves in authentic cultural order with dedicated servers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gold-500/20">
                  <div className="p-2 rounded-lg bg-gold-100 text-gold-700 shrink-0">
                    <Utensils className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-forest-950">Royal Copper & Brass Buffets</h4>
                    <p className="text-xs text-forest-800/80">Polished hammered chafing warmers, marigold floral runners, and illuminated food displays suited for receptions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gold-500/20">
                  <div className="p-2 rounded-lg bg-gold-100 text-gold-700 shrink-0">
                    <Sparkles className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-forest-950">Interactive Live Food Counters</h4>
                    <p className="text-xs text-forest-800/80">Live dosa stations, sizzling tawa paneer tikka, Mumbai & Delhi chaat bars, and traditional filter coffee counters.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/30 aspect-[4/3] bg-forest-950">
                <img
                  src="/images/wedding-buffet.jpg"
                  alt="Sanvi Catering royal wedding buffet arrangement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Transparency & Configuration Note */}
      <section className="py-12 bg-ivory-100 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-forest-700 bg-white px-3 py-1 rounded-full border border-gold-300">
            For Event Organizers & Business Owners
          </span>
          <h3 className="font-serif text-2xl font-bold text-forest-950">
            Transparent, Authentically Documented Information
          </h3>
          <p className="text-xs sm:text-sm text-forest-800/80 leading-relaxed">
            In keeping with our commitment to transparency, Sanvi Catering presents verified details regarding our pure vegetarian capabilities and flexible guest arrangements. All business contact details and WhatsApp integration are easily updated in our configuration file.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />
    </div>
  );
};
