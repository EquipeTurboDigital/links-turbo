import * as React from "react";

export function Card({ 
  className = "", 
  style,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl border transition-all duration-200 ${className}`}
      style={{
        backgroundColor: 'var(--card)',
        color: 'var(--card-foreground)',
        borderColor: 'var(--border)',
        ...style
      }}
      {...props}
    />
  );
}
