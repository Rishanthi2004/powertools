/**
 * Central Business Configuration for Subasri Power Tools.
 * Update phoneDisplay, whatsappNumber, and emailPlaceholder here when live details are ready.
 */
export const BUSINESS_CONFIG = {
  name: 'Subasri Power Tools',
  shortName: 'SUBASRI POWER TOOLS',
  establishedYear: '2019',
  city: 'Namakkal',
  state: 'Tamil Nadu',
  country: 'India',
  addressLine1: 'No. 74/55, Mettu Theru, RK Building Opposite',
  addressLine2: 'Bazaar Street, Namakkal Bazaar, Namakkal – 637001',
  fullAddress:
    'No. 74/55, Mettu Theru, RK Building Opposite, Bazaar Street, Namakkal Bazaar, Namakkal – 637001',
  openingHours: '8:30 AM – 9:30 PM',
  openingDaysNote: 'Open Monday to Sunday',
  /**
   * Placeholder phone number until official store contact number is updated.
   */
  phoneDisplay: '+91 XXXXX XXXXX (Placeholder)',
  /**
   * Enter digits with country code (e.g. '9198XXXXXXXX') once the store WhatsApp number is provided.
   * When left empty, WhatsApp enquiry links still open WhatsApp with the pre-filled message text.
   */
  whatsappNumber: '',
  emailDisplay: 'Enquire via Contact Form (Placeholder)',
  mapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=No.+74%2F55%2C+Mettu+Theru%2C+Bazaar+Street%2C+Namakkal+Bazaar%2C+Namakkal+637001',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Mettu%20Theru,%20Bazaar%20Street,%20Namakkal,%20Tamil%20Nadu%20637001&t=&z=16&ie=UTF8&iwloc=&output=embed',
  images: {
    hero: '/assets/aistudio/image_7ce59025.png',
    aboutStore: '/src/assets/images/about_store_showcase_1794824357458.jpg',
    powerDrill: '/src/assets/images/tool_power_drill_1794824358251.jpg',
    beltSander: '/src/assets/images/tool_belt_sander_1794824358233.jpg',
    woodRouter: '/src/assets/images/tool_wood_router_1794824359987.jpg',
    concreteVibrator: '/src/assets/images/tool_concrete_vibrator_1794824359904.jpg',
    cuttingGrinder: '/src/assets/images/tool_cutting_grinder_1794824361006.jpg',
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  const digits = BUSINESS_CONFIG.whatsappNumber.replace(/\D/g, '');
  if (digits.length >= 10) {
    return `https://wa.me/${digits}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}
