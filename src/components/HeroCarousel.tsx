import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners } from "@/data/catalog";
import { cn } from "@/lib/utils";

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
            <div
              className="relative flex min-h-[19rem] flex-col justify-end p-6 md:min-h-[22rem] md:p-12"
              style={{ backgroundImage: `linear-gradient(115deg, ${b.from}, ${b.to})` }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div className="relative max-w-xl">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                  {b.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                  {b.title}
                </h2>
                <p className="mt-2 max-w-md text-sm text-white/80">{b.text}</p>
                <Link
                  to="/product/$slug"
                  params={{ slug: b.slug }}
                  tabIndex={banners[index]?.id === b.id ? 0 : -1}
                  className="mt-6 inline-flex h-11 items-center rounded-md bg-white/95 px-5 text-sm font-medium text-neutral-900 transition-transform duration-200 hover:scale-[1.02]"
                >
                  {b.cta}
                </Link>
              </div>
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
