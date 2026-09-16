import { artwork } from "@/data/artwork";

export type Category =
  | "Popular Games"
  | "Mobile Legends"
  | "Mobile Games"
  | "PC Games"
  | "Game Vouchers"
  | "Social Media"
  | "OTT"
  | "Other";

export const categories: string[] = [
  "All",
  "Popular Games",
  "Mobile Legends",
  "Mobile Games",
  "PC Games",
  "Game Vouchers",
  "Social Media",
  "OTT",
  "Other",
];

export type Denomination = {
  id: string;
  label: string;
  price: number;
  bonus?: string;
  tag?: string;
};

export type Product = {
  slug: string;
  name: string;
  publisher: string;
  category: Category;
  region: string;
  short: string;
  about: string;
  from: number;
  badge?: string;
  rating: number;
  reviews: number;
  delivery: string;
  needsZoneId: boolean;
  art: { from: string; to: string; initials: string; image?: string; fit?: "cover" | "contain" };
  denominations: Denomination[];
  popular?: boolean;
};

const dia = (list: [string, number, string?][]): Denomination[] =>
  list.map(([label, price, bonus], i) => ({
    id: `d${i}`,
    label,
    price,
    ...(bonus ? { bonus } : {}),
  }));

export const products: Product[] = [
  {
    slug: "mobile-legends-diamonds",
    name: "Mobile Legends Diamonds",
    publisher: "Moonton",
    category: "Mobile Legends",
    region: "Global",
    short: "Instant diamond top-up with User ID and Zone ID.",
    about:
      "Top up Mobile Legends: Bang Bang diamonds directly to your account. Provide your User ID and Zone ID exactly as shown in your in-game profile. Diamonds are credited to the account you enter and cannot be transferred afterwards.",
    from: 32,
    badge: "Best seller",
    rating: 4.9,
    reviews: 2841,
    delivery: "Instant · under 2 min",
    needsZoneId: true,
    art: { from: "#1f4fd8", to: "#0ea5b7", initials: "ML", image: artwork.mobileLegends },
    popular: true,
    denominations: dia([
      ["86 Diamonds", 79],
      ["172 Diamonds", 155, "+8 bonus"],
      ["257 Diamonds", 229],
      ["344 Diamonds", 305, "+16 bonus"],
      ["706 Diamonds", 619],
      ["Weekly Pass", 129, "Best value"],
      ["Monthly Pass", 699],
      ["2195 Diamonds", 1899, "+120 bonus"],
    ]),
  },
  {
    slug: "pubg-mobile-uc",
    name: "PUBG Mobile UC",
    publisher: "Level Infinite",
    category: "Mobile Games",
    region: "Global",
    short: "UC credited straight to your Character ID.",
    about:
      "Purchase Unknown Cash (UC) for PUBG Mobile. Enter your numeric Character ID from your in-game profile. UC is used for the Royale Pass, crates and the in-game shop.",
    from: 75,
    rating: 4.8,
    reviews: 1920,
    delivery: "Instant · under 5 min",
    needsZoneId: false,
    art: { from: "#c78b1f", to: "#7a4c12", initials: "UC", image: artwork.pubgMobile },
    popular: true,
    denominations: dia([
      ["60 UC", 75],
      ["325 UC", 379, "+25 bonus"],
      ["660 UC", 749],
      ["1800 UC", 1899, "+180 bonus"],
      ["3850 UC", 3999],
      ["8100 UC", 7999, "Best value"],
    ]),
  },
  {
    slug: "free-fire-diamonds",
    name: "Free Fire Diamonds",
    publisher: "Garena",
    category: "Mobile Games",
    region: "India",
    short: "Diamonds delivered to your Free Fire player ID.",
    about:
      "Top up Free Fire diamonds using your player ID. Diamonds can be used for characters, bundles, the Elite Pass and in-game events. India region accounts only.",
    from: 40,
    badge: "Popular",
    rating: 4.7,
    reviews: 1533,
    delivery: "Instant",
    needsZoneId: false,
    art: { from: "#e0653a", to: "#a1231f", initials: "FF", image: artwork.freeFire },
    popular: true,
    denominations: dia([
      ["25 Diamonds", 40],
      ["100 Diamonds", 149],
      ["310 Diamonds", 399, "+20 bonus"],
      ["520 Diamonds", 649],
      ["1060 Diamonds", 1299],
      ["Weekly Membership", 159],
    ]),
  },
  {
    slug: "valorant-points",
    name: "Valorant Points",
    publisher: "Riot Games",
    category: "PC Games",
    region: "Asia Pacific",
    short: "VP for skins, battle pass and agents.",
    about:
      "Valorant Points are redeemed with your Riot ID. Points are region-locked, so make sure your account region matches the region selected at checkout.",
    from: 89,
    rating: 4.8,
    reviews: 874,
    delivery: "Under 10 min",
    needsZoneId: false,
    art: { from: "#e2455a", to: "#7f1d2c", initials: "VP", image: artwork.valorant, fit: "contain" },
    popular: true,
    denominations: dia([
      ["475 VP", 399],
      ["1000 VP", 799],
      ["2050 VP", 1599, "+50 bonus"],
      ["3650 VP", 2799],
      ["5350 VP", 3999, "Best value"],
    ]),
  },
  {
    slug: "wuthering-waves-lunite",
    name: "Wuthering Waves Lunite",
    publisher: "Kuro Games",
    category: "Popular Games",
    region: "Global",
    short: "Lunite subscriptions and crystal packs.",
    about:
      "Top up Lunite for Wuthering Waves. Enter your UID from the in-game profile page. Subscription rewards are credited daily after the first delivery.",
    from: 99,
    badge: "New",
    rating: 4.6,
    reviews: 412,
    delivery: "Instant",
    needsZoneId: false,
    art: { from: "#2a9dc9", to: "#1b4f7a", initials: "WW", image: artwork.wutheringWaves },
    denominations: dia([
      ["60 Lunite", 99],
      ["300 Lunite", 449, "+30 bonus"],
      ["980 Lunite", 1399],
      ["1980 Lunite", 2799],
      ["Lunite Subscription", 429, "30 days"],
    ]),
  },
  {
    slug: "genshin-impact-crystals",
    name: "Genshin Impact Crystals",
    publisher: "HoYoverse",
    category: "Popular Games",
    region: "Asia",
    short: "Genesis Crystals and Blessing of the Moon.",
    about:
      "Genesis Crystals are credited to the UID you provide. Server region must match your account server (Asia, America, Europe or TW/HK/MO).",
    from: 85,
    rating: 4.9,
    reviews: 1105,
    delivery: "Instant",
    needsZoneId: false,
    art: { from: "#4c6fd6", to: "#8b5cc8", initials: "GI", image: artwork.genshinImpact },
    popular: true,
    denominations: dia([
      ["60 Crystals", 85],
      ["330 Crystals", 429],
      ["1090 Crystals", 1349, "+90 bonus"],
      ["2240 Crystals", 2699],
      ["Blessing of the Moon", 429, "30 days"],
    ]),
  },
  {
    slug: "blood-strike-gold",
    name: "Blood Strike Gold",
    publisher: "NetEase",
    category: "Mobile Games",
    region: "Global",
    short: "Gold bars for weapons and battle pass.",
    about:
      "Blood Strike gold is delivered to your player ID. Use gold for the Elite Pass, weapon skins and character unlocks.",
    from: 69,
    rating: 4.5,
    reviews: 238,
    delivery: "Under 5 min",
    needsZoneId: false,
    art: { from: "#7a8b9c", to: "#37424e", initials: "BS", image: artwork.bloodStrike },
    denominations: dia([
      ["100 Gold", 69],
      ["310 Gold", 199],
      ["1050 Gold", 649],
      ["2180 Gold", 1299, "+120 bonus"],
    ]),
  },
  {
    slug: "roblox-robux",
    name: "Roblox Robux",
    publisher: "Roblox",
    category: "Game Vouchers",
    region: "Global",
    short: "Robux gift credit for any Roblox account.",
    about:
      "Robux is delivered to the username you provide. Make sure your profile is not private so the delivery can be completed.",
    from: 99,
    rating: 4.6,
    reviews: 690,
    delivery: "Under 15 min",
    needsZoneId: false,
    art: { from: "#d94a4a", to: "#6b1f1f", initials: "RB", image: artwork.roblox, fit: "contain" },
    denominations: dia([
      ["80 Robux", 99],
      ["400 Robux", 449],
      ["800 Robux", 849],
      ["1700 Robux", 1699, "Best value"],
    ]),
  },
  {
    slug: "steam-wallet-code",
    name: "Steam Wallet Code",
    publisher: "Valve",
    category: "Game Vouchers",
    region: "India",
    short: "Digital wallet codes delivered by email.",
    about:
      "Steam Wallet codes are region-locked to India. The code is shown on screen after payment and also sent to your email address.",
    from: 250,
    rating: 4.8,
    reviews: 1320,
    delivery: "Instant code",
    needsZoneId: false,
    art: { from: "#3a6a94", to: "#16202c", initials: "ST", image: artwork.steam, fit: "contain" },
    denominations: dia([
      ["₹250 Wallet", 259],
      ["₹500 Wallet", 515],
      ["₹1000 Wallet", 1025],
      ["₹2500 Wallet", 2545],
    ]),
  },
  {
    slug: "instagram-promotion",
    name: "Instagram Promotion Credit",
    publisher: "TYS Global",
    category: "Social Media",
    region: "Global",
    short: "Promotion credit for creator accounts.",
    about:
      "Promotion credit applied to the handle you provide. Used for boosting reels and posts. Not affiliated with Meta.",
    from: 199,
    rating: 4.3,
    reviews: 96,
    delivery: "Under 30 min",
    needsZoneId: false,
    art: { from: "#c2478f", to: "#6b2d8f", initials: "IG", image: artwork.instagram, fit: "contain" },
    denominations: dia([
      ["₹200 Credit", 199],
      ["₹500 Credit", 489],
      ["₹1000 Credit", 969],
    ]),
  },
  {
    slug: "netflix-gift-card",
    name: "Netflix Gift Card",
    publisher: "Netflix",
    category: "OTT",
    region: "India",
    short: "Prepaid gift codes for Netflix India.",
    about:
      "Netflix gift codes are redeemed in your Netflix account under Redeem Gift Card. Codes are valid for India accounts only.",
    from: 500,
    rating: 4.7,
    reviews: 305,
    delivery: "Instant code",
    needsZoneId: false,
    art: { from: "#c93636", to: "#3a1111", initials: "NF", image: artwork.netflix, fit: "contain" },
    denominations: dia([
      ["₹500 Card", 509],
      ["₹1000 Card", 1015],
      ["₹2000 Card", 2029],
    ]),
  },
  {
    slug: "discord-nitro",
    name: "Discord Nitro",
    publisher: "Discord",
    category: "Other",
    region: "Global",
    short: "Nitro subscription gift links.",
    about:
      "Nitro is delivered as a gift link you can claim on any Discord account. Links expire 48 hours after delivery.",
    from: 279,
    rating: 4.5,
    reviews: 158,
    delivery: "Under 10 min",
    needsZoneId: false,
    art: { from: "#5865f2", to: "#2b2f7a", initials: "DC", image: artwork.discord, fit: "contain" },
    denominations: dia([
      ["Nitro Basic · 1 month", 279],
      ["Nitro · 1 month", 849],
      ["Nitro · 12 months", 8499, "2 months free"],
    ]),
  },
];

