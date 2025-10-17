export function OrganicBlobsBackground() {
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
      {/* Blob 1 - Laranja */}
      <div
        className="organic-blob blob-1"
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          top: '10%',
          left: '5%',
          background: 'var(--primary)',
          opacity: 0.08,
          filter: 'blur(50px)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          animation: 'blob-morph-1 15s ease-in-out infinite, blob-float-1 20s ease-in-out infinite'
        }}
      />
      
      {/* Blob 2 - Azul */}
      <div
        className="organic-blob blob-2"
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          top: '50%',
          right: '10%',
          background: 'var(--accent)',
          opacity: 0.1,
          filter: 'blur(60px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animation: 'blob-morph-2 18s ease-in-out infinite, blob-float-2 22s ease-in-out infinite'
        }}
      />
      
      {/* Blob 3 - Laranja */}
      <div
        className="organic-blob blob-3"
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          bottom: '15%',
          left: '40%',
          background: 'var(--primary)',
          opacity: 0.06,
          filter: 'blur(70px)',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          animation: 'blob-morph-3 20s ease-in-out infinite, blob-float-3 25s ease-in-out infinite'
        }}
      />
      
      {/* Blob 4 - Azul */}
      <div
        className="organic-blob blob-4"
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          top: '30%',
          left: '60%',
          background: 'var(--accent)',
          opacity: 0.07,
          filter: 'blur(55px)',
          borderRadius: '70% 30% 50% 50% / 30% 60% 40% 70%',
          animation: 'blob-morph-4 17s ease-in-out infinite, blob-float-4 23s ease-in-out infinite'
        }}
      />

      <style>{`
        @keyframes blob-morph-1 {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          25% { border-radius: 60% 40% 50% 50% / 50% 60% 40% 60%; }
          50% { border-radius: 50% 50% 40% 60% / 70% 30% 60% 40%; }
          75% { border-radius: 70% 30% 60% 40% / 40% 60% 50% 50%; }
        }
        @keyframes blob-morph-2 {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 40% 60% 60% 40% / 40% 70% 30% 60%; }
          50% { border-radius: 70% 30% 50% 50% / 50% 50% 70% 30%; }
          75% { border-radius: 30% 70% 40% 60% / 60% 40% 60% 40%; }
        }
        @keyframes blob-morph-3 {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          50% { border-radius: 50% 50% 60% 40% / 40% 60% 50% 50%; }
          75% { border-radius: 60% 40% 50% 50% / 50% 50% 40% 60%; }
        }
        @keyframes blob-morph-4 {
          0%, 100% { border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%; }
          25% { border-radius: 30% 70% 40% 60% / 70% 30% 60% 40%; }
          50% { border-radius: 50% 50% 70% 30% / 60% 40% 30% 70%; }
          75% { border-radius: 40% 60% 30% 70% / 40% 70% 60% 30%; }
        }
        
        @keyframes blob-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, 50px) rotate(120deg); }
          66% { transform: translate(-20px, 30px) rotate(240deg); }
        }
        @keyframes blob-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, -30px) rotate(-120deg); }
          66% { transform: translate(25px, -50px) rotate(-240deg); }
        }
        @keyframes blob-float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(50px, -40px) rotate(90deg); }
          66% { transform: translate(-30px, 20px) rotate(180deg); }
        }
        @keyframes blob-float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-35px, 40px) rotate(-90deg); }
          66% { transform: translate(45px, -25px) rotate(-180deg); }
        }
      `}</style>
    </div>
  );
}
