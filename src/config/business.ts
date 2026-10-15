/**
 * Sanvi Catering - Central Business Configuration
 * 
 * EDITABLE PLACEHOLDERS:
 * You can customize the phone number, WhatsApp number, email, address,
 * and social media handles here.
 * When real details are provided, update this single file to reflect them
 * across the entire website.
 */

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  pureVegPromise: string;
  guestCapacity: {
    min: number;
    max: number;
    label: string;
  };
  contact: {
    // Digits only with country code for WhatsApp link (e.g., '919876543210')
    whatsappNumber: string;
    // Human-readable formatted string for display
    displayWhatsApp: string;
    displayPhone: string;
    email: string;
    address: string;
    serviceCity: string;
    serviceRegionNote: string;
    businessHours: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  keyFeatures: {
    title: string;
    subtitle: string;
    description: string;
  }[];
}

export const businessConfig: BusinessConfig = {
  name: "Sanvi Catering",
  shortName: "Sanvi",
  tagline: "Every Celebration Deserves a Beautiful Feast",
  pureVegPromise: "100% Pure Vegetarian Kitchen & Service",
  guestCapacity: {
    min: 10,
    max: 2000,
    label: "Flexible Guest Count (Customized as per your need)",
  },
  contact: {
    // Official WhatsApp Number with Country Code (91)
    whatsappNumber: "919739049830", 

    // Human-readable formatted display version
    displayWhatsApp: "+91 97390 49830",
    displayPhone: "+91 97390 49830",
    email: "enquiries@sanvicatering.com",
    address: "Serving Weddings, Functions & Celebrations across City & Surrounding Districts",
    serviceCity: "City & Metropolitan Region",
    serviceRegionNote: "We cater at marriage halls, banquet lawns, residences, community centres, and corporate office parks.",
    businessHours: "Monday – Sunday: 8:00 AM – 9:00 PM (Enquiries open daily)",
  },
  social: {
    instagram: "https://instagram.com/sanvicatering_placeholder",
    facebook: "https://facebook.com/sanvicatering_placeholder",
    youtube: "https://youtube.com/@sanvicatering_placeholder",
  },
  keyFeatures: [
    {
      title: "100% Pure Vegetarian",
      subtitle: "Sacred Food Traditions",
      description: "Strictly vegetarian preparation. We cater to traditional Brahmin, Jain (no onion/garlic), and Sattvic dietary requirements with the utmost sanctity.",
    },
    {
      title: "Flexible Guest Count",
      subtitle: "Customized as per Need",
      description: "Guest capacity is not rigid. From intimate gatherings and housewarming meals to grand multi-day wedding banquets, we tailor all arrangements to your exact requirement.",
    },
    {
      title: "Authentic Flavors & Ghee",
      subtitle: "Uncompromising Quality",
      description: "Freshly ground spices, pure cow ghee, farm-fresh vegetables, and time-honored family recipes cooked with love and hospitality.",
    },
    {
      title: "Dedicated Event Execution",
      subtitle: "Warm Indian Hospitality",
      description: "Professional serving staff, traditional banana leaf or royal luxury buffet presentation, and attentive on-site event captains.",
    },
  ],
};

export interface EnquiryDetails {
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: number;
  mealType: string;
  dietaryPreference?: string;
  notes?: string;
}

/**
 * Generates an official WhatsApp click-to-chat URL with a neatly formatted prefilled message
 */
export function buildWhatsAppEnquiryUrl(details: EnquiryDetails): string {
  const number = businessConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  
  const text = `*New Catering Enquiry for Sanvi Catering*
----------------------------------------
*Guest Name:* ${details.name}
*Contact Phone:* ${details.phone}
${details.email ? `*Email:* ${details.email}\n` : ''}*Event Type:* ${details.eventType}
*Event Date:* ${details.eventDate}
*Location / Venue:* ${details.eventLocation}
*Expected Guests:* ${details.guestCount} People (Flexible as per need)
*Meal Requirement:* ${details.mealType}
${details.dietaryPreference ? `*Dietary Preference:* ${details.dietaryPreference}\n` : ''}${details.notes ? `*Special Requests / Notes:* ${details.notes}\n` : ''}----------------------------------------
_Sent via Sanvi Catering Website Enquiry Form_`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encodedText}`;
}

/**
 * Generates a direct WhatsApp link for general quick inquiries
 */
export function buildQuickWhatsAppUrl(message = "Hello Sanvi Catering, I would like to enquire about your pure vegetarian catering services for an upcoming event."): string {
  const number = businessConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
