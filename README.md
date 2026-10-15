# Sanvi Catering — Premium Pure Vegetarian Catering Website

A luxury, production-quality website built for **Sanvi Catering**, a pure vegetarian catering service specializing in weddings, religious ceremonies, family milestones, and corporate banquets with **flexible guest capacity customized to your needs**.

---

## 🌿 Overview & Visual Identity

- **Brand Essence:** Pure vegetarian culinary excellence, traditional heritage, warm Indian hospitality (*Athithi Devo Bhava*).
- **Guest Capacity:** Flexible capacity customized according to client requirements (intimate gatherings to large banquets).
- **Color Palette:**
  - **Forest Green** (`#0B2518`, `#143B27`, `#236946`): Symbolizes purity, traditional banana leaves, and luxury hospitality.
  - **Warm Ivory & Cream** (`#FAF8F5`, `#F5F1E9`, `#ECE5D8`): Editorial spaciousness, clean presentation.
  - **Muted & Champagne Gold** (`#D4AF37`, `#C5A059`, `#E2BF62`): Auspicious elegance, brass tableware, festive celebrations.
- **Typography:**
  - **Headings:** *Cormorant Garamond* & *Playfair Display* (Editorial luxury serifs)
  - **Body:** *Plus Jakarta Sans* (Clean, legible, modern sans-serif)
- **Culinary Assets:** 10 authentic high-resolution local food and catering photos stored directly in `public/images/`.

---

## 🚀 Pages & Features

1. **Home Page (`/`)**:
   - Hero banner with traditional South Indian banana leaf feast photograph.
   - Pure vegetarian & 20–1,000 guest capacity pill badges.
   - Primary CTAs: *Plan Your Event* (interactive modal) and *Explore Our Menu*.
   - Four trust and service highlight pillars (no fabricated ratings/stats).
   - Authentic About Us introduction.
   - 6 detailed service cards with direct enquiry triggers.
   - Culinary repertoire preview across 6 categories.
   - Photo gallery preview with full-resolution interactive Lightbox modal.
   - 3-step planning workflow (*Tell Us*, *Curate Menu*, *Celebrate*).
   - Prominent WhatsApp & call booking desk CTA banner.
2. **About Us (`/about`)**:
   - Cultural philosophy, pure vegetarian sanctity, Sattvic and Jain food protocols, and event capacity.
3. **Services (`/services`)**:
   - Deep-dive sections for Wedding Feasts, Religious/Puja Functions, Birthday & Family Gatherings, Corporate Seminars, Breakfast Catering, and Lunch & Dinner Banquets.
   - Jump navigation bar, capacity badges, dining styles, and sample menus.
4. **Food & Menu Inspirations (`/menu`)**:
   - Data-driven menu with category tabs (Breakfast, Meals, North Indian, Starters, Sweets, Beverages).
   - Real-time search by dish name or ingredients.
   - Dietary filter toggles (Jain Friendly / No Onion & Garlic, Chef Specials).
   - Clear disclaimer that menus are illustrative ideas customized for each event.
   - No invented prices; direct *“Ask About This Dish”* enquiry actions.
5. **Photo Gallery (`/gallery`)**:
   - Responsive photo grid filterable by event category.
   - Keyboard-accessible Lightbox modal (Previous, Next, Escape to close, image captions).
6. **Contact & Booking Desk (`/contact`)**:
   - Event brief form with validations (Name, Phone, Date, Location, Guest Count slider 20–1000, Dining format, Dietary requests).
   - Instant WhatsApp message builder.
   - Operating hours, email, and service region notes.
7. **404 Not Found Page (`/*`)**:
   - Branded recovery page guiding visitors back to Home, Menu, or WhatsApp.
8. **Persistent Floating WhatsApp Button**:
   - Discreet bottom-right floating button with quick consultation prompt.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS (custom forest green, gold, ivory palette)
- **Routing:** React Router v7 (`BrowserRouter`)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

---

## 📋 Prerequisites

- **Node.js**: Version 18.0.0 or later (LTS recommended)
- **npm**: Version 9.0.0 or later

Verify installation:
```bash
node -v
npm -v
```

---

## ⚙️ Installation & Setup

