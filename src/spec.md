# Specification

## Summary
**Goal:** Build an Android-first, lightweight mobile web catalog app for “Suvarna Collection” with a simple elegant Indian theme and WhatsApp-based product ordering.

**Planned changes:**
- Create a mobile-first UI with Home, Catalog, Offers, New Arrivals, and Contact screens (English text throughout) and clear one-hand navigation.
- Implement a catalog list with seeded products (image, name, price, fabric, occasion) and a product details view/expanded card.
- Add a “WhatsApp Order” button per product that opens a wa.me link with a pre-filled English message (including product name and price) using a single configurable business phone/WhatsApp number.
- Build Offers and New Arrivals sections that display items (image, name, price) and open the same product details experience.
- Add a Contact page with a configurable phone number and location text, including tap-to-call (tel:) and an external maps link.
- Persist and serve product data from the single Motoko backend actor and fetch it on the frontend via React Query (including offer/new-arrival markers or filtering).
- Add generated static brand/product placeholder images under `frontend/public/assets/generated` and reference them from the UI (no backend image serving).

**User-visible outcome:** Users can browse Suvarna Collection’s saree catalog (including offers and new arrivals), open product details, tap a WhatsApp Order button to message the business with product info, and view contact details with click-to-call and maps links.
