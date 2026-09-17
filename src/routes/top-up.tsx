import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryTabs } from "@/components/CategoryTabs";
import { EmptyState } from "@/components/EmptyState";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading, Button } from "@/components/ui-kit";
import { products, regions, categories } from "@/data/catalog";

export const Route = createFileRoute("/top-up")({
  component: TopUpPage,
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search["category"] === "string" && categories.includes(search["category"] as string) ? (search["category"] as string) : "All",
    region: typeof search["region"] === "string" ? (search["region"] as string) : "All regions",
    q: typeof search["q"] === "string" ? (search["q"] as string) : "",
  }),
  head: () => ({
    meta: [
      { title: "Shop Top-Ups — TYS GLOBAL" },
      { name: "description", content: "Browse all game top-ups, diamonds, UC, points and digital vouchers. Filter by category, region or search by name." },
      { property: "og:title", content: "Shop Top-Ups — TYS GLOBAL" },
      { property: "og:description", content: "Browse all game top-ups, diamonds, UC, points and digital vouchers. Filter by category, region or search by name." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function TopUpPage() {
  const { category, region, q } = Route.useSearch();
  const navigate = Route.useNavigate();

  const [localQuery, setLocalQuery] = useState(q);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesRegion = region === "All regions" || p.region === region;
      const matchesQuery =
        localQuery.trim() === "" ||
        (p.name + p.publisher + p.category).toLowerCase().includes(localQuery.trim().toLowerCase());
      return matchesCategory && matchesRegion && matchesQuery;
    });
  }, [category, region, localQuery]);

  const activeFilters = (category !== "All" ? 1 : 0) + (region !== "All regions" ? 1 : 0) + (localQuery.trim() !== "" ? 1 : 0);

  const clearFilters = () => {
    setLocalQuery("");
    navigate({ search: { category: "All", region: "All regions", q: "" } });
  };

  return (
    <div className="container-page py-8 md:py-12">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Top Up" }]} />

      <SectionHeading
        className="mt-6"
        title="All top-ups"
        subtitle={`${products.length} products ready for instant delivery`}
      />

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="lg:w-64">
          <div className="space-y-4 rounded-xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Filters</h3>
              {activeFilters > 0 && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-3 w-3" aria-hidden /> Clear
                </button>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="region" className="block text-xs font-medium text-muted-foreground">
                Region
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => navigate({ search: (prev) => ({ ...prev, region: e.target.value }) })}
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-accent"
              >
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CategoryTabs
              active={category}
              onChange={(c) => navigate({ search: (prev) => ({ ...prev, category: c }) })}
            />
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <input
                type="text"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Search products"
                className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm outline-none focus:border-accent sm:w-64"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              title="No matches"
              text="Try changing your filters or search term to find what you're looking for."
              action={
                <Button variant="outline" onClick={clearFilters}>
                  <SlidersHorizontal className="mr-2 h-4 w-4" aria-hidden /> Reset filters
                </Button>
              }
            />
          ) : (
            <div className="mx-auto grid max-w-[18rem] gap-4 sm:mx-0 sm:max-w-none sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
