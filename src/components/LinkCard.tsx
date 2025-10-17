import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  description?: string;
  url: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
}

export function LinkCard({ 
  title, 
  description, 
  url, 
  icon, 
  variant = "default" 
}: LinkCardProps) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (variant === "primary") {
    return (
      <div 
        onClick={handleClick}
        className="p-6 rounded-xl cursor-pointer hover:scale-[1.02] transition-all duration-200"
        style={{ 
          backgroundColor: 'var(--primary)', 
          color: 'var(--primary-foreground)' 
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            <div className="flex-1">
              <h3 className="mb-1">{title}</h3>
              {description && <p className="text-sm opacity-90">{description}</p>}
            </div>
          </div>
          <ExternalLink className="h-5 w-5 flex-shrink-0" />
        </div>
      </div>
    );
  }

  if (variant === "secondary") {
    return (
      <div 
        onClick={handleClick}
        className="p-6 rounded-xl cursor-pointer hover:opacity-80 transition-all duration-200"
        style={{ 
          backgroundColor: 'var(--secondary)', 
          color: 'var(--secondary-foreground)' 
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            <div className="flex-1">
              <h3 className="mb-1">{title}</h3>
              {description && <p className="text-sm opacity-90">{description}</p>}
            </div>
          </div>
          <ExternalLink className="h-5 w-5 flex-shrink-0" />
        </div>
      </div>
    );
  }

  if (variant === "outline") {
    return (
      <div 
        onClick={handleClick}
        className="p-6 rounded-xl cursor-pointer hover:scale-[1.02] transition-all duration-200"
        style={{ 
          border: '2px solid var(--primary)',
          backgroundColor: 'transparent',
          color: 'var(--foreground)'
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            {icon && (
              <div className="flex-shrink-0" style={{ color: 'var(--primary)' }}>
                {icon}
              </div>
            )}
            <div className="flex-1">
              <h3 className="mb-1">{title}</h3>
              {description && (
                <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                  {description}
                </p>
              )}
            </div>
          </div>
          <ExternalLink 
            className="h-5 w-5 flex-shrink-0" 
            style={{ color: 'var(--primary)' }} 
          />
        </div>
      </div>
    );
  }

  return (
    <Card 
      onClick={handleClick}
      className="p-6 cursor-pointer hover:border-[var(--primary)]"
      style={{ 
        borderColor: 'var(--border)',
        transition: 'border-color 0.2s'
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {icon && (
            <div className="flex-shrink-0" style={{ color: 'var(--primary)' }}>
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 className="mb-1">{title}</h3>
            {description && (
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                {description}
              </p>
            )}
          </div>
        </div>
        <ExternalLink 
          className="h-5 w-5 flex-shrink-0" 
          style={{ color: 'var(--primary)' }} 
        />
      </div>
    </Card>
  );
}
