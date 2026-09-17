import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Smartphone } from "lucide-react";
import { Button, Field } from "@/components/ui-kit";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
  head: () => ({
    meta: [
      { title: "Sign Up — TYS GLOBAL" },
      { name: "description", content: "Create a TYS GLOBAL account with your email or mobile number." },
      { property: "og:title", content: "Sign Up — TYS GLOBAL" },
      { property: "og:description", content: "Create a TYS GLOBAL account with your email or mobile number." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Frontend-only mock sign-up; wire to a real auth API later.
  const signUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Enter your full name.");
      return;
    }
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
          <h1 className="text-2xl font-semibold tracking-tight">Create account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign up for your TYS GLOBAL account</p>
        </div>

        <form onSubmit={signUp} className="mt-8 space-y-4">
          <Field
            label="Full name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Aditya Menon"
            required
          />

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
                autoComplete="new-password"
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

          <p className="text-xs text-muted-foreground">
            By creating an account, you agree to our{" "}
            <Link to="/about" className="text-accent hover:underline">Terms</Link> and{" "}
            <Link to="/about" className="text-accent hover:underline">Privacy Policy</Link>.
          </p>

          {error && <p className="text-xs text-destructive">{error}</p>}

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
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
          <Link to="/signup/mobile">
            <Smartphone className="h-4 w-4" aria-hidden /> Mobile number
          </Link>
        </Button>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-accent hover:underline">
            Log in <ArrowRight className="inline h-3 w-3" aria-hidden />
          </Link>
        </p>
      </div>
    </div>
  );
}