export const regions = ["All regions", ...Array.from(new Set(products.map((p) => p.region)))];

export type Banner = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  slug: string;
  from: string;
  to: string;
};

export const banners: Banner[] = [
  {
    id: "b1",
    eyebrow: "Mobile Legends",
    title: "Diamonds delivered in under two minutes",
    text: "Weekly and monthly passes with reseller pricing, every single day.",
    cta: "Top up now",
    slug: "mobile-legends-diamonds",
    from: "#12306e",
    to: "#0d8ba1",
  },
  {
    id: "b2",
    eyebrow: "PUBG Mobile",
    title: "Royale Pass season stock is live",
    text: "UC packs from ₹75 with instant delivery to your Character ID.",
    cta: "Get UC",
    slug: "pubg-mobile-uc",
    from: "#6b4a10",
    to: "#c08a24",
  },
  {
    id: "b3",
    eyebrow: "Wuthering Waves",
    title: "Lunite packs now available in India",
    text: "New launch pricing on subscriptions and crystal bundles.",
    cta: "Explore",
    slug: "wuthering-waves-lunite",
    from: "#123a56",
    to: "#2a9dc9",
  },
];

export type Review = {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Aditya Menon",
    rating: 5,
    date: "12 Sep 2026",
    text: "Ordered the weekly pass at 2am and it landed before I closed the app. Pricing is better than the in-game store.",
    verified: true,
  },
  {
    id: "r2",
    name: "Sneha Raut",
    rating: 5,
    date: "08 Sep 2026",
    text: "Third order this month. The ID check step saved me from sending diamonds to the wrong zone.",
    verified: true,
  },
  {
    id: "r3",
    name: "Kabir Shah",
    rating: 4,
    date: "01 Sep 2026",
    text: "Delivery took about six minutes during peak hours, still quick. UPI checkout was painless.",
    verified: true,
  },
  {
    id: "r4",
    name: "Meera Iyer",
    rating: 5,
    date: "27 Aug 2026",
    text: "Support replied on Telegram in a couple of minutes when I mistyped my user ID. Sorted it immediately.",
    verified: false,
  },
];

export const paymentMethods = [
  { id: "upi", label: "UPI", note: "GPay · PhonePe · Paytm" },
  { id: "cards", label: "Cards", note: "Visa · Mastercard · RuPay" },
  { id: "netbanking", label: "Net Banking", note: "50+ banks" },
  { id: "wallet", label: "Wallet", note: "TYS balance" },
  { id: "crypto", label: "Crypto / USDT", note: "TRC20 · BEP20" },
  { id: "bank", label: "Bank Transfer", note: "IMPS · NEFT" },
];

export const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
