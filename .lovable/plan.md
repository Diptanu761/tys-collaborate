# Authentic game artwork refresh

## Scope
- Use the uploaded Mobile Legends banner as the artwork for every promotional slide while preserving the carousel links, controls, and accessible labels.
- Replace all gradient-and-initial product placeholders with locally served, recognizable game/service artwork across product cards, search results, related products, and product pages.
- Keep the current layout, pricing, filters, and frontend-only behavior unchanged.

## Implementation
- Store the uploaded banner through the project asset system and reference its generated asset pointer.
- Source suitable official/publicly published square artwork or logos for each catalog item, store copies through the same project asset flow, and map them to products in the catalog.
- Update the reusable artwork component to render images with consistent crops, alt text, loading behavior, and a safe fallback.
- Adapt the carousel overlays and text placement so the supplied banner stays readable on desktop and mobile without distorting the image.

## Verification
- Check the homepage, catalog, search, and Mobile Legends product page at desktop and mobile sizes.
- Confirm every image loads, controls remain usable, no horizontal overflow appears, and the current build stays error-free.
