import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  style,
  ...props
}: ButtonProps) {
  let variantClasses = "";
  
  if (variant === "default") {
    variantClasses = "bg-primary text-primary-foreground hover:opacity-90";
  } else if (variant === "outline") {
    variantClasses = "border border-border bg-transparent hover:bg-muted";
  } else if (variant === "ghost") {
    variantClasses = "hover:bg-muted";
  }
  
  let sizeClasses = "";
  if (size === "default") {
    sizeClasses = "h-9 px-4 py-2";
  } else if (size === "sm") {
    sizeClasses = "h-8 px-3 text-sm";
  } else if (size === "lg") {
    sizeClasses = "h-10 px-6";
  } else if (size === "icon") {
    sizeClasses = "h-9 w-9";
  }
  
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none outline-none ${variantClasses} ${sizeClasses} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
