import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Smartphone } from "lucide-react";
import { Button, Field } from "@/components/ui-kit";
import { OtpStep } from "@/components/OtpStep";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Log In — TYS GLOBAL" },
      { name: "description", content: "Sign in to your TYS GLOBAL account with your mobile number and a one-time code." },
      { property: "og:title", content: "Log In — TYS GLOBAL" },
      { property: "og:description", content: "Sign in to your TYS GLOBAL account with your mobile number and a one-time code." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 900);
  };

  return (
    <div className="container-page flex flex-1 items-center justify-center py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-soft">
        {step === "phone" ? (
          <>
            <div className="text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter your mobile number to sign in with a one-time code
              </p>
            </div>

            <form onSubmit={sendOtp} className="mt-8 space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                  Mobile number
                </label>
                <div className="flex items-center gap-2 rounded-md border border-input bg-card px-3 focus-within:border-accent">
                  <Smartphone className="h-4 w-4 text-muted-foreground" aria-hidden />
                  <span className="text-sm text-muted-foreground">+91</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="98765 43210"
                    aria-invalid={!!error}
                    className="h-11 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
                    required
                  />
                </div>
                {error ? (
                  <p className="text-xs text-destructive">{error}</p>
                ) : (
                  <p className="text-xs text-muted-foreground">We'll text you a 6-digit verification code.</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending code..." : "Send OTP"}
              </Button>
            </form>
          </>
        ) : (
          <OtpStep phone={`+91 ${phone}`} onBack={() => setStep("phone")} ctaLabel="Verify & sign in" />
        )}

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
