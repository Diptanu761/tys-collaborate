import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Send, Twitter } from "lucide-react";

const shop = ["All Top-ups", "Direct Top-up", "Gift Cards", "Region & Bundles"];
const company: { label: string; to: "/about" | "/how-it-works" | "/contact" | "/top-up" }[] = [
  { label: "About Us", to: "/about" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Contact", to: "/contact" },
  { label: "Refunds & Privacy", to: "/about" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-elevated">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-md text-[0.7rem] font-bold text-white"
              style={{ backgroundImage: "linear-gradient(140deg,#1f6feb,#0ea5b7)" }}
            >
              TG
            </span>
            <span className="text-sm font-semibold tracking-[0.14em]">TYS GLOBAL</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Direct game top-ups and digital vouchers, delivered in minutes at reseller pricing.
          </p>
          <div className="mt-5 flex gap-2">
            {[Send, Instagram, Twitter, MessageCircle].map((Icon, i) => (
              <span
                key={i}
                className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Shop</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {shop.map((s) => (
              <li key={s}>
                <Link to="/top-up" className="text-muted-foreground transition-colors hover:text-foreground">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {company.map((c) => (
              <li key={c.label}>
                <Link to={c.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Payments
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {["UPI", "Cards", "Wallet", "Net Banking"].map((p) => (
              <li
                key={p}
                className="rounded border border-border bg-card px-2.5 py-1.5 text-xs text-muted-foreground"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TYS GLOBAL. All rights reserved.</p>
          <p>Not affiliated with the game publishers listed on this site.</p>
        </div>
      </div>
    </footer>
  );
}
