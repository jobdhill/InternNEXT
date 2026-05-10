import * as LabelPrimitive from "@radix-ui/react-label";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../../lib/cn";

type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { className, ...props },
  ref,
) {
  return (
    <LabelPrimitive.Root
      ref={ref}
      {...props}
      className={cn(
        "block text-sm font-medium text-[#374151] mb-1.5",
        className,
      )}
    />
  );
});

export default Label;
