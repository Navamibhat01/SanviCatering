import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { buildQuickWhatsAppUrl, businessConfig } from '../config/business';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <aside aria-label="WhatsApp quick enquiry" className="fixed bottom-6 right-5 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Friendly Tooltip / Chat Prompt */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-forest-950 text-ivory-50 px-3.5 py-2 rounded-xl shadow-xl border border-gold-500/40 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <div className="flex-1">
            <p className="font-semibold text-gold-400">Plan Your Vegetarian Feast</p>
            <p className="text-[11px] text-ivory-200">Chat with us for custom menus & flexible guest options.</p>
          </div>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-ivory-300 hover:text-white p-1 rounded hover:bg-forest-900 transition-colors"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildQuickWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Enquire on WhatsApp with Sanvi Catering"
        title="Chat on WhatsApp"
      >
        {/* Subtle glow / pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-40 group-hover:opacity-75" />
        
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative text-white"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        {/* Small Active Green Indicator Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-gold-400 border-2 border-forest-950 rounded-full" />
      </a>
    </aside>
  );
};
