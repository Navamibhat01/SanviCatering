export interface MenuItem {
  id: string;
  name: string;
  regionalName?: string;
  description: string;
  category: "breakfast" | "meals" | "north-indian" | "starters" | "desserts" | "beverages";
  tags: string[];
  isPopular?: boolean;
  isJainFriendly?: boolean;
  image?: string;
}

export interface MenuCategoryMeta {
  id: "breakfast" | "meals" | "north-indian" | "starters" | "desserts" | "beverages";
  label: string;
  shortDesc: string;
  image: string;
}

export const menuCategories: MenuCategoryMeta[] = [
  {
    id: "breakfast",
    label: "South Indian Breakfast",
    shortDesc: "Golden crispy dosas, steaming hot idlis, crunchy vadas, and traditional filter coffee.",
    image: "/images/breakfast-spread.jpg",
  },
  {
    id: "meals",
    label: "Traditional Meals & Sadhya",
    shortDesc: "Traditional multi-course feasts served on fresh plantain leaves with regional delicacies.",
    image: "/images/traditional-leaf-meal.jpg",
  },
  {
    id: "north-indian",
    label: "North Indian Specialties",
    shortDesc: "Rich gravies, slow-simmered dals, clay-oven tandoori breads, and fragrant dum biryanis.",
    image: "/images/north-indian-spread.jpg",
  },
  {
    id: "starters",
    label: "Snacks & Live Starters",
    shortDesc: "Crispy appetizers, marinated grilled paneer, and interactive live chaat counters.",
    image: "/images/live-starters.jpg",
  },
  {
    id: "desserts",
    label: "Royal Desserts & Sweets",
    shortDesc: "Traditional ghee sweets, syrup-soaked mithais, and delicate chilled milk puddings.",
    image: "/images/traditional-sweets.jpg",
  },
  {
    id: "beverages",
    label: "Beverages & Welcome Drinks",
    shortDesc: "Refreshing heritage coolers, spiced buttermilks, tender coconut drinks, and filter coffee.",
    image: "/images/beverages.jpg",
  },
];

