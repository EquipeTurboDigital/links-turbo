export function MeshGradientBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <div
        className="mesh-gradient-blob blob-1"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.15,
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          animation: 'mesh-float-1 20s ease-in-out infinite',
          top: '-10%',
          left: '-10%'
        }}
      />
      <div
        className="mesh-gradient-blob blob-2"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.12,
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          animation: 'mesh-float-2 18s ease-in-out infinite',
          top: '20%',
          right: '-5%'
        }}
      />
      <div
        className="mesh-gradient-blob blob-3"
        style={{
          position: 'absolute',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.1,
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          animation: 'mesh-float-3 22s ease-in-out infinite',
          bottom: '-10%',
          left: '30%'
        }}
      />
      <div
        className="mesh-gradient-blob blob-4"
        style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.08,
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          animation: 'mesh-float-4 25s ease-in-out infinite',
          bottom: '10%',
          right: '20%'
        }}
      />
      <style>{`
        @keyframes mesh-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, 100px) scale(1.1); }
          66% { transform: translate(-30px, 50px) scale(0.9); }
        }
        @keyframes mesh-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-70px, 80px) scale(1.15); }
          66% { transform: translate(40px, -50px) scale(0.95); }
        }
        @keyframes mesh-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -60px) scale(0.9); }
          66% { transform: translate(-80px, 40px) scale(1.1); }
        }
        @keyframes mesh-float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, -70px) scale(1.05); }
          66% { transform: translate(70px, 60px) scale(0.95); }
        }
      `}</style>
    </div>
  );
}
