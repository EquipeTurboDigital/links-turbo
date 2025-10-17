import { Instagram, Linkedin, Youtube } from "lucide-react";

// Ícone customizado para TikTok
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

export function SocialLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/turbodigital",
      icon: Instagram
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@turbodigital",
      icon: TikTokIcon
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@turbodigital",
      icon: Youtube
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/turbodigital",
      icon: Linkedin
    }
  ];

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-all duration-200 hover:scale-110"
            style={{ 
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)'
            }}
            aria-label={link.name}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
