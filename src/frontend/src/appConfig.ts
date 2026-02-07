// Central configuration for business contact details
export const APP_CONFIG = {
  business: {
    name: 'Suvarna Collection',
    tagline: 'Elegance Woven in Tradition',
  },
  contact: {
    // Replace with actual business WhatsApp number (format: country code + number, no + or spaces)
    whatsappNumber: '919876543210',
    // Replace with actual business phone number
    phone: '+91 98765 43210',
    // Replace with actual business location
    location: 'Mumbai, Maharashtra, India',
    // Google Maps link - replace with actual location
    mapsUrl: 'https://maps.google.com/?q=Mumbai,Maharashtra,India',
  },
} as const;

// Helper to generate WhatsApp order link
export function getWhatsAppOrderLink(productName: string, price: number): string {
  const message = encodeURIComponent(
    `Hello! I'm interested in ordering:\n\n${productName}\nPrice: ₹${price.toLocaleString('en-IN')}\n\nPlease provide more details.`
  );
  return `https://wa.me/${APP_CONFIG.contact.whatsappNumber}?text=${message}`;
}
