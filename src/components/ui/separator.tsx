import * as React from "react";

export function Separator({ 
  className = "",
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{ backgroundColor: 'var(--border)' }}
      {...props}
    />
  );
}
