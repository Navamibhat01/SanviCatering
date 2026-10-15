export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "weddings" | "traditional" | "breakfast" | "starters-sweets" | "corporate";
  categoryLabel: string;
  imageUrl: string;
  description: string;
  eventDetails?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Grand South Indian Royal Feast",
    category: "traditional",
    categoryLabel: "Traditional Sadhya",
    imageUrl: "/images/hero-feast.jpg",
    description: "Traditional pure vegetarian festive spread on plantain leaves featuring freshly steamed idlis, golden crispy masala dosa, medu vada, vegetable biryani, and artisanal payasam in brass katoris.",
    eventDetails: "Heritage Auspicious Celebration (150 Guests)"
  },
  {
    id: "gal-2",
    title: "Luxury Wedding Reception Banquet",
    category: "weddings",
    categoryLabel: "Weddings & Receptions",
    imageUrl: "/images/wedding-buffet.jpg",
    description: "Hammered copper and brass chafing warmers decorated with fresh marigold runners, golden fairy lights, and uniformed royal hospitality servers.",
    eventDetails: "Grand Palace Wedding Reception (650 Guests)"
  },
  {
    id: "gal-3",
    title: "Authentic Kalyana Banana Leaf Virundhu",
    category: "traditional",
    categoryLabel: "Traditional Sadhya",
    imageUrl: "/images/traditional-leaf-meal.jpg",
    description: "Full festive South Indian sadhya with avial, sambar, rasam, kootu, pachadi, crispy appalam, payasam, and steaming rice with melted ghee.",
    eventDetails: "Traditional Wedding Muhurtham Lunch (400 Guests)"
  },
  {
    id: "gal-4",
    title: "Royal North Indian Feast Spread",
    category: "weddings",
    categoryLabel: "Weddings & Receptions",
    imageUrl: "/images/north-indian-spread.jpg",
    description: "Velvety Paneer Butter Masala, overnight Dal Makhani, butter garlic naan, dum vegetable biryani, and mint raita served in a luxury banquet hall.",
    eventDetails: "Evening Wedding Sangeet Dinner (300 Guests)"
  },
  {
    id: "gal-5",
    title: "Royal Indian Mithai & Dessert Platter",
    category: "starters-sweets",
    categoryLabel: "Sweets & Starters",
    imageUrl: "/images/traditional-sweets.jpg",
    description: "Handcrafted dessert display featuring warm Gulab Jamun, silvered Kaju Katli, chilled Kesar Rasmalai, ghee Mysore Pak, and Motichoor laddoos.",
    eventDetails: "Celebratory Festival Dessert Counter"
  },
  {
    id: "gal-6",
    title: "Interactive Live Tawa Starter Station",
    category: "starters-sweets",
    categoryLabel: "Sweets & Starters",
    imageUrl: "/images/live-starters.jpg",
    description: "Chef grilling marinated spiced Paneer Tikka cubes with capsicum on a hot tawa alongside mini cocktail samosas, hara bhara kebabs, and gourmet chutneys.",
    eventDetails: "Outdoor Cocktail Reception (250 Guests)"
  },
  {
    id: "gal-7",
    title: "Classic South Indian Morning Tiffin",
    category: "breakfast",
    categoryLabel: "Breakfast Catering",
    imageUrl: "/images/breakfast-spread.jpg",
    description: "Crispy golden masala dosa with spiced potato masala, soft idlis, medu vada, trio of fresh coconut & tomato chutneys, and hot filter coffee.",
    eventDetails: "Muhurtham Morning Breakfast (350 Guests)"
  },
  {
    id: "gal-8",
    title: "Auspicious Family Puja Prasadam Bhojanam",
    category: "traditional",
    categoryLabel: "Traditional Sadhya",
    imageUrl: "/images/puja-catering.jpg",
    description: "Traditional pure vegetarian Sattvic spread served on banana leaves with sakkarai pongal, puliyodharai, curd rice, medu vada, and payasam.",
    eventDetails: "Gruhapravesham Housewarming Function (80 Guests)"
  },
  {
    id: "gal-9",
    title: "Contemporary Corporate Executive Buffet",
    category: "corporate",
    categoryLabel: "Corporate Events",
    imageUrl: "/images/corporate-lunch.jpg",
    description: "Stainless steel chafing warmers with wholesome vegetable gravies, dal tadka, jeera pulao, artisan breads, and fresh salads with microgreens.",
    eventDetails: "Annual Corporate Leadership Summit (200 Delegates)"
  },
  {
    id: "gal-10",
    title: "Artisanal Heritage Welcome Drinks Station",
    category: "weddings",
    categoryLabel: "Weddings & Receptions",
    imageUrl: "/images/beverages.jpg",
    description: "Chilled Saffron Badam Milk in carafes, fresh tender coconut water with mint, thick sweet Punjabi lassi in earthen kulhads, and Kokum sharbat.",
    eventDetails: "Grand Welcome Hospitality Counter"
  }
];
