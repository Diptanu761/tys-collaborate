import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PhoneAuthFlow } from "@/components/PhoneAuthFlow";

export const Route = createFileRoute("/login/mobile")({
  component: LoginMobilePage,
  head: () => ({
    meta: [
      { title: "Log In with Mobile — TYS GLOBAL" },
      { name: "description", content: "Sign in to your TYS GLOBAL account with your mobile number and a one-time code." },
      { property: "og:title", content: "Log In with Mobile — TYS GLOBAL" },
      { property: "og:description", content: "Sign in to your TYS GLOBAL account with your mobile number and a one-time code." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function LoginMobilePage() {
  return (
    <div className="container-page flex flex-1 items-center justify-center py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-soft">
        <Link
          to="/login"
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Back to email sign in
        </Link>
        <PhoneAuthFlow mode="login" />
      </div>
    </div>
  );
}
