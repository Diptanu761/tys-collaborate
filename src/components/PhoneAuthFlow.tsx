import { useState } from "react";
import { Smartphone } from "lucide-react";
import { Button, Field } from "@/components/ui-kit";
import { OtpStep } from "@/components/OtpStep";

/**
 * Frontend-only mobile-number auth flow: phone form -> OTP step.
 * Real OTP delivery (OneAPI) requires a backend; this mirrors the UI flow.
 */
export function PhoneAuthFlow({ mode }: { mode: "login" | "signup" }) {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isSignup = mode === "signup";

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

  if (step === "otp") {
    return (
      <OtpStep
        phone={`+91 ${phone}`}
        onBack={() => setStep("phone")}
        ctaLabel={isSignup ? "Verify & create account" : "Verify & sign in"}
      />
    );
  }

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {isSignup ? "Create account" : "Welcome back"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isSignup
            ? "Sign up with your mobile number — no password needed"
            : "Enter your mobile number to sign in with a one-time code"}
        </p>
      </div>

      <form onSubmit={sendOtp} className="mt-8 space-y-4">
        {isSignup && (
          <Field
            label="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Aditya Menon"
            required
          />
        )}

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
  );
}
