"use client";

import { cva } from "class-variance-authority";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  useCallback,
  useEffect,
  useState,
  type ButtonHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("size-5 rounded-full p-1", {
  variants: {
    active: {
      true: "dark:bg-[#262626] bg-[#F0F0F0]",
      false: "bg-transparent text-[#737373] dark:text-[#999999]",
    },
  },
});

export function ThemeSwitch({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onToggle = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [setTheme, resolvedTheme]);

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "relative inline-flex cursor-pointer items-center rounded-full border border-[var(--accents-2)] p-[1px]",
          className,
        )}
        aria-label="Toggle Theme"
        {...props}
      >
        <Sun className={cn(buttonVariants({ active: false }))} />
        <Moon className={cn(buttonVariants({ active: false }))} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex cursor-pointer items-center rounded-full border border-[var(--accents-2)] p-[1px]",
        className,
      )}
      data-theme-toggle=""
      aria-label="Toggle Theme"
      onClick={onToggle}
      {...props}
    >
      <Sun
        className={cn(buttonVariants({ active: resolvedTheme === "light" }))}
      />
      <Moon
        className={cn(buttonVariants({ active: resolvedTheme === "dark" }))}
      />
    </button>
  );
}
