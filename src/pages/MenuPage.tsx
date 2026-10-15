import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { menuCategories, menuItems, MenuItem, MenuCategoryMeta } from '../data/menu';
import { 
  Utensils, 
  Search, 
  Filter, 
  Sparkles, 
  MessageSquare, 
  Calendar, 
  Check, 
  Info,
  CheckCircle2,
  Flame,
  Leaf
} from 'lucide-react';
import { buildQuickWhatsAppUrl } from '../config/business';

interface MenuPageProps {
  onOpenEnquiryModal: (itemOrCategory?: string) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenEnquiryModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jainOnly, setJainOnly] = useState<boolean>(false);
  const [popularOnly, setPopularOnly] = useState<boolean>(false);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Jain friendly filter
      if (jainOnly && !item.isJainFriendly) {
        return false;
      }
      // Popular filter
      if (popularOnly && !item.isPopular) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(query));
        const matchesRegional = item.regionalName?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesTags && !matchesRegional) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, jainOnly, popularOnly, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-0 bg-ivory-50">
      {/* Page Header */}
      <PageHeader
        title="Food & Menu Inspirations"
        subtitle="Explore our pure vegetarian culinary creations — from traditional South Indian morning tiffins and banana leaf sadhyas to North Indian banquets and royal mithais."
        currentPage="Menu"
        bgImage="/images/traditional-sweets.jpg"
      />

      {/* Illustrative Notice Banner */}
      <section className="bg-gold-100/90 border-b border-gold-300 py-3.5 px-4 text-forest-950 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-gold-700 shrink-0" />
            <p>
              <strong>Illustrative Menu Notice:</strong> All dishes and combinations shown below are representative ideas. Menus are customized based on your guest count, season, venue facilities, and specific dietary needs.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiryModal()}
            className="text-emerald-800 font-bold hover:underline shrink-0 cursor-pointer"
          >
            Request Custom Menu Quote
          </button>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="py-8 bg-ivory-100 border-b border-gold-500/20 sticky top-[65px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-forest-900 text-gold-300 shadow-sm'
                  : 'bg-white text-forest-900 border border-gold-500/20 hover:bg-ivory-200'
              }`}
            >
              All Categories ({menuItems.length})
            </button>

            {menuCategories.map((cat) => {
              const count = menuItems.filter(i => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-forest-900 text-gold-300 shadow-sm'
                      : 'bg-white text-forest-900 border border-gold-500/20 hover:bg-ivory-200'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Checkboxes */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-forest-600 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Dosa, Paneer, Payasam)..."
                className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-gold-500/25 text-xs text-forest-950 placeholder:text-forest-700/50 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Quick Dietary Filters */}
            <div className="flex flex-wrap items-center gap-3 text-xs w-full sm:w-auto justify-start sm:justify-end">
              <label className="flex items-center gap-1.5 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-gold-500/20 select-none hover:bg-ivory-50">
                <input
                  type="checkbox"
                  checked={jainOnly}
                  onChange={(e) => setJainOnly(e.target.checked)}
                  className="rounded text-gold-600 focus:ring-gold-500 accent-emerald-700"
                />
                <span className="font-medium text-forest-900">Jain Friendly (No Onion/Garlic)</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-gold-500/20 select-none hover:bg-ivory-50">
                <input
                  type="checkbox"
                  checked={popularOnly}
                  onChange={(e) => setPopularOnly(e.target.checked)}
                  className="rounded text-gold-600 focus:ring-gold-500 accent-gold-600"
                />
                <span className="font-medium text-forest-900">Chef Specials Only</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Cards Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gold-500/20 p-8 space-y-4">
              <Utensils className="w-12 h-12 text-gold-600 mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-forest-950">
                No matching dishes found
              </h3>
              <p className="text-sm text-forest-800/80 max-w-md mx-auto">
                Try clearing your search query or dietary filters, or contact our team directly to discuss custom dishes.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setJainOnly(false);
                  setPopularOnly(false);
                  setActiveCategory('all');
                }}
                className="px-5 py-2.5 rounded-lg bg-forest-900 text-gold-300 text-xs font-semibold hover:bg-forest-800 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gold-500/20 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
                >
                  {/* Optional Image */}
                  {item.image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-sm text-gold-400 text-[11px] px-2.5 py-0.5 rounded-full border border-gold-500/30">
                        {item.category.replace('-', ' ').toUpperCase()}
                      </div>
                      <div className="absolute top-3 right-3 bg-white/95 p-1 rounded-md shadow-sm">
                        <span className="veg-badge" title="Pure Vegetarian" />
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Name and Badges */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            {!item.image && <span className="veg-badge shrink-0" />}
                            <span className="text-[10px] uppercase font-semibold text-gold-700 bg-gold-100 px-2 py-0.5 rounded">
                              {item.category.replace('-', ' ')}
                            </span>
                            {item.isJainFriendly && (
                              <span className="text-[10px] uppercase font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                                Jain Available
                              </span>
                            )}
                          </div>

                          <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
                            {item.name}
                          </h3>
                          {item.regionalName && (
                            <p className="text-xs text-gold-800 font-medium italic mt-0.5">
                              {item.regionalName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-forest-800/80 mt-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-ivory-100 text-forest-800 px-2 py-0.5 rounded border border-gold-500/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action (No Fake Prices!) */}
                    <div className="pt-4 border-t border-ivory-200 flex items-center justify-between">
                      <span className="text-[11px] text-forest-700 font-medium">
                        Capacity: Flexible as per need
                      </span>

                      <button
                        onClick={() => onOpenEnquiryModal(`Dish / Menu: ${item.name}`)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Ask About This Dish</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />
    </div>
  );
};
