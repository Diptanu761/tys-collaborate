import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { TrustSection } from "@/components/TrustSection";
import { SectionHeading, Button } from "@/components/ui-kit";
import { products, reviews, categories } from "@/data/catalog";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "TYS GLOBAL — Fast Game Top-Ups & Digital Vouchers" },
      { name: "description", content: "Buy Mobile Legends diamonds, PUBG UC, Free Fire diamonds, Valorant Points and more at reseller pricing. Instant delivery, secure checkout." },
      { property: "og:title", content: "TYS GLOBAL — Fast Game Top-Ups & Digital Vouchers" },
      { property: "og:description", content: "Buy Mobile Legends diamonds, PUBG UC, Free Fire diamonds, Valorant Points and more at reseller pricing. Instant delivery, secure checkout." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function HomePage() {
  const popular = products.filter((p) => p.popular);

  return (
    <div className="space-y-16 pb-16">
      <section className="container-page pt-6 md:max-w-6xl">
        <HeroCarousel />
      </section>

      <section className="container-page">
        <SectionHeading
          title="Popular top-ups"
          subtitle="Best-selling games and vouchers this week"
          action={
            <Link to="/top-up" search={{ category: "All", region: "All regions", q: "" }} className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
              View all <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          }
        />
        <div className="mx-auto grid max-w-[18rem] gap-4 sm:max-w-[37rem] sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-4">
          {popular.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="container-page">
        <SectionHeading
          title="Browse by category"
          subtitle="Find the right top-up for your game or platform"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.filter((c) => c !== "All").map((category) => (
            <Link
              key={category}
              to="/top-up"
              search={{ category, region: "All regions", q: "" }}
              className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift"
            >
              <span className="text-sm font-medium">{category}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden />
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page">
        <TrustSection />
      </section>

      <section className="container-page">
        <SectionHeading
          title="What gamers say"
          subtitle="Verified reviews from real customers"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <section className="container-page">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8 text-center shadow-soft md:p-14">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to top up?</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Join thousands of players who recharge in minutes. No sign-up required for guest checkout.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/top-up" search={{ category: "All", region: "All regions", q: "" }}>Shop top-ups</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/how-it-works">How it works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
