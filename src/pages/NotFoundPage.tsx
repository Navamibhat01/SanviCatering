import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Home, ArrowLeft, MessageSquare } from 'lucide-react';
import { buildQuickWhatsAppUrl } from '../config/business';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-ivory-50 px-4 py-20">
      <div className="max-w-lg w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-gold-500/30 shadow-elevated">
        <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto text-gold-700 shadow-inner">
          <Utensils className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
            Page Not Found • 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
            This Page Seems to Be Off the Menu
          </h1>
          <p className="text-sm text-forest-800/80 leading-relaxed">
            The page or recipe you are looking for has been moved or doesn’t exist. Let’s guide you back to our delicious vegetarian catering offerings.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-gold-300 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <Utensils className="w-4 h-4" />
            <span>View Our Menus</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-ivory-200">
          <a
            href={buildQuickWhatsAppUrl("Hello Sanvi Catering, I had trouble finding a page on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-800 hover:text-emerald-700 font-semibold inline-flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Need assistance? Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
