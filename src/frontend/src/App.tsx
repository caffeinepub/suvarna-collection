import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Offers from './pages/Offers';
import NewArrivals from './pages/NewArrivals';
import Contact from './pages/Contact';
import BottomNav from './components/BottomNav';

// Layout component with bottom navigation
function Layout() {
  return (
    <div className="min-h-screen flex flex-col pb-16">
      <main className="flex-1">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const catalogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/catalog',
  component: Catalog,
});

const productDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/$id',
  component: ProductDetails,
});

const offersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/offers',
  component: Offers,
});

const newArrivalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/new-arrivals',
  component: NewArrivals,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  catalogRoute,
  productDetailsRoute,
  offersRoute,
  newArrivalsRoute,
  contactRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
