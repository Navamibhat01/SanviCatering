import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { cateringServices, CateringService } from '../data/services';
import { 
  Users, 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  Utensils, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { buildQuickWhatsAppUrl } from '../config/business';

interface ServicesPageProps {
  onOpenEnquiryModal: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiryModal }) => {
  const location = useLocation();

  // Scroll to hash if provided (e.g. /services#corporate-events)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="space-y-0 bg-ivory-50">
      {/* Page Header */}
      <PageHeader
        title="Our Catering Services"
        subtitle="Pure vegetarian catering tailored for weddings, family milestones, religious functions, corporate banquets, and daily meal events."
        currentPage="Services"
        bgImage="/images/wedding-buffet.jpg"
      />

      {/* Services Overview Navigation Bar */}
      <section className="bg-forest-900 border-b border-gold-500/20 py-4 sticky top-[65px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            {cateringServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-forest-950/80 text-gold-300 hover:text-white hover:bg-forest-800 border border-gold-500/30 transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Deep Dive Sections */}
      <div className="divide-y divide-gold-500/20">
        {cateringServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 sm:py-24 scroll-mt-24 ${isEven ? 'bg-ivory-50' : 'bg-ivory-100'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Visual Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/30 aspect-[4/3] bg-forest-950 group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                      
                      {/* Guest Capacity Tag */}
                      <div className="absolute top-4 left-4 bg-forest-950/90 backdrop-blur-sm text-gold-300 text-xs px-3.5 py-1.5 rounded-full border border-gold-500/40 font-semibold flex items-center gap-1.5 shadow-md">
                        <Users className="w-4 h-4 text-gold-400" />
                        <span>{service.capacityText}</span>
                      </div>

                      <div className="absolute top-4 right-4 bg-white/95 p-1 rounded-md shadow-sm">
                        <span className="veg-badge" title="Pure Vegetarian" />
                      </div>
                    </div>
                  </div>

                  {/* Content Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
                          Capacity: {service.capacityText}
                        </span>
                        <span className="text-xs text-forest-700 font-medium">100% Pure Veg</span>
                      </div>
                      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-forest-800/90 leading-relaxed font-normal">
                      {service.fullDesc}
                    </p>

                    {/* Recommended Occasions */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900">
                        Recommended Occasions:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.recommendedFor.map((rec, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white text-forest-900 border border-gold-500/20 px-3 py-1 rounded-lg shadow-2xs"
                          >
                            {rec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900">
                        Service Highlights:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-forest-800/80">
                        {service.keyHighlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dining Styles & Popular Menus */}
                    <div className="p-4 rounded-xl bg-white border border-gold-500/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="font-bold text-forest-950 block mb-1">Serving Formats:</span>
                        <p className="text-forest-700">{service.diningStyles.join(', ')}</p>
                      </div>
                      <div>
                        <span className="font-bold text-forest-950 block mb-1">Sample Menus:</span>
                        <p className="text-forest-700">{service.popularMenus.join(', ')}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onOpenEnquiryModal(service.title)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Enquire for {service.title}</span>
                      </button>

                      <a
                        href={buildQuickWhatsAppUrl(`Hello Sanvi Catering, I am interested in catering for: ${service.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-forest-900 hover:bg-forest-800 text-gold-300 font-semibold text-sm border border-gold-500/30 transition-colors"
                      >
                        <span>WhatsApp Enquiry</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />
    </div>
  );
};
