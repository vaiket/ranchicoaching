import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "ghost" | "whatsapp";
  asChild?: boolean;
}

export function Button({ className, variant = "filled", ...props }: ButtonProps) {
  const variants = {
    filled: "bg-or text-dark hover:bg-or2 shadow-orange",
    outline: "border border-white/15 bg-white/[0.02] text-warm hover:border-or/50 hover:bg-or/10",
    ghost: "text-warm hover:bg-white/10",
    whatsapp: "bg-wa text-dark hover:shadow-wa",
  };

  return (
    <button
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-or focus:ring-offset-2 focus:ring-offset-dark",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
