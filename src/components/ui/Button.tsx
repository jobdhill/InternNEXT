import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "outline" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#6366F1] text-white hover:bg-[#5558E3] active:bg-[#4F46E5] shadow-sm focus-visible:ring-2 focus-visible:ring-[#6366F1]/40",
  outline:
    "bg-white text-[#111827] border border-[#E5E7EB] hover:bg-[#F9FAFB] focus-visible:ring-2 focus-visible:ring-[#6366F1]/30",
  ghost: "bg-transparent text-[#374151] hover:bg-[#F3F4F6]",
  link: "text-[#6366F1] hover:text-[#4F46E5] hover:underline underline-offset-2 px-0 py-0 h-auto",
};

const sizeClasses: Record<Size, string> = {
  default: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-xs",
  lg: "h-11 px-5 text-sm",
  icon: "h-9 w-9",
};

export default function Button({
  variant = "primary",
  size = "default",
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
        "focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="3"
          />
          <path
            d="M22 12a10 10 0 0 1-10 10"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
