import { useNavigate, useParams } from '@tanstack/react-router';
import { useSaree } from '../hooks/useSarees';
import WhatsAppOrderButton from '../components/WhatsAppOrderButton';
import { ArrowLeft, Package, Sparkles, Tag } from 'lucide-react';

const placeholderImages = [
  '/assets/generated/saree-placeholder-1.dim_800x800.png',
  '/assets/generated/saree-placeholder-2.dim_800x800.png',
];

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams({ from: '/product/$id' });
  const { data: saree, isLoading, error } = useSaree(BigInt(id));

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="container max-w-screen-xl mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-10 bg-muted rounded w-32" />
            <div className="aspect-square bg-muted rounded-lg" />
            <div className="space-y-3">
              <div className="h-8 bg-muted rounded w-3/4" />
              <div className="h-6 bg-muted rounded w-1/2" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !saree) {
    return (
      <div className="min-h-screen">
        <div className="container max-w-screen-xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate({ to: '/catalog' })}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Catalog</span>
          </button>
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <p className="text-destructive font-medium">
              Product not found or failed to load.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const imageUrl = saree.imageUrl || placeholderImages[Number(saree.id) % 2];

  return (
    <div className="min-h-screen pb-8">
      <div className="container max-w-screen-xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate({ to: '/catalog' })}
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Catalog</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm">
            <div className="aspect-square">
              <img
                src={imageUrl}
                alt={saree.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex gap-2 mb-3">
                {saree.isOffer && (
                  <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded-full">
                    <Tag className="w-4 h-4" />
                    Special Offer
                  </span>
                )}
                {saree.isNewArrival && (
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    <Sparkles className="w-4 h-4" />
                    New Arrival
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {saree.name}
              </h1>
              <p className="text-4xl font-bold text-primary">
                ₹{saree.price.toLocaleString('en-IN')}
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Fabric</p>
                  <p className="text-muted-foreground">{saree.fabric}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Occasion</p>
                  <p className="text-muted-foreground">{saree.occasion}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <WhatsAppOrderButton
                productName={saree.name}
                price={saree.price}
                variant="large"
              />
              <p className="text-sm text-muted-foreground text-center">
                Click to order via WhatsApp for quick assistance
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-2">About This Saree</h3>
              <p className="text-muted-foreground leading-relaxed">
                This beautiful {saree.fabric.toLowerCase()} saree is perfect for {saree.occasion.toLowerCase()}. 
                Each piece is carefully selected to ensure the highest quality and elegance. 
                Contact us via WhatsApp for more details, customization options, or to place your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
