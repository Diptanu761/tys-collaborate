import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Smartphone } from "lucide-react";
import { Button, Field } from "@/components/ui-kit";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Log In — TYS GLOBAL" },
      { name: "description", content: "Sign in to your TYS GLOBAL account with your email or mobile number." },
      { property: "og:title", content: "Log In — TYS GLOBAL" },
      { property: "og:description", content: "Sign in to your TYS GLOBAL account with your email or mobile number." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Frontend-only mock sign-in; wire to a real auth API later.
  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="container-page flex flex-1 items-center justify-center py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-soft">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to your TYS GLOBAL account</p>
        </div>

        <form onSubmit={signIn} className="mt-8 space-y-4">
          <Field
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            <div className="flex items-center gap-2 rounded-md border border-input bg-card px-3 focus-within:border-accent">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="h-11 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-input accent-[#0ea5b7]"
              />
              Remember me
            </label>
            <Link to="/contact" className="text-sm font-medium text-accent hover:underline">
              Forgot password?
            </Link>
          </div>

          {error && <p className="text-xs text-destructive">{error}</p>}

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" aria-hidden />
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            or continue with
          </span>
          <span className="h-px flex-1 bg-border" aria-hidden />
        </div>

        <Button asChild variant="outline" size="lg" className="w-full">
          <Link to="/login/mobile">
            <Smartphone className="h-4 w-4" aria-hidden /> Mobile number
          </Link>
        </Button>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-accent hover:underline">
            Sign up <ArrowRight className="inline h-3 w-3" aria-hidden />
          </Link>
        </p>
      </div>
    </div>
  );
}
