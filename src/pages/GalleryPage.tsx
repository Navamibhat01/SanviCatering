import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { Lightbox } from '../components/Lightbox';
import { galleryItems, GalleryItem } from '../data/gallery';
import { 
  Sparkles, 
  MessageSquare, 
  Maximize2, 
  Filter, 
  Users,
  Camera
} from 'lucide-react';

interface GalleryPageProps {
  onOpenEnquiryModal: (eventTitle?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenEnquiryModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'weddings', label: 'Weddings & Receptions' },
    { id: 'traditional', label: 'Traditional Sadhya' },
    { id: 'breakfast', label: 'Breakfast Catering' },
    { id: 'starters-sweets', label: 'Sweets & Starters' },
    { id: 'corporate', label: 'Corporate Banquets' },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const handleOpenLightbox = (indexInFiltered: number) => {
    // Find index in original galleryItems
    const originalIndex = galleryItems.findIndex(i => i.id === filteredItems[indexInFiltered].id);
    setLightboxIndex(originalIndex >= 0 ? originalIndex : 0);
  };

  return (
    <div className="space-y-0 bg-ivory-50">
      {/* Page Header */}
      <PageHeader
        title="Event & Food Gallery"
        subtitle="A visual celebration of our pure vegetarian catering — from traditional banana leaf sadhyas to royal wedding banquets and live tawa stations."
        currentPage="Gallery"
        bgImage="/images/wedding-buffet.jpg"
      />

      {/* Category Filter Tabs */}
      <section className="py-6 bg-ivory-100 border-b border-gold-500/20 sticky top-[65px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none justify-start md:justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-forest-900 text-gold-300 shadow-sm'
                    : 'bg-white text-forest-900 border border-gold-500/20 hover:bg-ivory-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-forest-950 cursor-pointer shadow-subtle hover:shadow-elevated transition-all duration-300 border border-gold-500/20"
                tabIndex={0}
                role="button"
                aria-label={`View larger photo: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(idx);
                  }
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-forest-950/90 text-gold-300 border border-gold-500/30">
                    {item.categoryLabel}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-forest-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-gold-400" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 text-ivory-50 space-y-1">
                  <h3 className="font-serif text-lg font-bold text-ivory-50 leading-snug group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  {item.eventDetails && (
                    <p className="text-xs text-ivory-300 font-light truncate">
                      {item.eventDetails}
                    </p>
                  )}
                  <p className="text-[11px] text-gold-400/90 pt-1 flex items-center gap-1 font-medium">
                    <span>Click to view photo & details</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center space-y-4">
            <p className="text-xs text-forest-700/80 max-w-lg mx-auto">
              Photographs shown are authentic demonstrations of Sanvi Catering's pure vegetarian menus, presentation equipment, and banquet hospitality.
            </p>
            <button
              onClick={() => onOpenEnquiryModal()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-gold-300 font-bold text-sm tracking-wide shadow-md transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-gold-400" />
              <span>Discuss Visual Styling for Your Event</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />

      {/* Full Lightbox */}
      <Lightbox
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
