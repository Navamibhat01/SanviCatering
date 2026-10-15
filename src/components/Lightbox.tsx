import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../data/gallery';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && items[currentIndex] !== undefined;
  const currentItem = isOpen ? items[currentIndex!] : null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  }, [currentIndex, items.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/95 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Top Bar with Counter & Close */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-ivory-100 z-10">
        <div className="flex items-center gap-2">
          <span className="veg-badge" />
          <span className="text-xs uppercase tracking-wider text-gold-400 font-medium">
            Sanvi Catering Gallery • {currentIndex! + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-forest-900/80 hover:bg-forest-800 text-ivory-200 hover:text-white border border-gold-500/30 transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest-900/80 hover:bg-forest-800 text-gold-400 hover:text-gold-200 border border-gold-500/40 transition-all shadow-lg z-10 cursor-pointer"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest-900/80 hover:bg-forest-800 text-gold-400 hover:text-gold-200 border border-gold-500/40 transition-all shadow-lg z-10 cursor-pointer"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Details Container */}
      <div className="max-w-5xl w-full flex flex-col items-center justify-center max-h-[85vh]">
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gold-500/30 bg-forest-900 flex items-center justify-center">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[65vh] w-auto object-contain select-none"
          />
        </div>

        {/* Caption Card */}
        <div className="mt-4 bg-forest-900/90 border border-gold-500/20 rounded-xl px-6 py-4 max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
              {currentItem.categoryLabel}
            </span>
            {currentItem.eventDetails && (
              <span className="text-xs text-ivory-300">
                • {currentItem.eventDetails}
              </span>
            )}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory-50">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-200/90 mt-1.5 leading-relaxed">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};
