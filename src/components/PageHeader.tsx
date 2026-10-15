import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { businessConfig } from '../config/business';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  currentPage: string;
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  currentPage,
  bgImage = '/images/wedding-buffet.jpg',
}) => {
  return (
    <section className="relative py-20 sm:py-24 bg-forest-950 overflow-hidden border-b border-gold-500/30">
      {/* Background Image with Dark Forest Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/85 to-forest-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/80 border border-gold-500/30 text-xs text-gold-300">
          <Link to="/" className="hover:text-gold-100 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-gold-500" />
          <span className="text-ivory-100 font-medium">{currentPage}</span>
        </nav>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory-50 tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-ivory-200/90 leading-relaxed font-light">
          {subtitle}
        </p>

        {/* Decorative Pure Veg & Capacity Emblem */}
        <div className="pt-2 flex items-center justify-center gap-4 text-xs text-gold-400">
          <span className="flex items-center gap-1.5">
            <span className="veg-badge" /> {businessConfig.pureVegPromise}
          </span>
          <span>•</span>
          <span>Capacity: {businessConfig.guestCapacity.label}</span>
        </div>
      </div>
    </section>
  );
};
