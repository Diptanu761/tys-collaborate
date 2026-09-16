import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Clock, HelpCircle, Info, ShieldCheck, Star, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { GameArt } from "@/components/GameArt";
import { ReviewCard, Stars } from "@/components/ReviewCard";
import { TrustSection } from "@/components/TrustSection";
import { Badge, Button, Field } from "@/components/ui-kit";
import { getProduct, inr, paymentMethods, products, reviews, type Denomination } from "@/data/catalog";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  component: ProductPage,
  head: ({ loaderData }) => {
    const name = loaderData?.name ?? "Product";
    const short = loaderData?.short ?? "Top up your game instantly with TYS GLOBAL.";
    return {
      meta: [
        { title: `${name} — TYS GLOBAL` },
        { name: "description", content: short },
        { property: "og:title", content: `${name} — TYS GLOBAL` },
        { property: "og:description", content: short },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

const faq = [
  { q: "How long does delivery take?", a: "Most orders are completed within 5 minutes. During peak hours it may take up to 15 minutes." },
  { q: "What details do I need to provide?", a: "Enter your in-game player ID (and Zone ID if required). Double-check before paying — transfers cannot be reversed." },
  { q: "Is this official?", a: "We are an independent reseller sourcing from authorised regional distributors. We are not affiliated with the game publisher." },
  { q: "Can I get a refund?", a: "Once a top-up is delivered to your account, it cannot be refunded. Contact support if delivery fails." },
];

function ProductPage() {
  const product = Route.useLoaderData();
  const [selected, setSelected] = useState<Denomination>(product.denominations[0]!);
  const [playerId, setPlayerId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState(paymentMethods[0]!.id);
  const [agreed, setAgreed] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const related = useMemo(
    () => products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3),
    [product],
  );

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => setOrdered(false), 3000);
  };

  return (
    <div className="container-page py-8 md:py-12">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Top Up", to: "/top-up" }, { label: product.name }]} />

      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex flex-col gap-6 sm:flex-row">
            <GameArt {...product.art} size="lg" className="h-32 w-32 shrink-0 rounded-xl" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {product.badge && <Badge tone="accent">{product.badge}</Badge>}
                <span className="text-xs text-muted-foreground">{product.category} · {product.region}</span>
              </div>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{product.name}</h1>
              <div className="mt-2 flex items-center gap-2">
                <Stars value={product.rating} />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
              </div>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{product.about}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-success" aria-hidden /> {product.delivery}</span>
                <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden /> Secure checkout</span>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-lg font-semibold tracking-tight">Choose amount</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {product.denominations.map((denom) => (
                <button
                  key={denom.id}
                  onClick={() => setSelected(denom)}
                  className={`relative rounded-xl border p-4 text-left transition-all ${
                    selected.id === denom.id
                      ? "border-accent bg-accent-soft ring-1 ring-accent"
                      : "border-border bg-card hover:border-border-strong"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-medium">{denom.label}</span>
                    {denom.tag && <span className="shrink-0 rounded bg-accent px-1.5 py-0.5 text-[0.65rem] font-medium text-accent-foreground">{denom.tag}</span>}
                  </div>
                  <p className="mt-2 text-lg font-semibold">{inr(denom.price)}</p>
                  {denom.bonus && <p className="mt-1 text-xs text-success">{denom.bonus}</p>}
                  {selected.id === denom.id && (
                    <span className="absolute right-3 top-3 grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-tight">Player details</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field
                label="Player / User ID"
                hint="Found in your in-game profile"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
                placeholder="Enter your ID"
              />
              {product.needsZoneId && (
                <Field
                  label="Zone ID"
                  hint="Shown next to your User ID"
                  value={zoneId}
                  onChange={(e) => setZoneId(e.target.value)}
                  placeholder="e.g. 1234"
                />
              )}
              <Field
                label="Email (optional)"
                hint="For receipt and support"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="sm:col-span-2"
              />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-tight">Payment method</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPayment(method.id)}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                    payment === method.id
                      ? "border-accent bg-accent-soft ring-1 ring-accent"
                      : "border-border bg-card hover:border-border-strong"
                  }`}
                >
                  <span className={`grid h-5 w-5 place-items-center rounded-full border ${payment === method.id ? "border-accent bg-accent text-accent-foreground" : "border-border"}`}>
                    {payment === method.id && <Check className="h-3 w-3" aria-hidden />}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{method.label}</p>
                    <p className="text-xs text-muted-foreground">{method.note}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-tight">Frequently asked questions</h2>
            <div className="mt-4">
              <FAQ items={faq} />
            </div>
          </section>

          {related.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold tracking-tight">Related top-ups</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to="/product/$slug"
                    params={{ slug: p.slug }}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-border-strong"
                  >
                    <GameArt {...p.art} size="sm" className="h-12 w-12 shrink-0" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">From {inr(p.from)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6 rounded-xl border border-border bg-card p-5 shadow-soft">
            <h2 className="text-lg font-semibold tracking-tight">Order summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Product</span>
                <span className="font-medium">{product.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">{selected.label}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-medium">{product.delivery}</span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-semibold">{inr(selected.price)}</span>
                </div>
              </div>
            </div>

            <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-accent"
              />
              <span>I confirm the Player ID is correct. TYS GLOBAL is not liable for incorrect entries.</span>
            </label>

            <Button
              size="lg"
              className="w-full"
              disabled={!agreed || !playerId || (product.needsZoneId && !zoneId) || ordered}
              onClick={handleOrder}
            >
              {ordered ? (
                <><Check className="h-4 w-4" aria-hidden /> Order placed (demo)</>
              ) : (
                `Pay ${inr(selected.price)}`
              )}
            </Button>

            <div className="flex items-start gap-2 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
              <Info className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              <p>This is a demo frontend. No real payment or delivery will be processed.</p>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-16">
        <TrustSection />
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight">Customer reviews</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.slice(0, 4).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
}
