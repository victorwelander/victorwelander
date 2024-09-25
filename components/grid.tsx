import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
}

const Grid = ({ children, className }: GridProps) => {
  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute inset-x-0 -top-px h-px opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 1'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E\")",
          WebkitMaskImage:
            "linear-gradient(to right, transparent,  1.25rem, white calc(100% - 1.25rem), transparent)",
          maskImage:
            "linear-gradient(to right, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
          marginLeft: "-1.25rem",
          marginRight: "-1.25rem",
        }}
      ></div>
      <div
        className="absolute inset-y-0 -right-px w-px opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 4'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E\")",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
          marginTop: "-1.25rem",
          marginBottom: "-1.25rem",
        }}
      ></div>
      <div
        className="absolute inset-x-0 -bottom-px h-px opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 1'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E\")",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
          maskImage:
            "linear-gradient(to right, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
          marginLeft: "-1.25rem",
          marginRight: "-1.25rem",
        }}
      ></div>
      <div
        className="absolute inset-y-0 -left-px w-px opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 4'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E\")",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
          marginTop: "-1.25rem",
          marginBottom: "-1.25rem",
        }}
      ></div>
      {children}
    </div>
  );
};

export default Grid;
