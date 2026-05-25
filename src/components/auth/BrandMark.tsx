import { cn } from "../../lib/cn";

type Props = {
  className?: string;
  size?: "sm" | "md";
};

export default function BrandMark({ className, size = "md" }: Props) {
  const isSm = size === "sm";
  const wordClass = cn(
    "font-bold tracking-tight whitespace-nowrap leading-none",
    isSm ? "text-sm" : "text-base",
  );
  return (
    <div className={cn("flex shrink-0 flex-nowrap items-center gap-2", className)}>
      <div className="flex shrink-0 flex-nowrap items-baseline gap-px">
        <span className={cn(wordClass, "text-[#0F172A]")}>Intern</span>
        <span className={cn(wordClass, "text-[#10B981]")}>NEXT</span>
      </div>
    </div>
  );
}
