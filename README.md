# TYS Global Storefront

MASTER UI/UX PROMPT — TYS GLOBAL GAMING TOP-UP STOREFRONT

Build a complete production-quality React frontend for my gaming top-up website called "TYS GLOBAL".

IMPORTANT:

This task is FRONTEND/UI ONLY.

Do NOT build backend, database, authentication APIs, payment APIs, admin panel, real order processing, or external API integrations.

Use realistic mock/static data and local React state wherever interaction is needed.

The main goal is to create a polished, premium, Apple-inspired minimalist gaming marketplace UI that feels modern, trustworthy, fast, clean and responsive.

REFERENCE IMAGES:

I have provided 3 reference screenshots in this conversation.

Reference 1:

Use it as inspiration for:

- Homepage structure

- Promotional banner area

- Game/product cards

- Category filters

- Product discovery layout

- Clean spacing

Reference 2:

Use it as inspiration for:

- Main navigation/header

- Dark premium visual language

- Logo placement

- Navigation spacing

- Search bar

- Language selector

- Theme switcher

- Account button

Reference 3:

Use it as inspiration for:

- Product/top-up detail page

- Denomination/package selection

- User ID / Zone ID inputs

- Payment-method presentation

- Order summary

- Product information

- How-to-order section

- Reviews

- Related products

DO NOT copy the screenshots pixel-for-pixel.

Do not copy branding, exact assets, exact text, or proprietary visual elements.

Use the references only for layout and UX inspiration.

==================================================

1. DESIGN DIRECTION

==================================================

Design language:

"Apple minimalism + premium gaming storefront"

The UI should feel:

- Minimal

- Premium

- Spacious

- Elegant

- Fast

- Modern

- Trustworthy

- Slightly futuristic

- Gaming-oriented without looking childish

Avoid:

- Excessive gradients

- Excessive neon

- Excessive glassmorphism

- Huge glowing elements

- Cluttered layouts

- Excessive rounded cards

- Cheap-looking gaming marketplace aesthetics

- Too many colors

- Heavy shadows

Use subtle:

- Borders

- Soft shadows

- Small-radius cards

- Smooth hover transitions

- Micro-interactions

- Clean typography

- Plenty of whitespace

Use a restrained accent color based around cyan/blue, with neutral backgrounds.

Typography:

- Use Inter or another clean modern sans-serif.

- Strong hierarchy.

- Large but restrained headings.

- Comfortable line-height.

- Avoid overly bold typography everywhere.

Border radius:

- Moderate and consistent.

- Avoid making every element pill-shaped.

==================================================

2. LIGHT + DARK MODE

==================================================

Implement a complete Light/Dark theme system.

Add a theme toggle in the navbar.

Requirements:

- Light mode must look intentionally designed, NOT simply inverted dark mode.

- Dark mode must look premium and comfortable.

- Theme preference should persist using localStorage.

- Respect system preference on first visit.

- Smooth theme transition.

- All components must support both themes.

Light mode:

- Off-white / white surfaces

- Very subtle borders

- Dark text

- Soft shadows

- Minimal accent usage

Dark mode:

- Near-black / charcoal background

- Slightly lighter surfaces

- Muted borders

- White/gray typography

- Cyan/blue accent

- No pure black everywhere

Make sure contrast and readability remain excellent in both modes.

==================================================

3. RESPONSIVE DESIGN

==================================================

The website must be fully responsive.

Desktop:

- Premium wide layout

- Maximum content width

- Comfortable spacing

Tablet:

- Adapt grids and navigation

Mobile:

- Mobile-friendly navbar

- Hamburger/menu where necessary

- Horizontal scrolling categories

- Responsive product grids

- Stack top-up form and order summary

- Touch-friendly controls

- No horizontal page overflow

Design mobile intentionally rather than simply shrinking desktop.

==================================================

4. GLOBAL NAVBAR

==================================================

Create a premium sticky/fixed navbar inspired by Reference 2.

Desktop navbar structure:

LEFT:

- TYS GLOBAL logo/icon

- TYS GLOBAL wordmark

CENTER:

- HOME

- TOP UP