1. **Clone or navigate to the project directory:**
   ```bash
   cd "Sanvi Catering"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📱 How to Configure Business & WhatsApp Details

All business contact information, WhatsApp numbers, email addresses, and service notes are stored in a single central file:

👉 **[`src/config/business.ts`](file:///c:/Users/Administrator/Desktop/Sanvi%20Catering/src/config/business.ts)**

### 1. Update WhatsApp Destination Number
Open `src/config/business.ts` and locate the `whatsappNumber` field:
```typescript
contact: {
  // Replace with your real WhatsApp number including country code (no '+', digits only)
  whatsappNumber: "919876543210", 

  // Human-readable formatted string displayed on the website
  displayWhatsApp: "+91 98765 43210",
  displayPhone: "+91 98765 43210",
  email: "enquiries@sanvicatering.com",
  address: "Serving Weddings & Celebrations across City & Metropolitan Region",
  businessHours: "Monday – Sunday: 8:00 AM – 9:00 PM",
}
```

When a visitor clicks **“Enquire on WhatsApp”**, the website automatically formats their name, event date, guest count (20–1,000), location, and meal preferences into a structured message and opens WhatsApp directly to this number.

---

## 🍲 How to Update Menu Items & Categories

Menu data is completely separated from UI components and resides in:

👉 **[`src/data/menu.ts`](file:///c:/Users/Administrator/Desktop/Sanvi%20Catering/src/data/menu.ts)**

To add a new dish, simply append a new object to `menuItems`:
```typescript
{
  id: "ghee-roast-dosa",
  name: "Ghee Roast Paper Dosa",
  regionalName: "Neyy Dosa",
  description: "Crispy golden crepe prepared with pure cow ghee and served with coconut chutney and sambar.",
  category: "breakfast", // "breakfast" | "meals" | "north-indian" | "starters" | "desserts" | "beverages"
  tags: ["Pure Veg", "Live Counter", "Chef Special"],
  isPopular: true,
  isJainFriendly: true,
  image: "/images/breakfast-spread.jpg" // optional
}
```

---

## 📸 How to Replace Food & Gallery Photographs

All high-resolution culinary photographs are stored locally in:
```
public/images/
  ├── hero-feast.jpg            (Hero section South Indian banana leaf feast)
  ├── wedding-buffet.jpg        (Luxury wedding copper chafing counter)
  ├── traditional-leaf-meal.jpg (Traditional wedding sadhya on plantain leaf)
  ├── breakfast-spread.jpg      (Dosa, idli, vada, sambar, filter coffee)
  ├── north-indian-spread.jpg   (Paneer butter masala, dal makhani, naan)
  ├── live-starters.jpg         (Live tawa paneer tikka & samosas)
  ├── traditional-sweets.jpg    (Gulab jamun, kaju katli, rasmalai thali)
  ├── puja-catering.jpg         (Traditional auspicious puja prasadam meal)
  ├── corporate-lunch.jpg       (Contemporary executive corporate buffet)
  └── beverages.jpg             (Saffron badam milk, lassi in kulhads)
```

To replace any photograph with actual photos of Sanvi Catering's events, simply overwrite the matching filename in `public/images/` with your own `.jpg` image.

Gallery items, captions, and categories can also be edited in:
👉 **[`src/data/gallery.ts`](file:///c:/Users/Administrator/Desktop/Sanvi%20Catering/src/data/gallery.ts)**

---

## 🏗️ Production Build & Deployment

To generate an optimized production bundle:

```bash
npm run build
```

This compiles TypeScript and builds assets into the `dist/` directory.

### Preview the Production Build Locally
```bash
npm run preview
```

### Deploying to Production
You can deploy the contents of the `dist/` folder to any static hosting provider:
- **Vercel / Netlify:** Connect the Git repository or deploy the `dist` directory. Set build command to `npm run build` and output directory to `dist`.
- **Cloudflare Pages / AWS S3 / Firebase Hosting:** Upload the `dist/` folder. Configure single-page application (SPA) rewrite rules to route all requests to `index.html`.

---

## 🛡️ License & Ownership

Created for **Sanvi Catering**. 100% Pure Vegetarian Catering Services.
