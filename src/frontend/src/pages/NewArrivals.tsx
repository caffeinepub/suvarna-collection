import { useNewArrivals } from '../hooks/useSarees';
import SareeCard from '../components/SareeCard';
import LoadingGrid from '../components/LoadingGrid';
import { Sparkles } from 'lucide-react';

export default function NewArrivals() {
  const { data: newArrivals, isLoading, error } = useNewArrivals();

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">New Arrivals</h1>
          </div>
          <p className="text-muted-foreground">
            Discover our latest collection of beautiful sarees
          </p>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        {isLoading && <LoadingGrid />}

        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <p className="text-destructive font-medium">
              Failed to load new arrivals. Please try again later.
            </p>
          </div>
        )}

        {!isLoading && !error && newArrivals && newArrivals.length === 0 && (
          <div className="bg-muted/50 rounded-lg p-12 text-center">
            <Sparkles className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              No new arrivals at the moment. Check back soon for fresh additions!
            </p>
          </div>
        )}

        {!isLoading && !error && newArrivals && newArrivals.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newArrivals.map((saree) => (
              <SareeCard key={saree.id.toString()} saree={saree} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
