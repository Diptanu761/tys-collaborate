# Compact storefront layout

## Changes
- Keep the mobile banner unchanged while limiting its width on tablet and desktop, centered within the homepage.
- Simplify every standard product card to show only the game artwork, game title, “From ₹price”, and delivery speed.
- Reduce product-card width on desktop by using narrower centered grid columns.
- Reduce mobile product-card width, artwork height, spacing, and overall height while keeping titles and pricing readable.
- Apply the compact card treatment consistently on the homepage and the full top-up listing.

## Verification
- Check the homepage and top-up listing at mobile and desktop viewport sizes.
- Confirm the banner remains unchanged on mobile, cards contain only the requested text, images load, and no horizontal overflow appears.
- Confirm the latest preview build has no errors.

## Technical details
- Adjust responsive utility classes in the existing carousel, product card, and route grid layouts.
- Preserve current routing, catalog data, image assets, pricing, and frontend-only behavior.