- HOW IT WORKS

- ABOUT

- CONTACT

RIGHT:

- Search games input

- Language selector

- Light/Dark theme toggle

- Account/profile button

Navbar should:

- Have subtle border bottom

- Slight backdrop blur

- Remain readable over page content

- Have active navigation state

- Have smooth hover animations

On mobile:

- Logo

- Search icon

- Theme button

- Account button

- Menu button

Create reusable Navbar component.

==================================================

5. HOMEPAGE

==================================================

Create a complete homepage.

Structure:

A. Hero / promotional banner section

Use a responsive carousel.

Show approximately 3 promotional banners on desktop.

Each banner should contain:

- Game/product promotional artwork placeholder

- Short promotional heading

- Supporting text

- CTA button

- Subtle overlay if needed

Use mock banner data.

Example themes:

- Mobile Legends

- PUBG Mobile

- Wuthering Waves

- Free Fire

- Valorant

Do NOT depend on external image URLs.

Create local placeholder artwork using gradients, simple shapes, icons or available assets.

Carousel:

- Auto-rotate

- Previous/next controls

- Indicator dots

- Pause/usable on mobile

- Smooth transitions

B. Categories

Create category filter buttons:

All

Popular Games

Mobile Legends

Mobile Games

PC Games

Game Vouchers

Social Media

OTT

Other

Use React state for filtering.

Active category must have a clear visual state.

On mobile categories can horizontally scroll.

C. Popular Products

Create a responsive product grid.

Each product card should include:

- Game artwork/logo

- Game name

- Category

- Region badge if applicable

- Short description

- Starting price

- Optional promotional badge

- Hover interaction

Example products:

- Mobile Legends Diamonds

- PUBG Mobile UC

- Free Fire Diamonds

- Valorant Points

- Wuthering Waves

- Genshin Impact

- Blood Strike

- Roblox

- Steam Wallet

Use mock data.

Product cards should feel premium and compact.

D. Popular / Recommended section

Create a second product section with larger cards or horizontal scrolling on mobile.

E. Trust / benefits section

Include:

- Fast delivery

- Secure checkout

- Multiple payment methods

- Verified products

- Customer support

Use minimal icons.

F. Footer

Create a polished footer with:

Brand

- TYS GLOBAL

- Short description

- Social icons

Shop:

- All Top-ups

- Direct Top-up

- Gift Cards

- Region & Bundles

Company:

- About Us

- How It Works

- Contact

- Refunds

- Privacy

Payment methods:

- UPI

- Cards

- Wallet

- Net Banking

Bottom:

© 2026 TYS GLOBAL. All rights reserved.

==================================================

6. TOP-UP / PRODUCT LISTING PAGE

==================================================

Create a dedicated Top Up page.

At the top:

- Breadcrumb

- Page heading

- Search/filter

- Category tabs

Then:

- Product grid/list

Support:

- Search by game name

- Category filtering

- Region filtering

- Sort options

Use local mock state.

Product card click should navigate to the product detail page.

==================================================

7. PRODUCT / TOP-UP DETAIL PAGE

==================================================

This is one of the most important pages.

Follow the UX structure shown in Reference 3, but redesign it with the new Apple-minimal aesthetic.

Top section:

Breadcrumb:

Home / Top Up / Mobile Legends

Product header:

- Game logo/art

- Product name

- Category

- Region

- Delivery speed

- Verified seller/reseller indicator

- Favorite button

Main content should use a two-column layout on desktop.

LEFT:

"Choose a denomination"

Create selectable denomination cards.

Example:

86 Diamonds

C$0.51

172 Diamonds

C$1.10

257 Diamonds

C$1.84

344 Diamonds

C$2.64

Weekly Pass

C$1.66

Monthly Pass

C$8.26

etc.

Cards should:

- Be selectable

- Show price

- Show optional bonus

- Have clear selected state

- Have subtle animation

- Work with keyboard navigation

RIGHT:

"Order information"

Include:

User ID input

Zone ID input

Region selector if needed

Include:

"Check format" action.

Payment methods:

- UPI

- Net Banking

- Cards

- Wallet

- Crypto / USDT

