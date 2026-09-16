import { BadgeCheck, CreditCard, Headphones, ShieldCheck, Timer } from "lucide-react";

const items = [
  { icon: Timer, title: "Fast delivery", text: "Most orders are completed in under five minutes." },
  { icon: ShieldCheck, title: "Secure checkout", text: "Encrypted payments, no card details stored." },
  { icon: CreditCard, title: "Payment choice", text: "UPI, cards, net banking, wallets and crypto." },
  { icon: BadgeCheck, title: "Verified products", text: "Sourced from authorised regional resellers." },
  { icon: Headphones, title: "Support that answers", text: "Live help from 9am to 2am, every day." },
];

export function TrustSection() {
  return (
    <section aria-label="Why shop with TYS Global" className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="bg-card p-5">
          <Icon className="h-4.5 w-4.5 text-accent" aria-hidden />
          <h3 className="mt-3 text-sm font-semibold">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
        </div>
      ))}
    </section>
  );
}
