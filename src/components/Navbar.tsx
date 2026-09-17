import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Globe, Menu, Moon, Search, Sun, User, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { SearchDialog } from "./SearchDialog";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/top-up", label: "Top Up" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const iconBtn =
    "glass-control grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-foreground hover:shadow-lift";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-card/70 shadow-soft backdrop-blur-2xl">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-warm text-[0.7rem] font-bold text-primary-foreground shadow-lift"
            >
              TG
            </span>
            <span className="text-sm font-semibold tracking-[0.14em]">TYS GLOBAL</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground bg-muted" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-md px-3 py-2 text-[0.82rem] font-medium uppercase tracking-wide transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="glass-control hidden h-9 w-56 items-center gap-2 rounded-lg px-3 text-left text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-border-strong md:flex"
            >
              <Search className="h-4 w-4" aria-hidden />
              Search games
            </button>
            <button onClick={() => setSearchOpen(true)} aria-label="Search" className={cn(iconBtn, "md:hidden")}>
              <Search className="h-4 w-4" />
            </button>

            <button
              onClick={() => setLang((l) => (l === "EN" ? "HI" : l === "HI" ? "ID" : "EN"))}
              aria-label="Change language"
              className="glass-control hidden h-9 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground sm:flex"
            >
              <Globe className="h-4 w-4" aria-hidden />
              {lang}
            </button>

            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className={iconBtn}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link
              to="/login"
              aria-label="Account"
               className="glass-control grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground sm:hidden"
            >
              <User className="h-4 w-4" />
            </Link>
            <Link
              to="/login"
              className="hidden h-9 items-center gap-2 rounded-md bg-primary px-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              <User className="h-4 w-4" aria-hidden /> Account
            </Link>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className={cn(iconBtn, "lg:hidden")}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile" className="border-t border-border bg-card/90 backdrop-blur-2xl lg:hidden">
            <div className="container-page flex flex-col py-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setMenuOpen(false)}
                  activeProps={{ className: "text-foreground" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="rounded-md px-1 py-3 text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
