import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Home, ShoppingBag, Tag, Sparkles, Phone } from 'lucide-react';

export default function BottomNav() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/catalog', icon: ShoppingBag, label: 'Catalog' },
    { path: '/offers', icon: Tag, label: 'Offers' },
    { path: '/new-arrivals', icon: Sparkles, label: 'New' },
    { path: '/contact', icon: Phone, label: 'Contact' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate({ to: item.path })}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
