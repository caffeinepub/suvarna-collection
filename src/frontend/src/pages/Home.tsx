import { useNavigate } from '@tanstack/react-router';
import { ShoppingBag, Tag, Sparkles, Phone } from 'lucide-react';
import { APP_CONFIG } from '../appConfig';

export default function Home() {
  const navigate = useNavigate();

  const shortcuts = [
    {
      title: 'Browse Catalog',
      description: 'Explore our full collection',
      icon: ShoppingBag,
      path: '/catalog',
      color: 'bg-primary text-primary-foreground',
    },
    {
      title: 'Special Offers',
      description: 'Limited time deals',
      icon: Tag,
      path: '/offers',
      color: 'bg-accent text-accent-foreground',
    },
    {
      title: 'New Arrivals',
      description: 'Latest additions',
      icon: Sparkles,
      path: '/new-arrivals',
      color: 'bg-primary text-primary-foreground',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch',
      icon: Phone,
      path: '/contact',
      color: 'bg-secondary text-secondary-foreground',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-screen-xl mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <img
                src="/assets/generated/suvarna-logo.dim_512x512.png"
                alt="Suvarna Collection Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display">
              {APP_CONFIG.business.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              {APP_CONFIG.business.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {shortcuts.map((shortcut) => {
            const Icon = shortcut.icon;
            return (
              <button
                key={shortcut.path}
                onClick={() => navigate({ to: shortcut.path })}
                className={`${shortcut.color} rounded-xl p-6 text-left hover:shadow-elegant transition-all active:scale-[0.98] group`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{shortcut.title}</h3>
                    <p className="text-sm opacity-90">{shortcut.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Welcome Message */}
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Welcome to Our Collection
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Discover exquisite sarees crafted with love and tradition. From elegant silk to 
            contemporary designs, find the perfect saree for every occasion. Browse our catalog, 
            check out special offers, and order directly via WhatsApp for a seamless shopping experience.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="container max-w-screen-xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026. Built with ❤️ using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">caffeine.ai</a></p>
      </footer>
    </div>
  );
}
