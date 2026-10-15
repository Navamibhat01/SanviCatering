import React, { useEffect } from 'react';
import { X, Sparkles, MessageSquare } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';
import { businessConfig } from '../config/business';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialEventType,
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-forest-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="relative w-full max-w-2xl bg-ivory-50 rounded-2xl shadow-2xl border border-gold-500/40 my-8 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-forest-900 text-ivory-50 px-6 py-5 border-b border-gold-500/30 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <span className="veg-badge" />
              <span>{businessConfig.name} • Pure Vegetarian</span>
            </div>
            <h2 id="modal-headline" className="font-serif text-2xl sm:text-3xl font-bold text-ivory-50 mt-1">
              Plan Your Celebration Feast
            </h2>
            <p className="text-xs text-ivory-300 mt-1">
              Pure vegetarian catering with flexible guest counts tailored to your need. Tell us your date and vision.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-ivory-300 hover:text-white hover:bg-forest-800 transition-colors cursor-pointer"
            aria-label="Close enquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          <EnquiryForm
            initialEventType={initialEventType}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
};
