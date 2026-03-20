import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-foreground text-background hover:bg-[var(--color-accent)] hover:text-black": variant === "default",
            "border border-border bg-transparent hover:bg-surface-hover hover:text-foreground": variant === "outline",
            "hover:bg-surface-hover hover:text-foreground": variant === "ghost",
            "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white shadow-sm": variant === "glass",
            "h-10 px-6 py-2": size === "default",
            "h-9 rounded-sm px-4": size === "sm",
            "h-12 rounded-sm px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
