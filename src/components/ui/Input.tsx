import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        "h-10 w-full rounded-md border border-[#E5E7EB] bg-white px-3 text-sm",
        "placeholder:text-[#9CA3AF] text-[#111827]",
        "focus:outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20",
        "transition-colors",
        className,
      )}
    />
  );
});

export default Input;
