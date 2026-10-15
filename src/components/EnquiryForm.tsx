import React, { useState } from 'react';
import { Send, MessageSquare, Calendar, Users, MapPin, CheckCircle2, AlertCircle, Phone, User, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { buildWhatsAppEnquiryUrl, businessConfig, EnquiryDetails } from '../config/business';

interface EnquiryFormProps {
  initialEventType?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialEventType = '',
  onSuccess,
  compact = false,
}) => {
  const [formData, setFormData] = useState<EnquiryDetails>({
    name: '',
    phone: '',
    email: '',
    eventType: initialEventType || 'Wedding & Reception Feast',
    eventDate: '',
    eventLocation: '',
    guestCount: 150,
    mealType: 'Lunch & Dinner Banquet',
    dietaryPreference: 'Standard 100% Pure Veg',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedVia, setSubmittedVia] = useState<'whatsapp' | 'web' | null>(null);

  const eventTypes = [
    'Wedding & Reception Feast',
    'Traditional & Religious Function (Puja / Housewarming)',
    'Birthday Party & Family Gathering',
    'Corporate Event & Conference',
    'South Indian Breakfast Catering',
    'Lunch & Dinner Banquet',
    'Other Auspicious Occasion',
  ];

  const mealTypes = [
    'Traditional Sadhya (Plantain Leaf)',
    'Royal Banquet Buffet',
    'South Indian Morning Breakfast (Live Counters)',
    'High Tea & Live Starters Counter',
    'Full Day Complete Catering (Breakfast, Lunch, Dinner)',
    'Customized Course Menu',
  ];

  const dietaryOptions = [
    'Standard 100% Pure Veg',
    'Jain Style (Strictly No Onion & No Garlic)',
    'Brahmin / Sattvic Style',
    'Vegan-Friendly Spread Included',
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select your tentative event date.';
    }

    if (!formData.eventLocation.trim()) {
      newErrors.eventLocation = 'Please mention your event location or hall name.';
    }

    if (!formData.guestCount || formData.guestCount < 1) {
      newErrors.guestCount = 'Please enter your approximate number of guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#2E855A', '#E06D14'],
    });

    setSubmittedVia('whatsapp');
    setSubmitted(true);

    const whatsappUrl = buildWhatsAppEnquiryUrl(formData);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (onSuccess) {
      setTimeout(() => onSuccess(), 3500);
    }
  };

  const handleWebReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#143B27'],
    });

    setSubmittedVia('web');
    setSubmitted(true);

    if (onSuccess) {
      setTimeout(() => onSuccess(), 4000);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmittedVia(null);
  };

  if (submitted) {
    return (
      <div className="bg-ivory-50 border border-gold-500/40 rounded-2xl p-6 sm:p-8 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <h3 className="font-serif text-2xl font-bold text-forest-950">
            {submittedVia === 'whatsapp' ? 'Opening WhatsApp with Your Details...' : 'Enquiry Summary Ready'}
          </h3>
          <p className="text-sm text-forest-800/80 mt-1 max-w-md mx-auto">
            {submittedVia === 'whatsapp'
              ? 'Your event details have been prepared for sending directly to our catering team. Please review the prefilled message in WhatsApp and tap send.'
              : 'Thank you for reaching out! Because Sanvi Catering does not store personal customer details on external servers, the fastest way to confirm availability is to send this directly to our catering team on WhatsApp.'}
          </p>
        </div>

        {/* Form Details Card */}
        <div className="bg-white rounded-xl p-4 text-left border border-gold-500/20 text-xs text-forest-900 space-y-1.5 shadow-sm max-w-md mx-auto">
          <p><strong className="text-forest-950">Event:</strong> {formData.eventType}</p>
          <p><strong className="text-forest-950">Date:</strong> {formData.eventDate}</p>
          <p><strong className="text-forest-950">Guests:</strong> {formData.guestCount} People</p>
          <p><strong className="text-forest-950">Location:</strong> {formData.eventLocation}</p>
          <p><strong className="text-forest-950">Meal Preference:</strong> {formData.mealType}</p>
          <p><strong className="text-forest-950">Dietary:</strong> {formData.dietaryPreference}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={buildWhatsAppEnquiryUrl(formData)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open in WhatsApp Now</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-3 rounded-lg bg-ivory-200 hover:bg-ivory-300 text-forest-900 text-sm font-medium transition-colors"
          >
            Edit Event Details
          </button>
        </div>

        <div className="pt-2 border-t border-gold-500/20 text-[11px] text-forest-700/70">
          <p>
            Configured WhatsApp Number: <span className="font-mono">{businessConfig.contact.displayWhatsApp}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-5">
      {/* Configuration notice for transparency */}
      <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-gold-100/60 border border-gold-300 text-xs text-forest-900">
        <Sparkles className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Instant Direct Enquiry:</strong> Fill in your celebration details below and click <strong>“Enquire on WhatsApp”</strong>. Your full event brief will be formatted automatically and opened in WhatsApp so our catering desk can respond with custom menu suggestions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-forest-900 mb-1">
            Your Full Name <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-forest-600 absolute left-3.5 top-3" />
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ramesh Sharma"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white rounded-lg border text-sm text-forest-950 placeholder:text-forest-900/40 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                errors.name ? 'border-red-500' : 'border-ivory-300'
              }`}
            />
          </div>
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-forest-900 mb-1">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-forest-600 absolute left-3.5 top-3" />
            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9876543210"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white rounded-lg border text-sm text-forest-950 placeholder:text-forest-900/40 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                errors.phone ? 'border-red-500' : 'border-ivory-300'
              }`}
            />
          </div>
          {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email (Optional) */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-forest-900 mb-1">
            Email Address <span className="text-forest-600 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-forest-600 absolute left-3.5 top-3" />
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="w-full pl-10 pr-3.5 py-2.5 bg-white rounded-lg border border-ivory-300 text-sm text-forest-950 placeholder:text-forest-900/40 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className="block text-xs font-semibold text-forest-900 mb-1">
            Event / Celebration Type <span className="text-red-600">*</span>
          </label>
          <select
            id="eventType"
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-ivory-300 text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block text-xs font-semibold text-forest-900 mb-1">
            Event Date <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-forest-600 absolute left-3.5 top-3" />
            <input
              id="eventDate"
              type="date"
              required
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white rounded-lg border text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                errors.eventDate ? 'border-red-500' : 'border-ivory-300'
              }`}
            />
          </div>
          {errors.eventDate && <p className="text-red-600 text-xs mt-1">{errors.eventDate}</p>}
        </div>

        {/* Event Location */}
        <div>
          <label htmlFor="eventLocation" className="block text-xs font-semibold text-forest-900 mb-1">
            Event Location / Venue <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-forest-600 absolute left-3.5 top-3" />
            <input
              id="eventLocation"
              type="text"
              required
              value={formData.eventLocation}
              onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
              placeholder="e.g. Royal Palace Hall, Jayanagar"
              className={`w-full pl-10 pr-3.5 py-2.5 bg-white rounded-lg border text-sm text-forest-950 placeholder:text-forest-900/40 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
                errors.eventLocation ? 'border-red-500' : 'border-ivory-300'
              }`}
            />
          </div>
          {errors.eventLocation && <p className="text-red-600 text-xs mt-1">{errors.eventLocation}</p>}
        </div>
      </div>

      {/* Flexible Guest Count UI with direct input and slider */}
      <div className="bg-white p-4 rounded-xl border border-gold-500/30 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <label htmlFor="guestCount" className="text-xs font-semibold text-forest-900 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-gold-600" />
              <span>Expected Number of Guests</span>
              <span className="text-red-600">*</span>
            </label>
            <p className="text-[11px] text-forest-700/80 mt-0.5">
              Guest count is flexible — we customize catering according to your need.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={5000}
              value={formData.guestCount || ''}
              onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
              className="w-24 px-3 py-1.5 text-sm font-bold text-forest-950 bg-gold-100/80 rounded-md border border-gold-300 text-center focus:outline-none focus:ring-2 focus:ring-gold-500"
              placeholder="Count"
            />
            <span className="text-xs font-semibold text-forest-800">Guests</span>
          </div>
        </div>

        <input
          id="guestCount"
          type="range"
          min={10}
          max={1500}
          step={5}
          value={formData.guestCount > 1500 ? 1500 : (formData.guestCount || 50)}
          onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
          className="w-full accent-gold-500 cursor-pointer h-2 bg-ivory-200 rounded-lg"
        />

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[10px] text-forest-600 mr-1">Quick Select:</span>
          {[25, 50, 100, 250, 500, 1000].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setFormData({ ...formData, guestCount: count })}
              className={`px-2.5 py-1 text-[11px] rounded-md font-medium transition-colors cursor-pointer ${
                formData.guestCount === count
                  ? 'bg-forest-900 text-gold-300 border border-forest-900'
                  : 'bg-ivory-100 hover:bg-ivory-200 text-forest-800 border border-gold-500/20'
              }`}
            >
              {count} {count >= 1000 ? '+' : ''}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setFormData({ ...formData, guestCount: 1500 })}
            className={`px-2.5 py-1 text-[11px] rounded-md font-medium transition-colors cursor-pointer ${
              formData.guestCount > 1000
                ? 'bg-forest-900 text-gold-300 border border-forest-900'
                : 'bg-ivory-100 hover:bg-ivory-200 text-forest-800 border border-gold-500/20'
            }`}
          >
            Custom / 1000+
          </button>
        </div>
        {errors.guestCount && <p className="text-red-600 text-xs">{errors.guestCount}</p>}
      </div>

      {/* Meal Requirements & Dietary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mealType" className="block text-xs font-semibold text-forest-900 mb-1">
            Dining / Meal Format <span className="text-red-600">*</span>
          </label>
          <select
            id="mealType"
            value={formData.mealType}
            onChange={(e) => setFormData({ ...formData, mealType: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-ivory-300 text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            {mealTypes.map((meal) => (
              <option key={meal} value={meal}>{meal}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="dietaryPreference" className="block text-xs font-semibold text-forest-900 mb-1">
            Dietary Preference / Sacred Traditions
          </label>
          <select
            id="dietaryPreference"
            value={formData.dietaryPreference}
            onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-ivory-300 text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            {dietaryOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Special Requests / Notes */}
      <div>
        <label htmlFor="notes" className="block text-xs font-semibold text-forest-900 mb-1">
          Special Requests, Favourite Dishes or Additional Details
        </label>
        <textarea
          id="notes"
          rows={compact ? 2 : 3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="e.g. Need live tawa dosa counter, specific sweet like Elaneer Payasam, and Jain options for 25 relatives..."
          className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-ivory-300 text-sm text-forest-950 placeholder:text-forest-900/40 focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleWhatsAppSubmit}
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Enquire on WhatsApp (Primary)</span>
        </button>

        <button
          type="button"
          onClick={handleWebReviewSubmit}
          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-forest-900 hover:bg-forest-800 text-gold-300 font-semibold text-sm border border-gold-500/40 transition-colors cursor-pointer"
        >
          <span>Review Summary</span>
        </button>
      </div>

      <p className="text-center text-[11px] text-forest-700/80">
        We respect your privacy. No spam. Direct consultation with our catering coordinator.
      </p>
    </form>
  );
};
