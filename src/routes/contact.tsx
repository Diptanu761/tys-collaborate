import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button, Field } from "@/components/ui-kit";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — TYS GLOBAL" },
      { name: "description", content: "Get in touch with TYS GLOBAL support for order help, business enquiries or partnership requests." },
      { property: "og:title", content: "Contact Us — TYS GLOBAL" },
      { property: "og:description", content: "Get in touch with TYS GLOBAL support for order help, business enquiries or partnership requests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const channels = [
  { icon: MessageCircle, title: "Telegram", text: "@tysglobal_support", href: "#" },
  { icon: Mail, title: "Email", text: "support@tysglobal.in", href: "mailto:support@tysglobal.in" },
  { icon: Phone, title: "Phone", text: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, title: "Office", text: "Mumbai, Maharashtra, India", href: "#" },
];

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container-page py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Contact us</h1>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          Have an order issue, business enquiry or partnership idea? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          {channels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-border-strong"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <channel.icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-medium">{channel.title}</p>
                <p className="text-sm text-muted-foreground">{channel.text}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:col-span-2">
          <h2 className="text-lg font-semibold tracking-tight">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We usually reply within a few hours during support hours.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
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
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                rows={5}
                required
                className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-accent focus-visible:outline-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitted}>
              {submitted ? (
                <>Message sent (demo)</>
              ) : (
                <><Send className="h-4 w-4" aria-hidden /> Send message</>
              )}
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center shadow-soft">
        <h2 className="text-xl font-semibold tracking-tight">Need faster help?</h2>
        <p className="mt-2 text-sm text-muted-foreground">For order issues, include your order ID and registered email for quickest resolution.</p>
        <Button asChild className="mt-6">
          <Link to="/how-it-works">Read our FAQs</Link>
        </Button>
      </div>
    </div>
  );
}
