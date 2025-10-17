import { PageHeader } from "./components/PageHeader";
import { LinksSection } from "./components/LinksSection";
import { PageFooter } from "./components/PageFooter";

// Escolha uma das animações abaixo descomentando:
// import { BubblesBackground } from "./components/animations/BubblesBackground";
// import { GradientBackground } from "./components/animations/GradientBackground";
// import { ParticlesBackground } from "./components/animations/ParticlesBackground";
// import { WavesBackground } from "./components/animations/WavesBackground";
// import { GridBackground } from "./components/animations/GridBackground";
// import { FloatingShapesBackground } from "./components/animations/FloatingShapesBackground";
// import { MeshGradientBackground } from "./components/animations/MeshGradientBackground";
// import { AuroraBackground } from "./components/animations/AuroraBackground";
// import { OrganicBlobsBackground } from "./components/animations/OrganicBlobsBackground";
// import { RadialPulseBackground } from "./components/animations/RadialPulseBackground";

// Animação estilo galáxia - bolinhas subindo e desaparecendo:
import { GalaxyBackground } from "./components/animations/GalaxyBackground";

function App() {
  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{ 
        backgroundColor: 'var(--background)', 
        color: 'var(--foreground)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <GalaxyBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <PageHeader />
        <main className="flex-1">
          <LinksSection />
        </main>
        <PageFooter />
      </div>
    </div>
  );
}

export default App;
