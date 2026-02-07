import { useNavigate } from '@tanstack/react-router';
import type { Saree } from '../backend';
import WhatsAppOrderButton from './WhatsAppOrderButton';

interface SareeCardProps {
  saree: Saree;
}

const placeholderImages = [
  '/assets/generated/saree-placeholder-1.dim_800x800.png',
  '/assets/generated/saree-placeholder-2.dim_800x800.png',
];

export default function SareeCard({ saree }: SareeCardProps) {
  const navigate = useNavigate();
  
  // Use placeholder if no image URL or alternate between placeholders
  const imageUrl = saree.imageUrl || placeholderImages[Number(saree.id) % 2];

  const handleCardClick = () => {
    navigate({ to: '/product/$id', params: { id: saree.id.toString() } });
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-elegant transition-shadow border border-border">
      <div
        onClick={handleCardClick}
        className="cursor-pointer"
      >
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={saree.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-foreground line-clamp-2 flex-1">
              {saree.name}
            </h3>
            {(saree.isOffer || saree.isNewArrival) && (
              <div className="flex gap-1 flex-shrink-0">
                {saree.isOffer && (
                  <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded">
                    Offer
                  </span>
                )}
                {saree.isNewArrival && (
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="space-y-1 mb-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Fabric:</span> {saree.fabric}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Occasion:</span> {saree.occasion}
            </p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-xl font-bold text-primary">
              ₹{saree.price.toLocaleString('en-IN')}
            </p>
            <WhatsAppOrderButton
              productName={saree.name}
              price={saree.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
