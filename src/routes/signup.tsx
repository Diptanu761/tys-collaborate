import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Github, Mail } from "lucide-react";
import { Button, Field } from "@/components/ui-kit";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
  head: () => ({
    meta: [
      { title: "Sign Up — TYS GLOBAL" },
      { name: "description", content: "Create a TYS GLOBAL account for faster checkout and order history." },
      { property: "og:title", content: "Sign Up — TYS GLOBAL" },
      { property: "og:description", content: "Create a TYS GLOBAL account for faster checkout and order history." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="container-page flex flex-1 items-center justify-center py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-soft">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Join TYS GLOBAL for faster checkouts</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Field
            label="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Aditya Menon"
            required
          />
          <Field
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <Field
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          <p className="text-xs text-muted-foreground">
            By creating an account, you agree to our{" "}
            <Link to="/about" className="text-accent hover:underline">Terms</Link>{" "}
            and{" "}
            <Link to="/about" className="text-accent hover:underline">Privacy Policy</Link>.
          </p>
          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full" type="button">
              <Mail className="h-4 w-4" aria-hidden /> Google
            </Button>
            <Button variant="outline" className="w-full" type="button">
              <Github className="h-4 w-4" aria-hidden /> GitHub
            </Button>
          </div>
        </div>

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
