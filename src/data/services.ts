export interface CateringService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  capacityText: string;
  recommendedFor: string[];
  keyHighlights: string[];
  diningStyles: string[];
  popularMenus: string[];
}

export const cateringServices: CateringService[] = [
  {
    id: "weddings-receptions",
    title: "Wedding & Reception Catering",
    shortDesc: "Majestic vegetarian wedding feasts and reception banquets crafted with royal hospitality and culinary elegance.",
    fullDesc: "A wedding is the most cherished celebration of a lifetime. Sanvi Catering specializes in orchestrating grand vegetarian wedding feasts that honour your cultural heritage while delivering contemporary culinary brilliance. From auspicious morning Muhurtham breakfast spreads to opulent multi-course reception banquets, our live cooking counters and gracious staff ensure every guest leaves delighted.",
    image: "/images/wedding-buffet.jpg",
    capacityText: "Flexible (Tailored as per need, up to 1,000+)",
    recommendedFor: ["Muhurtham Breakfast & Lunch", "Grand Reception Banquets", "Sangeet & Mehendi Food Counters", "Engagement Celebrations"],
    keyHighlights: [
      "Traditional plantain leaf service or royal copper buffet counters",
      "Live tandoori and chaat counters managed by specialized chefs",
      "Artisanal dessert displays and fresh welcome drink stations",
      "Dedicated banquet captains for seamless floor coordination"
    ],
    diningStyles: ["Traditional Banana Leaf Service", "Royal Luxury Buffet", "Interactive Live Food Stations"],
    popularMenus: ["Kalyana Sadhya Feast", "Royal North & South Indian Fusion Buffet", "Traditional Muhurtham Breakfast Spread"]
  },
  {
    id: "traditional-religious",
    title: "Traditional & Religious Functions",
    shortDesc: "Auspicious, authentic pure vegetarian meals prepared with reverence, purity, and sacred culinary practices.",
    fullDesc: "For religious observances and sacred family milestones, food purity is paramount. Sanvi Catering prepares authentic Sattvic and pure vegetarian feasts honoring family traditions. We take special care to prepare meals without onion and garlic (Jain and Brahmin style) when requested, with pure cow ghee and sanctified cooking practices.",
    image: "/images/puja-catering.jpg",
    capacityText: "Flexible (Tailored to your family size)",
    recommendedFor: ["Gruhapravesham (Housewarming)", "Satyanarayan Puja & Homams", "Seemantham & Baby Showers", "Upanayanam (Thread Ceremony)", "Shashtiabdapoorthi (60th Birthday)"],
    keyHighlights: [
      "Strict adherece to pure vegetarian and Sattvic culinary traditions",
      "Options for onion-free and garlic-free (Jain / Brahmin) menus",
      "Traditional brassware, banana leaves, and respectful service staff",
      "Auspicious dishes: Sakkarai Pongal, Puliyodharai, Vadai, Payasam"
    ],
    diningStyles: ["Plantain Leaf Sadhya", "Sit-down Traditional Service", "Intimate Buffet"],
    popularMenus: ["Auspicious Puja Prasadam Meal", "Heritage Brahmin Sadhya", "Housewarming Celebration Feast"]
  },
  {
    id: "family-birthdays",
    title: "Birthday Parties & Family Gatherings",
    shortDesc: "Vibrant, crowd-pleasing vegetarian menus for birthdays, anniversaries, naming ceremonies, and reunion feasts.",
    fullDesc: "Gather your closest family and friends for milestone birthdays, anniversaries, cradle ceremonies, and festive celebrations. We bring excitement to the dining table with dynamic live counters, bite-sized appetizers, aromatic main courses, and indulgent sweet treats that all generations love.",
    image: "/images/live-starters.jpg",
    capacityText: "Flexible (As per your requirement)",
    recommendedFor: ["Kids & Milestone Birthday Parties", "Silver & Golden Wedding Anniversaries", "Naming Ceremonies (Namakaran)", "Family Reunions & Get-Togethers"],
    keyHighlights: [
      "Customizable menus for all age groups from toddlers to grandparents",
      "Interactive live counters: Mini dosas, pasta, chaats, and pav bhaji",
      "Hot, freshly made finger foods and refreshing welcome coolers",
      "Flexible packages tailored to home venues, party halls, and lawns"
    ],
    diningStyles: ["Interactive Live Counters", "Festive Buffet", "Casual Finger Food Spread"],
    popularMenus: ["Party Special Starter & Biryani Feast", "Live Chaat & Dosa Carnival", "Classic Indian Family Dinner"]
  },
  {
    id: "corporate-events",
    title: "Corporate Events & Seminars",
    shortDesc: "Polished, punctual, and nutritious executive catering for business conferences, board lunches, and corporate milestones.",
    fullDesc: "Sanvi Catering brings professionalism and culinary excellence to corporate meetings, annual conventions, VIP delegate banquets, and office festive parties. We prioritize punctuality, clean modern presentation, balanced nutrition, and seamless service that respects your busy corporate schedules.",
    image: "/images/corporate-lunch.jpg",
    capacityText: "Flexible (Custom team & delegate sizes)",
    recommendedFor: ["Annual Corporate Day Celebrations", "Business Seminars & Conferences", "Executive Board Luncheons", "Diwali & Festival Office Parties"],
    keyHighlights: [
      "Impeccable punctuality and immaculate setup hygiene",
      "Modern stainless steel and eco-friendly presentation options",
      "Balanced, light executive lunches that keep delegates energized",
      "Clear GST invoicing and dedicated corporate account coordinator"
    ],
    diningStyles: ["Executive Standing Buffet", "Plated Corporate Thali", "Hi-Tea & Conference Breaks"],
    popularMenus: ["Executive North & South Indian Buffet", "Corporate Hi-Tea & Live Starter Spread", "VIP Delegate Thali"]
  },
  {
    id: "breakfast-catering",
    title: "Authentic Breakfast Catering",
    shortDesc: "Steaming hot idlis, crispy dosas made live, crunchy medu vadas, and aromatic degree filter coffee.",
    fullDesc: "Begin your celebrations on an auspicious, energizing note with our renowned South Indian breakfast catering. Watch our chefs prepare paper-thin golden dosas on sizzling tawas, serve melt-in-the-mouth ghee idlis, and pour steaming hot Kumbakonam-style filter coffee in traditional brass tumblers.",
    image: "/images/breakfast-spread.jpg",
    capacityText: "Flexible (As per morning gathering need)",
    recommendedFor: ["Morning Wedding Muhurthams", "Puja & Housewarming Mornings", "Corporate Breakfast Meetings", "Community Morning Gatherings"],
    keyHighlights: [
      "Live Dosa counter: Masala, Onion, Podi, Ghee Roast, Cheese",
      "Steaming hot, fluffy thatte and button idlis with sambar dip",
      "Freshly ground trio of chutneys (Coconut, Spicy Tomato, Coriander)",
      "Traditional brass tumbler filter coffee counter"
    ],
    diningStyles: ["Live Dosa Counter Service", "Buffet Breakfast", "Traditional Sit-down Service"],
    popularMenus: ["Classic South Indian Breakfast Feast", "Grand Temple Breakfast Spread", "Royal Morning Tiffin with Live Counters"]
  },
  {
    id: "lunch-dinner-catering",
    title: "Lunch & Dinner Banquets",
    shortDesc: "Sumptuous multi-course vegetarian feasts featuring rich curries, fragrant biryanis, warm breads, and regal desserts.",
    fullDesc: "Whether for an afternoon celebratory lunch or an evening celebration dinner, our comprehensive menus combine the comfort of home-cooked authenticity with the grandeur of royal Indian banquets. Enjoy wholesome dal makhani, shahi paneer, dum subz biryani, freshly puffed rotis, and cooling raitas.",
    image: "/images/north-indian-spread.jpg",
    capacityText: "Flexible (Tailored as per your requirement)",
    recommendedFor: ["Evening Reception Feasts", "Festival Luncheons", "Community Banquets", "Retirement Dinners"],
    keyHighlights: [
      "Rich selection of North and South Indian main courses",
      "Slow-cooked dum biryanis and fragrant pulaos",
      "Live tawa rotis, butter naans, and pooris served piping hot",
      "Refreshing curd delicacies, crunchy salads, and handcrafted sweets"
    ],
    diningStyles: ["Luxury Banquet Buffet", "Traditional Banana Leaf Feast", "Interactive Dinner Stations"],
    popularMenus: ["North-South Heritage Banquet", "Royal Shahi Dinner Feast", "Festive Banana Leaf Mahabhojan"]
  }
];
