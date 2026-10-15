import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { EnquiryForm } from '../components/EnquiryForm';
import { businessConfig, buildQuickWhatsAppUrl } from '../config/business';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Users, 
  ShieldCheck, 
  CheckCircle2,
  HelpCircle,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-0 bg-ivory-50">
      {/* Page Header */}
      <PageHeader
        title="Contact & Catering Enquiries"
        subtitle="Let’s plan the menu for your celebration. Contact our catering desk or send an instant brief directly on WhatsApp."
        currentPage="Contact"
        bgImage="/images/wedding-buffet.jpg"
      />

      {/* Main Grid: Form (7 cols) + Contact Info & Help (5 cols) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Interactive Enquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gold-500/25 shadow-elevated">
              <div className="space-y-2 mb-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
                  Event Brief Form
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  Tell Us About Your Celebration
                </h2>
                <p className="text-xs sm:text-sm text-forest-800/80">
                  We cater for events of all sizes, completely customized to your needs. Fill out the details below to receive a custom menu and quote.
                </p>
              </div>

              <EnquiryForm />
            </div>

            {/* Right: Contact Details & Service Information (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct WhatsApp Callout Box */}
              <div className="bg-forest-900 text-ivory-50 rounded-3xl p-7 border border-gold-500/40 shadow-xl space-y-4">
                <div className="flex items-center gap-2.5 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Fastest Response Channel</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ivory-50">
                  Prefer Direct WhatsApp Chat?
                </h3>

                <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed font-light">
                  Skip the form and chat directly with our catering coordinator. We share sample menu PDFs, discuss custom dietary requests, and check hall dates in real time.
                </p>

                <div className="pt-2">
                  <a
                    href={buildQuickWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Open WhatsApp Chat Now</span>
                  </a>
                </div>
              </div>

              {/* Business Contact Information */}
              <div className="bg-white rounded-3xl p-7 border border-gold-500/25 shadow-subtle space-y-5">
                <h3 className="font-serif text-xl font-bold text-forest-950 pb-2 border-b border-ivory-200">
                  Catering Desk Contact Information
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-forest-900">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gold-100 text-gold-700 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-forest-700 block uppercase">
                        Phone / WhatsApp
                      </span>
                      <p className="font-bold text-forest-950 mt-0.5">
                        {businessConfig.contact.displayWhatsApp}
                      </p>
                      <p className="text-[11px] text-emerald-800 font-medium mt-0.5">
                        Direct Line & Active WhatsApp Desk
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gold-100 text-gold-700 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-forest-700 block uppercase">
                        Email Enquiries
                      </span>
                      <p className="font-bold text-forest-950 mt-0.5 break-all">
                        {businessConfig.contact.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gold-100 text-gold-700 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-forest-700 block uppercase">
                        Service Coverage
                      </span>
                      <p className="font-medium text-forest-950 mt-0.5">
                        {businessConfig.contact.address}
                      </p>
                      <p className="text-[11px] text-forest-700/80 mt-0.5">
                        {businessConfig.contact.serviceRegionNote}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gold-100 text-gold-700 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-forest-700 block uppercase">
                        Enquiry Hours
                      </span>
                      <p className="font-medium text-forest-950 mt-0.5">
                        {businessConfig.contact.businessHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Notes */}
              <div className="bg-ivory-100 rounded-3xl p-6 border border-gold-500/25 text-xs space-y-3">
                <h4 className="font-serif text-base font-bold text-forest-950 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-gold-700" />
                  <span>Frequently Asked Booking Questions</span>
                </h4>

                <div className="space-y-2 text-forest-800/80">
                  <p>
                    <strong>Q: Is there a fixed guest capacity?</strong><br />
                    No, our guest capacity is completely flexible. We cater according to your exact requirement — from intimate family gatherings to grand multi-counter wedding banquets.
                  </p>
                  <p>
                    <strong>Q: Can you provide Jain (no onion, no garlic) food?</strong><br />
                    Yes, we routinely prepare pure Jain and Sattvic menus with separate utensils upon request.
                  </p>
                  <p>
                    <strong>Q: How far in advance should we book?</strong><br />
                    For wedding Muhurthams and peak auspicious dates, we recommend reserving 4–8 weeks in advance. For intimate home functions, 1–2 weeks notice is usually sufficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
