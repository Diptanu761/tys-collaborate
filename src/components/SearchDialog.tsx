import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Search, X } from "lucide-react";
import { products } from "@/data/catalog";
import { GameArt } from "./GameArt";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useLocalStorage<string[]>("tys-recent-searches", []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((p) => (p.name + p.publisher + p.category).toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  const remember = (term: string) => {
    const next = [term, ...recent.filter((r) => r !== term)].slice(0, 5);
    setRecent(next);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20 sm:pt-28">
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search games"
        className="relative w-full max-w-xl overflow-hidden rounded-xl border border-border bg-popover shadow-lift"
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games, vouchers, top-ups"
            aria-label="Search games"
            className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <button onClick={onClose} aria-label="Close search" className="p-1 text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[22rem] overflow-y-auto p-2">
          {query.trim() === "" ? (
            recent.length > 0 ? (
              <div className="p-2">
                <div className="mb-2 flex items-center justify-between px-1">
                  <p className="text-xs font-medium text-muted-foreground">Recent searches</p>
                  <button
                    onClick={() => setRecent([])}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Clear
                  </button>
                </div>
                {recent.map((r) => (
                  <button
                    key={r}
                    onClick={() => setQuery(r)}
                    className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm hover:bg-muted"
                  >
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
                    {r}
                  </button>
                ))}
              </div>
            ) : (
              <p className="px-4 py-10 text-center text-sm text-muted-foreground">
                Start typing to find a game or voucher.
              </p>
            )
          ) : results.length === 0 ? (
            <p className="px-4 py-10 text-center text-sm text-muted-foreground">
              No matches for “{query}”. Try another game name.
            </p>
          ) : (
            results.map((p) => (
              <Link
                key={p.slug}
                to="/product/$slug"
                params={{ slug: p.slug }}
                onClick={() => {
                  remember(p.name);
                  onClose();
                }}
                className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-muted"
              >
                <GameArt {...p.art} alt={`${p.name} artwork`} size="sm" className="h-9 w-9" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{p.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {p.category} · {p.region}
                  </span>
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
