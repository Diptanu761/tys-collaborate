import { categories } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function CategoryTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div
      className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
      role="tablist"
      aria-label="Product categories"
    >
      {categories.map((c) => (
        <button
          key={c}
          role="tab"
          aria-selected={active === c}
          onClick={() => onChange(c)}
          className={cn(
            "shrink-0 rounded-md border px-3.5 py-2 text-sm transition-colors duration-200",
            active === c
              ? "border-transparent bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-border-strong hover:text-foreground",
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
