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
        "glass-panel group flex gap-2.5 rounded-xl p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift",
        wide ? "min-w-[260px] flex-row items-center" : "flex-col",
      )}
    >
      <GameArt
        {...product.art}
        alt={`${product.name} artwork`}
        size={wide ? "md" : "lg"}
         className={cn("bg-elevated shadow-soft", wide ? "h-16 w-16 shrink-0" : "aspect-[16/10] w-full")}
      />
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold tracking-tight">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between gap-2">
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
