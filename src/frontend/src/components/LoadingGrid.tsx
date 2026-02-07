export default function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm border border-border animate-pulse">
          <div className="aspect-square bg-muted" />
          <div className="p-4 space-y-3">
            <div className="h-5 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-4 bg-muted rounded w-2/3" />
            <div className="flex justify-between items-center">
              <div className="h-6 bg-muted rounded w-20" />
              <div className="h-9 bg-muted rounded w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
