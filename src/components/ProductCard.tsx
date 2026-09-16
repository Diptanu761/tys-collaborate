import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { GameArt } from "./GameArt";
import { inr, type Product } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function ProductCard({ product, wide = false }: { product: Product; wide?: boolean }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className={cn(
        "group flex gap-4 rounded-lg border border-border bg-card p-3 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift",
        wide ? "min-w-[260px] flex-row items-center" : "flex-col",
      )}
    >
      <GameArt
        {...product.art}
        alt={`${product.name} artwork`}
        size={wide ? "md" : "lg"}
        className={cn(wide ? "h-16 w-16 shrink-0" : "aspect-[4/3] w-full")}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-sm font-semibold tracking-tight">{product.name}</h3>
          {product.badge && !wide && (
            <span className="shrink-0 rounded bg-accent-soft px-1.5 py-0.5 text-[0.65rem] font-medium text-accent">
              {product.badge}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {product.category} · {product.region}
        </p>
        {!wide && (
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {product.short}
          </p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium">
            From <span className="text-foreground">{inr(product.from)}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[0.7rem] text-muted-foreground">
            <Zap className="h-3 w-3" aria-hidden /> {product.delivery.split("·")[0]?.trim()}
          </span>
        </div>
      </div>
    </Link>
  );
}
