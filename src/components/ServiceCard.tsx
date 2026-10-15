import React from 'react';
import { Users, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';
import { CateringService } from '../data/services';

interface ServiceCardProps {
  service: CateringService;
  onEnquire: (serviceTitle: string) => void;
  showDetailsLink?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onEnquire,
  showDetailsLink = true,
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gold-500/20 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
      {/* Image Container with Capacity Badge */}
      <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-black/20" />

        {/* Guest Capacity Tag */}
        <div className="absolute top-3 left-3 bg-forest-950/90 backdrop-blur-sm text-gold-300 text-xs px-3 py-1 rounded-full border border-gold-500/40 font-medium flex items-center gap-1.5 shadow-sm">
          <Users className="w-3.5 h-3.5 text-gold-400" />
          <span>{service.capacityText}</span>
        </div>

        {/* Veg Emblem */}
        <div className="absolute top-3 right-3 bg-white/90 p-1 rounded-md shadow-sm">
          <span className="veg-badge" title="100% Pure Vegetarian" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-forest-800/80 mt-2 line-clamp-3 leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Highlights Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {service.keyHighlights.slice(0, 2).map((hl, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-ivory-100 text-forest-800 border border-gold-500/20 px-2.5 py-1 rounded-md"
              >
                {hl}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-ivory-200 flex items-center justify-between gap-2">
          <button
            onClick={() => onEnquire(service.title)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>Enquire for This Event</span>
          </button>

          <span className="text-[11px] text-gold-700 font-medium">
            Custom Menus
          </span>
        </div>
      </div>
    </div>
  );
};
