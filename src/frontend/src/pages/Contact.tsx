import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

export default function Contact() {
  const handleCall = () => {
    window.location.href = `tel:${APP_CONFIG.contact.phone}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to know more about your saree collection.');
    window.open(
      `https://wa.me/${APP_CONFIG.contact.whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleLocation = () => {
    window.open(APP_CONFIG.contact.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Contact Us</h1>
          </div>
          <p className="text-muted-foreground">
            Get in touch with us for inquiries and orders
          </p>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 rounded-xl p-6 text-left transition-all shadow-sm hover:shadow-elegant group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                <p className="text-sm opacity-90">
                  Chat with us for quick assistance
                </p>
              </div>
            </div>
          </button>

          {/* Phone */}
          <button
            onClick={handleCall}
            className="w-full bg-card hover:bg-muted/50 active:bg-muted rounded-xl p-6 text-left transition-all border border-border shadow-sm hover:shadow-elegant group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1 text-foreground">Phone</h3>
                <p className="text-muted-foreground">{APP_CONFIG.contact.phone}</p>
              </div>
            </div>
          </button>

          {/* Location */}
          <button
            onClick={handleLocation}
            className="w-full bg-card hover:bg-muted/50 active:bg-muted rounded-xl p-6 text-left transition-all border border-border shadow-sm hover:shadow-elegant group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1 text-foreground">Location</h3>
                <p className="text-muted-foreground">{APP_CONFIG.contact.location}</p>
                <p className="text-sm text-primary mt-1">Tap to view on map</p>
              </div>
            </div>
          </button>

          {/* Business Info */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {APP_CONFIG.business.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a home-based saree business dedicated to bringing you the finest 
              collection of traditional and contemporary sarees. Each piece is carefully 
              curated to ensure quality and elegance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out via WhatsApp or phone for personalized assistance, 
              custom orders, or any questions about our collection. We're here to help 
              you find the perfect saree for your special occasion.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container max-w-screen-xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026. Built with ❤️ using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">caffeine.ai</a></p>
      </footer>
    </div>
  );
}
