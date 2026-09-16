import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners } from "@/data/catalog";
import { cn } from "@/lib/utils";
import bannerAsset from "@/assets/tys-mobile-legends-banner.png.asset.json";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % banners.length), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const go = (dir: number) => setIndex((i) => (i + dir + banners.length) % banners.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Promotions"
      className="relative overflow-hidden rounded-xl border border-border bg-card shadow-soft"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((b) => (
          <article
            key={b.id}
            className="relative w-full shrink-0"
            aria-hidden={banners[index]?.id !== b.id}
          >
            <div className="relative min-h-[15rem] overflow-hidden sm:aspect-[1983/793] sm:min-h-0">
              <img
                src={bannerAsset.url}
                alt="Mobile Legends diamond top-up promotion"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading={b.id === banners[0]?.id ? "eager" : "lazy"}
              />
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden
              />
              <Link
                to="/product/$slug"
                params={{ slug: b.slug }}
                tabIndex={banners[index]?.id === b.id ? 0 : -1}
                aria-label={`${b.cta}: ${b.title}`}
                className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-5 right-5 flex items-center gap-2">
        <button
          onClick={() => go(-1)}
          aria-label="Previous promotion"
          className="grid h-9 w-9 place-items-center rounded-md border border-white/25 bg-black/25 text-white backdrop-blur transition-colors hover:bg-black/40"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next promotion"
          className="grid h-9 w-9 place-items-center rounded-md border border-white/25 bg-black/25 text-white backdrop-blur transition-colors hover:bg-black/40"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute bottom-7 left-6 flex gap-1.5 md:left-12">
        {banners.map((b, i) => (
          <button
            key={b.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to promotion ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/45 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}
