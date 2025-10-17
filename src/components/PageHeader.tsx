import logoImage from "figma:asset/1e0f988c0f93991300b17afcb9b103aabc8ff046.png";
import { DarkModeToggle } from "./DarkModeToggle";

export function PageHeader() {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1" />
          <DarkModeToggle />
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <img 
              src={logoImage} 
              alt="Turbo Digital Logo" 
              className="w-full h-full object-contain"
              style={{ 
                filter: 'invert(39%) sepia(98%) saturate(6445%) hue-rotate(6deg) brightness(102%) contrast(105%)'
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
