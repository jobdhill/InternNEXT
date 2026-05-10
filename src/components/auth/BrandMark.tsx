import { cn } from "../../lib/cn";

type Props = {
  className?: string;
  size?: "sm" | "md";
};

export default function BrandMark({ className, size = "md" }: Props) {
  const isSm = size === "sm";
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "rounded-md bg-[#6366F1] text-white grid place-items-center font-bold shadow-sm",
          isSm ? "h-5 w-5 text-[11px]" : "h-7 w-7 text-[14px]",
        )}
      >
        I
      </div>
      <span
        className={cn(
          "font-bold tracking-tight text-[#0F172A]",
          isSm ? "text-sm" : "text-base",
        )}
      >
        InternTrack
      </span>
    </div>
  );
}
