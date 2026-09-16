import { cn } from "@/lib/utils";

export function GameArt({
  from,
  to,
  initials,
  image,
  alt = "",
  fit = "cover",
  className,
  size = "md",
}: {
  from: string;
  to: string;
  initials: string;
  image?: string;
  alt?: string;
  fit?: "cover" | "contain";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const text = size === "lg" ? "text-2xl" : size === "sm" ? "text-xs" : "text-base";
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-md",
        className,
      )}
      style={{ backgroundImage: `linear-gradient(140deg, ${from}, ${to})` }}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full",
            fit === "contain" ? "object-contain p-[12%]" : "object-cover",
          )}
        />
      ) : (
        <>
      <span
        className="absolute -right-4 -top-6 h-16 w-16 rounded-full"
        style={{ background: "rgba(255,255,255,0.12)" }}
      />
      <span
        className="absolute -bottom-8 -left-6 h-20 w-20 rotate-12 rounded-lg"
        style={{ background: "rgba(0,0,0,0.12)" }}
      />
      <span className={cn("relative font-semibold tracking-wider text-white/90", text)}>
        {initials}
      </span>
        </>
      )}
    </div>
  );
}
