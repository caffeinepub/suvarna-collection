import { useAllSarees } from '../hooks/useSarees';
import SareeCard from '../components/SareeCard';
import LoadingGrid from '../components/LoadingGrid';
import { ShoppingBag } from 'lucide-react';

export default function Catalog() {
  const { data: sarees, isLoading, error } = useAllSarees();

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Saree Catalog</h1>
          </div>
          <p className="text-muted-foreground">
            Browse our complete collection of beautiful sarees
          </p>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        {isLoading && <LoadingGrid />}

        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
            <p className="text-destructive font-medium">
              Failed to load catalog. Please try again later.
            </p>
          </div>
        )}

        {!isLoading && !error && sarees && sarees.length === 0 && (
          <div className="bg-muted/50 rounded-lg p-12 text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              No sarees available at the moment. Check back soon!
            </p>
          </div>
        )}

        {!isLoading && !error && sarees && sarees.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sarees.map((saree) => (
              <SareeCard key={saree.id.toString()} saree={saree} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
