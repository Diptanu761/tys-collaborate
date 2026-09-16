import { BadgeCheck, Star } from "lucide-react";
import type { Review } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5", className)} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "h-3.5 w-3.5",
            i <= Math.round(value) ? "fill-warning text-warning" : "text-border-strong",
          )}
        />
      ))}
    </span>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <article className="rounded-lg border border-border bg-card p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-muted text-xs font-semibold">
          {initials}
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm font-medium">{review.name}</p>
            {review.verified && (
              <span className="inline-flex items-center gap-1 text-[0.68rem] text-success">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden /> Verified
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{review.date}</p>
        </div>
      </div>
      <Stars value={review.rating} className="mt-3" />
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
    </article>
  );
}
