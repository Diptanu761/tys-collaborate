import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PhoneAuthFlow } from "@/components/PhoneAuthFlow";

export const Route = createFileRoute("/signup/mobile")({
  component: SignupMobilePage,
  head: () => ({
    meta: [
      { title: "Sign Up with Mobile — TYS GLOBAL" },
      { name: "description", content: "Create a TYS GLOBAL account with your mobile number and a one-time code." },
      { property: "og:title", content: "Sign Up with Mobile — TYS GLOBAL" },
      { property: "og:description", content: "Create a TYS GLOBAL account with your mobile number and a one-time code." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function SignupMobilePage() {
  return (
    <div className="container-page flex flex-1 items-center justify-center py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-soft">
        <Link
          to="/signup"
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Back to email sign up
        </Link>
        <PhoneAuthFlow mode="signup" />
      </div>
    </div>
  );
}
