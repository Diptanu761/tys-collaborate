import { createFileRoute, Link } from "@tanstack/react-router";
import { CreditCard, Gamepad2, MessageCircle, Receipt, Search, ShieldCheck } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { TrustSection } from "@/components/TrustSection";
import { Button } from "@/components/ui-kit";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () => ({
    meta: [
      { title: "How It Works — TYS GLOBAL" },
      { name: "description", content: "Learn how to buy game top-ups and digital vouchers on TYS GLOBAL in four simple steps." },
      { property: "og:title", content: "How It Works — TYS GLOBAL" },
      { property: "og:description", content: "Learn how to buy game top-ups and digital vouchers on TYS GLOBAL in four simple steps." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const steps = [
  { icon: Search, title: "Find your game", text: "Use the search bar or browse categories to find the top-up you need — Mobile Legends, PUBG, Free Fire, Valorant and more." },
  { icon: Gamepad2, title: "Pick the amount", text: "Choose a denomination or bundle. We show the price upfront with no hidden fees." },
  { icon: CreditCard, title: "Enter details & pay", text: "Type in your Player ID and Zone ID if required. Pay securely with UPI, cards, net banking, wallets or crypto." },
  { icon: Receipt, title: "Receive in minutes", text: "Most orders complete in under five minutes. You’ll see a confirmation on screen and via email." },
];

const faq = [
  { q: "Do I need an account to order?", a: "No. Guest checkout is available for most products. Creating an account lets you view order history and save payment preferences." },
  { q: "Which payment methods are accepted?", a: "We accept UPI, Visa/Mastercard/RuPay, net banking, wallets, bank transfers and crypto via USDT (TRC20/BEP20)." },
  { q: "What if I enter the wrong Player ID?", a: "Please double-check before paying. Once delivered, top-ups cannot be reversed because the publisher treats them as final." },
  { q: "How do I contact support?", a: "Reach us via Telegram, the contact form, or email. Live chat is available from 9am to 2am IST every day." },
  { q: "Is my payment information safe?", a: "Yes. We use encrypted checkout and never store complete card details on our servers." },
];

function HowItWorksPage() {
  return (
    <div className="container-page py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">How TYS GLOBAL works</h1>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          Four simple steps from search to delivery. No complicated setups, no long waits.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative rounded-xl border border-border bg-card p-6 shadow-soft">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <step.icon className="h-5 w-5" aria-hidden />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-muted text-[0.65rem] font-semibold">{i + 1}</span>
              <h3 className="text-sm font-semibold">{step.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <TrustSection />
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Common questions</h2>
          <div className="mt-6">
            <FAQ items={faq} />
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
          <ShieldCheck className="h-8 w-8 text-accent" aria-hidden />
          <h2 className="mt-4 text-xl font-semibold tracking-tight">Need help with an order?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Our support team is available every day from 9am to 2am. Have your order ID ready for faster assistance.
          </p>
          <Button asChild className="mt-6">
            <Link to="/contact">Contact support</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
