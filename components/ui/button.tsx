import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-md hover:bg-[var(--geist-foreground)]/80 bg-[var(--geist-foreground)] text-[var(--geist-background)]",
        secondary:
          "rounded-md hover:bg-[var(--accents-2)] border border-[var(--accents-2)] text-[var(--geist-foreground)]",
      },
      size: {
        default: "h-[40px] px-4 py-2",
        xs: "h-7 rounded-md px-3",
        sm: "h-[32px] rounded-md px-3",
        lg: "h-[48px] rounded-md px-8",
        icon: "h-10 w-10",
      },
      shape: {
        default: "rounded-md",
        xs: "w-5 h-5 rounded-md",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