- Bank Transfer

These are UI only.

Do not implement real payment processing.

Order summary:

Selected package

Quantity

Subtotal

Discount if applicable

Total

Primary CTA:

"Continue to payment"

CTA should remain disabled until required mock fields/package selection are completed.

Use local React state.

==================================================

8. PRODUCT INFORMATION

==================================================

Below the top-up section:

"About this product"

Explain:

- What the product is

- What information the customer needs

- Region restrictions

- Delivery expectations

Add collapsible "Read full description".

==================================================

9. HOW TO ORDER

==================================================

Create a clean numbered step section.

Example:

01

Select your denomination

02

Enter your account information

03

Review the order

04

Complete payment

Use minimal icons and animations.

==================================================

10. PLAYER REVIEWS

==================================================

Create a reviews section.

Include:

- Rating summary

- Review cards

- Verified purchase badge

- Star ratings

- User initials/avatar

Use mock data.

If there are no reviews, create a polished empty state.

Add:

"Send us feedback"

button.

==================================================

11. RELATED PRODUCTS

==================================================

Create:

"You might also like"

Use horizontally scrollable cards on mobile and grid on desktop.

Show related games/products.

==================================================

12. LOGIN / SIGN-IN PAGE

==================================================

Create a premium minimalist authentication UI.

IMPORTANT:

Frontend only.

No real authentication.

Desktop:

Split layout or centered card depending on screen width.

Include:

- TYS GLOBAL logo

- Welcome heading

- Email input

- Password input

- Show/hide password

- Remember me

- Forgot password

- Sign In button

- Continue with Google button as UI only

- Create account link

Signup page:

- Name

- Email

- Password

- Confirm password

- Terms checkbox

- Create Account button

Use excellent form validation UX with local React state.

Do not connect to Firebase, Supabase, MongoDB or any backend.

==================================================

13. HOW IT WORKS PAGE

==================================================

Create a dedicated page explaining the purchasing process.

Sections:

- Choose a game

- Select denomination

- Enter account details

- Select payment method

- Receive top-up

Add FAQ accordion.

==================================================

14. ABOUT PAGE

==================================================

Create a clean brand story page.

Include:

- What TYS GLOBAL is

- Mission

- Why customers use us

- Trust & security

- Fast delivery

- Customer support

Keep it minimal.

==================================================

15. CONTACT PAGE

==================================================

Create:

- Contact form

- Email placeholder

- Telegram/social placeholders

- Support hours

- FAQ link

Frontend only.

==================================================

16. SEARCH EXPERIENCE

==================================================

Navbar search should open a polished search interface.

Features:

- Search products by name

- Show matching games

- Keyboard-friendly

- Empty state

- Recent searches using localStorage

- Clear search

No backend.

==================================================

17. COMPONENT ARCHITECTURE

==================================================

Use reusable React components.

Suggested structure:

src/

  components/

    Navbar

    Footer

    ThemeToggle

    SearchBar

    HeroCarousel

    CategoryTabs

    ProductCard

    ProductGrid

    ProductFilters

    DenominationCard

    OrderSummary

    PaymentMethods

    Breadcrumbs

    ReviewCard

    EmptyState

    TrustSection

    FAQ

    LoadingSkeleton

  pages/

    Home

    TopUp

    ProductDetail

    Login

    Signup

    HowItWorks

    About

    Contact

  data/

    products

    categories

    banners

    denominations

    reviews

  hooks/

    useTheme

    useLocalStorage

Keep components modular and reusable.

==================================================

18. ROUTING

==================================================

Use React Router.

Routes:

/

 /top-up

 /product/:slug

 /login

 /signup

 /how-it-works

 /about

 /contact

Navigation must work properly.

Product cards should navigate to their product detail page.

==================================================

19. INTERACTIONS

==================================================

Implement frontend interactions:

- Theme switch

- Navbar active states

- Mobile menu

- Hero carousel

- Category filtering

- Product search

- Product sorting

- Product detail navigation

- Favorite button

- Denomination selection

- Quantity control

- Form validation

- Password visibility

- FAQ accordion

- Reviews

- LocalStorage persistence where useful

