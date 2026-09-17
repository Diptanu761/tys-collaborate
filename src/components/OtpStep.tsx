import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui-kit";

/**
 * Frontend-only OTP verification step.
 * Sending/verifying the code via OneAPI needs a backend; this mirrors the flow in the UI.
 */
export function OtpStep({
  phone,
  onBack,
  onVerified,
  ctaLabel = "Verify & continue",
}: {
  phone: string;
  onBack: () => void;
  onVerified?: () => void;
  ctaLabel?: string;
}) {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [seconds, setSeconds] = useState(30);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const setDigit = (i: number, value: string) => {
    const v = value.replace(/\D/g, "");
    if (!v) {
      setDigits((d) => d.map((x, idx) => (idx === i ? "" : x)));
      return;
    }
    setDigits((d) => {
      const next = [...d];
      v.split("").forEach((ch, k) => {
        if (i + k < 6) next[i + k] = ch;
      });
      return next;
    });
    const nextIndex = Math.min(i + v.length, 5);
    inputs.current[nextIndex]?.focus();
  };

  const code = digits.join("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 6) {
      setError("Enter the 6-digit code sent to your phone.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onVerified?.();
    }, 1200);
  };

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Change number
      </button>

      <div className="mt-5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Verify your number</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We sent a 6-digit code to <span className="font-medium text-foreground">{phone}</span>
        </p>
      </div>

      <form onSubmit={submit} className="mt-8 space-y-5">
        <div className="flex justify-between gap-2" role="group" aria-label="One-time code">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              value={d}
              onChange={(e) => setDigit(i, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !digits[i] && i > 0) inputs.current[i - 1]?.focus();
              }}
              inputMode="numeric"
              autoComplete={i === 0 ? "one-time-code" : "off"}
              maxLength={6}
              aria-label={`Digit ${i + 1}`}
              className="h-12 w-full rounded-md border border-input bg-card text-center text-lg font-semibold text-foreground transition-colors focus:border-accent focus:outline-none"
            />
          ))}
        </div>

        {error && <p className="text-xs text-destructive">{error}</p>}

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? "Verifying..." : ctaLabel}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          {seconds > 0 ? (
            <>Resend code in {seconds}s</>
          ) : (
            <button
              type="button"
              onClick={() => setSeconds(30)}
              className="font-medium text-accent hover:underline"
            >
              Resend code
            </button>
          )}
        </p>
      </form>
    </div>
  );
}