export const menuItems: MenuItem[] = [
  // SOUTH INDIAN BREAKFAST
  {
    id: "masala-dosa",
    name: "Golden Masala Dosa",
    regionalName: "Ghee Roast Masala Dosa",
    description: "Crispy golden fermented crepe cooked with pure cow ghee, folded around spiced turmeric potato filling, served with trio of fresh chutneys and piping hot sambar.",
    category: "breakfast",
    tags: ["Pure Veg", "Live Counter", "Chef Special"],
    isPopular: true,
    isJainFriendly: false,
    image: "/images/breakfast-spread.jpg"
  },
  {
    id: "ghee-thatte-idli",
    name: "Steamed Thatte & Button Idlis",
    regionalName: "Mallige Thatte Idli",
    description: "Ultra-soft, melt-in-the-mouth steamed rice and lentil cakes brushed with warm homemade ghee and aromatic gun powder (karam podi).",
    category: "breakfast",
    tags: ["Pure Veg", "Gluten-Free", "Kids Favorite"],
    isPopular: true,
    isJainFriendly: true,
    image: "/images/hero-feast.jpg"
  },
  {
    id: "medu-vada",
    name: "Crispy Medu Vada",
    regionalName: "Uddina Vade",
    description: "Crunchy on the outside, fluffy within; savory lentil donuts infused with crushed black pepper, fresh ginger, and curry leaves.",
    category: "breakfast",
    tags: ["Pure Veg", "Traditional", "Must Have"],
    isPopular: true,
    isJainFriendly: false,
    image: "/images/breakfast-spread.jpg"
  },
  {
    id: "ven-pongal",
    name: "Ghee Ven Pongal",
    regionalName: "Khara Pongal",
    description: "Creamy comfort blend of rice and yellow moong dal tempered with whole black peppercorns, cumin seeds, ginger, and roasted cashews in ghee.",
    category: "breakfast",
    tags: ["Pure Veg", "Temple Style", "Comfort Food"],
    isPopular: false,
    isJainFriendly: true,
  },
  {
    id: "rava-kichadi",
    name: "Vegetable Rava Kichadi",
    regionalName: "Sooji Upma",
    description: "Fluffy semolina roasted with garden vegetables, mustard seeds, curry leaves, and ghee, served with tangy coconut-chilli chutney.",
    category: "breakfast",
    tags: ["Pure Veg", "Light & Nutritious"],
    isPopular: false,
    isJainFriendly: true,
  },
  {
    id: "filter-coffee",
    name: "Traditional Degree Filter Coffee",
    regionalName: "Kumbakonam Filter Kaapi",
    description: "Authentic chicory-infused decoction brewed with fresh frothy whole milk, served piping hot in traditional brass dabara and tumbler.",
    category: "breakfast",
    tags: ["Beverage", "Signature Experience"],
    isPopular: true,
    isJainFriendly: true,
  },

  // TRADITIONAL MEALS & SADHYA
  {
    id: "festive-sadhya",
    name: "Grand Plantain Leaf Sadhya",
    regionalName: "Kalyana Virundhu",
    description: "A complete celebratory royal spread of steamed Ponni rice, arachuvitta sambar, spicy rasam, avial, cabbage poriyal, kootu, mor kuzhambu, appalam, and ginger pickle.",
    category: "meals",
    tags: ["Pure Veg", "Traditional", "Wedding Signature"],
    isPopular: true,
    isJainFriendly: true,
    image: "/images/traditional-leaf-meal.jpg"
  },
  {
    id: "traditional-avial",
    name: "Heritage Vegetable Avial",
    regionalName: "Malabar / Tamil Avial",
    description: "Mélange of native vegetables simmered in a mildly spiced coconut-cumin paste and whisked curd, finished with raw coconut oil and fresh curry leaves.",
    category: "meals",
    tags: ["Pure Veg", "Authentic Recipe"],
    isPopular: true,
    isJainFriendly: true,
  },
  {
    id: "kalyana-rasam",
    name: "Mysore / Kalyana Rasam",
    regionalName: "Piping Hot Pepper Rasam",
    description: "Aromatic, tangy broth made from crushed tomatoes, tamarind, freshly pounded black peppercorns, cumin, and fragrant coriander.",
    category: "meals",
    tags: ["Digestive", "Traditional"],
    isPopular: false,
    isJainFriendly: true,
  },
  {
    id: "elaneer-payasam",
    name: "Tender Coconut Elaneer Payasam",
    regionalName: "Elaneer Kheer",
    description: "Silky, cooling sweet pudding prepared with fresh tender coconut pulp, rich coconut milk, cardamom, and roasted cashews.",
    category: "meals",
    tags: ["Pure Veg", "Special Dessert"],
    isPopular: true,
    isJainFriendly: true,
  },
  {
    id: "bisi-bele-bath",
    name: "Karnataka Bisi Bele Bath",
    regionalName: "Hot Lentil Rice",
    description: "Rich, slow-cooked one-pot dish of rice, lentils, assorted vegetables, and our house-blend aromatic spice powder, topped with boondi and pure ghee.",
    category: "meals",
    tags: ["Pure Veg", "Regional Specialty"],
    isPopular: false,
    isJainFriendly: false,
  },

  // NORTH INDIAN SPECIALTIES
  {
    id: "paneer-butter-masala",
    name: "Shahi Paneer Butter Masala",
    regionalName: "Makhani Paneer",
    description: "Soft artisanal cottage cheese cubes simmered in a velvety, mildly sweet gravy of ripe tomatoes, cashews, butter, and fragrant kasoori methi.",
    category: "north-indian",
    tags: ["Pure Veg", "Crowd Favorite"],
    isPopular: true,
    isJainFriendly: true,
    image: "/images/north-indian-spread.jpg"
  },
  {
    id: "dal-makhani",
    name: "Slow-Cooked Dal Makhani",
    regionalName: "Bukhara Style Dal",
    description: "Whole black urad lentils and kidney beans simmered overnight on low heat with slow-churned white butter, cream, and delicate spices.",
    category: "north-indian",
    tags: ["Pure Veg", "Signature Dish"],
    isPopular: true,
    isJainFriendly: false,
  },
  {
    id: "dum-subz-biryani",
    name: "Awadhi Dum Subz Biryani",
    regionalName: "Hyderabadi Veg Biryani",
    description: "Long-grain aged basmati rice layered with garden-fresh vegetables, saffron milk, fried onions, and whole spices, sealed and slow-cooked in dum style.",
    category: "north-indian",
    tags: ["Pure Veg", "Royal Main"],
    isPopular: true,
    isJainFriendly: false,
  },
  {
    id: "tandoori-breads",
    name: "Assorted Clay Oven Breads",
    regionalName: "Naan, Roti & Paratha Basket",
    description: "Piping hot butter garlic naan, lachha parathas, and tandoori phulkas brushed with melted butter straight from our live bread ovens.",
    category: "north-indian",
    tags: ["Live Station", "Pure Veg"],
    isPopular: false,
    isJainFriendly: true,
  },
  {
    id: "malai-kofta",
    name: "Kashmiri Malai Kofta",
    regionalName: "Shahi Paneer Dumpling Gravy",
    description: "Handcrafted dumplings of mashed paneer, potatoes, and dry fruits served in an opulent white cashew and melon seed cream gravy.",
    category: "north-indian",
    tags: ["Pure Veg", "Luxury Dish"],
    isPopular: false,
    isJainFriendly: true,
  },

  // SNACKS & STARTERS
  {
    id: "paneer-tikka",
    name: "Tandoori Paneer Tikka",
    regionalName: "Live Grill Paneer",
    description: "Fresh paneer skewers marinated in hung curd, Kashmiri red chilli, mustard oil, and ajwain, grilled over charcoal with crisp capsicum and onions.",
    category: "starters",
    tags: ["Live Counter", "Pure Veg"],
    isPopular: true,
    isJainFriendly: true,
    image: "/images/live-starters.jpg"
  },
  {
    id: "cocktail-samosas",
    name: "Crispy Cocktail Samosas",
    regionalName: "Mini Matar Samosas",
    description: "Golden flaky pastry pockets stuffed with lightly spiced green peas and potato hash, accompanied by date-tamarind and tangy mint dips.",
    category: "starters",
    tags: ["Pure Veg", "Tea Time Favorite"],
    isPopular: true,
    isJainFriendly: false,
  },
  {
    id: "live-chaat-counter",
    name: "Dilli & Mumbai Live Chaat Counter",
    regionalName: "Pani Puri & Dahi Sev Puri",
    description: "Interactive counter featuring crispy hollow puris with spicy mint water, sweet tamarind chutney, and chilled whipped sweetened curd sev puris.",
    category: "starters",
    tags: ["Interactive Live Station", "Crowd Magnet"],
    isPopular: true,
    isJainFriendly: true,
  },
  {
    id: "hara-bhara-kebab",
    name: "Lucknowi Hara Bhara Kebab",
    regionalName: "Spinach & Pea Patties",
    description: "Pan-seared spinach, green peas, and paneer medallions scented with roasted cumin, studded with crunchy cashew halves.",
    category: "starters",
    tags: ["Pure Veg", "Healthy Choice"],
    isPopular: false,
    isJainFriendly: true,
  },

  // DESSERTS & SWEETS
  {
    id: "gulab-jamun",
    name: "Warm Shahi Gulab Jamun",
    regionalName: "Kala Jamun / Angoori Jamun",
    description: "Traditional mawa (khoya) dumplings fried to rich golden perfection and soaked in warm saffron-cardamom sugar nectar, served with pistachio slivers.",
    category: "desserts",
    tags: ["Pure Veg", "All-Time Favorite"],
    isPopular: true,
    isJainFriendly: true,
    image: "/images/traditional-sweets.jpg"
  },
  {
    id: "saffron-rasmalai",
    name: "Kesar Pista Rasmalai",
    regionalName: "Bengali Rasmalai",
    description: "Delicate chenna discs gently poached and immersed in thickened saffron-infused rabdi milk, chilled and garnished with Iranian saffron and almonds.",
    category: "desserts",
    tags: ["Pure Veg", "Chilled Dessert"],
    isPopular: true,
    isJainFriendly: true,
  },
  {
    id: "mysore-pak",
    name: "Ghee Mysore Pak",
    regionalName: "Melt-In-Mouth Mysore Pak",
    description: "The crown jewel of South Indian sweets: roasted gram flour and pure hot cow ghee cooked to porous, melt-in-the-mouth perfection.",
    category: "desserts",
    tags: ["Pure Veg", "Heritage Sweet"],
    isPopular: true,
    isJainFriendly: true,
  },
  {
    id: "kaju-katli",
    name: "Silvered Kaju Katli",
    regionalName: "Cashew Diamonds",
    description: "Diamond-cut artisan confectionery made with first-grade ground cashew nuts and sugar, finished with edible silver leaf.",
    category: "desserts",
    tags: ["Pure Veg", "Festive Favorite"],
    isPopular: false,
    isJainFriendly: true,
  },
  {
    id: "moong-dal-halwa",
    name: "Desi Ghee Moong Dal Halwa",
    regionalName: "Shahi Moong Halwa",
    description: "Rich, slow-roasted yellow lentils cooked in generous pure ghee with milk, mawa, saffron, and slivered dry fruits.",
    category: "desserts",
    tags: ["Pure Veg", "Winter & Wedding Special"],
    isPopular: false,
    isJainFriendly: true,
  },

  // BEVERAGES
  {
    id: "badam-milk",
    name: "Royal Saffron Badam Milk",
    regionalName: "Kesar Pista Badam Doodh",
    description: "Rich, velvety whole milk infused with freshly crushed California almonds, pure saffron strands, cardamom, and slivered pistachios. Served chilled or warm.",
    category: "beverages",
    tags: ["Welcome Drink", "Royal Treat"],
    isPopular: true,
    isJainFriendly: true,
    image: "/images/beverages.jpg"
  },
  {
    id: "punjabi-lassi",
    name: "Thick Punjabi Sweet Lassi",
    regionalName: "Matka Lassi",
    description: "Traditional churned thick sweet yogurt drink topped with a dollop of fresh cream (malai), crushed cardamom, and fragrant rose petals in clay kulhads.",
    category: "beverages",
    tags: ["Welcome Drink", "Traditional"],
    isPopular: true,
    isJainFriendly: true,
  },
  {
    id: "tender-coconut-water",
    name: "Mint Elaneer (Tender Coconut)",
    regionalName: "Natural Coconut Cooler",
    description: "Pure, sweet tender coconut water flavored lightly with fresh mint sprigs and lime slices, served chilled as an energizing welcome sip.",
    category: "beverages",
    tags: ["Welcome Drink", "All-Natural & Refreshing"],
    isPopular: true,
    isJainFriendly: true,
  },
  {
    id: "spiced-buttermilk",
    name: "Neer Mor / Masala Chaas",
    regionalName: "Spiced Refreshing Buttermilk",
    description: "Churned light curd tempered with roasted cumin, green chillies, crushed ginger, and fresh coriander leaves. A soothing traditional digestive.",
    category: "beverages",
    tags: ["Digestive", "Traditional Refreshment"],
    isPopular: false,
    isJainFriendly: true,
  },
  {
    id: "kokum-sharbat",
    name: "Konkan Kokum Sharbat",
    regionalName: "Iced Kokum Nectar",
    description: "Natural tangy-sweet kokum fruit infusion with a hint of roasted cumin and black salt, served chilled over ice.",
    category: "beverages",
    tags: ["Welcome Drink", "Tangy Delight"],
    isPopular: false,
    isJainFriendly: true,
  }
];
