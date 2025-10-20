import { LinkCard } from "./LinkCard";
import { ShoppingBag, LayoutDashboard, Users, Camera, Mail } from "lucide-react";

export interface Link {
  id: string;
  title: string;
  description?: string;
  url: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
}

export function LinksSection() {
  const links: Link[] = [
    {
      id: "gestao-marketplace",
      title: "Contratar gestão de marketplace",
      description: "Impulsione suas vendas com nossa gestão especializada",
      url: "https://marketplace.agenciaturbodigital.com.br/",
      icon: <ShoppingBag className="h-6 w-6" />,
      variant: "primary"
    },
    {
      id: "turbo-hub",
      title: "Turbo Hub",
      description: "Hub de ferramentas para Marketplace",
      url: "https://hub.agenciaturbodigital.com.br/",
      icon: <LayoutDashboard className="h-6 w-6" />
    },
    {
      id: "comunidade",
      title: "Comunidade Turbo",
      description: "Conecte-se com outros empreendedores digitais",
      url: "https://comunidade.agenciaturbodigital.com.br/",
      icon: <Users className="h-6 w-6" />
    },
    {
      id: "fotos-ia",
      title: "Fotos de IA",
      description: "Crie imagens profissionais com inteligência artificial",
      url: "https://ia.agenciaturbodigital.com.br/",
      icon: <Camera className="h-6 w-6" />
    },
    {
      id: "contratacao",
      title: "Trabalhe Conosco",
      description: "Venha fazer parte do time Turbo Digital",
      url: "https://form.respondi.app/yDGonwsE",
      icon: <Mail className="h-6 w-6" />
    }
  ];

  return (
    <section className="w-full px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-4">
        {links.map((link) => (
          <LinkCard
            key={link.id}
            title={link.title}
            description={link.description}
            url={link.url}
            icon={link.icon}
            variant={link.variant}
          />
        ))}
      </div>
    </section>
  );
}
