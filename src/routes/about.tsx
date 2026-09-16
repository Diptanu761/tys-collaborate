import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Headphones, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui-kit";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — TYS GLOBAL" },
      { name: "description", content: "TYS GLOBAL is a gaming top-up reseller focused on fast delivery, secure checkout and honest pricing for Indian gamers." },
      { property: "og:title", content: "About Us — TYS GLOBAL" },
      { property: "og:description", content: "TYS GLOBAL is a gaming top-up reseller focused on fast delivery, secure checkout and honest pricing for Indian gamers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const values = [
  { icon: Truck, title: "Speed", text: "We know top-ups are often urgent. Our automated pipeline delivers most orders in minutes, not hours." },
  { icon: ShieldCheck, title: "Trust", text: "Encrypted payments, transparent pricing, and no hidden fees. What you see is what you pay." },
  { icon: Award, title: "Value", text: "Reseller pricing on popular packs so you can spend less and play more." },
  { icon: Headphones, title: "Support", text: "Real humans respond to tickets and Telegram messages daily from 9am to 2am." },
];

const stats = [
  { value: "50K+", label: "Orders delivered" },
  { value: "4.8", label: "Average rating" },
  { value: "5 min", label: "Average delivery" },
  { value: "12", label: "Games supported" },
];

function AboutPage() {
  return (
    <div className="container-page py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">About TYS GLOBAL</h1>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          A gaming top-up store built for Indian players who want fast, secure and fairly priced recharges.
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card p-6 text-center">
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Our story</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            TYS GLOBAL started as a small Discord-based service helping local Mobile Legends players recharge safely without paying inflated in-game prices. As the community grew, so did the demand for other games — PUBG Mobile, Free Fire, Valorant, Genshin Impact and more.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Today we serve thousands of players across India with an automated delivery pipeline, multiple payment options and a support team that actually answers. We are not owned by or affiliated with any game publisher; we are an independent reseller sourcing from authorised regional distributors.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our goal is simple: make top-ups as quick and stress-free as buying anything else online.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <h3 className="text-lg font-semibold tracking-tight">What makes us different</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-accent">✓</span> Prices shown in INR with all taxes included</li>
            <li className="flex items-start gap-2"><span className="text-accent">✓</span> No account required for guest checkout</li>
            <li className="flex items-start gap-2"><span className="text-accent">✓</span> UPI, cards, wallets, net banking and crypto accepted</li>
            <li className="flex items-start gap-2"><span className="text-accent">✓</span> Order tracking and receipts by email</li>
            <li className="flex items-start gap-2"><span className="text-accent">✓</span> Telegram support with fast response times</li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight">Our values</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-soft">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <value.icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{value.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center shadow-soft">
        <h2 className="text-xl font-semibold tracking-tight">Start topping up today</h2>
        <p className="mt-2 text-sm text-muted-foreground">Browse popular games and vouchers at reseller pricing.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link to="/top-up" search={{ category: "All", region: "All regions", q: "" }}>Shop top-ups</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
