import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  Utensils, 
  MessageSquare, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck,
  Heart,
  Coffee,
  Sun,
  Moon
} from 'lucide-react';
import { businessConfig, buildQuickWhatsAppUrl } from '../config/business';
import { cateringServices } from '../data/services';
import { menuCategories, menuItems } from '../data/menu';
import { galleryItems } from '../data/gallery';
import { TrustHighlights } from '../components/TrustHighlights';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';
import { Lightbox } from '../components/Lightbox';

interface HomePageProps {
  onOpenEnquiryModal: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiryModal }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Take top 6 items for the homepage preview gallery
  const previewGallery = galleryItems.slice(0, 6);

  // Take featured services
  const featuredServices = cateringServices;

  // 3-step How It Works
  const howItWorksSteps = [
    {
      step: "01",
      title: "Tell Us About Your Event",
      desc: "Share your event date, venue location, estimated guest count (flexible according to your need), and dining format through our online form or direct WhatsApp message.",
      icon: <Calendar className="w-6 h-6 text-gold-600" />
    },
    {
      step: "02",
      title: "Curate Your Custom Menu",
      desc: "Discuss your culinary preferences with our team. Choose from authentic South Indian tiffins, traditional banana leaf feasts, North Indian banquets, or live counters.",
      icon: <Utensils className="w-6 h-6 text-gold-600" />
    },
    {
      step: "03",
      title: "Celebrate with Complete Peace of Mind",
      desc: "Our experienced chefs and hospitality staff arrive early, manage setup and live counters, and serve fresh, steaming hot meals that delight your guests.",
      icon: <CheckCircle2 className="w-6 h-6 text-gold-600" />
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION - GRAND LUXURY EDITORIAL SHOWCASE */}
      <section className="relative bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 text-ivory-50 overflow-hidden border-b border-gold-500/30">
        {/* Subtle decorative background texture */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: BIG, BOLD EDITORIAL HEADLINE & TRUST (7 COLS) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-950 border border-gold-500/50 shadow-sm">
                  <span className="veg-badge" title="100% Pure Vegetarian" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-300">
                    100% Pure Vegetarian
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-950 border border-gold-500/30 text-xs text-ivory-200">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  <span className="font-medium">Flexible Capacity • As Per Your Need</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-800/80 border border-gold-500/30 text-xs text-gold-400">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Jain & Sattvic Available</span>
                </div>
              </div>

              {/* MASSIVE HEADLINE */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory-50 leading-[1.08]">
                  Every Celebration Deserves an <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 italic font-serif">Unforgettable Feast.</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-ivory-200/90 leading-relaxed font-light max-w-2xl">
                  <strong>Sanvi Catering</strong> brings authentic South and North Indian pure vegetarian catering to weddings, religious pujas, family milestones, and corporate banquets. Prepared with pure cow ghee, sacred culinary traditions, and gracious hospitality.
                </p>
              </div>

              {/* ACTION BUTTONS & WHATSAPP */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onOpenEnquiryModal()}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold text-base shadow-xl hover:shadow-gold-glow transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-forest-950" />
                  <span>Plan Your Event</span>
                </button>

                <a
                  href={buildQuickWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base shadow-lg transition-all duration-200"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp: +91 97390 49830</span>
                </a>

                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-forest-950/80 hover:bg-forest-800 text-ivory-100 hover:text-gold-300 font-semibold text-base border border-gold-500/40 transition-colors"
                >
                  <Utensils className="w-5 h-5 text-gold-400" />
                  <span>Explore Menu</span>
                </Link>
              </div>

              {/* TRUST BULLETS WITH DIRECT CALL LINE */}
              <div className="pt-4 border-t border-forest-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-ivory-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pure Cow Ghee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live Tawa & Chaat Counters</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Attentive Uniformed Staff</span>
                </div>
              </div>

              {/* Direct Booking Desk Note */}
              <div className="p-3.5 rounded-xl bg-forest-950/90 border border-gold-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-ivory-200">
                  <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Catering Desk: <strong className="text-gold-300 text-sm font-mono">+91 97390 49830</strong></span>
                </div>
                <span className="text-emerald-400 font-medium hidden sm:inline">● Open Daily for Inquiries</span>
              </div>
            </div>

            {/* RIGHT COLUMN: GRAND VIBRANT FOOD SHOWCASE (5 COLS) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/40 bg-forest-950 group">
                {/* Full brightness, natural color image */}
                <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden">
                  <img
                    src="/images/breakfast-spread.jpg"
                    alt="Sanvi Catering authentic South Indian pure vegetarian breakfast spread with dosa, idli, vada and filter coffee"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Subtle soft gradient at bottom for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

                {/* Floating Top Badge: Authentic Ghee & Spices */}
                <div className="absolute top-4 left-4 bg-forest-950/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-500/50 shadow-lg flex items-center gap-2 text-xs">
                  <span className="veg-badge" />
                  <span className="font-semibold text-gold-300">Authentic South & North Indian</span>
                </div>

                {/* Floating Top Right: Live Counters */}
                <div className="absolute top-4 right-4 bg-emerald-950/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/50 shadow-lg text-[11px] font-bold text-emerald-300">
                  Live Cooking Counters
                </div>

                {/* Bottom Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-gold-400">
                      Signature Breakfast Spread
                    </span>
                    <span className="text-xs text-ivory-300 bg-forest-900/80 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                      Ghee Roast • Thatte Idli • Filter Kaapi
                    </span>
                  </div>

                  <p className="font-serif text-lg sm:text-xl font-bold text-ivory-50 leading-snug">
                    Golden Crispy Dosas, Steamed Mallige Idlis & Authentic Filter Coffee
                  </p>
                  
                  <div className="flex items-center justify-between pt-1 text-xs text-ivory-300">
                    <span className="text-gold-300 font-medium">Portions customized to your guest count</span>
                    <button
                      onClick={() => onOpenEnquiryModal('South Indian Breakfast Catering')}
                      className="text-xs font-bold text-gold-400 hover:text-gold-200 underline cursor-pointer"
                    >
                      Book This Menu →
                    </button>
                  </div>
                </div>
              </div>

              {/* Three Mini Feast Thumbnails Below */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-gold-500/30 bg-forest-900 group cursor-pointer shadow-md"
                     onClick={() => onOpenEnquiryModal('Traditional Wedding Sadhya')}>
                  <img src="/images/traditional-leaf-meal.jpg" alt="Banana leaf meal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-forest-950/40 group-hover:bg-forest-950/20 transition-colors" />
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-ivory-50 text-center truncate bg-forest-950/80 px-1 py-0.5 rounded">
                    Banana Leaf Sadhya
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-gold-500/30 bg-forest-900 group cursor-pointer shadow-md"
                     onClick={() => onOpenEnquiryModal('Royal Wedding Buffet')}>
                  <img src="/images/wedding-buffet.jpg" alt="Wedding buffet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-forest-950/40 group-hover:bg-forest-950/20 transition-colors" />
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-ivory-50 text-center truncate bg-forest-950/80 px-1 py-0.5 rounded">
                    Wedding Buffets
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-gold-500/30 bg-forest-900 group cursor-pointer shadow-md"
                     onClick={() => onOpenEnquiryModal('Live Starters & Mithai')}>
                  <img src="/images/traditional-sweets.jpg" alt="Mithai sweets" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-forest-950/40 group-hover:bg-forest-950/20 transition-colors" />
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-bold text-ivory-50 text-center truncate bg-forest-950/80 px-1 py-0.5 rounded">
                    Royal Mithai
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST & SERVICE HIGHLIGHTS */}
      <TrustHighlights />

      {/* 3. ABOUT SANVI CATERING SECTION */}
      <section className="py-20 sm:py-24 bg-ivory-50 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/30 aspect-[4/5] bg-forest-900">
                <img
                  src="/images/traditional-leaf-meal.jpg"
                  alt="Traditional banana leaf meal served with care by Sanvi Catering"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-forest-950/90 backdrop-blur-md border border-gold-500/40 text-ivory-50">
                  <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase">
                    <span className="veg-badge" />
                    <span>The Sanvi Promise</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-ivory-100 mt-1">
                    Authentic recipes, fresh ingredients & reverent hospitality.
                  </p>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 rounded-full border border-gold-500/30 -z-10" />
            </div>

            {/* Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
                  About Sanvi Catering
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 leading-tight">
                  Crafting Feasts that Honor Tradition and Bring People Together
                </h2>
              </div>

              <p className="text-base text-forest-800/90 leading-relaxed font-normal">
                At <strong>Sanvi Catering</strong>, we believe food is the heartbeat of every celebration. Food has the power to bless an auspicious occasion, evoke cherished memories of family, and make guests feel deeply respected and welcomed.
              </p>

              <p className="text-sm sm:text-base text-forest-800/80 leading-relaxed">
                As a specialized <strong>pure vegetarian catering service</strong>, our focus is uncompromising: authentic flavors, pure cow ghee, farm-fresh produce, and dedicated hygienic preparation. Whether serving a 20-guest intimate housewarming meal or an extravagant 1,000-guest wedding reception, we pour equal love and precision into every pot, every tawa, and every plate.
              </p>

              {/* Core Tenets Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-gold-500/20 shadow-sm space-y-1">
                  <h4 className="font-serif text-lg font-bold text-forest-950">Pure Vegetarian Purity</h4>
                  <p className="text-xs text-forest-700/80">Respecting family dietary codes, including Jain and Sattvic preparations.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gold-500/20 shadow-sm space-y-1">
                  <h4 className="font-serif text-lg font-bold text-forest-950">Flexible Guest Count</h4>
                  <p className="text-xs text-forest-700/80">Tailored packages for intimate family meals up to grand celebratory banquets.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gold-500/20 shadow-sm space-y-1">
                  <h4 className="font-serif text-lg font-bold text-forest-950">Live Cooking Stations</h4>
                  <p className="text-xs text-forest-700/80">Piping hot dosas, grilled paneer tikka, and dynamic chaat counters.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gold-500/20 shadow-sm space-y-1">
                  <h4 className="font-serif text-lg font-bold text-forest-950">Attentive Hospitality</h4>
                  <p className="text-xs text-forest-700/80">Courteous, uniformed staff who treat your guests like honoured family.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-forest-900 hover:bg-forest-800 text-gold-300 font-semibold text-sm transition-colors"
                >
                  <span>Read More About Our Approach</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => onOpenEnquiryModal()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-sm transition-colors cursor-pointer"
                >
                  <span>Discuss Your Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES SECTION */}
      <section className="py-20 sm:py-24 bg-ivory-100 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
                What We Offer
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
                Pure Vegetarian Catering Services for Every Occasion
              </h2>
              <p className="text-sm sm:text-base text-forest-800/80">
                Tailored menus, professional service, and guest arrangements customized to your exact requirements.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest-900 hover:text-gold-700 transition-colors shrink-0 group"
            >
              <span>View All Catering Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Service Cards Grid (6 Services) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onEnquire={(title) => onOpenEnquiryModal(title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOD & MENU HIGHLIGHTS */}
      <section className="py-20 sm:py-24 bg-ivory-50 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
              Culinary Highlights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
              A Taste of Our Authentic Offerings
            </h2>
            <p className="text-sm sm:text-base text-forest-800/80">
              Explore our diverse vegetarian culinary repertoire across 6 authentic categories. All menus are fully customizable according to your celebration and dietary preferences.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-gold-700 font-medium bg-gold-100/70 px-3 py-1 rounded-full border border-gold-300">
              <span>* Illustrative menu ideas — custom packages created for every event</span>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menuCategories.map((cat) => (
              <div
                key={cat.id}
                className="group relative rounded-2xl overflow-hidden border border-gold-500/25 shadow-subtle hover:shadow-elevated transition-all duration-300 bg-white flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-sm text-gold-400 text-xs px-2.5 py-1 rounded-full border border-gold-500/30">
                    Pure Vegetarian
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 group-hover:text-gold-700 transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-forest-800/80 mt-1.5 leading-relaxed">
                      {cat.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-ivory-200 flex items-center justify-between">
                    <Link
                      to={`/menu?category=${cat.id}`}
                      className="text-xs font-bold text-forest-900 group-hover:text-gold-700 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Dishes</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenEnquiryModal(`Menu: ${cat.label}`)}
                      className="text-xs text-emerald-800 hover:text-emerald-700 font-semibold cursor-pointer"
                    >
                      Ask About This
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-gold-300 font-bold text-sm tracking-wide shadow-md transition-colors"
            >
              <Utensils className="w-4 h-4 text-gold-400" />
              <span>Browse Full Illustrative Menu & Dietary Filters</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PHOTO GALLERY PREVIEW */}
      <section className="py-20 sm:py-24 bg-ivory-100 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
                Visual Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
                Feasts that Look as Wonderful as They Taste
              </h2>
              <p className="text-sm sm:text-base text-forest-800/80">
                From steaming morning idlis on banana leaves to royal wedding banquets with copper chafing dishes. Tap any image to view in full resolution.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest-900 hover:text-gold-700 transition-colors shrink-0 group"
            >
              <span>View Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-forest-950 cursor-pointer shadow-subtle hover:shadow-elevated transition-all duration-300 border border-gold-500/20"
                tabIndex={0}
                role="button"
                aria-label={`Open photo of ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(idx);
                  }
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-ivory-50 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ivory-50 leading-snug group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  {item.eventDetails && (
                    <p className="text-xs text-ivory-300 font-light truncate">
                      {item.eventDetails}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-20 sm:py-24 bg-ivory-50 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-200/60 px-3 py-1 rounded-full border border-gold-400/40">
              Simple 3-Step Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
              How Planning with Sanvi Catering Works
            </h2>
            <p className="text-sm text-forest-800/80">
              We make event catering effortless, transparent, and joyful right from the very first conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 border border-gold-500/20 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl font-bold text-gold-500/40">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gold-100/70 border border-gold-300/60 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-forest-800/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ivory-200 text-xs text-gold-700 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Sanvi Coordination Guarantee</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenEnquiryModal()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-forest-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-gold-glow transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Start Step 1: Tell Us About Your Event</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <CTASection onOpenEnquiryModal={() => onOpenEnquiryModal()} />

      {/* Lightbox Component for Preview Gallery */}
      <Lightbox
        items={previewGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
