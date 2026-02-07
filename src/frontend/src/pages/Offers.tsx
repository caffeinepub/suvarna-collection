import { useOffers } from '../hooks/useSarees';
import SareeCard from '../components/SareeCard';
import LoadingGrid from '../components/LoadingGrid';
import { Tag } from 'lucide-react';

export default function Offers() {
  const { data: offers, isLoading, error } = useOffers();

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-accent/10 to-transparent">
        <div className="container max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Tag className="w-8 h-8 text-accent-foreground" />
            <h1 className="text-3xl font-bold text-foreground">Special Offers</h1>
          </div>
          <p className="text-muted-foreground">
            Limited time deals on selected sarees
          </p>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        {isLoading && <LoadingGrid />}

        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <p className="text-destructive font-medium">
              Failed to load offers. Please try again later.
            </p>
          </div>
        )}

        {!isLoading && !error && offers && offers.length === 0 && (
          <div className="bg-muted/50 rounded-lg p-12 text-center">
            <Tag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              No special offers available at the moment. Check back soon!
            </p>
          </div>
        )}

        {!isLoading && !error && offers && offers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offers.map((saree) => (
              <SareeCard key={saree.id.toString()} saree={saree} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