Use subtle animations.

Avoid excessive animation.

==================================================

20. ANIMATION

==================================================

Use lightweight animations only.

Preferred:

- opacity

- transform

- scale

- slide

- hover

- subtle page transitions

Animation duration:

approximately 150–300ms.

Do NOT create heavy animated backgrounds.

Respect prefers-reduced-motion.

==================================================

21. ICONS

==================================================

Use Lucide React icons or another lightweight icon library.

Do not use random emoji as UI icons.

Icons should be consistent throughout the website.

==================================================

22. DATA

==================================================

Create clean local mock data.

Do NOT hardcode product cards individually throughout components.

Use arrays/objects such as:

products[]

categories[]

banners[]

denominations[]

reviews[]

This will make the frontend easy to connect to a backend later.

==================================================

23. IMAGE / ASSET STRATEGY

==================================================

Do not depend on random external image URLs that can break.

Use:

- local assets when available

- generated placeholders

- CSS artwork

- gradients/shapes

- generic game-related visual placeholders

Create an obvious /public/assets structure so real game images can easily be replaced later.

Example:

public/

  assets/

    games/

    banners/

    logos/

    icons/

Do not use copyrighted game artwork unless it is already supplied as an asset.

==================================================

24. PERFORMANCE

==================================================

Keep the frontend lightweight.

Avoid unnecessary libraries.

Do not install large libraries unless genuinely required.

Prefer:

- React

- React Router

- Tailwind CSS

- Lucide React

Use CSS/Tailwind for most visual effects.

Avoid excessive dependencies.

Lazy-load large images/components where appropriate.

==================================================

25. ACCESSIBILITY

==================================================

Implement:

- semantic HTML

- keyboard navigation

- visible focus states

- accessible buttons

- proper labels

- ARIA where necessary

- sufficient color contrast

- reduced motion support

==================================================

26. IMPORTANT VISUAL RULES

==================================================

The final UI should NOT look like a generic AI-generated website.

Avoid:

- giant text everywhere

- excessive rounded rectangles

- excessive gradients

- excessive glowing borders

- random decorative blobs

- huge empty hero sections

- repetitive cards

- unnecessary sections

- inconsistent spacing

- inconsistent border radius

The result should feel like a professionally designed modern commerce product.

Think:

Apple Store simplicity

+

modern SaaS design system

+

premium gaming marketplace

==================================================

27. DESIGN SYSTEM

==================================================

Create a consistent design system using CSS variables/theme tokens.

Define:

- background

- foreground

- muted foreground

- card

- border

- accent

- accent foreground

- success

- warning

- destructive

Maintain consistent:

- spacing

- typography

- radius

- shadows

- transitions

Do not scatter arbitrary colors throughout components.

==================================================

28. FINAL QUALITY CHECK

==================================================

Before finishing:

1. Verify every route works.

2. Verify navbar links work.

3. Verify product cards navigate correctly.

4. Verify category filtering.

5. Verify search.

6. Verify dark/light theme.

7. Verify theme persistence.

8. Verify mobile layout.

9. Verify top-up selection.

10. Verify order summary updates.

11. Verify login/signup UI.

12. Verify forms have validation.

13. Verify no broken images.

14. Verify no horizontal overflow.

15. Verify console has no obvious errors.

16. Verify buttons have hover/focus/disabled states.

17. Verify the UI looks coherent in both light and dark modes.

IMPORTANT TOKEN/IMPLEMENTATION RULE:

Do not spend tokens explaining what you are going to build.

Start implementing immediately.

Do not repeatedly ask for confirmation.

Do not build backend functionality.

Do not create unnecessary abstractions or dependencies.

Prioritize:

1. Global design system

2. Navbar/theme system

3. Homepage

4. Product listing

5. Product detail/top-up page

6. Login/signup

7. Remaining informational pages

8. Responsive polish

Reuse components and data structures aggressively to minimize code duplication.

The final result should be a complete frontend that can later be connected to a real backend/API without redesigning the UI. Change the canadian currency example to indian currency.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a6d67b81-e3bc-4b03-9ee0-03f8f9a69eff).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
