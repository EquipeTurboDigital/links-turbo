import { SocialLinks } from "./SocialLinks";
import { Separator } from "./ui/separator";

export function PageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-4 mt-12">
      <div className="max-w-2xl mx-auto">
        <Separator className="mb-6" />

        <div className="flex flex-col items-center gap-6">
          <SocialLinks />

          <div className="text-center space-y-2">
            <p
              className="text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              © {currentYear} Turbo Digital. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}